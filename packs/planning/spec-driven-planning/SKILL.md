---
name: spec-driven-planning
description: Use when a project or feature needs a written specification before tasks or implementation begin.
required: false
roles:
  - planner
  - architect
when_to_use:
  - requirements are unclear
  - starting a new feature
  - making architectural decisions
source_inspired_by:
  - addyosmani/agent-skills/spec-driven-development
checks:
  - objective and success criteria are explicit
  - boundaries are defined
  - unresolved questions are listed
---

# Spec-Driven Planning

Write a spec before detailed tasks when the goal is not already concrete.

Spec sections:

- Objective: what is being built and why.
- Users/audience: who benefits or uses it.
- Success criteria: specific, testable outcomes.
- Commands: build, test, lint, run, deploy.
- Project structure: where code, docs, tests, and plans live.
- Boundaries: always do, ask first, never do.
- Open questions: decisions that need human input.

Save specs under `.agent-plans/active/<plan-id>/SPEC.md` or next to the plan when the project uses another convention.
