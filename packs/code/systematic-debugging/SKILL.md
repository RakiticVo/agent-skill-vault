---
name: systematic-debugging
description: Use when diagnosing bugs, flaky behavior, regressions, crashes, or unexpected outputs.
required: false
roles:
  - debugger
  - implementer
when_to_use:
  - debugging failures
  - investigating flaky tests
  - fixing regressions
source_inspired_by:
  - obra/superpowers
checks:
  - bug is reproduced
  - root cause is identified
  - fix is verified against the reproduction
---

# Systematic Debugging

Debug from evidence.

Process:

- Reproduce the issue or isolate the failing signal.
- Define expected vs actual behavior.
- Trace the smallest path from input to failure.
- Test hypotheses one at a time.
- Fix the root cause, not just the symptom.
- Verify with the original reproduction and a regression test when possible.
