---
name: browser-testing-with-devtools
description: Use when validating, debugging, or profiling browser-based UI with DevTools, browser automation, console logs, network traces, or runtime inspection.
required: false
roles:
  - tester
  - implementer
  - reviewer
when_to_use:
  - browser UI testing
  - frontend debugging
  - runtime performance investigation
source_inspired_by:
  - addyosmani/agent-skills/browser-testing-with-devtools
checks:
  - page is opened in a real browser context
  - console and network errors are checked
  - runtime behavior is verified
---

# Browser Testing With DevTools

Verify browser behavior with runtime evidence.

Workflow:

- Open the page in a real browser or browser automation environment.
- Check visible UI state, layout, interactions, and responsive behavior.
- Inspect console errors, failed network requests, and unexpected redirects.
- Use DOM or accessibility inspection when visual output is ambiguous.
- For performance work, measure before changing and after changing.
- Record exact URLs, viewports, actions, and observed failures.

Do not rely only on static code review for browser-facing changes.

