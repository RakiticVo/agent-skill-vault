# Agent Skill Vault Bootstrap

This project uses pinned agent skills. These instructions are mandatory for every coding agent session.

Start with `using-agent-skills` before any other skill. It is the mandatory router that decides which installed skills apply to the current task and how they should be invoked. Agents must route by task intent even when the user does not name a skill.

## Mandatory Startup

1. Read `.agents/skills.lock.json`.
2. Read `.agents/skills/using-agent-skills/SKILL.md` first.
3. Check whether the `agentmemory` MCP server is available. If available, search memory for relevant project decisions before planning.
4. Read the relevant `SKILL.md` files before planning or editing.
5. State which skills are being applied in the implementation plan.
6. Follow the selected skills' workflow and checks.
7. Before finishing meaningful work, save durable decisions or verified project knowledge to AgentMemory when available.
8. Run `agent-skills doctor --project .` before finishing when the tool is available.

If a user asks for implementation without mentioning skills, still perform this startup flow. Do not wait for the user to remind you.

## Invoking Skills

Installed skills are local Markdown workflows, not executable shell commands. A user may invoke them by naming the skill or by describing the lifecycle action. Agents must also invoke matching skills automatically from normal task descriptions.

Common lifecycle aliases:

- `/spec` or "write a spec" -> `spec-driven-planning`, `to-prd`, `idea-refine`
- `/plan` or "break this down" -> `planning-and-task-breakdown`, `project-plan-ledger`
- `/build` or "implement this" -> task-specific code/design/domain skills selected by `using-agent-skills`
- `/test` or "prove it works" -> test and verification skills for the stack
- `/review` or "review this" -> `code-review`, `pull-request-review`, relevant security/design review skills
- `/code-simplify` or "simplify this" -> `code-simplification`, `zoom-out`
- `/ship` or "prepare release" -> `shipping-and-launch`, `release-readiness`, `ci-cd`

If the host supports slash commands, map those commands to the listed skills. If it does not, treat the same text as a normal user intent and apply the matching installed skills.

When a task arrives, infer skills from:

- Explicit skill names or lifecycle aliases.
- The files and stack involved.
- The requested activity: spec, plan, build, test, review, simplify, ship, research, debug, secure, document, or migrate.
- Installed skill metadata in `.agents/skills.lock.json` and each selected `SKILL.md`.

Use the smallest installed skill set that covers the task, name those skills before editing, and continue without asking the user to choose unless the choice changes scope or risk.

## MCP-Free Fallback

If `agent-skill-vault` MCP tools are not available, the installed local files remain authoritative.

1. Read `.agents/skills.lock.json` to identify installed packs, installed skills, target agents, pinned source, and required integrations.
2. Read relevant local skills from `.agents/skills/<skill-id>/SKILL.md`.
3. For Claude Code, also read `.claude/skills/<skill-id>/SKILL.md` when present.
4. Mention the selected skills in the plan before editing.
5. Run the selected skill checklists before completion.
6. Ask the user to re-enable `agent-skill-vault` MCP or run the CLI only when install, update, doctor, or stack recommendation is needed.

If AgentMemory is required by `.agents/skills.lock.json` but not running, report that memory is unavailable and use `.agents/integrations/agentmemory.mcp.example.json` to configure the host. Start the local memory server with `npx @agentmemory/agentmemory`.

For Claude Code, also inspect `.claude/skills` when present.
For Gemini, treat this file and `.agents/skills` as the project skill source.

Current bootstrap file: `{{AGENT_FILE}}`.
