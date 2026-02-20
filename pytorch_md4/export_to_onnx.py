"""
Export MD4 model to ONNX format for web deployment.

This script exports the trained MD4 model to ONNX, wrapping just the core
predict_logits function since sampling logic will be implemented in JavaScript.
"""

import argparse
import json
from pathlib import Path

import numpy as np
import torch
import onnx
import onnxruntime as ort

from diffusion import MD4


class MD4ONNXWrapper(torch.nn.Module):
    """Wrapper for MD4 model to export predict_logits and alpha to ONNX."""

    def __init__(self, model: MD4):
        super().__init__()
        self.model = model
        self.vocab_size = model.vocab_size
        self.max_seq_len = model.max_seq_len

    def forward(
        self, z_t: torch.Tensor, t: torch.Tensor, s: torch.Tensor
    ) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        """
        Predict logits at time t, and alpha values at times t and s.

        Args:
            z_t: Noisy tokens of shape (batch, seq_len) [int64]
            t: Time values of shape (batch,) in range [0, 1] [float32]
            s: Time values of shape (batch,) in range [0, 1] [float32]

        Returns:
            logits: Shape (batch, seq_len, vocab_size) [float32]
            alpha_t: Shape (batch,) for MD4 or (batch, vocab_size) for GenMD4 [float32]
            alpha_s: Shape (batch,) for MD4 or (batch, vocab_size) for GenMD4 [float32]
        """
        # Get logits at time t
        logits = self.model.predict_logits(z_t, t)

        # Get alpha at time t
        alpha_t = self.model.schedule.alpha(t)

        # Get alpha at time s
        alpha_s = self.model.schedule.alpha(s)

        # Ensure alpha values have batch dimension for ONNX
        if alpha_t.dim() == 1 and alpha_t.shape[0] != z_t.shape[0]:
            # GenMD4: [vocab_size] -> [batch, vocab_size]
            alpha_t = alpha_t.unsqueeze(0).expand(z_t.shape[0], -1)
            alpha_s = alpha_s.unsqueeze(0).expand(z_t.shape[0], -1)
        elif alpha_t.dim() == 0:
            # MD4: scalar -> [batch]
            alpha_t = alpha_t.unsqueeze(0).expand(z_t.shape[0])
            alpha_s = alpha_s.unsqueeze(0).expand(z_t.shape[0])

        return logits, alpha_t, alpha_s


