---
name: javascript-testing
description: Use when testing JavaScript, TypeScript, React, Next.js, or Node.js behavior.
required: false
roles:
  - tester
  - implementer
when_to_use:
  - JS/TS tests
  - frontend tests
  - backend tests
source_inspired_by:
  - JavaScript testing practice
checks:
  - tests assert behavior
  - async work is deterministic
  - mocks stay at system boundaries
---

# JavaScript Testing

Test behavior at the right boundary.

Guidelines:

- Unit test pure logic and small services.
- Component test user-visible behavior.
- API test request/response contracts.
- Mock external services, not internal implementation details.
- Control timers and async behavior explicitly.
