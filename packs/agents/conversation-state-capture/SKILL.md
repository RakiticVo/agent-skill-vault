---
name: conversation-state-capture
description: Use when preserving useful conversation state across sessions, deciding what to save to AGENTS.md, plans, ADRs, issue trackers, or handoff notes, and keeping long-running agent collaboration coherent without storing noisy chat history.
required: false
roles:
  - orchestrator
  - implementer
  - reviewer
when_to_use:
  - saving conversation decisions
  - preparing future sessions
  - reducing repeated context in long-running work
source_inspired_by:
  - mattpocock/skills/setup-matt-pocock-skills
  - mattpocock/skills/handoff
  - obra/superpowers
checks:
  - durable decisions are saved outside chat
  - transient details are not promoted to memory
  - next action is explicit
---

# Conversation State Capture

Convert useful conversation into durable project state.

Save when the conversation establishes:

- A product requirement, acceptance criterion, or non-goal.
- A project convention, architecture decision, or integration rule.
- A dependency choice, rollout constraint, or compatibility promise.
- A recurring user preference that will affect future work.
- A blocked state, verified diagnosis, or exact next action.

Choose the storage target:

- Project docs: durable preferences, conventions, and decisions that should follow future sessions.
- `AGENTS.md`: repo-wide operating rules every agent should read at startup.
- `.agent-plans/`: active work state, task breakdowns, handoffs, and verification notes.
- `docs/adr/`: architectural decisions with tradeoffs and consequences.
- Issue tracker: externally visible task status, acceptance criteria, and follow-up work.
- Final response only: short-lived context that does not need to survive the session.

Capture format:

```text
Decision:
Context:
Why:
Applies to:
Expires or revisit when:
```

Avoid storing:

- Secrets, tokens, private credentials, or raw customer data.
- Long chat transcripts when a short decision is enough.
- Guesses that were not verified.
- Temporary implementation details that will be obvious from the code.
