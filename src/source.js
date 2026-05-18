import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { repoRoot, packsRoot } from './paths.js';
import { pathExists } from './fs-utils.js';

const execFileAsync = promisify(execFile);

export function parseGithubSource(source) {
  if (!source || source === 'local') return null;

  const githubShortcut = source.match(/^github:([^/]+)\/([^#]+)(?:#(.+))?$/);
  if (githubShortcut) {
    return {
      owner: githubShortcut[1],
      repo: githubShortcut[2].replace(/\.git$/, ''),
      ref: githubShortcut[3]
    };
  }

  const url = new URL(source);
  if (url.hostname !== 'github.com') {
    throw new Error(`Unsupported source host: ${url.hostname}. Only github.com is supported.`);
  }

  const parts = url.pathname.replace(/^\/|\/$/g, '').split('/');
  if (parts.length < 2) throw new Error(`Invalid GitHub source URL: ${source}`);

  return {
    owner: parts[0],
    repo: parts[1].replace(/\.git$/, ''),
    ref: url.hash ? url.hash.slice(1) : undefined
  };
}

async function downloadGithubTarball({ owner, repo, ref }) {
  const response = await fetch(`https://codeload.github.com/${owner}/${repo}/tar.gz/${encodeURIComponent(ref)}`);
  if (!response.ok) {
    throw new Error(`Failed to download ${owner}/${repo}@${ref}: ${response.status} ${response.statusText}`);
  }

  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'agent-skill-hub-'));
  const archivePath = path.join(tempDir, 'source.tar.gz');
  await fs.writeFile(archivePath, Buffer.from(await response.arrayBuffer()));
  await execFileAsync('tar', ['-xzf', archivePath, '-C', tempDir]);

  const entries = await fs.readdir(tempDir, { withFileTypes: true });
  const extracted = entries.find((entry) => entry.isDirectory());
  if (!extracted) throw new Error('Downloaded GitHub archive did not contain a repository directory.');

  return path.join(tempDir, extracted.name);
}

export async function resolveSkillSource({ sourceRepo = 'local', version = 'v0.1.0' } = {}) {
  const github = parseGithubSource(sourceRepo);
  if (!github) {
    return {
      sourceRepo: 'local',
      version,
      rootDir: repoRoot,
      packsDir: packsRoot,
      cleanup: async () => {}
    };
  }

  const ref = github.ref || version;
  const rootDir = await downloadGithubTarball({ ...github, ref });
  const resolvedPacksRoot = path.join(rootDir, 'packs');
  if (!(await pathExists(resolvedPacksRoot))) {
    throw new Error(`GitHub source ${sourceRepo}@${ref} does not contain a packs directory.`);
  }

  return {
    sourceRepo: `https://github.com/${github.owner}/${github.repo}`,
    version: ref,
    rootDir,
    packsDir: resolvedPacksRoot,
    cleanup: async () => {
      await fs.rm(path.dirname(rootDir), { recursive: true, force: true });
    }
  };
}
