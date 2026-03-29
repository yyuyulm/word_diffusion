# Training a Large Language Model that run in your browser

*--Yes! A Large Language Model (LLM) that runs LOCALLY in your browser, because words are language and one million is still a large number.*

This blog is part of the a technical breakdown of my recent project [Eunomia](https://yyuyulm.github.io/word_diffusion/), a website where you can generate new words that appears lexically English-looking, powered by a diffusion transformer model that runs in the visitor's browser. This post is going to cover the model architecture, and design consideration, training, and inference (especially conditioning), as well as some reflections on training local first tiny models.

### transformer

trans·​form·​er /tran(t)sˈfôrmər/

noun

1.  ~~an apparatus for reducing or increasing the voltage of an alternating current.~~

2.  ~~a person or thing that transforms something.~~

3.  a machine learning architecture pioneered in 2017 paper *Attention Is All You Need*, widely adopted as the default architecture for current generative AI system such as ChatGPT\*, Claude\*, Google Gemini\*, Stable Diffusion\*\*, Midjourny\*, Suno\*, etc.

*\*speculation, with high confidence*

\*\**specifically*, *Stable Diffusion 3 and above at time of writing*

\
(If you don't know what transformer is, this blog is probably going to be a bit confusing at parts for you but I am writing with technical and non-technical audiences in mind. I self taught everything I know about AI/ML as an artist and it was quite fun and inspiring and not that difficult :)\

## 1. "Let there be a word generator." and there was the history of language (and image) modeling.

*How do you approach a task such as generating something that looks like English words but is not?*

One obvious (if you know how modern LLMs work) answer these day is auto-regressive transformer, but I would say the task of word generation is much simpler and different than what LLMs are tasked for, so I want to walk you through my thought process and a brief history of language modeling to justify my final choice of discrete masked diffusion transformer (you will know what this means by the end of the blog).

So, back to the question, how to generate something that looks like English words but is not? I suppose the answer involves learning from existing English words, and somehow you learn a pattern (or one could say the essence of "Englishness") and select from random spelling the ones that have high "Englishness", which is actually similar to what people tried in the 1960s-70s, using hard-coded rule-based systems that mimics human language such as the famous [ELIZA system](https://en.wikipedia.org/wiki/ELIZA). ELIZA operates on single words to form sentences, but you can see how similar approach can be used to form words out of letters.

Then it got more advanced, essentially we train the model to learn the rule from statistics principle from large datasets rather than hand coding human knowledge, i.e. modeling through machine learning (these two are not mutually exclusive!). In five year old's words, we ask the model to looks at texts and she be like "I see there is a lot of cases where 'I' is followed by 'am', so when I see 'I' I should guess the next word to be 'am' so I can be right more often than guessing randomly." Back then a common model is N-gram model, which essentially works by learning this connection between one word (to be exact, the past N (a number) words, hence the name N-gram) to the next. The same principle is still used today in ChatGPT, in fact, it is just the model got much more capable (being able to look at all the past words!) and much bigger as well.

However, most of these architectures have something that I don't sit quite well with, which is the fact that assume word as something constructed from left to right, i.e. there is no effect (or causal relationship) that the later letter can have on the ones that came before. I wonder if this might have to do with my first language being Chinese, whose character (each are words, more or less) are more of a whole symbol which has no directional causal logic in how they are constructed and is more like an image, where each part are all correlated to other parts mutually. Taking that idea a step further, if we think of words like an one-dimensional image, then we can borrow the technique used in modern image generation models, i.e bi-directional attention diffusion transformer model, but also other candidates such as VAE or GAN.

Again, word modeling is probably a relatively simple task, which means models that are too strong (or low bias, to be more accurate), e.g. transformers, could have the risk of over-fitting (for non-technical people, when models try too hard they just memorize things rather than learning anything useful). To be honest, I never tested the performance of other architecture such as VAE or GAN, but I eliminated them from my plan for the following reasons:

1.  There is less literature on discrete sequence VAE and GAN, as well as code-base with up-to-date dependencies.
2.  Conditioning (length, starting letters, etc) and in-painting (filling in letters given fixed letters at certain positions) would be much less straight forward to implement than diffusion transformer (or I should say there is a clever way to train a model for which conditioning IS in-painting! More on that in part 2), since I don't really want to get involved with CFG and the complexity and hyper-parameters it brings, as a newbie to training my own models.
3.  [Diffusion Beats Autoregressive in Data-Constrained Settings](https://arxiv.org/abs/2507.15857). Key take away being diffusion seems to allow and benefit from multi-epoch training (training on the same data over and over) without over-fitting, and what I hear is more forgiving on training and tuning than auto-regressive transformer but probably also VAE and GAN as well.
4.  I am just simple more interested in learning about diffusion transformers for discrete data. The heart does what it wants.

## 2. Masked Diffusion? More like Minesweeper

![](images/paste-1.png){width="485"}

*(screen shot of Microsoft Minesweeper on Windows XP)*

*(The next part is pure nerding-out and optional for non-technical crowd, see you in part 4)*

## 3. DJ'ing academic code bases with AI: Model architecture

*TLDR: The model uses a [MD4 loss](https://arxiv.org/abs/2406.04329) on [Qwen3 style transformer blocks without attention gating](https://arxiv.org/abs/2505.06708), trained with [Muon optimizer](https://kellerjordan.github.io/posts/muon/), conditioned with a [JiT style multi-token in-context conditioning](https://arxiv.org/abs/2511.13720v1).*

Knowing that I would probably end up in data limited regime (there is just not that name English words to begin with), I started from the [Diffusion Beats Autoregressive in Data-Constrained Settings](https://arxiv.org/abs/2507.15857) and tracing back from their implementations and references, which lead me to [Simplified and Generalized Masked Diffusion for Discrete Data](https://arxiv.org/abs/2406.04329). This is one of the four referenced work on discrete masked diffusion, most recent (2025 Arixv), seems simple in implementation (I trusted the title, because I can't follow the mathematical proof in the paper), and most importantly has experiments on text modality and even including character level tasks. A bonus point, its a Google DeepMind paper which means I get to reference their [JAX implementation](https://github.com/google-deepmind/md4) but also learn by re-implementing it from scratch in PyTorch (they have a [Pytorch repo](https://github.com/darioShar/pytorch-md4) but it is hmm...not as substantial lets say...).

Suprisingly (or if you are smarter than me than it might not be a surprise to you), the only difference between diffusion transformer and auto-regressive transformer is their loss, and all the other architecture decisions (position encoding, attention modifications, activation functions in MLPs etc.) are orthogonal to that and can be directly used for either objectives. This means I can borrow code from any auto-regressive LLM implementation, so I, a superficial artist, choose to use (one of) the NeurIPS 2025 best paper, [Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free](https://openreview.net/forum?id=1b7whO4SfY), i.e. Qwen 3's transformer block implementation. However, a lot of the modification (over the original [2017 implementation](https://arxiv.org/abs/1706.03762)) in that implementation are specific tailored for large LLMs, so I ended up adopting only the following modifications: pre-norm, RMS norm (still layer norm in when using [adaptive layer norm](https://arxiv.org/abs/1911.07013) or AdaLNZero for conditioning), SwiGLU. Due to the small length of the target sequence (32 tokens, 31 letter for max word length) I choose to use absolute position embedding over RoPE, skipping gated attention due to smaller model size and data size, both of which are proven to be more effective through ablation experiments.

To speed up training (GPU poor here, M1 Macbook kind of poor), I also experimented with the new cool kid in town, Muon optimizer, popularized in LLM by [Kimi AI and their recent models](https://arxiv.org/abs/2502.16982). I just have to say it worked like a charm. A decent implementation is included by default in PyTorch 2.9+ with auto learning rate translation from AdamW (Feeling blessed by open-source). No much to say here, `torch.optim.Muon` and the loss go brrrrrrr (instead of brrr).\
\
The last tweak I added is I think the most interesting. Diffusion model requires conditioning on the de-noising time step, i.e. we need a way to let the model know how noisy the data currently is (though [some recent paper](https://arxiv.org/abs/2602.18428) suggests it might be optional). Most diffusion transformers, whether for image or text or other modality, continuous or discrete, have been using adaptive layer norm's scale and bias as way to do that conditioning, as well as other conditioning such as class (think type, labels etc), or textual description or reference image etc. This has been changing due the demand for more accurate text-to-image and image edit model, which mostly uses a multi-modal diffusion transformer (MMDiT) that conditions using in-context conditioning across modalities, but time conditioning still are mostly done through modulation (e.g. adaptive layer norm), in models like [Stable Diffusion 3](https://stability.ai/news-updates/stable-diffusion-3-research-paper). However, a recent (at the time of training my model) paper [Back to Basics: Let Denoising Generative Models Denoise](https://arxiv.org/abs/2511.13720), have a little size quest, which is experimenting with injecting time conditioning in-context, i.e. using time token in attention layer rather than modulate attention and MLP output. [Prior studies](https://arxiv.org/abs/2312.04557v1) compared conditioning with cross attention, adaLN, or in-context, and concluded that adaLN-zero is the obvious winner, and hence it has been adopted as the default. The incredible and kind of hilarious idea the JiT team had is: all of the comparison is one in-context condition token, which performs worse than AdaLN, but what if there is multiple copies so the model have to "attend" to it more? So they duplicated the condition token multiple times, and it worked. It worked just as well if not better than modulation for class conditioning (I swear there is an early version of the paper where they applied the same idea to time conditioning as well, which removed adaLN layers all together, but I cannot find that version). I adopted the same idea for time conditioning for my model with 4 copies of the time conditioning token (proven to perform better than 1 or 2 copies, and on par with AdaLN/AdaLN-zero through ablation). Despite it does not increasing modeling performance, it significantly shrunk the model size, since the AdaLN shift and bias MLP can take up a significant portion of parameter count (around 33% in my case) and offers minor speed up during inference (shorter compute graph). Since we are deploying the model across web, less parameter means smaller model to download and faster inference is always a plus.

## 4. Training setup and results

P.S. This blog is written without the help of AI, thought the research and development of the project was heavily assisted by AI agents (coding and deep research).

P.P.S I just realized the blog does not mention the word AI once. Do I get a bonus point? Joke aside, does this tiny word generating model count as artificial intelligence? Genuining asking. Let me know what you think?