def convert_to_ort_format(
    onnx_path: str,
    ort_path: str,
    test_inputs: dict = None,
    torch_outputs: tuple = None,
    config: dict = None,
):
    """
    Convert ONNX model to ORT format for faster loading and optimizations.

    Uses "Runtime" optimization style which is recommended for WebGL deployment,
    as it allows the WebGL execution provider to apply its own optimizations
    at runtime rather than baking in platform-specific optimizations.

    Args:
        onnx_path: Path to ONNX model
        ort_path: Path to save ORT model
        test_inputs: Dict of test inputs for accuracy verification (optional)
        torch_outputs: Tuple of PyTorch reference outputs for comparison (optional)
        config: Model config dict for displaying batch/seq/vocab info (optional)
    """
    try:
        from onnxruntime.tools.convert_onnx_models_to_ort import (
            convert_onnx_models_to_ort,
            OptimizationStyle,
        )

        print("\n" + "=" * 60)
        print("Converting to ORT format...")
        print("=" * 60)

        # Convert to ORT format with optimizations
        # Use "Runtime" style for WebGL - defers certain optimizations to the EP
        # No target_platform specified to keep model portable across desktop/mobile browsers
        convert_onnx_models_to_ort(
            model_path_or_dir=Path(onnx_path),
            output_dir=Path(ort_path).parent,
            optimization_styles=[
                OptimizationStyle.Runtime
            ],  # Runtime optimizations for WebGL
            enable_type_reduction=True,  # Reduce supported types for smaller binary
        )

        # Rename the output file - conversion creates model.with_runtime_opt.ort
        onnx_path_obj = Path(onnx_path)
        generated_ort = onnx_path_obj.with_suffix(".with_runtime_opt.ort")

        if generated_ort.exists():
            generated_ort.rename(ort_path)
            ort_size = Path(ort_path).stat().st_size
            onnx_size = Path(onnx_path).stat().st_size

            print("✓ Converted to ORT format")
            print(f"  ORT size: {ort_size / 1024:.1f} KB")
            print(f"  ONNX size: {onnx_size / 1024:.1f} KB")
            print(f"  Size change: {((ort_size - onnx_size) / onnx_size) * 100:+.1f}%")

            # Also handle the config file
            generated_config = onnx_path_obj.with_suffix(
                ".required_operators_and_types.with_runtime_opt.config"
            )
            if generated_config.exists():
                target_config = Path(ort_path).with_suffix(
                    ".required_operators_and_types.config"
                )
                generated_config.rename(target_config)
                print(f"  Config saved: {target_config.name}")

            # Test ORT model accuracy if test inputs provided
            if test_inputs is not None and torch_outputs is not None:
                print("\nTesting ORT model with ONNX Runtime...")
                if config is not None:
                    batch_size = test_inputs["z_t"].shape[0]
                    seq_len = test_inputs["z_t"].shape[1]
                    vocab_size = config["vocab_size"]
                    print(
                        f"  (Comparing {batch_size} batches × {seq_len} seq × {vocab_size} vocab = {batch_size * seq_len * vocab_size} logit values)"
                    )

                try:
                    ort_session = ort.InferenceSession(
                        str(ort_path), providers=["CPUExecutionProvider"]
                    )

                    ort_outputs_ort = ort_session.run(None, test_inputs)
                    ort_logits = ort_outputs_ort[0]

                    torch_logits, torch_alpha_t, torch_alpha_s = torch_outputs

                    # Raw logit differences
                    max_diff = np.abs(torch_logits - ort_logits).max()
                    mean_diff = np.abs(torch_logits - ort_logits).mean()

                    print(
                        f"  Logits - Max diff: {max_diff:.6f}, Mean diff: {mean_diff:.6f}"
                    )

                    # More meaningful: Compare post-softmax probabilities
                    from scipy.special import softmax, kl_div

                    # Apply softmax to get probabilities (batch, seq, vocab)
                    probs_torch = softmax(torch_logits, axis=-1)
                    probs_ort = softmax(ort_logits, axis=-1)

                    # Probability differences
                    prob_max_diff = np.abs(probs_torch - probs_ort).max()
                    prob_mean_diff = np.abs(probs_torch - probs_ort).mean()

                    print(
                        f"  Probs  - Max diff: {prob_max_diff:.6f}, Mean diff: {prob_mean_diff:.6f}"
                    )

                    # KL divergence (how different are the distributions?)
                    kl_divs = []
                    for b in range(probs_torch.shape[0]):
                        for s in range(probs_torch.shape[1]):
                            kl = np.sum(kl_div(probs_torch[b, s], probs_ort[b, s]))
                            kl_divs.append(kl)
                    mean_kl = np.mean(kl_divs)
                    max_kl = np.max(kl_divs)

                    print(f"  KL Div - Max: {max_kl:.6f}, Mean: {mean_kl:.6f}")

                    # Top-k agreement (do the same tokens get chosen?)
                    for k in [1, 5]:
                        agreements = []
                        for b in range(probs_torch.shape[0]):
                            for s in range(probs_torch.shape[1]):
                                top_k_torch = set(np.argsort(probs_torch[b, s])[-k:])
                                top_k_ort = set(np.argsort(probs_ort[b, s])[-k:])
                                agreement = len(top_k_torch & top_k_ort) / k
                                agreements.append(agreement)
                        print(
                            f"  Top-{k}  - Agreement: {np.mean(agreements) * 100:.1f}%"
                        )

                    if max_diff < 1e-2 and mean_kl < 1e-5:
                        print("✓ ORT model accuracy verified!")
                    elif max_diff < 0.1 and mean_kl < 0.01:
                        print("✓ ORT model works! (minor precision differences)")
                    else:
                        print("⚠ ORT model has larger than expected errors")

                except Exception as e:
                    print(f"⚠ ORT model test failed: {e}")
                    print("  The ORT model may still work in ONNX Runtime Web")
        else:
            print(f"⚠ ORT file not found at expected location: {generated_ort}")
            # Try to list what files were actually created
            print(f"  Looking for files in: {onnx_path_obj.parent}")
            for f in onnx_path_obj.parent.glob("*.ort"):
                print(f"    Found: {f.name}")

    except ImportError:
        print("⚠ onnxruntime tools not available for ORT conversion")
        print("  Install with: uv add onnxruntime")
    except Exception as e:
        print(f"⚠ ORT conversion failed: {e}")
        print("  ONNX model is still available")


