---
name: Writing Skills
description: Use when creating or revising an agent skill.
required: false
roles:
  - skill-author
  - reviewer
when_to_use:
  - adding a new skill
  - revising skill triggers
  - checking whether a skill is actionable
checks:
  - description describes when to use the skill
  - skill includes concrete checks
  - mandatory rules are backed by doctor/test checks when possible
---

# Writing Skills

Skills are operational instructions, not essays.

Rules:

- The description should explain when to use the skill.
- Keep instructions direct and testable.
- Put mandatory behavior in checks when possible.
- Include examples only when they prevent common mistakes.
- Avoid domain claims that are broader than the skill can enforce.

Before finishing a skill, test it against likely user tasks and failure modes.
