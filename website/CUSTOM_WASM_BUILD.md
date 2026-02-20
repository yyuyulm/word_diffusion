# Custom ONNX Runtime WASM Build Guide

This guide explains how to build a custom ONNX Runtime WASM binary with only the operators your model needs, significantly reducing bundle size.

## Why Build Custom WASM?

The default `onnxruntime-web` package includes ~24 MB of WASM files that support **all** ONNX operators. Your model only uses a small subset of these operators. By building a custom WASM with only the required operators, you can potentially reduce the WASM size by 50-80%.

**Size comparison:**

- Default WASM: ~24 MB
- Custom WASM (estimated): ~5-12 MB (depending on model complexity)

## Prerequisites

Before building, ensure you have:

1. **Git** - For cloning ONNX Runtime repository
2. **CMake** - Version 3.26 or higher
3. **Python** - Version 3.9 or higher
4. **Node.js** - Version 18.0 or higher
5. **Ninja** - Build system (recommended)
6. **C++ compiler** - Clang or GCC
7. **Emscripten** - Will be downloaded automatically by the build script

### Installing Prerequisites (macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install build tools
brew install cmake python node ninja

# Install Xcode Command Line Tools (for C++ compiler)
xcode-select --install
```

### Installing Prerequisites (Linux/Ubuntu)

```bash
sudo apt-get update
sudo apt-get install -y git cmake python3 python3-pip nodejs npm ninja-build build-essential
```

## Build Process

### Step 1: Export Models with Config

First, ensure you have the `required_operators.config` file:

```bash
cd ../pytorch_md4
uv run export_to_onnx.py --fp16 --ort
cd ../website
```

This creates `model/model.required_operators_and_types.config`.

### Step 2: Run the Build Script

```bash
./scripts/build-custom-wasm.sh
```

This script will:

1. Clone ONNX Runtime repository (if not already cloned)
2. Checkout the correct version matching your `onnxruntime-web` package
3. Build WASM with only your required operators
4. Copy the built WASM files to `static/wasm/`

**Note:** The build process takes 15-30 minutes and requires ~5 GB of disk space.

### Step 3: Configure Vite to Use Custom WASM

After the build completes, you need to tell your application to use the custom WASM instead of the default one.

Create or update `vite.config.ts`:

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { copyFileSync } from 'fs';
import { join } from 'path';

export default defineConfig({
    plugins: [
        sveltekit(),
        {
            name: 'copy-custom-wasm',
            buildEnd() {
                // Copy custom WASM files to the output directory
                const wasmFiles = [
                    'ort-wasm-simd-threaded.wasm',
                    'ort-wasm-simd-threaded.js'
                ];
                
                wasmFiles.forEach(file => {
                    const src = join(__dirname, 'static', 'wasm', file);
                    const dest = join(__dirname, 'node_modules', 'onnxruntime-web', 'dist', file);
                    try {
                        copyFileSync(src, dest);
                        console.log(`✓ Copied custom ${file}`);
                    } catch (err) {
                        console.warn(`⚠ Could not copy ${file}:`, err.message);
                    }
                });
            }
        }
    ]
});
```

### Step 4: Build Your Application

```bash
npm run build
```

The build will now use your custom WASM files!

## Automated Build Process

To integrate custom WASM building into your regular workflow, you can create a combined script:

Add to `package.json`:

```json
{
  "scripts": {
    "build-wasm": "./scripts/build-custom-wasm.sh",
    "build-full": "npm run build-wasm && npm run build"
  }
}
```

Then build everything with:

```bash
npm run build-full
```

## Troubleshooting

### Build Fails with "emcc not found"

The build script should download Emscripten automatically. If it doesn't:

```bash
# Install emsdk manually
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

### Build Fails with CMake Error

Ensure you have CMake 3.26+:

```bash
cmake --version
```

If your version is too old, install a newer version via Homebrew or download from cmake.org.

### WASM Files Not Found After Build

Check the build output directory:

```bash
ls -lh onnxruntime-build/build_wasm/Release/
```

The WASM files should be there. Adjust the script paths if needed.

## Verifying the Build

After building and deploying:

1. Open your app in a browser
2. Open DevTools → Network tab
3. Look for `ort-wasm-simd-threaded.wasm`
4. Check its size - it should be significantly smaller than 24 MB

## Performance Considerations

**Pros:**

- ✅ **Smaller bundle size** - 50-80% reduction in WASM size
- ✅ **Faster initial load** - Less data to download
- ✅ **Lower memory usage** - Smaller binary footprint

**Cons:**

- ⚠️ **Build time** - Initial build takes 15-30 minutes
- ⚠️ **Maintenance** - Need to rebuild when model changes
- ⚠️ **Inflexibility** - Can only run models with the included operators

## Alternative: Pre-built Minimal Builds

If building from source is too complex, ONNX Runtime provides some pre-built minimal configurations. However, they may not match your exact operator set.

## Clean Up

To remove the build artifacts and free up disk space:

```bash
rm -rf onnxruntime-build
rm -rf static/wasm
```

This removes ~5 GB of build files.

## Summary

Building a custom WASM is optional but recommended for production deployments where bundle size matters. The one-time setup cost is worth it for the significant size reduction.

For development, continue using the default `onnxruntime-web` package for faster iteration.
