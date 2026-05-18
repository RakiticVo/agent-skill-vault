---
name: kotlin-testing
description: Use when testing Kotlin domain logic, coroutine behavior, Android view models, or Compose UI.
required: false
roles:
  - tester
  - implementer
when_to_use:
  - Kotlin tests
  - coroutine tests
  - Android UI tests
source_inspired_by:
  - Kotlin testing practice
checks:
  - async behavior is deterministic
  - domain logic has fast unit tests
  - UI tests assert behavior not implementation
---

# Kotlin Testing

Prefer fast deterministic tests.

Test focus:

- Domain/use cases: unit tests.
- Coroutine/Flow logic: controlled dispatchers and test scopes.
- View models: state transition tests.
- Compose: behavior-focused UI tests for critical screens.

Avoid tests that depend on real timing, network, or device state unless they are explicitly integration tests.
