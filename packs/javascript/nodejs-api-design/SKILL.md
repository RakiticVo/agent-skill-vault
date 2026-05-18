---
name: nodejs-api-design
description: Use when designing HTTP APIs, validation, error responses, pagination, authentication, or API contracts in Node.js.
required: false
roles:
  - architect
  - implementer
when_to_use:
  - API design
  - backend endpoints
  - contract review
source_inspired_by:
  - API design practice
checks:
  - inputs are validated
  - errors are consistent
  - API behavior is documented or tested
---

# Node.js API Design

APIs should be predictable for clients.

Define:

- Request shape and validation.
- Success response shape.
- Error codes and error body format.
- Auth and authorization behavior.
- Pagination, filtering, sorting, and idempotency when relevant.

Tests should cover contract behavior, not only implementation details.
