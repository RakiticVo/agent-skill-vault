---
name: artifact-builder
description: Use when a task should produce a coordinated set of artifacts such as docs, plans, diagrams, configs, checklists, or templates.
required: false
roles:
  - planner
  - writer
  - designer
when_to_use:
  - building multi-part deliverables
  - creating project kits
  - generating docs plus supporting assets
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - artifacts have a shared purpose
  - dependencies between artifacts are clear
  - output is verified as a set
---

# Artifact Builder

Treat related outputs as one deliverable.

Workflow:

- Define the artifact set and audience.
- Identify dependencies between files.
- Create a concise source of truth for decisions.
- Keep naming and structure consistent.
- Verify links, commands, diagrams, and references together.

Avoid producing many files when one clear artifact is enough.
