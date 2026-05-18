---
name: android-compose-architecture
description: Use when building Android Jetpack Compose screens, state holders, navigation, or UI architecture.
required: false
roles:
  - implementer
  - reviewer
when_to_use:
  - Compose UI work
  - Android state management
  - screen architecture
source_inspired_by:
  - Android Compose best practices
checks:
  - composables are stateless where practical
  - state hoisting is clear
  - side effects are explicit
---

# Android Compose Architecture

Compose UI should be predictable and previewable.

Guidelines:

- Hoist state out of reusable composables.
- Keep business logic in view models or state holders.
- Use side-effect APIs intentionally.
- Keep navigation arguments stable and explicit.
- Build previews for meaningful reusable components when practical.
