---
name: nextjs-frontend-architecture
description: Use when structuring Next.js frontend routes, components, server/client boundaries, or data loading.
required: false
roles:
  - architect
  - implementer
when_to_use:
  - Next.js frontend work
  - React route architecture
  - server/client component decisions
source_inspired_by:
  - Vercel React and Next.js practices
checks:
  - server/client boundaries are intentional
  - data fetching belongs near the route or server layer
  - reusable components avoid hidden side effects
---

# Next.js Frontend Architecture

Use the framework boundaries instead of fighting them.

Guidelines:

- Prefer server components for static or server-owned data.
- Use client components for interaction, browser APIs, or local state.
- Keep route-level data flow clear.
- Avoid global state for data already owned by the server.
- Split UI into reusable components only when reuse or clarity is real.
