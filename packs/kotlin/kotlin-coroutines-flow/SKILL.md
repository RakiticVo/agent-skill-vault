---
name: kotlin-coroutines-flow
description: Use when implementing asynchronous Kotlin work with coroutines, Flow, cancellation, or state streams.
required: false
roles:
  - implementer
  - reviewer
when_to_use:
  - coroutine work
  - Flow pipelines
  - async state handling
source_inspired_by:
  - Kotlin coroutines practice
checks:
  - cancellation is respected
  - dispatcher choice is explicit
  - Flow collection lifecycle is safe
---

# Kotlin Coroutines And Flow

Design async work around cancellation and ownership.

Guidelines:

- Use structured concurrency.
- Keep dispatcher decisions near infrastructure boundaries.
- Avoid blocking calls inside coroutine contexts.
- Model streams with `Flow` when values change over time.
- Collect UI flows with lifecycle-aware APIs in Android.

Tests should control dispatchers and time when behavior depends on scheduling.
