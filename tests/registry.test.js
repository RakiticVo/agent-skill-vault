import test from 'node:test';
import assert from 'node:assert/strict';
import { listSkills } from '../src/registry.js';

test('lists skills by pack', async () => {
  const result = await listSkills({ packs: ['core', 'flutter'] });
  assert.ok(result.packs.includes('core'));
  assert.ok(result.packs.includes('flutter'));
  assert.ok(result.skills.some((skill) => skill.id === 'using-agent-skills' && skill.pack === 'core'));
  assert.ok(result.skills.some((skill) => skill.id === 'flutter-clean-architecture' && skill.pack === 'flutter'));
  assert.ok(result.skills.every((skill) => Array.isArray(skill.source_inspired_by)));
});

test('can list only core pack', async () => {
  const result = await listSkills({ packs: ['core'] });
  assert.deepEqual(result.packs, ['core']);
  assert.ok(result.skills.every((skill) => skill.pack === 'core'));
});

test('can list all V1 packs', async () => {
  const result = await listSkills({ packs: ['all'] });
  for (const pack of ['ai', 'code', 'flutter', 'kotlin', 'javascript', 'design', 'git', 'agents', 'mcp', 'research', 'security', 'devops', 'data', 'ml', 'creative']) {
    assert.ok(result.packs.includes(pack), `missing pack ${pack}`);
  }
});

test('skill ids are globally unique for flat install layout', async () => {
  const result = await listSkills({ packs: ['all'] });
  const ids = result.skills.map((skill) => skill.id);
  assert.equal(new Set(ids).size, ids.length);
});
