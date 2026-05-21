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
- AgentMemory is a mandatory integration for every installed project; the installer adds `agents/agentmemory-integration`, `.agents/integrations/agentmemory.md`, and an MCP config example automatically.
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

## Skill Catalog

For a quick overview of every pack and skill, see:

- [English skill catalog](./docs/SKILL_CATALOG.en.md)
- [Vietnamese skill catalog](./docs/SKILL_CATALOG.vi.md)
- [Vietnamese Flutter + Antigravity agent workflow](./docs/FLUTTER_ANTIGRAVITY_AGENT_WORKFLOW.vi.md)

These files are summaries only. The detailed operating rules remain in each `packs/<pack>/<skill-id>/SKILL.md`.

## MCP-Free Usage

`agent-skill-vault` MCP is optional after skills have been installed. Installed skills are project-local and remain usable through `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.agents/skills.lock.json`, and the installed `SKILL.md` files.

Use these guides when you want to disable the `agent-skill-vault` MCP server but keep working from installed skills:

- [English MCP-free usage guide](./docs/MCP_FREE_USAGE.en.md)
- [Vietnamese MCP-free usage guide](./docs/MCP_FREE_USAGE.vi.md)

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

## Mandatory AgentMemory

Installed projects require AgentMemory as the shared memory layer for agents. By default, start the local memory server with:

```bash
npx @agentmemory/agentmemory
```

Then register an MCP server named `agentmemory` with:

```json
{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/mcp"]
    }
  }
}
```

The installer writes `.agents/integrations/agentmemory.mcp.example.json` into each target project. `doctor` reports missing integration files as errors and reports unavailable health checks with the exact setup command.

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

## Credits and Inspirations

Some skills are inspired by public agent workflow projects and documentation patterns. See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for source credits.
