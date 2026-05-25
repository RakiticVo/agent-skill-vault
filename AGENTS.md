# Agent Skill Vault

This repo contains source skill packs and an MCP server for AI-assisted work across domains.

When using this repo to bootstrap another project, prefer the MCP server:

```bash
node ./bin/agent-skills.js mcp
```

When working inside an installed project, read that project's `.agents/skills.lock.json` and installed `SKILL.md` files before changing code. Save durable decisions to `.agent-plans/decisions/`, ADRs, or project docs when finishing meaningful work.
