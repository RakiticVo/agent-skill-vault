---
name: api-gateway-integration
description: Use when integrating external APIs through a gateway, proxy, managed API layer, or shared service boundary.
required: false
roles:
  - architect
  - devops
  - implementer
when_to_use:
  - external API integration
  - API gateway design
  - rate limit or auth planning
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - auth and rate limits are explicit
  - retries and timeouts are defined
  - errors are normalized
---

# API Gateway Integration

Use gateways to make external APIs safer and more consistent.

Define:

- Authentication and secret storage.
- Timeout, retry, and circuit-breaker behavior.
- Rate limit and quota handling.
- Request/response logging without sensitive data.
- Error mapping and fallback behavior.
- Ownership and monitoring.

Do not hide unreliable external behavior behind vague helper calls.
