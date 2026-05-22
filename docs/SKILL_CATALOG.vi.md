# Danh mục Skill của Agent Skill Vault

Agent Skill Vault hiện có **17 pack** và **111 skill**. File này là bản overview dễ đọc; từng file `SKILL.md` được link bên dưới vẫn là nguồn chính cho rule, checklist và trigger sử dụng.

## Cách Đọc Catalog

- **Pack**: nhóm domain như Flutter, Design, Research, MCP hoặc Security.
- **Bắt buộc**: được installer hoặc doctor áp dụng tự động theo flow tương ứng.
- **Optional**: được chọn theo loại project, ngữ cảnh task hoặc quyết định của agent.

## Skill Bắt Buộc

- [agentmemory-integration](../packs/agents/agentmemory-integration/SKILL.md) (Agents): Thiết lập và kiểm tra lớp bộ nhớ AgentMemory bắt buộc cho project đã cài skill.
- [using-agent-skills](../packs/core/using-agent-skills/SKILL.md) (Core): Định nghĩa startup flow cho repo đã cài agent skills.
- [flutter-clean-architecture](../packs/flutter/flutter-clean-architecture/SKILL.md) (Flutter): Áp đặt cấu trúc Clean Architecture theo feature-first cho Flutter app.
- [flutter-default-stack](../packs/flutter/flutter-default-stack/SKILL.md) (Flutter): Định nghĩa package và tooling mặc định cho Flutter project cá nhân có AI hỗ trợ.
- [flutter-dependency-injection](../packs/flutter/flutter-dependency-injection/SKILL.md) (Flutter): Chuẩn hóa đăng ký và truy cập dependency qua `get_it`.
- [flutter-dio-networking](../packs/flutter/flutter-dio-networking/SKILL.md) (Flutter): Chuẩn hóa giao tiếp API bằng Dio và repository boundary.
- [flutter-freezed-models](../packs/flutter/flutter-freezed-models/SKILL.md) (Flutter): Dùng Freezed và JSON serialization cho model và DTO ổn định.
- [flutter-state-management-selection](../packs/flutter/flutter-state-management-selection/SKILL.md) (Flutter): Chọn Provider, Riverpod, Bloc hoặc Cubit theo độ phức tạp project.
- [flutter-testing-checklist](../packs/flutter/flutter-testing-checklist/SKILL.md) (Flutter): Bắt buộc test đúng trọng tâm và kiểm tra cuối trước khi hoàn tất việc Flutter.

## Mục Lục

