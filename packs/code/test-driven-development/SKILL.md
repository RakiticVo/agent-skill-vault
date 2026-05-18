---
name: test-driven-development
description: Use when implementing behavior where tests can define the desired outcome before or during coding.
required: false
roles:
  - implementer
  - tester
when_to_use:
  - feature implementation
  - bug fixes
  - refactoring behavior
source_inspired_by:
  - obra/superpowers
checks:
  - failing test is created or identified first
  - implementation is minimal
  - tests pass after change
---

# Test-Driven Development

Use red-green-refactor where practical.

Cycle:

- Write or identify a test that captures the desired behavior.
- Run it and confirm it fails for the expected reason.
- Implement the smallest change that passes.
- Refactor only with tests green.
- Keep regression tests for bugs.

If TDD is not practical, explain why and add the closest useful verification.
