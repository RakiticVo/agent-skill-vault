# Agent Skill Vault

This repo contains source skill packs and an MCP server for AI-assisted work across domains.

When using this repo to bootstrap another project, prefer the MCP server:

```bash
node ./bin/agent-skills.js mcp
```

When working inside an installed project, read that project's `.agents/skills.lock.json` and installed `SKILL.md` files before changing code. If the lock requires AgentMemory, check the `agentmemory` MCP server first, search memory before planning, and save durable decisions when finishing meaningful work.