- [Agents](#agents) (11 skill)
- [AI](#ai) (8 skill)
- [Code](#code) (11 skill)
- [Core](#core) (4 skill)
- [Creative](#creative) (2 skill)
- [Data](#data) (1 skill)
- [Design](#design) (6 skill)
- [DevOps](#devops) (4 skill)
- [Flutter](#flutter) (7 skill)
- [Git](#git) (9 skill)
- [JavaScript](#javascript) (11 skill)
- [Kotlin](#kotlin) (5 skill)
- [MCP](#mcp) (5 skill)
- [ML](#ml) (1 skill)
- [Planning](#planning) (12 skill)
- [Research](#research) (9 skill)
- [Security](#security) (5 skill)

## Agents

Các workflow cho agent runtime, bộ nhớ, điều phối, chọn vai trò và kỷ luật hoàn tất task.

- **[agent-harness-setup](../packs/agents/agent-harness-setup/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Cấu hình Codex, Claude, Gemini, Antigravity hoặc agent host khác cho công việc trong project.
- **[agent-memory](../packs/agents/agent-memory/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Xác định kiến thức project nào nên lưu lại để dùng cho các phiên agent sau.
- **[agent-role-routing](../packs/agents/agent-role-routing/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chọn vai trò agent phù hợp cho kiến trúc, triển khai, test, review, design hoặc research.
- **[agentmemory-integration](../packs/agents/agentmemory-integration/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Thiết lập và kiểm tra lớp bộ nhớ AgentMemory bắt buộc cho project đã cài skill.
- **[context-engineering](../packs/agents/context-engineering/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị instruction, file, docs, memory và tool đúng lúc trước khi agent bắt đầu hoặc resume việc.
- **[handoff](../packs/agents/handoff/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tóm tắt trạng thái phiên làm việc để agent khác hoặc phiên sau tiếp tục an toàn.
- **[memory-hygiene](../packs/agents/memory-hygiene/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Dọn dẹp và nén bộ nhớ agent để thông tin vẫn hữu ích, ngắn gọn và an toàn.
- **[multi-agent-orchestration](../packs/agents/multi-agent-orchestration/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chia việc cho nhiều agent, subagent, vai trò hoặc tác vụ chạy song song.
- **[verification-before-completion](../packs/agents/verification-before-completion/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Bắt agent xác minh kết quả trước khi báo task đã hoàn tất.
- **[workspace-backup](../packs/agents/workspace-backup/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Ghi nhận hoặc bảo vệ trạng thái workspace trước migration, update hoặc thay đổi config rủi ro.

## AI

Các workflow tư duy cho reasoning, brainstorming, planning, research, writing và prompt.

- **[brainstorming](../packs/ai/brainstorming/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Biến ý tưởng thô thành hướng đi rõ ràng trước khi lập kế hoạch hoặc code.
- **[idea-refine](../packs/ai/idea-refine/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Biến concept thô thành các option rõ ràng, tradeoff và hướng khuyến nghị.
- **[planning](../packs/ai/planning/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuyển goal hoặc spec đã chốt thành các bước triển khai.
- **[prompt-engineering](../packs/ai/prompt-engineering/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế prompt, instruction cho agent, eval prompt và template task tái sử dụng.
- **[reasoning-before-action](../packs/ai/reasoning-before-action/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Làm rõ giả định, tradeoff và tiêu chí thành công trước khi làm việc có rủi ro.
- **[researching](../packs/ai/researching/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Trả lời câu hỏi cần nguồn ngoài, dữ liệu mới, citation hoặc kiểm tra mâu thuẫn.
- **[writing](../packs/ai/writing/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Viết docs, spec, README, proposal, report và giải thích cho người dùng.

## Code

Thực hành kỹ thuật chung cho architecture, debugging, testing, review và thay đổi có kiểm soát.

- **[clean-architecture](../packs/code/clean-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế hoặc review boundary, layer, dependency và cấu trúc module.
- **[api-and-interface-design](../packs/code/api-and-interface-design/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế API, module boundary, public contract, validation, error và compatibility.
- **[code-simplification](../packs/code/code-simplification/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Đơn giản hóa code đang chạy được mà vẫn giữ nguyên behavior và verification.
- **[code-review](../packs/code/code-review/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review code về correctness, regression, test, maintainability và security risk.
- **[solid-principles](../packs/code/solid-principles/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review thiết kế object/module bằng checklist SOLID thực dụng.
- **[improve-codebase-architecture](../packs/code/improve-codebase-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tìm cải thiện architecture từng bước cho codebase đang khó phát triển hoặc test.
- **[performance-optimization](../packs/code/performance-optimization/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tối ưu latency, throughput, memory, bundle size, rendering hoặc chi phí dựa trên đo đạc.
- **[surgical-changes](../packs/code/surgical-changes/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Giữ thay đổi thật gọn, tránh cleanup hoặc refactor ngoài phạm vi.
- **[systematic-debugging](../packs/code/systematic-debugging/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Reproduce, cô lập nguyên nhân, sửa và xác minh bug hoặc regression.
- **[test-driven-development](../packs/code/test-driven-development/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Dùng test để định nghĩa và xác minh behavior trong lúc triển khai.

- **[zoom-out](../packs/code/zoom-out/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Giải thích code cục bộ trong bối cảnh hệ thống trước khi debug, refactor hoặc thay đổi.

## Core

Các skill nền tảng giúp project đã cài skill dễ đọc và dễ vận hành cho agent.

- **[agent-role-workflows](../packs/core/agent-role-workflows/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Hướng dẫn workflow cho single-agent và multi-agent theo các vai trò kỹ thuật phổ biến.
- **[using-agent-skills](../packs/core/using-agent-skills/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Định nghĩa startup flow cho repo đã cài agent skills.
- **[writing-plans](../packs/core/writing-plans/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuyển ý tưởng hoặc task đã chốt thành implementation plan rõ ràng.
- **[writing-skills](../packs/core/writing-skills/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo mới hoặc chỉnh sửa skill vận hành cho agent.

## Creative

Workflow tạo bộ artifact như docs, diagram, plan và template theo cùng một hướng.

- **[artifact-builder](../packs/creative/artifact-builder/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo bộ artifact đồng bộ như docs, plan, diagram, config, checklist hoặc template.

- **[prototype](../packs/creative/prototype/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo artifact thử nghiệm nhỏ để làm rõ design, UX, logic, data flow hoặc feasibility.

## Data

Workflow khám phá dữ liệu và phân tích có thể tái hiện.

- **[data-analysis-duckdb](../packs/data/data-analysis-duckdb/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Phân tích dữ liệu local dạng bảng bằng workflow kiểu SQL và summary có thể tái hiện.

## Design

Design system, UI review, Figma, Stitch, diagramming và handoff sang implementation.

- **[design-md](../packs/design/design-md/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo hoặc duy trì `DESIGN.md` làm nguồn sự thật cho design.
- **[design-review](../packs/design/design-review/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review UI về chất lượng thị giác, hierarchy, accessibility, responsive và consistency.
- **[diagramming](../packs/design/diagramming/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo architecture diagram, flowchart, system map, sequence diagram hoặc giải thích trực quan.
- **[figma-to-implementation](../packs/design/figma-to-implementation/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Triển khai UI từ Figma, design spec, component hoặc token.
- **[stitch-design](../packs/design/stitch-design/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Hỗ trợ Google Stitch, cải thiện prompt design và workflow từ design sang implementation.
- **[ui-prompt-enhancement](../packs/design/ui-prompt-enhancement/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Biến yêu cầu UI mơ hồ thành prompt rõ cho Stitch, Figma hoặc agent triển khai.

## DevOps

Workflow cho container, deployment, gateway và runbook vận hành.

- **[api-gateway-integration](../packs/devops/api-gateway-integration/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tích hợp API ngoài qua gateway, proxy, managed API layer hoặc shared service.
- **[deprecation-and-migration](../packs/devops/deprecation-and-migration/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thay hệ thống cũ, xóa code, đổi contract, migrate user hoặc sunset feature có kiểm soát.
- **[deployment-runbook](../packs/devops/deployment-runbook/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị bước deploy, smoke test, rollback procedure và handoff production.
- **[docker-essentials](../packs/devops/docker-essentials/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tạo, review hoặc debug Dockerfile, compose, image, volume và network.

## Flutter

Quy ước Flutter bắt buộc và khuyến nghị cho app có AI hỗ trợ.

- **[flutter-clean-architecture](../packs/flutter/flutter-clean-architecture/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Áp đặt cấu trúc Clean Architecture theo feature-first cho Flutter app.
- **[flutter-default-stack](../packs/flutter/flutter-default-stack/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Định nghĩa package và tooling mặc định cho Flutter project cá nhân có AI hỗ trợ.
- **[flutter-dependency-injection](../packs/flutter/flutter-dependency-injection/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Chuẩn hóa đăng ký và truy cập dependency qua `get_it`.
- **[flutter-dio-networking](../packs/flutter/flutter-dio-networking/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Chuẩn hóa giao tiếp API bằng Dio và repository boundary.
- **[flutter-freezed-models](../packs/flutter/flutter-freezed-models/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Dùng Freezed và JSON serialization cho model và DTO ổn định.
- **[flutter-state-management-selection](../packs/flutter/flutter-state-management-selection/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Chọn Provider, Riverpod, Bloc hoặc Cubit theo độ phức tạp project.
- **[flutter-testing-checklist](../packs/flutter/flutter-testing-checklist/SKILL.md)**
  - Trạng thái: Bắt buộc
  - Dùng để làm gì: Bắt buộc test đúng trọng tâm và kiểm tra cuối trước khi hoàn tất việc Flutter.

## Git

Git flow, commit, pull request, CI/CD, release readiness và review rủi ro.

- **[ci-cd](../packs/git/ci-cd/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế hoặc review pipeline CI/CD, build check, test gate và deployment.
- **[commit-risk-analysis](../packs/git/commit-risk-analysis/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review commit, diff hoặc branch về risk behavior, breaking change và release impact.
- **[conventional-commits](../packs/git/conventional-commits/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Viết commit message, squash title, changelog input và release note.
- **[gitflow](../packs/git/gitflow/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Lập kế hoạch branch, commit, feature flow, hotfix và release branch.
- **[git-guardrails](../packs/git/git-guardrails/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thêm guardrail trước các lệnh git có thể ghi đè history, mất work hoặc publish thay đổi.
- **[shipping-and-launch](../packs/git/shipping-and-launch/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị launch với final checks, rollout notes, monitoring và rollback.
- **[pull-request-review](../packs/git/pull-request-review/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị, review hoặc phản hồi pull request.
- **[release-readiness](../packs/git/release-readiness/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị version bump, changelog, deployment và rollback note.

- **[setup-pre-commit](../packs/git/setup-pre-commit/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết lập pre-commit hook nhanh và phù hợp cho format, lint, typecheck, test hoặc safety check.

## JavaScript

Next.js, React, Node.js, TypeScript, API design, testing và performance.

- **[javascript-testing](../packs/javascript/javascript-testing/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Test behavior cho JavaScript, TypeScript, React, Next.js hoặc Node.js.
- **[browser-testing-with-devtools](../packs/javascript/browser-testing-with-devtools/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Xác minh UI browser bằng DevTools, automation, console log, network trace và runtime inspection.
- **[nextjs-frontend-architecture](../packs/javascript/nextjs-frontend-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Cấu trúc route, component, server/client boundary và data loading trong Next.js.
- **[nextjs-performance](../packs/javascript/nextjs-performance/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tối ưu rendering, bundle size, data loading và caching cho Next.js.
- **[nodejs-api-design](../packs/javascript/nodejs-api-design/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế HTTP API, validation, error, pagination, authentication và contract trong Node.js.
- **[nodejs-backend-architecture](../packs/javascript/nodejs-backend-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế service Node.js, module backend, dependency và server-side structure.
- **[react-component-design](../packs/javascript/react-component-design/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế React component, props, composition pattern và reusable UI module.
- **[typescript-strictness](../packs/javascript/typescript-strictness/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Cải thiện TypeScript strictness, public type và cách dùng `any` hoặc `unknown`.

## Kotlin

Kotlin và Android architecture, Compose, Flow/coroutines, SOLID review và testing.

- **[android-compose-architecture](../packs/kotlin/android-compose-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Xây dựng Jetpack Compose screen, state holder, navigation và UI architecture.
- **[kotlin-clean-architecture](../packs/kotlin/kotlin-clean-architecture/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Cấu trúc feature Kotlin hoặc Android với boundary domain, data và presentation.
- **[kotlin-coroutines-flow](../packs/kotlin/kotlin-coroutines-flow/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Triển khai async Kotlin bằng coroutine, Flow, cancellation và state stream.
- **[kotlin-solid-review](../packs/kotlin/kotlin-solid-review/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review class, interface, module và API Kotlin theo rủi ro SOLID thực tế.
- **[kotlin-testing](../packs/kotlin/kotlin-testing/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Test domain logic Kotlin, coroutine behavior, Android view model và Compose UI.

## MCP

Bootstrap MCP, thiết kế tool, tìm registry và review security.

- **[mcp-registry-discovery](../packs/mcp/mcp-registry-discovery/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tìm MCP server, agent skill và hệ sinh thái tool có sẵn trước khi tự build.
- **[mcp-security-review](../packs/mcp/mcp-security-review/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review MCP server, local command, permission, secret và rủi ro tool phá hủy dữ liệu.
- **[mcp-server-bootstrap](../packs/mcp/mcp-server-bootstrap/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Bootstrap MCP server qua GitHub MCP, install instruction, host config hoặc manual fallback.
- **[mcp-tool-design](../packs/mcp/mcp-tool-design/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế tên tool MCP, schema, idempotency, error và permission boundary.

## ML

Theo dõi experiment, evaluation và benchmark cho machine learning.

- **[ml-experiment-monitoring](../packs/ml/ml-experiment-monitoring/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Lập kế hoạch, so sánh và báo cáo ML experiment, evaluation và benchmark.

## Planning

Lưu vết kế hoạch project, chia task, spec, ADR và thực thi plan từng bước.

- **[context-and-source-planning](../packs/planning/context-and-source-planning/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị context project, source docs, ví dụ và constraint trước khi plan hoặc execute.
- **[grill-with-docs](../packs/planning/grill-with-docs/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Làm rõ requirement bằng cách đối chiếu request với docs, code, plan, ADR và domain language.
- **[interview-me](../packs/planning/interview-me/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Hỏi từng câu trọng tâm trước khi lập plan khi requirement còn mơ hồ.
- **[issue-triage](../packs/planning/issue-triage/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Phân loại issue, task, bug report và feature request trước khi planning hoặc implementation.
- **[decision-log-and-adrs](../packs/planning/decision-log-and-adrs/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Ghi lại architectural decision, plan pivot, tradeoff và lựa chọn cần nhớ lâu dài.
- **[incremental-plan-execution](../packs/planning/incremental-plan-execution/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thực thi plan đã lưu theo từng task và cập nhật trạng thái plan liên tục.
- **[planning-and-task-breakdown](../packs/planning/planning-and-task-breakdown/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chia spec hoặc goal rõ ràng thành các task có thứ tự và có thể verify.
- **[project-plan-ledger](../packs/planning/project-plan-ledger/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Duy trì lịch sử plan cho project, feature, migration hoặc công việc kéo dài nhiều phiên.
- **[spec-driven-planning](../packs/planning/spec-driven-planning/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Viết spec trước khi chia task hoặc bắt đầu implementation.

- **[to-issues](../packs/planning/to-issues/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuyển PRD, spec hoặc plan thành issue nhỏ có acceptance criteria và verification.
- **[to-prd](../packs/planning/to-prd/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuyển conversation, idea hoặc requirement đã làm rõ thành product requirements document.
- **[ubiquitous-language](../packs/planning/ubiquitous-language/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Giữ thuật ngữ domain nhất quán giữa docs, code, issue, plan và agent memory.

## Research

Research có nguồn, phân tích repo, context packing, synthesis và monitoring.

- **[context-packing](../packs/research/context-packing/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Chuẩn bị context repo hoặc project cho AI analysis, handoff, review hoặc long-context prompt.
- **[news-and-trend-monitoring](../packs/research/news-and-trend-monitoring/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Theo dõi news, release, advisory, thay đổi ecosystem và trend theo thời gian.
- **[repo-intelligence](../packs/research/repo-intelligence/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Hiểu nhanh repo, library, framework hoặc tool chưa quen.
- **[repo-research](../packs/research/repo-research/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Phân tích GitHub repo, docs, example, issue và source structure.
- **[research-synthesis](../packs/research/research-synthesis/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Biến nhiều nguồn hoặc finding thành matrix, recommendation hoặc action plan.
- **[source-grounded-research](../packs/research/source-grounded-research/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Nghiên cứu có citation, kiểm tra độ mới và so sánh bằng chứng.
- **[source-driven-development](../packs/research/source-driven-development/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Ground quyết định framework, API, package và platform vào official hoặc primary source.
- **[summarization](../packs/research/summarization/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Tóm tắt nội dung dài thành summary, decision và next step có thể hành động.
- **[web-search-strategy](../packs/research/web-search-strategy/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thiết kế query và so sánh nguồn web để lấy bằng chứng mới, đúng trọng tâm.

## Security

Review security cho cloud, secrets, prompt injection và third-party skills.

## Recent Additions

- **[conversation-state-capture](../packs/agents/conversation-state-capture/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Luu cac quyet dinh hoi thoai ben vung vao memory, plan, ADR, issue tracker hoac handoff ma khong luu ca lich su chat on ao.
- **[token-efficient-prompting](../packs/ai/token-efficient-prompting/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Giam chi phi prompt va quota bang cach nen context nhung van giu yeu cau quan trong cho quyet dinh.
- **[frontend-ui-engineering](../packs/javascript/frontend-ui-engineering/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Xay dung va review UI JavaScript ve layout, interaction, accessibility, responsive behavior va visual polish.
- **[nodejs-production-backend](../packs/javascript/nodejs-production-backend/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Trien khai va review backend Node.js production ve validation, service boundary, error, observability va deploy-safe change.
- **[nextjs-fullstack-architecture](../packs/javascript/nextjs-fullstack-architecture/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Dat React UI, Server Components, Server Actions, Route Handlers, middleware, cache, auth, database access va backend logic dung boundary trong Next.js.
- **[mcp-context-routing](../packs/mcp/mcp-context-routing/SKILL.md)**
  - Trang thai: Optional
  - Dung de lam gi: Chon giua MCP tool, local file, memory, connector, web search va direct prompt de lay context hieu qua.

- **[cloud-security-baseline](../packs/security/cloud-security-baseline/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Review cloud config, IAM, storage, networking và public exposure.
- **[doubt-driven-development](../packs/security/doubt-driven-development/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Thử thách các giả định tự tin trước khi làm việc high-stakes hoặc security-sensitive.
- **[prompt-injection-defense](../packs/security/prompt-injection-defense/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Bảo vệ agent khi đọc web page, repo, issue, document, log hoặc email không đáng tin.
- **[secrets-and-env-safety](../packs/security/secrets-and-env-safety/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Xử lý secret, token, API key, certificate và environment variable an toàn.
- **[skill-security-audit](../packs/security/skill-security-audit/SKILL.md)**
  - Trạng thái: Optional
  - Dùng để làm gì: Audit third-party agent skill, MCP plugin, script và marketplace package trước khi tin dùng.
