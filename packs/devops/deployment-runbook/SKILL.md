---
name: deployment-runbook
description: Use when preparing deployment instructions, release steps, smoke tests, rollback procedures, or production handoffs.
required: false
roles:
  - devops
  - release-manager
when_to_use:
  - deployment preparation
  - production release
  - operational handoff
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - pre-deploy checks are listed
  - smoke tests and rollback are defined
  - environment assumptions are explicit
---

# Deployment Runbook

A deploy should be repeatable under pressure.

Include:

- Target environment and version.
- Pre-deploy checks.
- Deployment commands or automation entrypoints.
- Smoke tests and expected results.
- Rollback steps.
- Monitoring and owner/contact notes.

Avoid implicit local-only steps.
