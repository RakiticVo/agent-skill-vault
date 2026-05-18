# Agent Skill Vault

Multi-domain skill registry, installer, doctor, and MCP stdio server for AI agent workflows.

If an agent reaches this repository through GitHub MCP first, start with [INSTALL_INSTRUCTIONS.md](./INSTALL_INSTRUCTIONS.md).

## Quick Start

```bash
node ./bin/agent-skills.js list --pack all
node ./bin/agent-skills.js list --pack planning,ai,code,design,git,agents,mcp,research,security,devops,data,ml,creative
node ./bin/agent-skills.js list --source https://github.com/RakiticVo/agent-skill-vault --version v0.1.0 --pack core,flutter
node ./bin/agent-skills.js recommend-flutter-stack --size medium --flow standard
node ./bin/agent-skills.js install --project /path/to/flutter_app --packs core,flutter --source https://github.com/RakiticVo/agent-skill-vault --version v0.1.0 --targets codex,claude,gemini
node ./bin/agent-skills.js doctor --project /path/to/flutter_app
node ./bin/agent-skills.js update --project /path/to/flutter_app --version v0.2.0
node ./bin/agent-skills.js mcp
```

Smoke examples:

```bash
node ./bin/agent-skills.js list --pack ai,code,design
node ./bin/agent-skills.js install --project C:\tmp\skill-smoke --packs core,planning,ai,design,mcp,security,devops,creative
node ./bin/agent-skills.js doctor --project C:\tmp\skill-smoke
```

## Model

- Source skills live in `packs/<pack>/<skill-id>/SKILL.md`.
- `core` is installed for every project.
- Domain packs such as `flutter` are installed as needed.
- Installing the `planning` pack creates `.agent-plans/` with an index and reusable plan/spec/ADR templates.
- Installed skills are flattened into `.agents/skills/<skill-id>` and pinned through `.agents/skills.lock.json`.
- Claude Code receives `.claude/skills` plus `CLAUDE.md`.
- Gemini receives `GEMINI.md` plus `.agents/skills`.

## Versioning

Create Git tags such as `v0.1.0`, `v0.2.0`, and install using `--version`. This keeps each project stable until you intentionally update skills.

```bash
git tag v0.1.0
git push origin v0.1.0
```

## MCP Tools

The MCP stdio server exposes:

- `list_skills`
- `recommend_flutter_stack`
- `install_skills`
- `update_skills`
- `doctor`

Current V1 packs:

- `ai`
- `planning`
- `code`
- `flutter`
- `kotlin`
- `javascript`
- `design`
- `git`
- `agents`
- `mcp`
- `research`
- `security`
- `devops`
- `data`
- `ml`
- `creative`

## Planning Workspace

When installed with `--packs planning`, Agent Skill Vault creates:

```text
.agent-plans/
  README.md
  INDEX.md
  active/
  archived/
  decisions/
  templates/
    PLAN_TEMPLATE.md
    SPEC_TEMPLATE.md
    ADR_TEMPLATE.md
```

Use this folder to evolve project plans over time, create new plans from existing ones, and preserve decision history across sessions.

GitHub-backed MCP config shape:

```json
{
  "mcpServers": {
    "agent-skill-vault": {
      "command": "npm",
      "args": [
        "exec",
        "--yes",
        "--package",
        "github:RakiticVo/agent-skill-vault",
        "--",
        "agent-skills",
        "mcp",
        "--source",
        "https://github.com/RakiticVo/agent-skill-vault",
        "--version",
        "v0.1.0"
      ]
    }
  }
}
```

## Antigravity Flow

1. Create or open a project.
2. If Antigravity only has GitHub MCP, ask the agent to read `INSTALL_INSTRUCTIONS.md` from this repo.
3. The agent registers the `agent-skill-vault` MCP server if Antigravity permits config edits/reload, or gives you the MCP config to paste.
4. After the MCP server is available, ask the agent once:

```text
Use agent-skill-vault MCP to bootstrap this Flutter project from https://github.com/RakiticVo/agent-skill-vault at v0.1.0 with core and flutter packs for codex, claude, and gemini. Then run doctor.
```

The installer writes `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.agents/skills`, `.claude/skills`, and `.agents/skills.lock.json` into the project.

## Skill Authoring

Each skill is a folder containing `SKILL.md` with YAML frontmatter:

```markdown
---
name: State Management Selection
description: Use when selecting Flutter state management for a feature or project
required: true
roles:
  - architect
when_to_use:
  - selecting state management
checks:
  - Cubit is used when uncertainty remains
---
```

Keep mandatory rules backed by `doctor` checks where possible; do not rely only on instructions.
