---
name: ml-experiment-monitoring
description: Use when planning, running, comparing, or reporting machine learning experiments, evaluations, or model benchmarks.
required: false
roles:
  - ml-engineer
  - researcher
when_to_use:
  - ML experiments
  - model evaluation
  - benchmark reporting
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - metrics and datasets are defined
  - runs are comparable
  - limitations are reported
---

# ML Experiment Monitoring

Make experiments comparable and explainable.

Track:

- Dataset/version and split strategy.
- Model/config/hyperparameters.
- Metrics and evaluation protocol.
- Random seeds and runtime environment.
- Baselines and previous best results.
- Failure cases and limitations.

Do not compare runs that changed multiple uncontrolled variables without noting it.
