# Agent Skill Vault Skill Catalog

Agent Skill Vault currently contains **17 packs** and **110 skills**. This catalog is the readable overview; each linked `SKILL.md` remains the source of truth for operating rules, checks, and usage triggers.

## How To Read This Catalog

- **Pack**: a domain area such as Flutter, Design, Research, MCP, or Security.
- **Required**: installed or enforced automatically by the relevant flow.
- **Optional**: selected by project type, task context, or agent judgment.

## Required Skills

- [using-agent-skills](../packs/core/using-agent-skills/SKILL.md) (Core): Defines the startup flow for repositories with installed skills.
- [flutter-clean-architecture](../packs/flutter/flutter-clean-architecture/SKILL.md) (Flutter): Enforces feature-first Clean Architecture structure for Flutter apps.
- [flutter-default-stack](../packs/flutter/flutter-default-stack/SKILL.md) (Flutter): Defines default package and tooling choices for personal Flutter AI-assisted projects.
- [flutter-dependency-injection](../packs/flutter/flutter-dependency-injection/SKILL.md) (Flutter): Standardizes dependency registration and access through `get_it`.
- [flutter-dio-networking](../packs/flutter/flutter-dio-networking/SKILL.md) (Flutter): Standardizes API communication through Dio and repository boundaries.
- [flutter-freezed-models](../packs/flutter/flutter-freezed-models/SKILL.md) (Flutter): Uses Freezed and JSON serialization for stable models and DTOs.
- [flutter-state-management-selection](../packs/flutter/flutter-state-management-selection/SKILL.md) (Flutter): Chooses Provider, Riverpod, Bloc, or Cubit using project complexity rules.
- [flutter-testing-checklist](../packs/flutter/flutter-testing-checklist/SKILL.md) (Flutter): Requires targeted tests and final checks before completing Flutter work.

## Table Of Contents

