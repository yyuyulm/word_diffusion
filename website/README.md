# Word Diffusion Transformer - Web Interface

A static website that runs the MD4 word diffusion model entirely in your browser using ONNX Runtime Web.

## Features

- 🚀 **Fully client-side**: No server required, runs 100% in the browser
- ⚡ **WebGL acceleration**: Uses WebGL backend for fast inference, with WASM fallback
- 🎨 **Modern UI**: Beautiful, responsive interface with real-time progress tracking
- 📦 **Static site**: Can be deployed to any static hosting (GitHub Pages, Netlify, Vercel, etc.)

## Quick Start

### 1. Export the Model

First, export your trained PyTorch model to ONNX format:

```bash
cd ../pytorch_md4
python3 export_to_onnx.py --output ../website/static/model/model.onnx
```

This will create:

- `static/model/model.onnx` - The ONNX model file
- `static/model/config.json` - Model configuration
- `static/model/tokenizer.json` - Already exists in output_final/

### 2. Copy Tokenizer

```bash
cp ../pytorch_md4/output_final/tokenizer.json static/model/
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser to <http://localhost:5173>

### 5. Build for Production

```bash
npm run build
```

The static site will be built to the `build/` directory. You can then deploy this directory to any static hosting service.

## How It Works

### Architecture

1. **Model Export**: The PyTorch MD4 model is exported to ONNX format, containing just the `predict_logits` function
2. **Inference Layer**: TypeScript implementation handles the full sampling loop
3. **ONNX Runtime Web**: Runs the model using WebGL (GPU) or WASM (CPU) backends
4. **SvelteKit**: Static site generator for the UI

### Key Files

- `src/lib/model/inference.ts` - Main inference engine
- `src/lib/model/tokenizer.ts` - Character tokenizer
- `src/lib/model/schedule.ts` - Masking schedules (GenMD4/MD4)
- `src/routes/+page.svelte` - Main UI page
- `src/app.css` - Global styles

## Deployment

### GitHub Pages

```bash
npm run build
# Deploy the build/ directory to GitHub Pages
```

### Netlify/Vercel

Simply connect your repository and these platforms will automatically detect the SvelteKit configuration.

## Customization

### Adjust Sampling Parameters

Edit `src/routes/+page.svelte` to change default parameters:

```typescript
let numWords = 10;  // Number of words to generate
let numSteps = 50;  // Sampling steps (more = better quality, slower)
```

### Styling

The design system is defined in `src/app.css` using CSS custom properties. Adjust colors, spacing, and other design tokens there.

## Browser Compatibility

- **WebGL backend**: Modern browsers with WebGL 2.0 support (Chrome, Firefox, Edge, Safari 15+)
- **WASM backend**: Fallback for all modern browsers

## Performance

- **WebGL**: Typically generates 10 words in 5-10 seconds
- **WASM**: Slower, but works on all browsers

## Troubleshooting

### Model fails to load

1. Check browser console for errors
2. Ensure all model files are in `static/model/`:
   - `model.onnx`
   - `config.json`
   - `tokenizer.json`
3. Try the WASM backend by modifying the initialization in `+page.svelte`

### Slow generation

1. Reduce `numSteps` (try 20-30 for faster results)
2. Check if WebGL backend is being used (shown in UI)
3. Try generating fewer words at once

## License

Same as the parent project.
