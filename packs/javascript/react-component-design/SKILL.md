---
name: react-component-design
description: Use when designing React components, props, composition patterns, or reusable UI modules.
required: false
roles:
  - implementer
  - reviewer
when_to_use:
  - React component work
  - UI API design
  - component refactoring
source_inspired_by:
  - React component design practice
checks:
  - component props are minimal and explicit
  - state ownership is clear
  - composition is preferred over flags when complexity grows
---

# React Component Design

Components should be easy to understand at the call site.

Guidelines:

- Keep props explicit and typed.
- Put state at the lowest owner that needs it.
- Prefer composition for layout slots and variants with real structure.
- Avoid boolean prop explosions.
- Keep accessibility behavior part of the component contract.
