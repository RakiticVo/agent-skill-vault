import fs from 'node:fs/promises';
import path from 'node:path';
import { pathExists, readJson } from './fs-utils.js';

const requiredPackages = ['get_it', 'dio', 'freezed_annotation', 'json_annotation', 'go_router'];
const recommendedAnyPackages = [
  ['provider', 'flutter_riverpod', 'flutter_bloc']
];
const requiredDirs = [
  'lib/core',
  'lib/features',
  'lib/shared',
  'test'
];
const bootstrapFiles = ['AGENTS.md', 'CLAUDE.md', 'GEMINI.md'];
const agentMemoryFiles = [
  '.agents/integrations/agentmemory.md',
  '.agents/integrations/agentmemory.mcp.example.json'
];

function normalizePacks(packs) {
  const values = Array.isArray(packs) ? packs : String(packs || '').split(',');
  return values.map((pack) => pack.trim()).filter(Boolean);
}

function parsePubspecPackages(text) {
  const packages = new Set();
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s{2}([A-Za-z0-9_]+):/);
    if (match) packages.add(match[1]);
  }
  return packages;
}

export async function runDoctor({ projectDir, packs }) {
  const root = path.resolve(projectDir);
  const issues = [];
  const warnings = [];
  let installedPacks = normalizePacks(packs);
  let lock = null;

  const lockPath = path.join(root, '.agents', 'skills.lock.json');
  if (!(await pathExists(lockPath))) {
    issues.push({ code: 'missing_skill_lock', message: 'Missing .agents/skills.lock.json. Run install first.' });
  } else {
    lock = await readJson(lockPath);
    installedPacks = installedPacks.length ? installedPacks : lock.installedPacks || ['flutter'];
    if (!lock.version || !String(lock.version).startsWith('v')) {
      issues.push({ code: 'unpinned_version', message: 'Skill version must be pinned to a semver tag like v0.1.0.' });
    }
  }

  for (const file of bootstrapFiles) {
    if (!(await pathExists(path.join(root, file)))) {
      warnings.push({ code: 'missing_bootstrap', message: `Missing ${file}; this agent may skip skill selection.` });
    }
  }

  if (lock?.requiredIntegrations?.includes('agentmemory') || lock?.agentMemory?.required) {
    for (const file of agentMemoryFiles) {
      if (!(await pathExists(path.join(root, file)))) {
        issues.push({
          code: 'missing_agentmemory_integration',
          message: `Missing required AgentMemory integration file: ${file}. Run install again, start AgentMemory with "npx @agentmemory/agentmemory", and add the agentmemory MCP config to your host.`
        });
      }
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1000);
      let response;
      try {
        response = await fetch('http://localhost:3111/agentmemory/health', { signal: controller.signal });
      } finally {
        clearTimeout(timeout);
      }
      if (!response.ok) {
        warnings.push({
          code: 'agentmemory_health_unavailable',
          message: 'AgentMemory health endpoint did not return OK. Start it with "npx @agentmemory/agentmemory" and ensure the agentmemory MCP config uses "npx -y @agentmemory/mcp".'
        });
      }
    } catch {
      warnings.push({
        code: 'agentmemory_health_unavailable',
        message: 'Could not verify AgentMemory at http://localhost:3111/agentmemory/health. Start it with "npx @agentmemory/agentmemory" and add the agentmemory MCP config to your host if it is not already registered.'
      });
    }
  }

  if (installedPacks.includes('flutter')) {
    for (const dir of requiredDirs) {
      if (!(await pathExists(path.join(root, dir)))) {
        issues.push({ code: 'missing_clean_arch_dir', message: `Missing required Clean Architecture path: ${dir}.` });
      }
    }

    const pubspecPath = path.join(root, 'pubspec.yaml');
    if (!(await pathExists(pubspecPath))) {
      warnings.push({ code: 'missing_pubspec', message: 'No pubspec.yaml found; package checks skipped.' });
    } else {
      const packages = parsePubspecPackages(await fs.readFile(pubspecPath, 'utf8'));
      for (const pkg of requiredPackages) {
        if (!packages.has(pkg)) {
          issues.push({ code: 'missing_package', message: `Missing required package: ${pkg}.` });
        }
      }
      for (const choices of recommendedAnyPackages) {
        if (!choices.some((pkg) => packages.has(pkg))) {
          issues.push({ code: 'missing_state_management', message: `Missing state management package. Add one of: ${choices.join(', ')}.` });
        }
      }
    }

    const hasTests = await pathExists(path.join(root, 'test'));
    if (!hasTests) {
      issues.push({ code: 'missing_tests', message: 'Missing test directory.' });
    }
  }

  return {
    ok: issues.length === 0,
    packs: installedPacks,
    issueCount: issues.length,
    warningCount: warnings.length,
    issues,
    warnings
  };
}
