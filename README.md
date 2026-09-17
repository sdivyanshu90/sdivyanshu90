# Divanshu Sharma

Applied AI / ML Systems Engineer working across LLM evaluation, model
infrastructure, inference, retrieval, and reliability.

I'm currently a Founding Engineer at Uniiq.ai, where I work across AI
workflows, backend systems, reliability, security, testing, and product
performance.

## Open Source

I contribute reliability and correctness fixes to open-source AI/ML
infrastructure.

**EleutherAI / lm-evaluation-harness**
- Merged upstream fixes across cache handling, CLI parsing, and
  evaluation/benchmark correctness.
- Cache-path fix #4047 shipped in v0.4.13.
- Additional work covers few-shot behavior, distributed results, cache
  integrity, normalization, and CLI edge cases.

**Mastra**
- Reported correctness bugs across workflows, Editor state, evaluation
  caches, processors, provider configuration, and CLI behavior.
- Several reports progressed to pending-release / pending-close states.
- One documentation contribution merged upstream.

**Experiential**
- Active upstream fixes across AI gateway and provider reliability:
  URL/path boundaries, hosted-origin validation, error contracts,
  credential handling, pagination, packaging, and CLI behavior.

**OpenCode**
- Active bug-fix work across terminal/WebSocket behavior, Unicode and
  encoding, filesystem portability, Git/branch validation, pagination,
  caching, and client/server authentication.

**Sequre**
- Privacy-preserving deep-learning work for Secure Multi-Party
  Computation; submitted upstream CNN/Conv2D work in PR #42.

## Selected Systems

### AI Gateway
OpenAI-compatible multi-provider LLM gateway with routing, failover,
distributed circuit breaking, rate limiting, semantic caching, cost
tracking, and observability.

### Distributed Training
LLaMA-style distributed training from raw PyTorch primitives using
FSDP/ZeRO-3 and tensor parallelism, with sharded checkpoints,
deterministic resume, correctness tests, and profiling.

### EvalForge
From-scratch LLM evaluation harness covering datasets, provider
abstraction, scoring, concurrent execution, crash-safe artifacts,
reporting, and regression workflows.

### FromScratchQuant
PyTorch quantization library implementing INT8, FP4, and NF4 from first
principles with calibration, serialization, numerical validation, and
benchmarks.

### Code Interpreter
Sandboxed untrusted-code execution service using isolated containers,
seccomp, namespaces, cgroups, capability dropping, filesystem/network
restrictions, and resource controls.

### Neural Bisect
Checkpoint-level behavioral debugging for neural networks using
representation analysis, activation interventions, training-data
attribution, and counterfactual evidence.

## AI Systems Lab

My broader systems work covers:

- model internals: SSM/Mamba, diffusion, small language models
- training/alignment: PEFT, DPO, distributed training
- inference: quantization, speculative decoding, ONNX serving
- evaluation/debugging: EvalForge, Neural Bisect
- retrieval/context: HNSW, Graph RAG, prompt caching
- infrastructure/reliability: gateways, guardrails, secure execution

The goal of these projects is to understand the abstractions underneath
modern AI systems rather than only compose high-level APIs.

## Research

Worked on privacy-preserving deep learning through an AI Pioneers
open-source research collaboration mentored by Yale researchers Haris
Smajlović and Claus Horn.

The work focused on adapting CNN operations for Secure Multi-Party
Computation in Sequre, including CNN components and an end-to-end
ChestMNIST training workflow.

## Current Focus

LLM evaluation · AI infrastructure · model inference · ML systems ·
retrieval · reliability · privacy-preserving ML
