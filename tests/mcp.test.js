import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

test('mcp initialize responds with newline-delimited JSON', async () => {
  const child = spawn(process.execPath, ['./bin/agent-skills.js', 'mcp'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  const output = await new Promise((resolve, reject) => {
    let stdout = '';
    let stderr = '';
    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error(`MCP initialize timed out. stderr: ${stderr}`));
    }, 3000);

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString('utf8');
      if (stdout.includes('\n')) {
        clearTimeout(timeout);
        child.kill();
        resolve(stdout.trim());
      }
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString('utf8');
    });
    child.on('error', (error) => {
      clearTimeout(timeout);
      reject(error);
    });

    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} })}\n`);
  });

  assert.equal(output.startsWith('Content-Length:'), false);
  const message = JSON.parse(output);
  assert.equal(message.jsonrpc, '2.0');
  assert.equal(message.result.serverInfo.name, 'agent-skill-vault');
});
