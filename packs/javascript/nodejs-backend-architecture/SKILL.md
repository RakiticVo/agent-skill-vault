---
name: nodejs-backend-architecture
description: Use when designing Node.js services, backend modules, dependency boundaries, or server-side project structure.
required: false
roles:
  - architect
  - implementer
when_to_use:
  - Node.js backend work
  - service architecture
  - module boundaries
source_inspired_by:
  - backend architecture practice
checks:
  - transport logic is separated from business logic
  - dependencies are injectable or replaceable
  - errors are mapped at boundaries
---

# Node.js Backend Architecture

Separate transport, application logic, and infrastructure.

Guidelines:

- Keep request/response framework code at the edge.
- Put business workflows in services/use cases.
- Hide databases, queues, and HTTP clients behind adapters.
- Normalize error handling at boundaries.
- Keep configuration explicit and environment-safe.
