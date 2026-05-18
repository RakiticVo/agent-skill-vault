---
name: kotlin-clean-architecture
description: Use when structuring Kotlin or Android features with clear domain, data, and presentation boundaries.
required: false
roles:
  - architect
  - implementer
when_to_use:
  - Kotlin app architecture
  - Android feature structure
  - repository/use-case design
source_inspired_by:
  - general Kotlin architecture practice
checks:
  - domain logic is framework-light
  - data sources are behind repositories
  - presentation does not own persistence/network details
---

# Kotlin Clean Architecture

Keep Kotlin features modular and testable.

Use boundaries:

- Domain: entities, use cases, business rules.
- Data: DTOs, data sources, repository implementations.
- Presentation: UI state, view models, screens.

Avoid leaking Retrofit, Room, or platform APIs into domain logic unless the project explicitly accepts that coupling.
