# Flutter + Antigravity Agent Workflow

File này hướng dẫn cách để **Antigravity agents làm việc với `agent-skill-vault` qua MCP** khi bắt đầu một Flutter project mới. Mục tiêu là để agent tự dùng MCP tools nhiều nhất có thể, thay vì bạn phải copy skill thủ công.

Version khuyến nghị hiện tại: `v0.4.0`.

## Nguyên Tắc Chính

- GitHub MCP chỉ là entrypoint để agent đọc repo và hướng dẫn.
- `agent-skill-vault` MCP mới là tool cài skill, recommend stack, và chạy doctor.
- AgentMemory MCP là memory layer bắt buộc cho project đã cài skill.
- Không copy skill thủ công vào project. Agent phải gọi `install_skills`.
- Nếu Antigravity không cho agent sửa MCP config, bạn chỉ paste config và reload MCP servers; các bước còn lại để agent làm.

## Phase 0: Đăng Ký MCP Servers

Trước khi agent có thể gọi tools, Antigravity cần MCP config cho `agent-skill-vault`.

```json
{
  "mcpServers": {
    "agent-skill-vault": {
      "command": "npm",
      "args": [
        "exec",
        "--yes",
        "--package",
        "github:RakiticVo/agent-skill-vault#v0.4.0",
        "--",
        "agent-skills",
        "mcp",
        "--source",
        "https://github.com/RakiticVo/agent-skill-vault",
        "--version",
        "v0.4.0"
      ]
    }
  }
}
```

AgentMemory MCP:

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

Chạy AgentMemory server:

```bash
npx @agentmemory/agentmemory
```

Sau khi thêm config, reload hoặc restart MCP servers trong Antigravity.

## Phase 1: Discovery Khi Chưa Có Requirement

Nếu mới tạo Flutter project và chưa có requirement/use case rõ ràng, **chưa nên install full Flutter/domain pack ngay**. Hãy để agent cài minimum planning skills trước.

Prompt cho Antigravity agent:

```text
Use agent-skill-vault MCP tools only.

This is a new Flutter project, but requirements and use cases are not defined yet.

1. Call list_skills with:
   - sourceRepo: https://github.com/RakiticVo/agent-skill-vault
   - version: v0.4.0
   - packs: all

2. Call install_skills for the current project directory with:
   - sourceRepo: https://github.com/RakiticVo/agent-skill-vault
   - version: v0.4.0
   - packs: core,planning,ai,agents,research,git,mcp
   - targets: codex,claude,gemini

3. Read:
   - AGENTS.md
   - .agents/skills.lock.json
   - relevant installed SKILL.md files

4. Use planning/interview-me, planning/grill-with-docs, planning/to-prd, planning/ubiquitous-language, and planning/project-plan-ledger.

5. Ask me focused questions to define:
   - target users
   - core use cases
   - non-goals
   - data/domain language
   - UX expectations
   - external APIs or integrations
   - success criteria

6. Create or update .agent-plans with:
   - PRD.md
   - use case list
   - domain language
   - open questions
   - initial implementation issues if useful

7. Do not implement app features yet.
8. Run doctor and report only setup/planning issues.
```

Expected output:

```text
.agent-plans/
  INDEX.md
  active/
    <plan-id>/
      PRD.md
      HANDOFF.md
      issues/
  decisions/
```

## Phase 2: Flutter Setup Sau Khi Requirement Rõ

Khi PRD/use cases đã rõ, lúc này mới cài Flutter/domain pack và chọn stack.

Prompt cho Antigravity agent:

```text
Use agent-skill-vault MCP tools only.

We now have project requirements and use cases defined in .agent-plans.

Do the Flutter setup phase for the current project.

1. Read:
   - AGENTS.md
   - .agents/skills.lock.json
   - .agent-plans/INDEX.md
   - active PRD/use case files under .agent-plans/active

2. Call install_skills with:
   - projectDir: current project directory
   - sourceRepo: https://github.com/RakiticVo/agent-skill-vault
   - version: v0.4.0
   - packs: core,planning,ai,code,flutter,design,git,agents,mcp,research,security
   - targets: codex,claude,gemini

3. Call recommend_flutter_stack using the PRD and use cases.
   - If simple/local-state heavy, consider Provider.
   - If medium/large or unclear, choose Cubit.
   - If event-heavy workflows dominate, choose Bloc.
   - If async provider graph/composable async state is important, consider Riverpod.

4. Update the active project plan with:
   - chosen state management
   - package stack
   - architecture notes
   - feature/module breakdown
   - testing strategy

5. Call doctor for the current project directory.

6. Report:
   - installed packs
   - selected Flutter stack
   - selected state management
   - missing folders/packages/tests from doctor
   - next implementation tasks

Do not implement app features yet unless I explicitly ask.
```

