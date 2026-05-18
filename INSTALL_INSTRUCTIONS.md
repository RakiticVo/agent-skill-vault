# Agent Skill Vault MCP Bootstrap Instructions

Use this file when an agent only has access to this repository through GitHub MCP and needs to bootstrap the `agent-skill-vault` MCP server for a project.

Canonical bootstrap flow:

```text
Antigravity has GitHub MCP
-> Agent uses GitHub MCP to open the agent-skill-vault repository
-> Agent reads INSTALL_INSTRUCTIONS.md
-> Agent registers the agent-skill-vault MCP server from this file
-> Antigravity reloads/starts that MCP server
-> Agent sees install_skills/recommend_flutter_stack/doctor
-> Agent calls install_skills in the current project
```

## What GitHub MCP Can and Cannot Do

GitHub MCP can read this repository and these instructions. It does not automatically turn this repository into a running MCP server.

The `agent-skill-vault` MCP server is started by the agent host through an MCP configuration entry. The recommended no-clone command uses `npm exec` with this GitHub repository as the package source.

There are only two supported setup paths:

1. If Antigravity allows the agent to edit MCP config and reload/start MCP servers, the agent may register the config below directly.
2. If Antigravity does not allow that, the agent must show the config below to the user and ask the user to paste it into Antigravity's MCP settings.

## Required MCP Server Config

Replace `https://github.com/RakiticVo/agent-skill-vault` with the actual repository URL and keep the version pinned.

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

This does not require manually cloning the repository. The agent host will run the package through npm when the MCP server starts.

## Agent Bootstrap Flow

When working in a new project:

1. Check whether `.agents/skills.lock.json` exists.
2. If it does not exist, ensure the `agent-skill-vault` MCP server above is registered.
3. If Antigravity allows editing MCP config, add the config and reload/start MCP servers.
4. If Antigravity does not allow editing MCP config, show the config to the user and ask them to paste it.
5. After the MCP server is available, call `install_skills`.

For a Flutter project:

```json
{
  "projectDir": ".",
  "sourceRepo": "https://github.com/RakiticVo/agent-skill-vault",
  "version": "v0.1.0",
  "packs": ["core", "flutter"],
  "targets": ["codex", "claude", "gemini"],
  "requestedSkills": ["all"]
}
```

6. Call `doctor` for the current project.
7. For future tasks, read `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and the installed skill files before planning or editing.

For broader projects, add packs such as `planning`, `ai`, `code`, `design`, `git`, `agents`, `mcp`, `research`, `security`, `devops`, `data`, `ml`, `creative`, `kotlin`, or `javascript`.

## Remote Alternative

This flow intentionally uses GitHub MCP only as the entrypoint and `agent-skill-vault` MCP as the project automation tool.

If the user requires no local process execution at all, a stdio MCP server is not enough. That is a different architecture and requires hosting this server as a remote MCP service.
