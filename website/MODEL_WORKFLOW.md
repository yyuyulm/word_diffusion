# Model Workflow

This document explains how model files are managed for deployment.

## Directory Structure

- **`model/`** - Source directory containing all exported model files
  - `model.onnx` - Full precision ONNX model (for reference/testing)
  - `model.ort` - Optimized ORT format model (used in production)
  - `model.required_operators_and_types.config` - Build config (for custom builds)
  - `config.json` - Model configuration
  - `tokenizer.json` - Character tokenizer

- **`static/model/`** - Production files copied for deployment
  - `model.ort` - ORT format model (deployed)
  - `config.json` - Model configuration (deployed)
  - `tokenizer.json` - Character tokenizer (deployed)

## Workflow

### 1. Export Models

From the `pytorch_md4` directory, run:

```bash
uv run export_to_onnx.py --fp16 --ort
```

This exports all model files to `website/model/`:

- Exports ONNX model (FP16)
- Converts to ORT format
- Copies config and tokenizer

### 2. Copy Production Files

From the `website` directory, run:

```bash
npm run copy-models
```

This copies only the necessary files from `model/` to `static/model/`:

- `model.ort` (2.1 MB - optimized ORT format)
- `config.json`
- `tokenizer.json`

**Excluded from production:**

- `model.onnx` (2.6 MB - kept for reference)
- `model.required_operators_and_types.config` (only for custom builds)

### 3. Build for Production

```bash
npm run build
```

The build will include only the files from `static/model/`.

## Benefits

- **Smaller deployments**: Only 2.1 MB model instead of 4.7 MB
- **Clean separation**: Source files vs deployment files
- **Easy testing**: Keep both ONNX and ORT formats for comparison
- **Manual control**: Explicit copying ensures you know what's deployed

## File Sizes

| File | Size | Purpose | Deployed? |
|------|------|---------|-----------|
| model.onnx | 2.6 MB | Reference/testing | ❌ |
| model.ort | 2.1 MB | Production model | ✅ |
| config.json | 234 B | Configuration | ✅ |
| tokenizer.json | 148 B | Tokenizer | ✅ |
| *.config | 1.2 KB | Build configuration | ❌ |

**Total deployment size**: ~2.1 MB (vs 4.7 MB if all files were included)
