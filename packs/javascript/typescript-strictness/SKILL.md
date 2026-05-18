---
name: typescript-strictness
description: Use when improving TypeScript type safety, strict mode compatibility, public types, or unsafe any/unknown usage.
required: false
roles:
  - implementer
  - reviewer
when_to_use:
  - TypeScript code
  - type refactoring
  - public API typing
source_inspired_by:
  - TypeScript best practices
checks:
  - public types are explicit
  - unsafe casts are justified
  - nullability is handled deliberately
---

# TypeScript Strictness

Use types to make invalid states harder to represent.

Guidelines:

- Prefer precise domain types over broad objects.
- Avoid `any`; use `unknown` at boundaries and narrow it.
- Model nullable and optional values explicitly.
- Keep public API types stable and readable.
- Avoid clever types that obscure intent.