## Phase 2B: Flutter Setup Và Fix Setup Issues

Dùng prompt này nếu bạn muốn agent tạo folder/package setup cơ bản sau khi doctor báo thiếu.

```text
Use agent-skill-vault MCP tools and installed skills.

We now have clear requirements in .agent-plans.

Run the Flutter setup phase and fix setup issues only.

1. Install or update skills with packs:
core,planning,ai,code,flutter,design,git,agents,mcp,research,security

2. Recommend Flutter stack from the PRD/use cases.
If uncertain, choose Cubit.

3. Run doctor.

4. If doctor reports missing Clean Architecture folders, create them.

5. If doctor reports missing required Flutter packages, add them using flutter pub add/dev commands.

Required default stack:
- get_it
- dio
- freezed_annotation
- json_annotation
- go_router
- one state management package selected from Provider/Riverpod/Bloc/Cubit
- dev dependencies needed for freezed/json generation/tests

6. Run flutter pub get.
7. Run doctor again.
8. Update .agent-plans with the selected architecture and stack.

Do not implement business features yet.
```

## Phase 3: Làm Feature Đầu Tiên

Khi project đã setup xong, dùng prompt feature như sau:

```text
Use installed skills and MCP tools.

Before implementation:
1. Search AgentMemory for project conventions and decisions.
2. Read AGENTS.md, .agents/skills.lock.json, and relevant SKILL.md files.
3. Read the active PRD/use cases under .agent-plans.
4. State which skills you will use.
5. If the task is large, update .agent-plans and break it into issues first.

Implement the requested feature using:
- Flutter Clean Architecture
- selected state management from the active plan
- get_it for dependency injection
- dio for networking when needed
- freezed/json_serializable for models
- tests/checklist from installed skills

After implementation:
1. Run relevant tests.
2. Call agent-skill-vault doctor.
3. Update .agent-plans with progress and verification evidence.
4. Save durable decisions to AgentMemory.
5. Report what changed, what was verified, and remaining risks.
```

## Daily Agent Startup Prompt

Dùng prompt này mỗi khi mở lại project:

```text
Before working:
1. Search AgentMemory for project conventions, decisions, and known issues.
2. Read AGENTS.md.
3. Read .agents/skills.lock.json.
4. Read relevant installed SKILL.md files.
5. Read .agent-plans/INDEX.md and the active plan.
6. State which skills apply to the task.
7. Do not skip doctor before final response if project files changed.
```

## Sau Khi Install: Có Thể Tắt MCP Không?

Có. Sau khi `agent-skill-vault` đã install skill vào project, bạn có thể tắt riêng `agent-skill-vault` MCP server mà không làm mất skill đã cài.

Các file local vẫn là nguồn làm việc chính:

- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.agents/skills.lock.json`
- `.agents/skills/<skill-id>/SKILL.md`
- `.claude/skills/<skill-id>/SKILL.md`

Khi MCP bị tắt, agent phải đọc lock file, chọn skill local phù hợp, nêu skill đã dùng trong plan, và tự chạy checklist của skill trước khi báo hoàn thành. Chỉ cần bật lại `agent-skill-vault` MCP khi muốn install thêm pack, update skill, chạy doctor qua MCP, hoặc dùng `recommend_flutter_stack`.

Lưu ý: `agentmemory` MCP là phần riêng. Nếu lock file yêu cầu AgentMemory thì vẫn nên giữ `agentmemory` MCP hoạt động để agent có bộ nhớ project.

Xem thêm:

- [English MCP-free usage guide](./MCP_FREE_USAGE.en.md)
- [Vietnamese MCP-free usage guide](./MCP_FREE_USAGE.vi.md)

## Khi Nào Cài Full Flutter Pack?

Nên cài full Flutter/domain pack sau khi đã có:

- target users
- core use cases
- app scope/non-goals
- domain language
- initial PRD
- rough feature/module list

Nếu cài Flutter pack quá sớm, agent có thể chọn state management, package, hoặc architecture chi tiết trước khi hiểu app cần gì.

## Troubleshooting

### MCP initialize báo `invalid character 'C' looking for beginning of value`

Nguyên nhân thường là dùng tag cũ `v0.2.0`. Hãy dùng `v0.4.0`:

```json
"--package",
"github:RakiticVo/agent-skill-vault#v0.4.0"
```

Và:

```json
"--version",
"v0.4.0"
```

### Agent không thấy tool `install_skills`

- Reload MCP servers.
- Kiểm tra config `agent-skill-vault`.
- Đảm bảo `npm` chạy được trong môi trường Antigravity.
- Đảm bảo config dùng `github:RakiticVo/agent-skill-vault#v0.4.0`.

### Doctor báo AgentMemory chưa chạy

Chạy:

```bash
npx @agentmemory/agentmemory
```

Sau đó reload MCP servers nếu cần.
