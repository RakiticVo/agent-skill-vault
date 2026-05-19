import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { installSkills } from '../src/installer.js';
import { runDoctor } from '../src/doctor.js';

async function makeProject() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-flutter-'));
  await fs.mkdir(path.join(root, 'lib/core'), { recursive: true });
  await fs.mkdir(path.join(root, 'lib/features'), { recursive: true });
  await fs.mkdir(path.join(root, 'lib/shared'), { recursive: true });
  await fs.mkdir(path.join(root, 'test'), { recursive: true });
  await fs.writeFile(path.join(root, 'pubspec.yaml'), `name: sample
dependencies:
  flutter:
    sdk: flutter
  get_it: any
  dio: any
  freezed_annotation: any
  json_annotation: any
  go_router: any
  flutter_bloc: any
dev_dependencies:
  flutter_test:
    sdk: flutter
  build_runner: any
  freezed: any
  json_serializable: any
  bloc_test: any
`);
  return root;
}

test('installer writes target layouts and pinned lock file', async () => {
  const root = await makeProject();
  const result = await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex', 'claude', 'gemini'] });
  assert.ok(result.installedPacks.includes('core'));
  assert.ok(result.installedPacks.includes('flutter'));
  assert.ok(result.installed.includes('using-agent-skills'));
  assert.ok(result.installed.includes('flutter-clean-architecture'));
  assert.ok(result.installed.includes('agentmemory-integration'));
  assert.ok(await fs.stat(path.join(root, '.agents/skills/using-agent-skills/SKILL.md')));
  assert.ok(await fs.stat(path.join(root, '.agents/skills/flutter-clean-architecture/SKILL.md')));
  assert.ok(await fs.stat(path.join(root, '.agents/skills/agentmemory-integration/SKILL.md')));
  assert.ok(await fs.stat(path.join(root, '.claude/skills/flutter-clean-architecture/SKILL.md')));
  assert.ok(await fs.stat(path.join(root, '.agents/integrations/agentmemory.md')));
  assert.ok(await fs.stat(path.join(root, '.agents/integrations/agentmemory.mcp.example.json')));
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));
  assert.equal(lock.version, 'v0.1.0');
  assert.deepEqual(lock.installedPacks, ['core', 'flutter']);
  assert.deepEqual(lock.targetAgents, ['codex', 'claude', 'gemini']);
  assert.deepEqual(lock.requiredIntegrations, ['agentmemory']);
  assert.equal(lock.agentMemory.mcpServerName, 'agentmemory');
});

test('installer supports core ai and code packs', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-ai-code-'));
  await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex'], packs: ['core', 'ai', 'code'] });
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));
  assert.deepEqual(lock.installedPacks, ['core', 'ai', 'code']);
  assert.ok(lock.installedSkills.includes('reasoning-before-action'));
  assert.ok(lock.installedSkills.includes('solid-principles'));
  assert.ok(lock.installedSkills.includes('agentmemory-integration'));
});

test('installer supports design and mcp packs', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-design-mcp-'));
  await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex'], packs: ['design', 'mcp'] });
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));
  assert.deepEqual(lock.installedPacks, ['core', 'design', 'mcp']);
  assert.ok(lock.installedSkills.includes('design-md'));
  assert.ok(lock.installedSkills.includes('mcp-tool-design'));
});

test('installer supports security devops data ml and creative packs', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-extended-'));
  await installSkills({
    projectDir: root,
    version: 'v0.1.0',
    targets: ['codex'],
    packs: ['security', 'devops', 'data', 'ml', 'creative']
  });
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));
  assert.deepEqual(lock.installedPacks, ['core', 'security', 'devops', 'data', 'ml', 'creative']);
  assert.ok(lock.installedSkills.includes('skill-security-audit'));
  assert.ok(lock.installedSkills.includes('docker-essentials'));
  assert.ok(lock.installedSkills.includes('data-analysis-duckdb'));
  assert.ok(lock.installedSkills.includes('ml-experiment-monitoring'));
  assert.ok(lock.installedSkills.includes('artifact-builder'));
});

test('installer creates planning workspace for planning pack', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-planning-'));
  const result = await installSkills({
    projectDir: root,
    version: 'v0.1.0',
    targets: ['codex'],
    packs: ['planning']
  });
  const lock = JSON.parse(await fs.readFile(path.join(root, '.agents/skills.lock.json'), 'utf8'));
  assert.deepEqual(lock.installedPacks, ['core', 'planning']);
  assert.ok(lock.installedSkills.includes('project-plan-ledger'));
  assert.ok(result.planningFiles.includes('.agent-plans\\INDEX.md') || result.planningFiles.includes('.agent-plans/INDEX.md'));
  assert.ok(await fs.stat(path.join(root, '.agent-plans', 'INDEX.md')));
  assert.ok(await fs.stat(path.join(root, '.agent-plans', 'templates', 'PLAN_TEMPLATE.md')));
  assert.ok(await fs.stat(path.join(root, '.agent-plans', 'decisions')));
});

test('doctor passes a compliant installed project', async () => {
  const root = await makeProject();
  await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex', 'claude', 'gemini'] });
  const result = await runDoctor({ projectDir: root });
  assert.equal(result.ok, true);
});

test('doctor fails when mandatory AgentMemory integration files are missing', async () => {
  const root = await makeProject();
  await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex', 'claude', 'gemini'] });
  await fs.rm(path.join(root, '.agents', 'integrations', 'agentmemory.md'));
  const result = await runDoctor({ projectDir: root });
  assert.equal(result.ok, false);
  assert.ok(result.issues.some((issue) => issue.code === 'missing_agentmemory_integration'));
});

test('doctor skips Flutter checks when Flutter pack is not installed', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-core-'));
  await installSkills({ projectDir: root, version: 'v0.1.0', targets: ['codex'], packs: ['core'] });
  const result = await runDoctor({ projectDir: root });
  assert.equal(result.ok, true);
  assert.deepEqual(result.packs, ['core']);
});
