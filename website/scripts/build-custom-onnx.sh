#!/bin/bash

# Build custom ONNX Runtime WASM with minimal operators
# Based on official ONNX Runtime web build documentation

set -e  # Exit on error

echo "🔧 Building Custom ONNX Runtime WASM"
echo "===================================="

# Configuration
ORT_VERSION="1.18.0"  # Match the version in package.json
ORT_REPO_DIR="./onnxruntime-build"
CONFIG_FILE="./model/model.required_operators_and_types.config"
OUTPUT_DIR="./dist/wasm"

# Set to "1" to build with WebGPU support (JSEP)
# Example: BUILD_JSEP=1 npm run build-onnx
BUILD_JSEP="${BUILD_JSEP:-0}"

# Set to "1" to build with WebNN support (requires BUILD_JSEP=1)
# Example: BUILD_JSEP=1 BUILD_WEBNN=1 npm run build-onnx
BUILD_WEBNN="${BUILD_WEBNN:-0}"

# Configure build based on flags
JSEP_FLAGS=""
WASM_SUFFIX=""
MINIMAL_BUILD_MODE=""
OP_REDUCTION_FLAGS="--include_ops_by_config required_operators.config --enable_reduced_operator_type_support"

if [ "$BUILD_JSEP" = "1" ]; then
    echo "🌐 Building with JSEP (WebGPU) support"
    JSEP_FLAGS="--use_jsep"
    WASM_SUFFIX=".jsep"
    
    if [ "$BUILD_WEBNN" = "1" ]; then
        echo "   + WebNN support enabled (extended minimal build required)"
        JSEP_FLAGS="$JSEP_FLAGS --use_webnn"
        WASM_SUFFIX=".jsep.webnn"
        MINIMAL_BUILD_MODE="extended"
        OP_REDUCTION_FLAGS=""  # WebNN requires full CPU operators for fallback
    else
        echo "   Using operator reduction for minimal size"
    fi
else
    if [ "$BUILD_WEBNN" = "1" ]; then
        echo "⚠️  Warning: BUILD_WEBNN=1 requires BUILD_JSEP=1, ignoring BUILD_WEBNN"
    fi
    echo "📦 Building standard WASM (CPU only)"
fi

# Check prerequisites
echo ""
echo "Checking prerequisites..."

if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed"
    exit 1
fi

if ! command -v cmake &> /dev/null; then
    echo "❌ CMake is not installed (version 3.26+ required)"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed (version 3.9+ required)"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed (version 18.0+ required)"
    exit 1
fi

# Check CMake version
CMAKE_VERSION=$(cmake --version | head -n1 | cut -d' ' -f3)
echo "  CMake version: $CMAKE_VERSION"

# Check Node version
NODE_VERSION=$(node --version)
echo "  Node.js version: $NODE_VERSION"

echo "✓ All prerequisites met"

# Check if config file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Config file not found: $CONFIG_FILE"
    echo "   Run 'uv run export_to_onnx.py --fp16 --ort' first"
    exit 1
fi

echo "✓ Config file found: $CONFIG_FILE"

# Clone ONNX Runtime if not already cloned
if [ ! -d "$ORT_REPO_DIR" ]; then
    echo ""
    echo "📦 Cloning ONNX Runtime repository (shallow clone)..."
    echo "   This will download ~500 MB instead of several GB"
    git clone \
        --depth 1 \
        --single-branch \
        --branch "v${ORT_VERSION}" \
        --recursive \
        --shallow-submodules \
        https://github.com/microsoft/onnxruntime.git "$ORT_REPO_DIR"
else
    echo ""
    echo "✓ ONNX Runtime repository already exists"
fi

cd "$ORT_REPO_DIR"

# Ensure submodules are initialized (full update to get latest commits)
echo ""
echo "Updating submodules to latest commits..."
echo "   This ensures we have CMake compatibility fixes"
git submodule sync --recursive
git submodule update --init --recursive

# Setup emsdk (WebAssembly compiler)
echo ""
echo "Setting up Emscripten SDK..."
cd cmake/external/emsdk

if [[ "$OSTYPE" != "msys" && "$OSTYPE" != "win32" ]]; then
    ./emsdk install latest
    ./emsdk activate latest
    source ./emsdk_env.sh
    echo "✓ Emscripten SDK activated"
else
    echo "  Skipping emsdk setup on Windows (will be handled by build script)"
fi

cd ../../..

# Install flatbuffers (required for minimal build with operator config)
# Use emsdk's Python since that's what the build script uses
echo ""
echo "Installing flatbuffers into emsdk Python environment..."
if [ -n "$EMSDK_PYTHON" ]; then
    $EMSDK_PYTHON -m pip install flatbuffers --quiet
    echo "✓ flatbuffers installed into emsdk Python"