- [Agents](#agents) (10 skills)
- [AI](#ai) (8 skills)
- [Code](#code) (10 skills)
- [Core](#core) (4 skills)
- [Creative](#creative) (2 skills)
- [Data](#data) (1 skill)
- [Design](#design) (6 skills)
- [DevOps](#devops) (4 skills)
- [Flutter](#flutter) (7 skills)
- [Git](#git) (9 skills)
- [JavaScript](#javascript) (10 skills)
- [Kotlin](#kotlin) (5 skills)
- [MCP](#mcp) (5 skills)
- [ML](#ml) (1 skill)
- [Planning](#planning) (12 skills)
- [Research](#research) (9 skills)
- [Security](#security) (5 skills)

## Agents

Agent runtime, memory, orchestration, role routing, and completion discipline.

- **[agent-harness-setup](../packs/agents/agent-harness-setup/SKILL.md)**
  - Status: Optional
  - Helps with: Configures Codex, Claude, Gemini, Antigravity, or other agent hosts for project work.
- **[agent-memory](../packs/agents/agent-memory/SKILL.md)**
  - Status: Optional
  - Helps with: Defines what durable project knowledge should be stored for future agent sessions.
- **[agent-role-routing](../packs/agents/agent-role-routing/SKILL.md)**
  - Status: Optional
  - Helps with: Selects the right agent role for architecture, implementation, testing, review, design, or research.
- **[context-engineering](../packs/agents/context-engineering/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares the right instructions, files, docs, memory, and tools before agent work starts or resumes.
- **[conversation-state-capture](../packs/agents/conversation-state-capture/SKILL.md)**
  - Status: Optional
  - Helps with: Preserves durable conversation decisions in memory, plans, ADRs, issue trackers, or handoff notes without storing noisy chat history.
- **[handoff](../packs/agents/handoff/SKILL.md)**
  - Status: Optional
  - Helps with: Summarizes session state so another agent or future session can continue safely.
- **[memory-hygiene](../packs/agents/memory-hygiene/SKILL.md)**
  - Status: Optional
  - Helps with: Cleans and compresses durable agent memory so it stays useful and safe.
- **[multi-agent-orchestration](../packs/agents/multi-agent-orchestration/SKILL.md)**
  - Status: Optional
  - Helps with: Splits work across multiple agents, subagents, roles, or parallel tasks.
- **[verification-before-completion](../packs/agents/verification-before-completion/SKILL.md)**
  - Status: Optional
  - Helps with: Requires verification before an agent claims a task is complete.
- **[workspace-backup](../packs/agents/workspace-backup/SKILL.md)**
  - Status: Optional
  - Helps with: Records or protects workspace state before risky migrations, updates, or broad config changes.

## AI

Thinking workflows for reasoning, brainstorming, planning, research, writing, and prompts.

- **[brainstorming](../packs/ai/brainstorming/SKILL.md)**
  - Status: Optional
  - Helps with: Turns rough ideas into concrete directions before planning or implementation.
- **[idea-refine](../packs/ai/idea-refine/SKILL.md)**
  - Status: Optional
  - Helps with: Turns rough concepts into concrete options, tradeoffs, and a recommended direction.
- **[planning](../packs/ai/planning/SKILL.md)**
  - Status: Optional
  - Helps with: Converts an approved goal or spec into implementation steps.
- **[prompt-engineering](../packs/ai/prompt-engineering/SKILL.md)**
  - Status: Optional
  - Helps with: Designs prompts, agent instructions, eval prompts, and reusable task templates.
- **[token-efficient-prompting](../packs/ai/token-efficient-prompting/SKILL.md)**
  - Status: Optional
  - Helps with: Reduces prompt cost and quota use by compressing context while preserving decision-critical requirements.
- **[reasoning-before-action](../packs/ai/reasoning-before-action/SKILL.md)**
  - Status: Optional
  - Helps with: Surfaces assumptions, tradeoffs, and success criteria before risky work.
- **[researching](../packs/ai/researching/SKILL.md)**
  - Status: Optional
  - Helps with: Answers questions that require external sources, freshness, citations, or conflict checks.
- **[writing](../packs/ai/writing/SKILL.md)**
  - Status: Optional
  - Helps with: Writes docs, specs, README updates, proposals, reports, and user-facing explanations.

## Code

General engineering practices for architecture, debugging, testing, reviews, and scoped edits.

- **[clean-architecture](../packs/code/clean-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Designs or reviews boundaries, layers, dependencies, and module structure.
- **[api-and-interface-design](../packs/code/api-and-interface-design/SKILL.md)**
  - Status: Optional
  - Helps with: Designs APIs, module boundaries, public contracts, validation, errors, and compatibility.
- **[code-simplification](../packs/code/code-simplification/SKILL.md)**
  - Status: Optional
  - Helps with: Simplifies working code while preserving behavior and verification.
- **[code-review](../packs/code/code-review/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews code changes for correctness, regressions, tests, maintainability, and security risk.
- **[solid-principles](../packs/code/solid-principles/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews object and module design through practical SOLID checks.
- **[improve-codebase-architecture](../packs/code/improve-codebase-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Finds incremental architecture improvements for codebases that are becoming hard to evolve.
- **[performance-optimization](../packs/code/performance-optimization/SKILL.md)**
  - Status: Optional
  - Helps with: Improves latency, throughput, memory use, bundle size, rendering speed, or resource cost from a measured baseline.
- **[surgical-changes](../packs/code/surgical-changes/SKILL.md)**
  - Status: Optional
  - Helps with: Keeps edits scoped and avoids unrelated cleanup or broad refactors.
- **[systematic-debugging](../packs/code/systematic-debugging/SKILL.md)**
  - Status: Optional
  - Helps with: Reproduces, isolates, fixes, and verifies bugs or regressions.
- **[test-driven-development](../packs/code/test-driven-development/SKILL.md)**
  - Status: Optional
  - Helps with: Uses tests to define and verify desired behavior during implementation.

- **[zoom-out](../packs/code/zoom-out/SKILL.md)**
  - Status: Optional
  - Helps with: Explains local code in broader system context before debugging, refactoring, or changing it.

## Core

Base skills that make installed skill projects readable and operational for agents.

- **[agent-role-workflows](../packs/core/agent-role-workflows/SKILL.md)**
  - Status: Optional
  - Helps with: Guides single-agent and future multi-agent work across common engineering roles.
- **[using-agent-skills](../packs/core/using-agent-skills/SKILL.md)**
  - Status: Required
  - Helps with: Defines the startup flow for repositories with installed skills.
- **[writing-plans](../packs/core/writing-plans/SKILL.md)**
  - Status: Optional
  - Helps with: Converts approved ideas or tasks into precise implementation plans.
- **[writing-skills](../packs/core/writing-skills/SKILL.md)**
  - Status: Optional
  - Helps with: Creates or revises operational agent skills.

## Creative

Artifact-oriented workflows for coordinated docs, diagrams, plans, and templates.

- **[artifact-builder](../packs/creative/artifact-builder/SKILL.md)**
  - Status: Optional
  - Helps with: Produces coordinated docs, plans, diagrams, configs, checklists, or templates.

- **[prototype](../packs/creative/prototype/SKILL.md)**
  - Status: Optional
  - Helps with: Builds small exploratory artifacts to clarify design, UX, logic, data flow, or feasibility.

## Data

Data exploration and reproducible analysis workflows.

- **[data-analysis-duckdb](../packs/data/data-analysis-duckdb/SKILL.md)**
  - Status: Optional
  - Helps with: Analyzes local tabular datasets with SQL-style exploration and reproducible summaries.

## Design

Design systems, UI review, Figma, Stitch, diagramming, and implementation handoff.

- **[design-md](../packs/design/design-md/SKILL.md)**
  - Status: Optional
  - Helps with: Creates or maintains `DESIGN.md` as the design source of truth.
- **[design-review](../packs/design/design-review/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews UI quality, hierarchy, accessibility, responsiveness, and consistency.
- **[diagramming](../packs/design/diagramming/SKILL.md)**
  - Status: Optional
  - Helps with: Creates architecture diagrams, flowcharts, system maps, sequence diagrams, or visual explanations.
- **[figma-to-implementation](../packs/design/figma-to-implementation/SKILL.md)**
  - Status: Optional
  - Helps with: Implements UI from Figma files, design specs, components, or tokens.
- **[stitch-design](../packs/design/stitch-design/SKILL.md)**
  - Status: Optional
  - Helps with: Supports Google Stitch prompt enhancement and design-to-implementation workflows.
- **[ui-prompt-enhancement](../packs/design/ui-prompt-enhancement/SKILL.md)**
  - Status: Optional
  - Helps with: Turns vague UI requests into precise prompts for Stitch, Figma, or implementation agents.

## DevOps

Container, deployment, gateway, and operational runbook workflows.

- **[api-gateway-integration](../packs/devops/api-gateway-integration/SKILL.md)**
  - Status: Optional
  - Helps with: Integrates external APIs through gateways, proxies, managed API layers, or shared services.
- **[deprecation-and-migration](../packs/devops/deprecation-and-migration/SKILL.md)**
  - Status: Optional
  - Helps with: Replaces old systems, removes code, changes contracts, migrates users, or sunsets features safely.
- **[deployment-runbook](../packs/devops/deployment-runbook/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares deployment steps, smoke tests, rollback procedures, and production handoffs.
- **[docker-essentials](../packs/devops/docker-essentials/SKILL.md)**
  - Status: Optional
  - Helps with: Creates, reviews, or debugs Dockerfiles, compose files, images, volumes, and networks.

## Flutter

Mandatory and recommended Flutter project conventions for AI-assisted apps.

- **[flutter-clean-architecture](../packs/flutter/flutter-clean-architecture/SKILL.md)**
  - Status: Required
  - Helps with: Enforces feature-first Clean Architecture structure for Flutter apps.
- **[flutter-default-stack](../packs/flutter/flutter-default-stack/SKILL.md)**
  - Status: Required
  - Helps with: Defines default package and tooling choices for personal Flutter AI-assisted projects.
- **[flutter-dependency-injection](../packs/flutter/flutter-dependency-injection/SKILL.md)**
  - Status: Required
  - Helps with: Standardizes dependency registration and access through `get_it`.
- **[flutter-dio-networking](../packs/flutter/flutter-dio-networking/SKILL.md)**
  - Status: Required
  - Helps with: Standardizes API communication through Dio and repository boundaries.
- **[flutter-freezed-models](../packs/flutter/flutter-freezed-models/SKILL.md)**
  - Status: Required
  - Helps with: Uses Freezed and JSON serialization for stable models and DTOs.
- **[flutter-state-management-selection](../packs/flutter/flutter-state-management-selection/SKILL.md)**
  - Status: Required
  - Helps with: Chooses Provider, Riverpod, Bloc, or Cubit using project complexity rules.
- **[flutter-testing-checklist](../packs/flutter/flutter-testing-checklist/SKILL.md)**
  - Status: Required
  - Helps with: Requires targeted tests and final checks before completing Flutter work.

## Git

Git flow, commits, pull requests, CI/CD, release readiness, and risk review.

- **[ci-cd](../packs/git/ci-cd/SKILL.md)**
  - Status: Optional
  - Helps with: Designs or reviews CI/CD pipelines, build checks, test gates, and deployments.
- **[commit-risk-analysis](../packs/git/commit-risk-analysis/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews commits, diffs, or branches for behavioral risk and release impact.
- **[conventional-commits](../packs/git/conventional-commits/SKILL.md)**
  - Status: Optional
  - Helps with: Writes commit messages, squash titles, changelog inputs, and release-note entries.
- **[gitflow](../packs/git/gitflow/SKILL.md)**
  - Status: Optional
  - Helps with: Plans branches, commits, feature flow, hotfixes, and release branching.
- **[git-guardrails](../packs/git/git-guardrails/SKILL.md)**
  - Status: Optional
  - Helps with: Adds safety rules before git commands that rewrite history, discard work, or publish changes.
- **[shipping-and-launch](../packs/git/shipping-and-launch/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares launches with final checks, rollout notes, monitoring, and rollback.
- **[pull-request-review](../packs/git/pull-request-review/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares, reviews, or responds to pull requests.
- **[release-readiness](../packs/git/release-readiness/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares version bumps, changelogs, deployments, and rollback notes.

- **[setup-pre-commit](../packs/git/setup-pre-commit/SKILL.md)**
  - Status: Optional
  - Helps with: Sets up fast, relevant pre-commit hooks for formatting, linting, typechecking, tests, or safety checks.

## JavaScript

Next.js, React, Node.js, TypeScript, API design, testing, and performance.

- **[javascript-testing](../packs/javascript/javascript-testing/SKILL.md)**
  - Status: Optional
  - Helps with: Tests JavaScript, TypeScript, React, Next.js, or Node.js behavior.
- **[browser-testing-with-devtools](../packs/javascript/browser-testing-with-devtools/SKILL.md)**
  - Status: Optional
  - Helps with: Validates browser UI with DevTools, automation, console logs, network traces, and runtime inspection.
- **[frontend-ui-engineering](../packs/javascript/frontend-ui-engineering/SKILL.md)**
  - Status: Optional
  - Helps with: Builds and reviews frontend JavaScript UI for layout, interaction, accessibility, responsive behavior, and visual polish.
- **[nextjs-frontend-architecture](../packs/javascript/nextjs-frontend-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Structures Next.js routes, components, server/client boundaries, and data loading.
- **[nextjs-fullstack-architecture](../packs/javascript/nextjs-fullstack-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Places React UI, Server Components, Server Actions, Route Handlers, middleware, caching, auth, database access, and backend logic behind clear Next.js boundaries.
- **[nextjs-performance](../packs/javascript/nextjs-performance/SKILL.md)**
  - Status: Optional
  - Helps with: Optimizes Next.js rendering, bundle size, data loading, and caching.
- **[nodejs-api-design](../packs/javascript/nodejs-api-design/SKILL.md)**
  - Status: Optional
  - Helps with: Designs HTTP APIs, validation, errors, pagination, authentication, and contracts in Node.js.
- **[nodejs-backend-architecture](../packs/javascript/nodejs-backend-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Designs Node.js services, backend modules, dependencies, and server-side structure.
- **[nodejs-production-backend](../packs/javascript/nodejs-production-backend/SKILL.md)**
  - Status: Optional
  - Helps with: Implements and reviews production Node.js backend behavior, validation, service boundaries, errors, observability, and deploy-safe changes.
- **[react-component-design](../packs/javascript/react-component-design/SKILL.md)**
  - Status: Optional
  - Helps with: Designs React components, props, composition patterns, and reusable UI modules.
- **[typescript-strictness](../packs/javascript/typescript-strictness/SKILL.md)**
  - Status: Optional
  - Helps with: Improves TypeScript strictness, public types, and unsafe `any` or `unknown` usage.

## Kotlin

Kotlin and Android architecture, Compose, Flow/coroutines, SOLID review, and testing.

- **[android-compose-architecture](../packs/kotlin/android-compose-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Builds Jetpack Compose screens, state holders, navigation, and UI architecture.
- **[kotlin-clean-architecture](../packs/kotlin/kotlin-clean-architecture/SKILL.md)**
  - Status: Optional
  - Helps with: Structures Kotlin or Android features with domain, data, and presentation boundaries.
- **[kotlin-coroutines-flow](../packs/kotlin/kotlin-coroutines-flow/SKILL.md)**
  - Status: Optional
  - Helps with: Implements asynchronous Kotlin work with coroutines, Flow, cancellation, and state streams.
- **[kotlin-solid-review](../packs/kotlin/kotlin-solid-review/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews Kotlin classes, interfaces, modules, and APIs for SOLID-style risks.
- **[kotlin-testing](../packs/kotlin/kotlin-testing/SKILL.md)**
  - Status: Optional
  - Helps with: Tests Kotlin domain logic, coroutine behavior, Android view models, and Compose UI.

## MCP

MCP bootstrap, tool design, registry discovery, and security review.

- **[mcp-registry-discovery](../packs/mcp/mcp-registry-discovery/SKILL.md)**
  - Status: Optional
  - Helps with: Finds existing MCP servers, agent skills, and tool ecosystems before building new automation.
- **[mcp-context-routing](../packs/mcp/mcp-context-routing/SKILL.md)**
  - Status: Optional
  - Helps with: Chooses between MCP tools, local files, memory, connectors, web search, and direct prompting to gather context efficiently.
- **[mcp-security-review](../packs/mcp/mcp-security-review/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews MCP servers, local commands, permissions, secrets, and destructive tool risks.
- **[mcp-server-bootstrap](../packs/mcp/mcp-server-bootstrap/SKILL.md)**
  - Status: Optional
  - Helps with: Bootstraps MCP servers through GitHub MCP, install instructions, host config, or manual fallback.
- **[mcp-tool-design](../packs/mcp/mcp-tool-design/SKILL.md)**
  - Status: Optional
  - Helps with: Designs MCP tool names, schemas, idempotency, errors, and permission boundaries.

## ML

Machine learning experiment tracking, evaluation, and benchmark reporting.

- **[ml-experiment-monitoring](../packs/ml/ml-experiment-monitoring/SKILL.md)**
  - Status: Optional
  - Helps with: Plans, compares, and reports ML experiments, evaluations, and benchmarks.

## Planning

Persistent project planning, task breakdown, specs, ADRs, and plan execution.

- **[context-and-source-planning](../packs/planning/context-and-source-planning/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares project context, source docs, examples, and constraints before planning or execution.
- **[grill-with-docs](../packs/planning/grill-with-docs/SKILL.md)**
  - Status: Optional
  - Helps with: Clarifies requirements by cross-checking requests against docs, code, plans, ADRs, and domain language.
- **[interview-me](../packs/planning/interview-me/SKILL.md)**
  - Status: Optional
  - Helps with: Asks focused questions before planning when requirements are underspecified.
- **[issue-triage](../packs/planning/issue-triage/SKILL.md)**
  - Status: Optional
  - Helps with: Classifies issues, tasks, bug reports, and feature requests before planning or implementation.
- **[decision-log-and-adrs](../packs/planning/decision-log-and-adrs/SKILL.md)**
  - Status: Optional
  - Helps with: Records architectural decisions, plan pivots, tradeoffs, and durable choices.
- **[incremental-plan-execution](../packs/planning/incremental-plan-execution/SKILL.md)**
  - Status: Optional
  - Helps with: Executes stored plans task-by-task while keeping plan status updated.
- **[planning-and-task-breakdown](../packs/planning/planning-and-task-breakdown/SKILL.md)**
  - Status: Optional
  - Helps with: Breaks validated specs or clear goals into ordered, verifiable tasks.
- **[project-plan-ledger](../packs/planning/project-plan-ledger/SKILL.md)**
  - Status: Optional
  - Helps with: Maintains persistent planning history for projects, features, migrations, and long-running work.
- **[spec-driven-planning](../packs/planning/spec-driven-planning/SKILL.md)**
  - Status: Optional
  - Helps with: Creates a written specification before tasks or implementation begin.

- **[to-issues](../packs/planning/to-issues/SKILL.md)**
  - Status: Optional
  - Helps with: Converts PRDs, specs, or plans into small issues with acceptance criteria and verification.
- **[to-prd](../packs/planning/to-prd/SKILL.md)**
  - Status: Optional
  - Helps with: Converts conversations, ideas, or clarified requirements into product requirements documents.
- **[ubiquitous-language](../packs/planning/ubiquitous-language/SKILL.md)**
  - Status: Optional
  - Helps with: Keeps domain terminology consistent across docs, code, issues, plans, and agent memory.

## Research

Source-grounded research, repo analysis, context packing, synthesis, and monitoring.

- **[context-packing](../packs/research/context-packing/SKILL.md)**
  - Status: Optional
  - Helps with: Prepares repository or project context for AI analysis, handoff, review, or long-context prompts.
- **[news-and-trend-monitoring](../packs/research/news-and-trend-monitoring/SKILL.md)**
  - Status: Optional
  - Helps with: Tracks current news, releases, advisories, ecosystem changes, and trends over time.
- **[repo-intelligence](../packs/research/repo-intelligence/SKILL.md)**
  - Status: Optional
  - Helps with: Quickly understands unfamiliar repositories, libraries, frameworks, or tools.
- **[repo-research](../packs/research/repo-research/SKILL.md)**
  - Status: Optional
  - Helps with: Analyzes GitHub repositories, docs, examples, issues, and source structure.
- **[research-synthesis](../packs/research/research-synthesis/SKILL.md)**
  - Status: Optional
  - Helps with: Turns multiple sources or findings into a matrix, recommendation, or action plan.
- **[source-grounded-research](../packs/research/source-grounded-research/SKILL.md)**
  - Status: Optional
  - Helps with: Produces trustworthy research with citations, recency checks, and evidence comparison.
- **[source-driven-development](../packs/research/source-driven-development/SKILL.md)**
  - Status: Optional
  - Helps with: Grounds framework, API, package, and platform decisions in official or primary sources.
- **[summarization](../packs/research/summarization/SKILL.md)**
  - Status: Optional
  - Helps with: Condenses long content into actionable summaries, decisions, and next steps.
- **[web-search-strategy](../packs/research/web-search-strategy/SKILL.md)**
  - Status: Optional
  - Helps with: Designs search queries and compares web sources for up-to-date evidence.

## Security

Security review for cloud, secrets, prompt injection, and third-party skills.

- **[cloud-security-baseline](../packs/security/cloud-security-baseline/SKILL.md)**
  - Status: Optional
  - Helps with: Reviews cloud deployment config, IAM, storage, networking, and public exposure.
- **[doubt-driven-development](../packs/security/doubt-driven-development/SKILL.md)**
  - Status: Optional
  - Helps with: Challenges confident assumptions before high-stakes or security-sensitive implementation.
- **[prompt-injection-defense](../packs/security/prompt-injection-defense/SKILL.md)**
  - Status: Optional
  - Helps with: Protects agents when reading untrusted web pages, repos, issues, documents, logs, or emails.
- **[secrets-and-env-safety](../packs/security/secrets-and-env-safety/SKILL.md)**
  - Status: Optional
  - Helps with: Handles secrets, tokens, API keys, certificates, and environment variables safely.
- **[skill-security-audit](../packs/security/skill-security-audit/SKILL.md)**
  - Status: Optional
  - Helps with: Audits third-party agent skills, MCP plugins, scripts, and marketplace packages before trust.
