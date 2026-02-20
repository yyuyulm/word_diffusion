#!/usr/bin/env python3
"""
Run multiple WandB sweep agents in parallel on the same GPU.

This is useful for small models that don't saturate GPU compute/memory.
Running 2-3 experiments in parallel can maximize GPU utilization.

Usage:
    # Run 2 parallel agents
    python run_parallel_sweep.py --sweep_id <sweep_id> --num_agents 2

    # Or use environment variable
    export WANDB_SWEEP_ID=<sweep_id>
    python run_parallel_sweep.py --num_agents 3
"""

import argparse
import os
import sys
import threading

import wandb


def run_agent(
    agent_id: int, sweep_id: str, project: str, entity: str | None, count: int | None
):
    """Run a single WandB sweep agent.

    Args:
        agent_id: Identifier for this agent (for logging)
        sweep_id: WandB sweep ID
        project: WandB project name
        entity: WandB entity (username/team), None for default
        count: Number of runs per agent, None for unlimited
    """
    print(f"[Agent {agent_id}] Starting...")

    try:
        wandb.agent(
            sweep_id,
            project=project,
            entity=entity,
            count=count,
        )
        print(f"[Agent {agent_id}] Finished successfully!")
    except Exception as e:
        print(f"[Agent {agent_id}] Error: {e}")
        import traceback

        traceback.print_exc()


def main():
    parser = argparse.ArgumentParser(
        description="Run multiple WandB sweep agents in parallel on the same GPU"
    )
    parser.add_argument(
        "--sweep_id",
        type=str,
        default=None,
        help="WandB sweep ID (or set WANDB_SWEEP_ID env var)",
    )
    parser.add_argument(
        "--num_agents",
        type=int,
        default=2,
        help="Number of parallel agents to run (default: 2)",
    )
    parser.add_argument(
        "--project",
        type=str,
        default="word-diffusion",
        help="WandB project name (default: word-diffusion)",
    )
    parser.add_argument(
        "--entity",
        type=str,
        default=None,
        help="WandB entity (username/team)",
    )
    parser.add_argument(
        "--count",
        type=int,
        default=None,
        help="Number of runs per agent (default: None = unlimited)",
    )

    args = parser.parse_args()

    # Get sweep ID from args or environment
    sweep_id = args.sweep_id or os.environ.get("WANDB_SWEEP_ID")
    if not sweep_id:
        print(
            "Error: Must provide --sweep_id or set WANDB_SWEEP_ID environment variable"
        )
        sys.exit(1)

    print(f"Starting {args.num_agents} parallel agents for sweep: {sweep_id}")
    print(f"Project: {args.project}")
    if args.entity:
        print(f"Entity: {args.entity}")
    print()
    print(
        "⚠️  Monitor GPU usage with 'nvidia-smi' to ensure you're not running out of memory"
    )
    print()

    # Start parallel agents using threading (works better with WandB than multiprocessing)
    threads = []
    for i in range(args.num_agents):
        agent_id = i + 1
        t = threading.Thread(
            target=run_agent,
            args=(agent_id, sweep_id, args.project, args.entity, args.count),
            daemon=False,
        )
        t.start()
        threads.append(t)
        print(f"✓ Started agent {agent_id}")

    print(f"\n{args.num_agents} agents running in parallel...")
    print("Press Ctrl+C to stop all agents\n")

    # Wait for all threads to complete
    try:
        for i, t in enumerate(threads):
            t.join()
            print(f"✓ Agent {i + 1} completed")
    except KeyboardInterrupt:
        print("\n\nReceived interrupt, waiting for agents to finish current runs...")
        print("(Threads cannot be forcefully terminated - please wait)")
        for t in threads:
            t.join()
        print("All agents stopped")
        sys.exit(0)

    print("\n✓ All agents finished successfully!")


if __name__ == "__main__":
    main()
