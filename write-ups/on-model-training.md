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

## "Let there be a word generator." and there was the history of language (and image) modeling.

*How do you approach a task such as generating something that looks like English words but is not?*

One obvious (if you know how modern LLMs work) answer these day is auto-regressive transformer, but I would say the task of word generation is much simpler and different than what LLMs are tasked for, so I want to walk you through my thought process and a brief history of language modeling to justify my final choice of discrete masked diffusion transformer (you will know what this means by the end of the blog).

So, back to the question, how to generate something that looks like English words but is not? I suppose the answer involves learning from existing English words, and somehow you learn a pattern (or one could say the essence of "Englishness") and select from random spelling the ones that have high "Englishness", which is actually similar to what people tried in the 1960s-70s, using hard-coded rule-based systems that mimics human language such as the famous ELIZA system. ELIZA operates on single words to form sentences, but you can see how similar approach can be used to form words out of letters.

Then it got more advanced, essentially we train the model to learn the rule from statistics principle from large datasets rather than hand coding human knowledge, i.e. modeling through machine learning (these two are not mutually exclusive!!!). In five year old's words, we ask the model to looks at texts and be like "I see there is a lot of cases where 'I' is followed by 'am', so when I see 'I' I should guess the next word to be 'am' so I can be right more often than guessing randomly." Back then a common model is N-gram model, which essentially works by learning this connection between one word (to be exact, the past few words) to the next. The same principle is still used today in ChatGPT, in fact, it is just the model got much more capable, being able to look at all the past words, and much bigger as well.

However, most of these architectures have something that I don't sit quite well with, which is the fact that assume word as something constructed from left to right, i.e. there is no effect (or causal relationship) that the later letter can have on the ones that came before. I wonder if this might have to do with my first language being Chinese, whose character (each are words, more or less) are more of a whole symbol which has no directional causal logic in how they are constructed and is more like an image, where each part are all correlated to other parts mutually. Taking that idea a step further, if we think of words like an one-dimensional image, then we can borrow the technique used in modern image generation models, i.e bi-directional attention diffusion transformer model, but also other candidates such as VAE or GAN.

Again, word modeling is probably a relatively simple task, which means models that are too strong (or low bias, to be more accurate) for example, transformers, could have the risk of over-fitting (for non-technical people, when models try too hard they just memorize things rather than learning anything useful). To be honest, I never tested the performance of other architecture such as VAE or GAN, but I eliminated them from my plan for the following reasons:

1.  There is less literature on discrete sequence VAE and GAN, as well as code-base with up-to-date dependencies
2.  Conditioning (length, starting letters, etc) and in-painting would be much less straight forward to implement than diffusion transformer (or I should say there is a clever way to train a model for which conditioning IS in-painting), since I don't really want to get involved with CFG and the complexity and hyper-parameters it brings, as a newbie to training my own models.
3.  I am just simple more interested in learning about diffusion transformers. The heart does what it wants.