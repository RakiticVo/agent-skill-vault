---
name: token-efficient-prompting
description: Use when reducing prompt cost, saving model quota, compressing context, rewriting long prompts, deciding what files or history to include, or designing reusable prompts that preserve correctness while using fewer tokens.
required: false
roles:
  - prompt-engineer
  - orchestrator
  - researcher
when_to_use:
  - saving model quota
  - compressing prompts or context
  - rewriting reusable agent instructions
source_inspired_by:
  - dair-ai/Prompt-Engineering-Guide
  - addyosmani/agent-skills/context-engineering
checks:
  - irrelevant history is excluded
  - reusable rules are separated from task-local facts
  - output format is compact but sufficient
---

# Token-Efficient Prompting

Spend tokens on decision-critical context, not narration.

Compression workflow:

- State the task in one sentence.
- List only constraints that change the answer.
- Include paths, APIs, schemas, errors, or examples that the agent must use.
- Replace long history with durable decisions, current state, and exact next action.
- Move stable project rules into skills, `AGENTS.md`, or memory instead of repeating them.
- Ask for concise output by default; request deeper reasoning only for ambiguous or high-risk work.

Prompt shape:

```text
Goal: ...
Relevant context:
- ...
Constraints:
- ...
Need from you:
- ...
Output format: ...
```

Context budget rules:

- Prefer one representative example over many similar examples.
- Prefer filenames and grep targets over pasting whole files when the agent has filesystem access.
- Prefer structured bullets over prose paragraphs.
- Keep source citations or logs only when they are evidence for the decision.
- Remove stale attempts once the current diagnosis is known.

Do not compress away:

- User-visible requirements.
- Security, privacy, or destructive-operation constraints.
- API contracts, schema details, exact error messages, and reproduction steps.
- Decisions that future turns must preserve.
