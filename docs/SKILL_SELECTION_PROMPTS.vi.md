# Prompt chọn skill sau khi có đặc tả project

File này dùng khi project đã có mô tả ban đầu, PRD, spec, issue lớn, hoặc tài liệu kiến trúc sơ bộ. Mục tiêu là cài đúng skill cần thiết, tránh kéo toàn bộ pack quá sớm và tiết kiệm quota/context.

## Giai đoạn 1: bootstrap ngữ cảnh tối thiểu

Dùng prompt này khi project mới chưa có `.agents/skills.lock.json` hoặc chưa có bộ skill nền:

```text
Use agent-skill-vault MCP to bootstrap this project for context-building only.

Do not install full domain packs yet. Install only the skills needed for project context, planning, research, MCP routing, prompt quota saving, and conversation state.

Call install_skills with:
- projectDir: "."
- sourceRepo: "https://github.com/RakiticVo/agent-skill-vault"
- version: "v0.5.0"
- targets: ["codex", "claude", "gemini"]
- packs: ["planning", "ai", "agents", "mcp", "research"]
- requestedSkills:
  - using-agent-skills
  - context-engineering
  - conversation-state-capture
  - handoff
  - memory-hygiene
  - mcp-context-routing
  - mcp-registry-discovery
  - token-efficient-prompting
  - prompt-engineering
  - source-grounded-research
  - repo-research
  - context-packing
  - spec-driven-planning
  - planning-and-task-breakdown
  - project-plan-ledger
  - decision-log-and-adrs
  - agentmemory-integration

Then run doctor and report the installed skills.
```

## Giai đoạn 2: đọc spec rồi đề xuất skill

Dùng prompt này sau khi đã có `SPEC.md`, PRD, issue tổng, hoặc mô tả project đủ rõ:

```text
Read the project spec and current .agents/skills.lock.json.

Before installing anything, propose a minimal skill set for the next implementation phase.
Group the proposal by purpose:
- product/context
- frontend
- backend
- testing
- security
- git/release

For each proposed skill, explain in one short sentence why it is needed for this spec.
Do not recommend full packs unless every skill in that pack is clearly needed.
Prefer explicit requestedSkills over requestedSkills: ["all"].
After I approve, call agent-skill-vault install_skills with only the approved skill IDs.
```

## Gợi ý cho React + Next.js

Nếu spec xác nhận FE là React và BE là Next.js, thường bắt đầu với bộ này:

```text
Use agent-skill-vault MCP to install the approved React + Next.js implementation skills only.

Call install_skills with:
- projectDir: "."
- sourceRepo: "https://github.com/RakiticVo/agent-skill-vault"
- version: "v0.5.0"
- targets: ["codex", "claude", "gemini"]
- packs: ["javascript", "code", "design", "security", "git"]
- requestedSkills:
  - frontend-ui-engineering
  - react-component-design
  - nextjs-frontend-architecture
  - nextjs-fullstack-architecture
  - nextjs-performance
  - typescript-strictness
  - javascript-testing
  - browser-testing-with-devtools
  - nodejs-api-design
  - nodejs-production-backend
  - api-and-interface-design
  - systematic-debugging
  - code-review
  - surgical-changes
  - design-review
  - secrets-and-env-safety
  - prompt-injection-defense
  - conventional-commits
  - pull-request-review

Do not install Flutter skills for this project unless the spec later adds a Flutter app.
```

## Gợi ý cho Flutter sau khi spec đã xác nhận

Nếu spec xác nhận cần Flutter, không cài toàn bộ Flutter pack theo phản xạ. Bắt đầu bằng những skill liên quan đến kiến trúc và stack chính:

```text
Use agent-skill-vault MCP to install only the Flutter skills needed by the approved spec.

Start with:
- flutter-clean-architecture
- flutter-default-stack
- flutter-state-management-selection
- flutter-dio-networking
- flutter-dependency-injection
- flutter-freezed-models
- flutter-testing-checklist

If the spec is still uncertain, first run recommend_flutter_stack and explain the tradeoff before installing.
```

## Quy tắc tiết kiệm quota

- Cài skill theo giai đoạn: context trước, domain sau, review/release khi gần cần.
- Tránh `packs: ["flutter"]` hoặc `packs: ["javascript"]` với `requestedSkills: ["all"]` ở giai đoạn đầu.
- Khi đã có skill local, yêu cầu agent đọc `.agents/skills.lock.json` và chỉ mở các `SKILL.md` liên quan.
- Tóm tắt spec thành quyết định bền vững trong `.agent-plans/` hoặc AgentMemory thay vì dán lại toàn bộ cuộc trò chuyện.
- Khi cần thêm skill, yêu cầu agent đề xuất danh sách trước rồi mới cài.
