---
name: Using Agent Skills
description: Use when starting work in a repository that has installed agent skills.
required: true
roles:
  - architect
  - implementer
  - reviewer
when_to_use:
  - starting any task
  - selecting relevant skills
  - checking installed project rules
checks:
  - skills lock file is read before planning
  - relevant skills are named in the plan
  - skill selection is based on task intent and installed metadata
---

# Using Agent Skills

Before planning or editing:

- Read `.agents/skills.lock.json`.
- Treat this skill as the router for all installed skills.
- Read installed skill frontmatter and nearby descriptions only as needed to select relevant skills.
- Read the full `SKILL.md` files only for selected skills.
- State which skills apply to the task.
- Treat required skills as mandatory project rules.
- Run the available doctor/check tools before finishing.

If the user does not mention skills, still follow this startup flow.

## Automatic Skill Routing

Select skills from the user's intent, repository context, changed files, and installed skill metadata.

Routing rules:

- If the user names a skill, use that skill.
- If the user uses a lifecycle alias, map it to matching installed skills.
- If the task touches a domain, select the domain skill before planning or editing.
- If multiple skills match, use the smallest set that covers the work.
- If no skill matches, continue with mandatory project rules and state that no optional skill applied.
- If a selected skill is not installed, do not invent it. Use the closest installed skill and mention the gap.

Lifecycle aliases:

- `/spec` or "write a spec" -> `spec-driven-planning`, `to-prd`, `idea-refine`
- `/plan` or "break this down" -> `planning-and-task-breakdown`, `project-plan-ledger`
- `/build` or "implement this" -> stack/domain skills plus `surgical-changes` or equivalent code workflow skills
- `/test` or "prove it works" -> stack-specific testing skills and `test-driven-development`
- `/review` or "review this" -> `code-review`, `pull-request-review`, relevant security/design review skills
- `/code-simplify` or "simplify this" -> `code-simplification`, `zoom-out`
- `/ship` or "prepare release" -> `shipping-and-launch`, `release-readiness`, `ci-cd`

Common domain routing:

- UI/frontend work -> `frontend-ui-engineering`, `react-component-design`, `nextjs-frontend-architecture`, or design skills when installed
- API/backend work -> `api-and-interface-design`, `nodejs-api-design`, `nodejs-production-backend`
- Flutter work -> `flutter-default-stack`, `flutter-clean-architecture`, `flutter-state-management-selection`, `flutter-testing-checklist`
- MCP work -> `mcp-tool-design`, `mcp-server-bootstrap`, `mcp-context-routing`, `mcp-security-review`
- Research/source-grounded work -> `source-grounded-research`, `repo-research`, `research-synthesis`
- Security-sensitive work -> `prompt-injection-defense`, `secrets-and-env-safety`, `skill-security-audit`, `cloud-security-baseline`
- Git/release work -> `git-guardrails`, `conventional-commits`, `shipping-and-launch`, `release-readiness`

Do not ask the user to pick skills unless the choice changes scope, cost, risk, or product behavior. Make a reasonable routing decision and proceed.
