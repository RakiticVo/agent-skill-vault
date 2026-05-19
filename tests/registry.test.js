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
  for (const pack of ['ai', 'planning', 'code', 'flutter', 'kotlin', 'javascript', 'design', 'git', 'agents', 'mcp', 'research', 'security', 'devops', 'data', 'ml', 'creative']) {
    assert.ok(result.packs.includes(pack), `missing pack ${pack}`);
  }
});

test('skill ids are globally unique for flat install layout', async () => {
  const result = await listSkills({ packs: ['all'] });
  const ids = result.skills.map((skill) => skill.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('lists mandatory AgentMemory integration skill', async () => {
  const result = await listSkills({ packs: ['agents'] });
  const skill = result.skills.find((item) => item.id === 'agentmemory-integration');
  assert.ok(skill);
  assert.equal(skill.required, true);
  assert.ok(skill.source_inspired_by.includes('rohitg00/agentmemory'));
});

test('lists adapted addyosmani lifecycle skills in selected packs', async () => {
  const result = await listSkills({ packs: ['planning', 'ai', 'agents', 'research', 'security', 'code', 'javascript', 'devops', 'git'] });
  const ids = new Set(result.skills.map((skill) => skill.id));
  for (const id of [
    'interview-me',
    'idea-refine',
    'context-engineering',
    'source-driven-development',
    'doubt-driven-development',
    'api-and-interface-design',
    'browser-testing-with-devtools',
    'code-simplification',
    'performance-optimization',
    'deprecation-and-migration',
    'shipping-and-launch'
  ]) {
    assert.ok(ids.has(id), `missing adapted lifecycle skill ${id}`);
  }
});

test('lists adapted mattpocock workflow skills in selected packs', async () => {
  const result = await listSkills({ packs: ['planning', 'code', 'creative', 'agents', 'git'] });
  const ids = new Set(result.skills.map((skill) => skill.id));
  for (const id of [
    'grill-with-docs',
    'to-prd',
    'to-issues',
    'issue-triage',
    'zoom-out',
    'improve-codebase-architecture',
    'prototype',
    'handoff',
    'git-guardrails',
    'setup-pre-commit',
    'ubiquitous-language'
  ]) {
    assert.ok(ids.has(id), `missing adapted mattpocock skill ${id}`);
  }
});
