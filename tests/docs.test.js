import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { listSkills } from '../src/registry.js';

test('README links to attribution file', async () => {
  const readme = await fs.readFile('README.md', 'utf8');
  const attributions = await fs.readFile('ATTRIBUTIONS.md', 'utf8');
  assert.match(readme, /ATTRIBUTIONS\.md/);
  assert.match(attributions, /rohitg00\/agentmemory/);
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
