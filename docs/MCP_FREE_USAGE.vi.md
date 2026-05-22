# Sử dụng sau khi tắt MCP

`agent-skill-vault` MCP là lớp dùng để cài đặt và bảo trì skill. Nó hữu ích khi cần liệt kê skill, cài pack, gợi ý Flutter stack, update version đã pin, hoặc chạy doctor.

Sau khi skill đã được cài vào project, project vẫn dùng được các skill đó dù bạn tắt `agent-skill-vault` MCP server.

## Những gì vẫn hoạt động

Các skill đã được copy vào project. Chúng không biến mất khi MCP server bị tắt.

Agent vẫn có thể tiếp tục làm việc từ các file local này:

- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.agents/skills.lock.json`
- `.agents/skills/<skill-id>/SKILL.md`
- `.claude/skills/<skill-id>/SKILL.md` nếu đã cài target Claude
- `.agents/integrations/agentmemory.md`
- `.agents/integrations/agentmemory.mcp.example.json`

Lock file là nguồn sự thật chính để biết project đã cài pack nào, skill nào, target agent nào, source repo nào, version nào, và integration bắt buộc nào.

## Flow cho agent khi không có MCP

Khi không thấy tool của `agent-skill-vault` MCP, agent phải dùng các file local đã cài:

1. Đọc bootstrap file theo host: `AGENTS.md`, `CLAUDE.md`, hoặc `GEMINI.md`.
2. Đọc `.agents/skills.lock.json`.
3. Chọn skill liên quan trong `.agents/skills`.
4. Đọc các file `SKILL.md` đã chọn trước khi plan hoặc sửa code.
5. Nêu rõ skill đã chọn trong plan.
6. Chạy checklist của các skill đã chọn trước khi báo hoàn thành.
7. Nếu cần install, update, doctor, hoặc recommend stack thì yêu cầu bật lại `agent-skill-vault` MCP hoặc chạy CLI.

## Khi nào nên bật lại MCP

Bật lại `agent-skill-vault` MCP khi project cần:

- Cài thêm pack hoặc skill.
- Update skill đã cài lên tag mới.
- Chạy `doctor` thông qua agent host.
- Dùng `recommend_flutter_stack`.
- Sinh lại bootstrap files từ version mới của vault.

Nếu MCP đang tắt nhưng CLI dùng được, có thể chạy maintenance bằng terminal:

```bash
npx github:RakiticVo/agent-skill-vault#v0.3.0 agent-skills doctor --project .
```

## AgentMemory là phần riêng

Tắt `agent-skill-vault` MCP không có nghĩa là tắt luôn `agentmemory` MCP.

`agent-skill-vault` MCP quản lý skill. `agentmemory` MCP cung cấp bộ nhớ dùng chung cho các phiên agent.

Nếu `.agents/skills.lock.json` có `requiredIntegrations: ["agentmemory"]`, agent vẫn nên:

- Kiểm tra MCP server `agentmemory` có sẵn không.
- Search memory trước khi plan nếu memory khả dụng.
- Lưu các quyết định bền vững sau task quan trọng.
- Báo rõ khi AgentMemory là bắt buộc nhưng chưa khả dụng.

Dùng config mẫu trong project:

```text
.agents/integrations/agentmemory.mcp.example.json
```

## Không xóa file skill đã cài

Tắt MCP là an toàn. Xóa file skill đã cài là chuyện khác.

Không xóa các file/thư mục này trừ khi bạn thật sự muốn gỡ hệ skill khỏi project:

- `.agents/skills`
- `.claude/skills`
- `.agents/skills.lock.json`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.agents/integrations`
