---
name: incremental-plan-execution
description: Use when executing a stored plan task-by-task while keeping the plan updated as work progresses.
required: false
roles:
  - implementer
  - tester
  - orchestrator
when_to_use:
  - executing active plans
  - updating task status
  - resuming paused work
source_inspired_by:
  - addyosmani/agent-skills/incremental-implementation
checks:
  - only one active task is changed at a time
  - status changes are recorded in the plan
  - verification evidence is captured
---

# Incremental Plan Execution

Execute one plan task at a time and keep the plan alive.

Cycle:

- Select the next unblocked task from `.agent-plans/INDEX.md` or the active plan.
- Mark it `in-progress`.
- Implement the smallest complete slice.
- Run the task verification.
- Record evidence or failure notes.
- Mark it `done` or `blocked`.
- Update the next action.

Do not continue implementing if the plan no longer matches reality. Update the plan first.
