# MCP-Free Usage After Skill Installation

`agent-skill-vault` MCP is an installer and maintenance layer. It is useful for discovering skills, installing packs, recommending a Flutter stack, updating pinned versions, and running doctor checks.

After skills have been installed into a project, the project can still use those skills even when the `agent-skill-vault` MCP server is disabled.

## What Still Works

Installed skills are copied into the project. They do not disappear when the MCP server is turned off.

Agents can continue working from these local files:

- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.agents/skills.lock.json`
- `.agents/skills/<skill-id>/SKILL.md`
- `.claude/skills/<skill-id>/SKILL.md` when Claude targets were installed
- `.agents/integrations/agentmemory.md`
- `.agents/integrations/agentmemory.mcp.example.json`

The lock file is the source of truth for installed packs, installed skills, target agents, source repo, pinned version, and required integrations.

## Agent Flow Without MCP

When `agent-skill-vault` MCP tools are unavailable, agents must use the installed local files directly:

1. Read the host bootstrap file: `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.
2. Read `.agents/skills.lock.json`.
3. Select relevant skills from `.agents/skills`.
4. Read the selected `SKILL.md` files before planning or editing.
5. Mention the selected skills in the plan.
6. Run the selected skill checklists before completion.
7. If install, update, doctor, or stack recommendation is needed, ask the user to re-enable `agent-skill-vault` MCP or run the CLI.

## When To Re-Enable MCP

Re-enable `agent-skill-vault` MCP when the project needs one of these actions:

- Install more packs or skills.
- Update installed skills to a new pinned tag.
- Run `doctor` through the MCP host.
- Use `recommend_flutter_stack`.
- Rebuild bootstrap files from the current vault version.

If MCP is disabled but the CLI is available, the same maintenance actions can be run from the terminal:

```bash
npx github:RakiticVo/agent-skill-vault#v0.3.0 agent-skills doctor --project .
```

## AgentMemory Is Separate

Disabling `agent-skill-vault` MCP does not mean disabling `agentmemory` MCP.

`agent-skill-vault` MCP manages skills. `agentmemory` MCP provides shared project memory across agent sessions.

If `.agents/skills.lock.json` contains `requiredIntegrations: ["agentmemory"]`, agents should still:

- Check whether the `agentmemory` MCP server is available.
- Search memory before planning when available.
- Save durable decisions after meaningful work.
- Report clearly when AgentMemory is required but unavailable.

Use the project-local config example:

```text
.agents/integrations/agentmemory.mcp.example.json
```

## Do Not Delete Installed Skill Files

Turning off MCP is safe. Deleting installed skill files is different.

Do not delete these files unless you intentionally want to remove the installed skill system from the project:

- `.agents/skills`
- `.claude/skills`
- `.agents/skills.lock.json`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.agents/integrations`
