---
name: kotlin-solid-review
description: Use when reviewing Kotlin class, interface, module, or API design for SOLID-style design risks.
required: false
roles:
  - reviewer
  - architect
when_to_use:
  - Kotlin code review
  - API refactoring
  - dependency design
source_inspired_by:
  - general SOLID practice
checks:
  - interfaces are cohesive
  - dependencies are injected
  - sealed/value types are used where appropriate
---

# Kotlin SOLID Review

Review Kotlin design with language features in mind.

Look for:

- Classes with multiple reasons to change.
- Interfaces that exist only to satisfy ceremony.
- Missing constructor injection.
- Overuse of inheritance where composition or sealed types fit better.
- Nullable types used instead of explicit result/error models.
