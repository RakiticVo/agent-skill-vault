import fs from 'node:fs/promises';
import path from 'node:path';
import { copyDir, ensureDir, hashFiles, listFilesRecursive, pathExists, readJson, writeJson } from './fs-utils.js';
import { loadSkillIndex } from './registry.js';
import { templatesRoot } from './paths.js';
import { resolveSkillSource } from './source.js';

const targetDirs = {
  codex: '.agents/skills',
  claude: '.claude/skills',
  gemini: '.agents/skills'
};

function normalizeSkillSelection(requestedSkills, skills) {
  if (!requestedSkills?.length || requestedSkills.includes('all')) {
    return skills.map((skill) => skill.id);
  }
  const known = new Set(skills.map((skill) => skill.id));
  const selected = new Set(skills.filter((skill) => skill.pack === 'core').map((skill) => skill.id));
  for (const id of requestedSkills) {
    if (!known.has(id)) throw new Error(`Unknown skill: ${id}`);
    selected.add(id);
  }
  return [...selected];
}

function normalizePacks(packs) {
  const values = Array.isArray(packs) ? packs : String(packs || 'flutter').split(',');
  const clean = values.map((pack) => pack.trim()).filter(Boolean);
  return [...new Set(['core', ...clean])];
}

async function writeBootstrap(projectDir, targets) {
  const files = ['AGENTS.md'];
  if (targets.includes('claude')) files.push('CLAUDE.md');
  if (targets.includes('gemini')) files.push('GEMINI.md');

  const template = await fs.readFile(path.join(templatesRoot, 'BOOTSTRAP.md'), 'utf8');
  for (const file of files) {
    await fs.writeFile(path.join(projectDir, file), template.replaceAll('{{AGENT_FILE}}', file));
  }
}

export async function installSkills({ projectDir, targets = ['codex', 'claude', 'gemini'], packs = ['flutter'], version = 'v0.1.0', requestedSkills = ['all'], sourceRepo = 'local' }) {
  const absoluteProject = path.resolve(projectDir);
  const source = await resolveSkillSource({ sourceRepo, version });
  try {
    const installedPacks = normalizePacks(packs);
    const skills = await loadSkillIndex({ packsDir: source.packsDir, packs: installedPacks });
    const selected = normalizeSkillSelection(requestedSkills, skills);
    const uniqueTargets = [...new Set(targets)];

    for (const target of uniqueTargets) {
      if (!targetDirs[target]) throw new Error(`Unsupported target: ${target}`);
      const baseDir = path.join(absoluteProject, targetDirs[target]);
      await ensureDir(baseDir);
      for (const skill of skills.filter((item) => selected.includes(item.id))) {
        await copyDir(path.dirname(skill.path), path.join(baseDir, skill.id));
      }
    }

    await writeBootstrap(absoluteProject, uniqueTargets);

    const copiedFiles = [];
    for (const target of uniqueTargets) {
      copiedFiles.push(...await listFilesRecursive(path.join(absoluteProject, targetDirs[target])));
    }

    const lock = {
      sourceRepo: source.sourceRepo,
      version: source.version,
      installedPacks,
      installedSkills: selected,
      targetAgents: uniqueTargets,
      installedAt: new Date().toISOString(),
      checksum: await hashFiles(copiedFiles)
    };

    await writeJson(path.join(absoluteProject, '.agents', 'skills.lock.json'), lock);

    return {
      projectDir: absoluteProject,
      sourceRepo: lock.sourceRepo,
      version: lock.version,
      installedPacks,
      installed: selected,
      targets: uniqueTargets,
      lockFile: path.join(absoluteProject, '.agents', 'skills.lock.json')
    };
  } finally {
    await source.cleanup();
  }
}

export async function updateSkills({ projectDir, version, sourceRepo }) {
  const absoluteProject = path.resolve(projectDir);
  const lockPath = path.join(absoluteProject, '.agents', 'skills.lock.json');
  if (!(await pathExists(lockPath))) {
    throw new Error('Missing .agents/skills.lock.json. Run install before update.');
  }
  const lock = await readJson(lockPath);
  return installSkills({
    projectDir: absoluteProject,
    targets: lock.targetAgents || ['codex', 'claude', 'gemini'],
    packs: lock.installedPacks || ['flutter'],
    version,
    requestedSkills: lock.installedSkills || ['all'],
    sourceRepo: sourceRepo || lock.sourceRepo || 'local'
  });
}
