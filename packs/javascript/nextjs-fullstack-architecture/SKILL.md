---
name: nextjs-fullstack-architecture
description: Use when building or reviewing full-stack Next.js applications where React frontend, Server Components, Server Actions, Route Handlers, middleware, caching, authentication, database access, and backend business logic must be placed behind clear boundaries.
required: false
roles:
  - architect
  - implementer
  - reviewer
when_to_use:
  - full-stack Next.js work
  - Next.js backend implementation
  - choosing Server Actions versus Route Handlers
source_inspired_by:
  - Vercel React and Next.js practices
  - addyosmani/agent-skills/frontend-ui-engineering
  - mattpocock/skills/improve-codebase-architecture
checks:
  - server/client boundaries are explicit
  - backend logic is not trapped inside route handlers
  - cache and revalidation behavior is deliberate
---

# Next.js Full-Stack Architecture

Use Next.js as the application shell, not as the only architecture boundary.

Placement rules:

- Use Server Components for server-owned reads and non-interactive UI.
- Use Client Components only for browser APIs, local interaction state, optimistic UI, and client-only libraries.
- Use Server Actions for form-like mutations tightly coupled to the current UI.
- Use Route Handlers for public HTTP APIs, webhooks, third-party callbacks, mobile clients, or non-React consumers.
- Keep validation, authorization, and business workflows in services/use cases that can be tested outside Next.js.
- Put database, queues, email, storage, and external APIs behind adapters or repositories.
- Keep middleware small: routing, redirects, coarse auth/session checks, and request metadata only.

Data and cache checklist:

- State whether a read is static, dynamic, user-scoped, or request-scoped.
- Choose caching, `no-store`, tags, and revalidation intentionally.
- Revalidate or invalidate after mutations that affect visible data.
- Avoid leaking user-specific data through shared caches.
- Prefer server-side data loading for data the client does not need to own.

Security and reliability:

- Validate all Server Action and Route Handler input on the server.
- Check authorization near the data access or use-case boundary, not only in UI.
- Do not trust hidden form fields, client IDs, roles, prices, ownership, or timestamps.
- Return consistent errors to clients while logging operational details server-side.
- Add tests for use cases and at least one route/action integration path for risky behavior.

Avoid:

- Putting business logic directly in `app/api/**/route.ts` or action functions.
- Fetching your own internal Route Handler from a Server Component when a direct service call is available.
- Making everything a Client Component to bypass server/client boundary decisions.
- Mixing cache policy, auth policy, and persistence details inside reusable UI components.
