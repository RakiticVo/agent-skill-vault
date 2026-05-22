---
name: frontend-ui-engineering
description: Use when building, refining, or reviewing frontend JavaScript/TypeScript UI experiences in React, Next.js, or browser apps, especially layout, interaction, accessibility, responsive behavior, visual polish, and frontend state boundaries.
required: false
roles:
  - implementer
  - reviewer
  - designer
when_to_use:
  - building frontend UI
  - improving React or Next.js screens
  - reviewing responsive and accessible interactions
source_inspired_by:
  - addyosmani/agent-skills/frontend-ui-engineering
checks:
  - UI is responsive at mobile and desktop widths
  - keyboard and screen reader behavior is considered
  - visual hierarchy, spacing, and states are deliberate
---

# Frontend UI Engineering

Build UI like a product engineer who cares about both behavior and presentation.

Workflow:

- Identify the real user workflow before arranging components.
- Reuse the app's existing design tokens, component patterns, icons, and spacing scale.
- Separate domain state from local UI state; keep derived state computed, not duplicated.
- Prefer semantic HTML first, then ARIA only where native semantics are insufficient.
- Implement empty, loading, error, disabled, focused, hover, and narrow-screen states.
- Keep component APIs small. Split components when props start controlling unrelated concerns.
- Verify in a browser when the app has a visual surface; inspect console, layout, and interactions.

Frontend quality bar:

- Text does not overflow or overlap at common breakpoints.
- Controls have clear affordance and stable dimensions.
- Forms show validation near the relevant field and preserve user input after errors.
- Lists, tables, and cards support realistic data lengths, not only happy-path samples.
- Network and async behavior has explicit pending and failure UI.

Avoid:

- Decorative layout that makes the primary workflow harder to scan.
- Reimplementing existing components or design primitives.
- Styling that depends on exact demo copy length.
- Passing props through layers that do not use them; restructure or use a scoped context.
