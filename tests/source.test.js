import test from 'node:test';
import assert from 'node:assert/strict';
import { parseGithubSource } from '../src/source.js';

test('parses github shortcut source', () => {
  assert.deepEqual(parseGithubSource('github:owner/repo#v1.2.3'), {
    owner: 'owner',
    repo: 'repo',
    ref: 'v1.2.3'
  });
});

test('parses github https source', () => {
  assert.deepEqual(parseGithubSource('https://github.com/owner/agent-skill-hub.git#main'), {
    owner: 'owner',
    repo: 'agent-skill-hub',
    ref: 'main'
  });
});

test('local source does not resolve to github', () => {
  assert.equal(parseGithubSource('local'), null);
});
