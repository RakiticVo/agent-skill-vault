---
name: cloud-security-baseline
description: Use when reviewing cloud deployment config, infrastructure settings, environment variables, IAM, storage, networking, or public exposure.
required: false
roles:
  - security
  - devops
  - reviewer
when_to_use:
  - cloud deployment review
  - infrastructure configuration
  - production readiness
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - secrets are not exposed
  - public access is intentional
  - least privilege is considered
---

# Cloud Security Baseline

Review cloud config before deployment.

Check:

- Secrets are stored in managed secret/env systems, not source code.
- IAM/service accounts use least privilege.
- Public endpoints, storage buckets, and databases are intentionally exposed.
- Network rules are specific and documented.
- Logs avoid secrets and sensitive payloads.
- Rollback and incident contact paths are known.

Prefer explicit deny/allow rules over broad defaults.
