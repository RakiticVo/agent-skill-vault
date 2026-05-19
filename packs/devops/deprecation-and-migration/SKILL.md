---
name: deprecation-and-migration
description: Use when replacing old systems, removing code, changing contracts, migrating users, or sunsetting features.
required: false
roles:
  - architect
  - devops
  - implementer
when_to_use:
  - migrations
  - deprecations
  - removing old systems
source_inspired_by:
  - addyosmani/agent-skills/deprecation-and-migration
checks:
  - migration path is defined
  - rollback or fallback is documented
  - users and dependent systems are considered
---

# Deprecation And Migration

Treat old code and old contracts as liabilities that need controlled removal.

Migration plan:

- Identify owners, users, dependencies, and compatibility constraints.
- Decide whether deprecation is advisory or compulsory.
- Provide a migration path, timeline, and rollback or fallback.
- Add compatibility shims only with an expiration plan.
- Monitor adoption and failures before final removal.
- Record the decision in ADRs or release notes when impact is broad.

Do not remove shared behavior until dependents and rollback risk are understood.

