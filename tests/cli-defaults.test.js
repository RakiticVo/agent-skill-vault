import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

test('CLI default install uses lean context bootstrap instead of Flutter pack', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skills-context-cli-'));
  const { stdout } = await execFileAsync(process.execPath, [
    './bin/agent-skills.js',
    'install',
    '--project',
    root,
    '--targets',
    'codex'
  ]);

  const result = JSON.parse(stdout);
  assert.deepEqual(result.installedPacks, ['core', 'planning', 'ai', 'agents', 'mcp', 'research']);
  assert.equal(result.installed[0], 'using-agent-skills');
  assert.ok(result.installed.includes('context-engineering'));
  assert.ok(result.installed.includes('token-efficient-prompting'));
  assert.ok(result.installed.includes('mcp-context-routing'));
  assert.equal(result.installed.includes('agentmemory-integration'), false);
  assert.equal(result.installed.includes('flutter-clean-architecture'), false);
});