else
    # Fallback to system pip if EMSDK_PYTHON not set
    pip3 install flatbuffers --quiet
    echo "✓ flatbuffers installed"
fi

# Copy config file to root directory
echo ""
echo "Copying operator config..."
cp "../${CONFIG_FILE}" ./required_operators.config

# Build WASM with minimal operators
echo ""
echo "🔨 Building minimal WASM (this will take 15-30 minutes)..."
echo "   Configuration:"
echo "     - SIMD: enabled"
echo "     - Multi-threading: enabled"
echo "     - Minimal build: enabled"
echo "     - Operator config: required_operators.config"
echo "     - Type reduction: enabled"
echo "     - Using emsdk Python: $EMSDK_PYTHON"

# Call build.py directly with emsdk Python (not build.sh which may use system Python)
$EMSDK_PYTHON tools/ci_build/build.py \
    --build_dir build/custom-web \
    --config Release \
    --build_wasm \
    --skip_tests \
    --disable_wasm_exception_catching \
    --disable_rtti \
    --disable_ml_ops \
    --disable_exceptions \
    --enable_wasm_simd \
    --enable_wasm_threads \
    --minimal_build $MINIMAL_BUILD_MODE \
    $OP_REDUCTION_FLAGS \
    --parallel \
    $JSEP_FLAGS \
    --cmake_extra_defines CMAKE_POLICY_VERSION_MINIMUM=3.5 CMAKE_TLS_VERIFY=OFF

echo ""
echo "✅ Build complete!"

# Find the build output directory
BUILD_OUTPUT_DIR="build/custom-web/Release"

echo ""
echo "📁 Copying WASM files from $BUILD_OUTPUT_DIR..."

# Create output directory
mkdir -p "../${OUTPUT_DIR}"

# Look for WASM files in the build output
WASM_FILE="${BUILD_OUTPUT_DIR}/ort-wasm-simd-threaded${WASM_SUFFIX}.wasm"
JS_FILE="${BUILD_OUTPUT_DIR}/ort-wasm-simd-threaded${WASM_SUFFIX}.js"
WORKER_FILE="${BUILD_OUTPUT_DIR}/ort-wasm-simd-threaded${WASM_SUFFIX}.worker.js"

if [ -f "$WASM_FILE" ]; then
    cp "$WASM_FILE" "../${OUTPUT_DIR}/"
    echo "  ✓ Copied ort-wasm-simd-threaded${WASM_SUFFIX}.wasm"
    
    if [ -f "$JS_FILE" ]; then
        cp "$JS_FILE" "../${OUTPUT_DIR}/"
        echo "  ✓ Copied ort-wasm-simd-threaded${WASM_SUFFIX}.js"
    fi
    
    if [ -f "$WORKER_FILE" ]; then
        cp "$WORKER_FILE" "../${OUTPUT_DIR}/"
        echo "  ✓ Copied ort-wasm-simd-threaded${WASM_SUFFIX}.worker.js"
    fi
    
    # Show size comparison
    CUSTOM_SIZE=$(wc -c < "$WASM_FILE")
    DEFAULT_WASM="../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm"
    
    if [ -f "$DEFAULT_WASM" ]; then
        DEFAULT_SIZE=$(wc -c < "$DEFAULT_WASM")
        CUSTOM_MB=$(echo "scale=2; $CUSTOM_SIZE / 1024 / 1024" | bc)
        DEFAULT_MB=$(echo "scale=2; $DEFAULT_SIZE / 1024 / 1024" | bc)
        
        echo ""
        echo "📊 Size Comparison:"
        echo "  Default WASM: ${DEFAULT_MB} MB"
        echo "  Custom WASM:  ${CUSTOM_MB} MB"
        
        REDUCTION=$(echo "scale=1; (1 - $CUSTOM_SIZE / $DEFAULT_SIZE) * 100" | bc)
        echo "  Reduction:    ${REDUCTION}%"
    else
        CUSTOM_MB=$(echo "scale=2; $CUSTOM_SIZE / 1024 / 1024" | bc)
        echo ""
        echo "📊 Custom WASM Size: ${CUSTOM_MB} MB"
    fi
else
    echo "❌ WASM files not found in expected location: $BUILD_OUTPUT_DIR"
    echo ""
    echo "Searching for WASM files in build directory..."
    find build -name "*.wasm" -type f
    exit 1
fi

cd ..

echo ""
echo "🎉 Custom WASM build complete!"
echo ""
echo "Output files in: ${OUTPUT_DIR}/"
echo ""
echo "Next steps:"
echo "  1. Copy WASM files to node_modules or configure vite to use them"
echo "  2. See CUSTOM_WASM_BUILD.md for integration instructions"
echo ""
