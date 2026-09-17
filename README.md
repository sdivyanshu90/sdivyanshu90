# Divanshu Sharma

**Applied AI / ML Systems Engineer** working across LLM evaluation,
model infrastructure, inference, retrieval, and reliability.

Currently a **Founding Engineer at Uniiq.ai**, where I work across AI
workflows, backend systems, reliability, security, testing, infrastructure,
and product performance.

My public engineering work is split between an **AI Systems Lab** — where I
implement the systems underneath modern AI from first principles — and
**upstream open-source work** in established AI/ML codebases.

---

## Open Source

I contribute reliability and correctness fixes to open-source AI/ML
infrastructure.

### EleutherAI — `lm-evaluation-harness`

Merged/upstream work across areas including:

- cache and filesystem reliability
- CLI parsing semantics
- evaluation and benchmark correctness
- few-shot/evaluation behavior
- distributed result handling

A cache-path fix I contributed in **PR #4047** was merged upstream and
shipped in **v0.4.13**.

### Mastra

Bug investigation across agent/workflow execution, Editor state,
evaluation/scorer caching, processor graphs, provider configuration,
and CLI behavior.

Several reported issues progressed into upstream resolution /
pending-release states.

### Experiential

Active upstream work across AI gateway and provider reliability:

- URL/path and browser-origin boundaries
- shell-safe configuration output
- stable API error contracts
- provider pagination
- package typing
- credential and recovery behavior

### OpenCode

Active bug investigation and fixes across:

- terminal/WebSocket behavior
- Unicode and encoding boundaries
- filesystem portability
- Git/repository semantics
- pagination and cache identity
- authentication and URL handling

### Earlier Open Source

Earlier engineering contributions include work in the
**p5.js Web Editor**, **VulnerableCode**, and **PyNN**, alongside
scientific-ML work in the **ML4SCI ecosystem**.

See [`OPEN_SOURCE.md`](./OPEN_SOURCE.md) for the contribution ledger
and current upstream status of individual artifacts.

---

## Selected Systems

### AI Gateway
OpenAI-compatible multi-provider LLM gateway with routing, failover,
distributed circuit breaking, rate limiting, semantic caching, cost
tracking, and observability.

### Distributed Training
LLaMA-style distributed training from PyTorch primitives using FSDP/ZeRO-3
and tensor parallelism, with sharded checkpoints, deterministic resume,
correctness tests, and profiling.

### EvalForge
LLM evaluation harness covering dataset validation, provider abstraction,
deterministic and model-based scorers, concurrent execution, crash-safe
artifacts, reporting, and regression workflows.

### FromScratchQuant
PyTorch quantization library implementing INT8, FP4, and NF4 from first
principles with calibration, serialization, numerical validation, and
benchmarks.

### Code Interpreter
Sandboxed execution service for untrusted code using isolated containers,
namespaces, seccomp, cgroups, filesystem/network restrictions, and resource
controls.

### Neural Bisect
Behavioral debugging for neural networks across checkpoints using
representation analysis, interventions, training-data attribution, and
counterfactual evidence.

---

## AI Systems Lab

I maintain a broader set of from-scratch/reference implementations covering:

**Model internals** — Transformers, SSM/Mamba, diffusion  
**Training & alignment** — distributed training, PEFT, DPO  
**Evaluation & debugging** — EvalForge, Neural Bisect  
**Inference & efficiency** — quantization, ONNX serving, decoding  
**Retrieval & context** — vector search, Graph RAG, prompt caching  
**Infrastructure & reliability** — gateways, guardrails, secure execution

The goal is to understand and validate the abstractions underneath modern
AI systems rather than only compose high-level frameworks.

---

## Privacy-Preserving ML

Worked on privacy-preserving deep learning through an AI Pioneers
open-source research collaboration mentored by Yale researchers
Haris Smajlović and Claus Horn.

The work focused on adapting CNN components for Secure Multi-Party
Computation in the Sequre ecosystem and building an end-to-end
ChestMNIST training workflow.

---

## Current Focus

**LLM evaluation · AI infrastructure · model inference · ML systems ·
retrieval · reliability · privacy-preserving ML**

Portfolio: https://div90.vercel.app/
