---
name: nodejs-production-backend
description: Use when implementing or reviewing production Node.js/JavaScript/TypeScript backend behavior, including API handlers, service workflows, validation, persistence boundaries, error handling, logging, observability, security defaults, and deploy-safe backend changes.
required: false
roles:
  - architect
  - implementer
  - reviewer
when_to_use:
  - implementing Node.js backend features
  - hardening backend behavior
  - reviewing service and API reliability
source_inspired_by:
  - addyosmani/agent-skills/api-and-interface-design
  - mattpocock/skills/improve-codebase-architecture
checks:
  - inputs are validated at boundaries
  - business logic is testable without HTTP transport
  - operational failure modes are explicit
---

# Node.js Production Backend

Treat backend code as a boundary between untrusted input, business rules, and infrastructure.

Workflow:

- Locate the transport, service/use-case, and infrastructure layers before editing.
- Validate and normalize input at the edge; keep domain code working with typed, trusted data.
- Keep business workflows independent of Express, Fastify, Next route handlers, queues, and cron adapters.
- Map domain errors to transport responses at the boundary.
- Make database, cache, queue, clock, and external HTTP dependencies injectable or replaceable.
- Preserve idempotency for retries, webhooks, jobs, and payment-like workflows.
- Add focused tests around behavior, error mapping, and one representative integration path.

Production checklist:

- Authn/authz is checked before data access.
- Logs include request or job correlation without secrets or raw credentials.
- Timeouts, retries, and cancellation are explicit for outbound calls.
- Pagination, filtering, and sorting have predictable limits.
- Migrations and contract changes are backward-compatible or have a rollout plan.
- Errors are actionable for operators but do not leak internals to clients.

Avoid:

- Putting database calls directly in route handlers when the project has service boundaries.
- Catching errors only to return generic success or hide failures.
- Adding global mutable state for per-request data.
- Trusting client-provided IDs, roles, prices, ownership, or timestamps.
