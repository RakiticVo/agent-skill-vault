---
name: nextjs-performance
description: Use when optimizing Next.js performance, bundle size, rendering strategy, data loading, or caching.
required: false
roles:
  - implementer
  - reviewer
when_to_use:
  - Next.js performance
  - bundle optimization
  - caching decisions
source_inspired_by:
  - Vercel React and Next.js practices
checks:
  - expensive client JavaScript is justified
  - cache behavior is explicit
  - performance claims are measured or bounded
---

# Next.js Performance

Optimize with evidence.

Check:

- Server vs client rendering choice.
- Bundle size and unnecessary client dependencies.
- Image/font loading behavior.
- Caching, revalidation, and dynamic route costs.
- Avoid waterfalls in data fetching.

Do not add memoization or caching without a clear performance reason.
