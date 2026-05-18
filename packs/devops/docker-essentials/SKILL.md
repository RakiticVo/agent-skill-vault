---
name: docker-essentials
description: Use when creating, reviewing, or debugging Dockerfiles, compose files, images, volumes, networks, or local container workflows.
required: false
roles:
  - devops
  - implementer
when_to_use:
  - Docker setup
  - local service orchestration
  - container debugging
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - image build is reproducible
  - secrets are not baked into images
  - runtime config is explicit
---

# Docker Essentials

Keep containers reproducible and boring.

Check:

- Minimal base image suitable for the runtime.
- Dependency install is cached and deterministic.
- Secrets are passed at runtime, not baked into layers.
- Ports, volumes, and networks are explicit.
- Health checks and logs are usable.
- `.dockerignore` excludes unnecessary files.

Prefer compose for local multi-service workflows.
