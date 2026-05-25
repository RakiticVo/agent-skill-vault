import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { listSkills } from '../src/registry.js';

test('README links to attribution file', async () => {
  const readme = await fs.readFile('README.md', 'utf8');
  const attributions = await fs.readFile('ATTRIBUTIONS.md', 'utf8');
  assert.match(readme, /ATTRIBUTIONS\.md/);
  assert.match(attributions, /addyosmani\/agent-skills/);
  assert.match(attributions, /mattpocock\/skills/);
});

test('skill catalogs exist and mention every skill id', async () => {
  const readme = await fs.readFile('README.md', 'utf8');
  const english = await fs.readFile('docs/SKILL_CATALOG.en.md', 'utf8');
  const vietnamese = await fs.readFile('docs/SKILL_CATALOG.vi.md', 'utf8');
  const registry = await listSkills({ packs: ['all'] });

  assert.match(readme, /docs\/SKILL_CATALOG\.en\.md/);
  assert.match(readme, /docs\/SKILL_CATALOG\.vi\.md/);

  for (const skill of registry.skills) {
    assert.match(english, new RegExp(`\\b${skill.id}\\b`), `English catalog missing ${skill.id}`);
    assert.match(vietnamese, new RegExp(`\\b${skill.id}\\b`), `Vietnamese catalog missing ${skill.id}`);
  }
});

test('README links to MCP-free usage guides', async () => {
  const readme = await fs.readFile('README.md', 'utf8');
  const english = await fs.readFile('docs/MCP_FREE_USAGE.en.md', 'utf8');
  const vietnamese = await fs.readFile('docs/MCP_FREE_USAGE.vi.md', 'utf8');

  assert.match(readme, /docs\/MCP_FREE_USAGE\.en\.md/);
  assert.match(readme, /docs\/MCP_FREE_USAGE\.vi\.md/);
  assert.match(english, /MCP-Free Usage After Skill Installation/);
  assert.match(english, /\.agents\/skills\.lock\.json/);
  assert.match(vietnamese, /Sử dụng sau khi tắt MCP/);
  assert.match(vietnamese, /\.agents\/skills/);
});
