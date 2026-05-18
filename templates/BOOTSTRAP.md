# Agent Skill Hub Bootstrap

This project uses pinned agent skills. These instructions are mandatory for every coding agent session.

## Mandatory Startup

1. Read `.agents/skills.lock.json`.
2. Read the relevant `SKILL.md` files before planning or editing.
3. State which skills are being applied in the implementation plan.
4. Follow mandatory Clean Architecture, dependency injection, networking, model, and testing checks.
5. Run `agent-skills doctor --project .` before finishing when the tool is available.

If a user asks for implementation without mentioning skills, still perform this startup flow. Do not wait for the user to remind you.

For Claude Code, also inspect `.claude/skills` when present.
For Gemini, treat this file and `.agents/skills` as the project skill source.

Current bootstrap file: `{{AGENT_FILE}}`.
