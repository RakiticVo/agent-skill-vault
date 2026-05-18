import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { installSkills, updateSkills } from '../src/installer.js';

test('update preserves installed skills and targets while changing version', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-update-'));
  await installSkills({
    projectDir: root,
    version: 'v0.1.0',
    targets: ['codex', 'claude'],
    requestedSkills: ['flutter-clean-architecture']
  });

  await updateSkills({ projectDir: root, version: 'v0.2.0' });
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));

  assert.equal(lock.version, 'v0.2.0');
  assert.deepEqual(lock.targetAgents, ['codex', 'claude']);
  assert.deepEqual(lock.installedPacks, ['core', 'flutter']);
  assert.ok(lock.installedSkills.includes('using-agent-skills'));
  assert.ok(lock.installedSkills.includes('flutter-clean-architecture'));
});