def export_model(
    model_dir: str,
    output_path: str,
    use_fp16: bool = False,
    use_ort: bool = False,
    opset_version: int = 18,
):
    """
    Export MD4 model to ONNX format.

    Args:
        model_dir: Directory containing model checkpoint and config
        output_path: Path to save ONNX model
        use_fp16: Whether to convert model to FP16
        opset_version: ONNX opset version
    """
    model_dir = Path(model_dir)
    output_path = Path(output_path)

    print(f"Loading model from {model_dir}")

    # Load config
    with open(model_dir / "config.json", "r") as f:
        config = json.load(f)

    print(f"Config: {config}")

    # Create model
    model = MD4(
        vocab_size=config["vocab_size"],
        max_seq_len=config["max_seq_len"],
        dim=config["dim"],
        n_layers=config["n_layers"],
        n_heads=config["n_heads"],
        dropout=config.get("dropout", 0.0),
        timesteps=config["timesteps"],
        cond_type=config.get("cond_type", "in_context"),
        gating_type=config.get("gating_type", "none"),
        position_embedding_type=config.get("position_embedding_type", "learned"),
        schedule_type=config.get("schedule_type", "poly"),
        sampling_grid=config.get("sampling_grid", "cosine"),
        cont_time=config.get("cont_time", True),
        model_type=config.get(
            "model_type", config.get("loss_type", "genmd4")
        ),  # Support both new and old configs
        t1=config.get("t1", 0.001),
        power_init=config.get("power_init", 1.0),
        num_time_tokens=config.get("num_time_tokens", 1),
    )

    # Load weights using safetensors
    from safetensors.torch import load_file

    state_dict = load_file(model_dir / "model.safetensors")
    model.load_state_dict(state_dict)

    # Set to eval mode (inference only - disables dropout, etc.)
    model.eval()

    # Don't convert to FP16 in PyTorch - we'll do it post-export in ONNX
    # This avoids mixed precision issues

    # Wrap model
    wrapped_model = MD4ONNXWrapper(model)

    # Create dummy inputs for export
    batch_size = 128  # Large batch for better statistical testing
    seq_len = config["max_seq_len"]

    dummy_z_t = torch.randint(
        0, config["vocab_size"] + 1, (batch_size, seq_len), dtype=torch.long
    )
    dummy_t = torch.rand(batch_size, dtype=torch.float32)
    dummy_s = torch.rand(batch_size, dtype=torch.float32)  # Add s input

    # Keep time input as FP32 even for FP16 models

    print(f"Exporting to ONNX with opset version {opset_version}")
    print(f"  Input z_t shape: {dummy_z_t.shape}, dtype: {dummy_z_t.dtype}")
    print(f"  Input t shape: {dummy_t.shape}, dtype: {dummy_t.dtype}")
    print(f"  Input s shape: {dummy_s.shape}, dtype: {dummy_s.dtype}")
    print("  Mode: Inference only")
    if use_fp16:
        print("  Note: Will convert to FP16 after export")

    # Export to ONNX
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Suppress dynamic_axes warning
    import warnings

    warnings.filterwarnings("ignore", message=".*dynamic_axes.*")

    torch.onnx.export(
        wrapped_model,
        (dummy_z_t, dummy_t, dummy_s),
        str(output_path),
        export_params=True,
        opset_version=opset_version,
        do_constant_folding=True,  # Built-in graph optimization
        external_data=False,  # Don't create separate .data file for small models
        input_names=["z_t", "t", "s"],
        output_names=["logits", "alpha_t", "alpha_s"],
        dynamic_axes={
            "z_t": {0: "batch"},
            "t": {0: "batch"},
            "s": {0: "batch"},
            "logits": {0: "batch"},
            "alpha_t": {0: "batch"},
            "alpha_s": {0: "batch"},
        },
    )

    model_size = output_path.stat().st_size
    print(f"\nModel exported to {output_path} ({model_size / 1024:.1f} KB)")

    # Verify the exported model
    print("\nVerifying ONNX model...")
    onnx_model = onnx.load(str(output_path))
    onnx.checker.check_model(onnx_model)
    print("✓ ONNX model is valid")

    # Test with ONNX Runtime
    print("\nTesting with ONNX Runtime...")
    try:
        ort_session = ort.InferenceSession(
            str(output_path), providers=["CPUExecutionProvider"]
        )

        # Run inference
        ort_inputs = {
            "z_t": dummy_z_t.numpy(),
            "t": dummy_t.numpy(),
            "s": dummy_s.numpy(),
        }
        ort_outputs = ort_session.run(None, ort_inputs)
        onnx_logits = ort_outputs[0]
        onnx_alpha_t = ort_outputs[1]
        onnx_alpha_s = ort_outputs[2]

        # Compare with PyTorch
        with torch.no_grad():
            torch_logits, torch_alpha_t, torch_alpha_s = wrapped_model(
                dummy_z_t, dummy_t, dummy_s
            )
            if use_fp16:
                torch_logits = torch_logits.float()
                torch_alpha_t = torch_alpha_t.float()
                torch_alpha_s = torch_alpha_s.float()
            torch_logits = torch_logits.cpu().numpy()
            torch_alpha_t = torch_alpha_t.cpu().numpy()
            torch_alpha_s = torch_alpha_s.cpu().numpy()

        # Compare logits (raw differences - not very meaningful)
        max_diff = np.abs(torch_logits - onnx_logits).max()
        mean_diff = np.abs(torch_logits - onnx_logits).mean()

        print(f"  Logits - Max diff: {max_diff:.6f}, Mean diff: {mean_diff:.6f}")

        # More meaningful: Compare post-softmax probabilities
        from scipy.special import softmax, kl_div

        # Apply softmax to get probabilities (batch, seq, vocab)
        probs_torch = softmax(torch_logits, axis=-1)
        probs_onnx = softmax(onnx_logits, axis=-1)

        # Probability differences
        prob_max_diff = np.abs(probs_torch - probs_onnx).max()
        prob_mean_diff = np.abs(probs_torch - probs_onnx).mean()

        print(
            f"  Probs  - Max diff: {prob_max_diff:.6f}, Mean diff: {prob_mean_diff:.6f}"
        )

        # KL divergence (how different are the distributions?)
        kl_divs = []
        for b in range(probs_torch.shape[0]):
            for s in range(probs_torch.shape[1]):
                kl = np.sum(kl_div(probs_torch[b, s], probs_onnx[b, s]))
                kl_divs.append(kl)
        mean_kl = np.mean(kl_divs)
        max_kl = np.max(kl_divs)

        print(f"  KL Div - Max: {max_kl:.6f}, Mean: {mean_kl:.6f}")

        # Top-k agreement
        for k in [1, 5]:
            agreements = []
            for b in range(probs_torch.shape[0]):
                for s in range(probs_torch.shape[1]):
                    top_k_torch = set(np.argsort(probs_torch[b, s])[-k:])
                    top_k_onnx = set(np.argsort(probs_onnx[b, s])[-k:])
                    agreement = len(top_k_torch & top_k_onnx) / k
                    agreements.append(agreement)
            print(f"  Top-{k}  - Agreement: {np.mean(agreements) * 100:.1f}%")

        # Compare alpha_t
        alpha_t_max_diff = np.abs(torch_alpha_t - onnx_alpha_t).max()
        alpha_t_mean_diff = np.abs(torch_alpha_t - onnx_alpha_t).mean()

        print(
            f"  Alpha_t - Max diff: {alpha_t_max_diff:.6f}, Mean diff: {alpha_t_mean_diff:.6f}"
        )

        # Compare alpha_s
        alpha_s_max_diff = np.abs(torch_alpha_s - onnx_alpha_s).max()
        alpha_s_mean_diff = np.abs(torch_alpha_s - onnx_alpha_s).mean()

        print(
            f"  Alpha_s - Max diff: {alpha_s_max_diff:.6f}, Mean diff: {alpha_s_mean_diff:.6f}"
        )

        if max_diff < 1e-2 and mean_kl < 1e-5:  # Strict for FP32
            print("✓ ONNX output matches PyTorch output")
        else:
            print("⚠ Warning: ONNX output differs from PyTorch")
    except Exception as e:
        print(f"⚠ ONNX Runtime test failed: {e}")
        print("  The model may still work in ONNX Runtime Web")

    # Print model info
    print("\nModel Info:")
    print(f"  Precision: {'FP16' if use_fp16 else 'FP32'}")
    print(f"  Vocab size: {config['vocab_size']}")
    print(f"  Max seq len: {config['max_seq_len']}")
    print(f"  Model dim: {config['dim']}")
    print(f"  Layers: {config['n_layers']}")
    print(f"  Heads: {config['n_heads']}")
    print(f"  Conditioning: {config.get('cond_type', 'none')}")
    if config.get("cond_type", "none") in ["in_context", "in_context_zero"]:
        print(f"  Time tokens: {config.get('num_time_tokens', 1)}")
    print(f"  Model type: {config.get('model_type', config.get('loss_type', 'md4'))}")
    print(f"  Schedule: {config.get('schedule_type', 'cosine')}")
    print(f"  Sampling grid: {config.get('sampling_grid', 'uniform')}")

    # Convert to FP16 after all tests pass (post-export conversion)
    if use_fp16:
        print("\n" + "=" * 60)
        print("Converting FP32 ONNX model to FP16...")
        print("=" * 60)
        try:
            from onnxconverter_common import float16

            # Load the FP32 model
            onnx_fp32 = onnx.load(str(output_path))

            # Convert with conservative settings matching PyTorch AMP behavior
            # Block operations that need FP32 for numerical stability (same as torch.cuda.amp)
            # Also disable shape inference to prevent graph optimization conflicts
            onnx_fp16 = float16.convert_float_to_float16(
                onnx_fp32,
                keep_io_types=True,  # Keep inputs/outputs as FP32
                disable_shape_infer=True,  # Prevent graph optimizations that conflict with precision casts
                op_block_list=[
                    # Normalization operations (contain Sqrt, Div)
                    "LayerNormalization",
                    "BatchNormalization",
                    "InstanceNormalization",
                    "Sqrt",
                    "Pow",
                    # Softmax and log operations (numerically sensitive)
                    "Softmax",
                    "LogSoftmax",
                    "Log",
                    "Exp",
                    # Reduction operations
                    "ReduceSum",
                    "ReduceMean",
                    "ReduceLogSumExp",
                    # Division (can cause overflow/underflow in FP16)
                    "Div",
                    # Loss operations
                    "NegativeLogLikelihoodLoss",
                ],  # Keep these in FP32 for numerical stability
            )

            # Save FP16 model - explicitly prevent external data format
            onnx.save(onnx_fp16, str(output_path), save_as_external_data=False)
            fp16_size = output_path.stat().st_size

            print("✓ Converted to FP16")
            print(
                f"  New size: {fp16_size / 1024:.1f} KB (was {model_size / 1024:.1f} KB)"
            )
            print(f"  Reduction: {(1 - fp16_size / model_size) * 100:.1f}%")

            # Try to test FP16 model
            print("\nTesting FP16 model with ONNX Runtime...")
            print(
                f"  (Comparing {batch_size} batches × {seq_len} seq × {config['vocab_size']} vocab = {batch_size * seq_len * config['vocab_size']} logit values)"
            )
            try:
                ort_session_fp16 = ort.InferenceSession(
                    str(output_path), providers=["CPUExecutionProvider"]
                )

                ort_outputs_fp16 = ort_session_fp16.run(None, ort_inputs)
                onnx_logits_fp16 = ort_outputs_fp16[0]

                # Raw logit differences (not very meaningful)
                max_diff = np.abs(torch_logits - onnx_logits_fp16).max()
                mean_diff = np.abs(torch_logits - onnx_logits_fp16).mean()

                print(
                    f"  Logits - Max diff: {max_diff:.6f}, Mean diff: {mean_diff:.6f}"
                )

                # More meaningful: Compare post-softmax probabilities
                from scipy.special import softmax, kl_div

                # Apply softmax to get probabilities (batch, seq, vocab)
                probs_fp32 = softmax(torch_logits, axis=-1)
                probs_fp16 = softmax(onnx_logits_fp16, axis=-1)

                # Probability differences
                prob_max_diff = np.abs(probs_fp32 - probs_fp16).max()
                prob_mean_diff = np.abs(probs_fp32 - probs_fp16).mean()

                print(
                    f"  Probs  - Max diff: {prob_max_diff:.6f}, Mean diff: {prob_mean_diff:.6f}"
                )

                # KL divergence (how different are the distributions?)
                # Average KL divergence across all positions
                kl_divs = []
                for b in range(probs_fp32.shape[0]):
                    for s in range(probs_fp32.shape[1]):
                        # KL(P_fp32 || P_fp16)
                        kl = np.sum(kl_div(probs_fp32[b, s], probs_fp16[b, s]))
                        kl_divs.append(kl)
                mean_kl = np.mean(kl_divs)
                max_kl = np.max(kl_divs)

                print(f"  KL Div - Max: {max_kl:.6f}, Mean: {mean_kl:.6f}")

                # Top-k agreement (do the same tokens get chosen?)
                for k in [1, 5]:
                    agreements = []
                    for b in range(probs_fp32.shape[0]):
                        for s in range(probs_fp32.shape[1]):
                            top_k_fp32 = set(np.argsort(probs_fp32[b, s])[-k:])
                            top_k_fp16 = set(np.argsort(probs_fp16[b, s])[-k:])
                            agreement = len(top_k_fp32 & top_k_fp16) / k
                            agreements.append(agreement)
                    print(f"  Top-{k}  - Agreement: {np.mean(agreements) * 100:.1f}%")

                if max_diff < 0.1 and mean_kl < 0.01:
                    print("✓ FP16 model works!")
                else:
                    print("⚠ FP16 model has large errors")

            except Exception as e:
                print(f"⚠ FP16 ONNX Runtime test failed: {e}")
                print("  The FP16 model may still work in ONNX Runtime Web")

        except ImportError:
            print("⚠ onnxconverter-common not installed, skipping FP16 conversion")
            print("  Install with: uv add onnxconverter-common")
        except Exception as e:
            print(f"⚠ FP16 conversion failed: {e}")
            print("  Using FP32 model instead")

    # Save config alongside ONNX model for web deployment
    web_config = {
        "vocab_size": config["vocab_size"],
        "max_seq_len": config["max_seq_len"],
        "timesteps": config["timesteps"],
        "model_type": config.get("model_type", config.get("loss_type", "md4")),
        "schedule_type": config.get("schedule_type", "poly"),
        "sampling_grid": config.get("sampling_grid", "cosine"),
        "t1": config.get("t1", 0.001),
        "power_init": config.get("power_init", 1.0),
        "cond_type": config.get("cond_type", "in_context"),
        "num_time_tokens": config.get("num_time_tokens", 1),
    }

    config_output_path = output_path.parent / "config.json"
    with open(config_output_path, "w") as f:
        json.dump(web_config, f, indent=2)
    print(f"\nWeb config saved to {config_output_path}")

    # Copy tokenizer.json if it exists
    tokenizer_src = model_dir / "tokenizer.json"
    if tokenizer_src.exists():
        tokenizer_dst = output_path.parent / "tokenizer.json"
        import shutil

        shutil.copy2(tokenizer_src, tokenizer_dst)
        print(f"Tokenizer copied to {tokenizer_dst}")
    else:
        print(f"⚠ Warning: tokenizer.json not found in {model_dir}")

    # Convert to ORT format if requested
    if use_ort:
        ort_path = output_path.with_suffix(".ort")
        convert_to_ort_format(
            str(output_path),
            str(ort_path),
            test_inputs=ort_inputs,
            torch_outputs=(torch_logits, torch_alpha_t, torch_alpha_s),
            config=config,
        )


def main():
    parser = argparse.ArgumentParser(description="Export MD4 model to ONNX")
    parser.add_argument(
        "--model_dir",
        type=str,
        default="output_final",
        help="Directory containing model checkpoint",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="../website/model/model.onnx",
        help="Output path for ONNX model",
    )
    parser.add_argument(
        "--fp16",
        action="store_true",
        help="Convert model to FP16 for smaller size (~2MB vs ~4MB) and faster WebGL inference",
    )
    parser.add_argument(
        "--opset",
        type=int,
        default=18,
        help="ONNX opset version (default: 18, matches PyTorch export)",
    )
    parser.add_argument(
        "--ort",
        action="store_true",
        help="Convert to ORT format for faster loading and runtime optimizations",
    )

    args = parser.parse_args()

    export_model(
        model_dir=args.model_dir,
        output_path=args.output,
        use_fp16=args.fp16,
        use_ort=args.ort,
        opset_version=args.opset,
    )


if __name__ == "__main__":
    main()
