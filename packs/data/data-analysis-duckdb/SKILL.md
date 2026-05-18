---
name: data-analysis-duckdb
description: Use when analyzing local CSV, JSON, Parquet, or tabular datasets with SQL-style exploration and reproducible summaries.
required: false
roles:
  - analyst
  - researcher
when_to_use:
  - local data analysis
  - CSV/Parquet exploration
  - reproducible data summaries
source_inspired_by:
  - datacamp.com/blog/top-agent-skills
checks:
  - source files and schema are identified
  - transformations are reproducible
  - conclusions cite queries or calculations
---

# Data Analysis With DuckDB

Use SQL-style analysis for local datasets when it improves reproducibility.

Workflow:

- Identify files, schema, row counts, and missing values.
- Load data into DuckDB or equivalent local SQL engine.
- Write clear queries for aggregates and joins.
- Validate surprising results with spot checks.
- Export concise tables or charts when useful.

Keep raw data unchanged unless the user asks for transformed outputs.
