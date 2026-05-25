import fs from 'node:fs/promises';
import path from 'node:path';
import { packsRoot } from './paths.js';
import { resolveSkillSource } from './source.js';

const firstClassSkills = ['using-agent-skills'];

function parseFrontmatter(text) {
  if (!text.startsWith('---')) return {};
  const end = text.indexOf('\n---', 3);
  if (end === -1) return {};
  const raw = text.slice(3, end).trim();
  const result = {};
  let currentKey = null;
  for (const line of raw.split(/\r?\n/)) {
    const listMatch = line.match(/^\s*-\s+(.+)$/);
    if (listMatch && currentKey) {
      result[currentKey] ||= [];
      result[currentKey].push(listMatch[1].replace(/^["']|["']$/g, ''));
      continue;
    }
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      if (value === '') {
        result[currentKey] = [];
      } else if (value === 'true' || value === 'false') {
        result[currentKey] = value === 'true';
      } else {
        result[currentKey] = value.replace(/^["']|["']$/g, '');
      }
    }
  }
  return result;
}

async function availablePacks(packsDir) {
  const entries = await fs.readdir(packsDir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function normalizePacks(packs, packsDir) {
  const knownPacks = await availablePacks(packsDir);
  if (!packs?.length) return ['core', 'flutter'];
  const values = Array.isArray(packs) ? packs : String(packs).split(',');
  const clean = values.map((pack) => pack.trim()).filter(Boolean);
  const selected = clean.includes('all') ? knownPacks : clean;
  return [...new Set(selected)];
}

export async function loadSkillIndex({ packsDir = packsRoot, packs = ['core', 'flutter'] } = {}) {
  const requestedPacks = await normalizePacks(packs, packsDir);
  const skills = [];
  for (const pack of requestedPacks) {
    const packDir = path.join(packsDir, pack);
    const entries = await fs.readdir(packDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const skillPath = path.join(packDir, entry.name, 'SKILL.md');
      const text = await fs.readFile(skillPath, 'utf8');
      const meta = parseFrontmatter(text);
      skills.push({
        id: entry.name,
        pack,
        path: skillPath,
        name: meta.name || entry.name,
        description: meta.description || '',
        required: Boolean(meta.required),
        roles: Array.isArray(meta.roles) ? meta.roles : [],
        when_to_use: Array.isArray(meta.when_to_use) ? meta.when_to_use : [],
        source_inspired_by: Array.isArray(meta.source_inspired_by) ? meta.source_inspired_by : [],
        checks: Array.isArray(meta.checks) ? meta.checks : []
      });
    }
  }
  return skills.sort((a, b) => {
    const aPriority = firstClassSkills.indexOf(a.id);
    const bPriority = firstClassSkills.indexOf(b.id);
    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }
    return `${a.pack}/${a.id}`.localeCompare(`${b.pack}/${b.id}`);
  });
}

export async function listSkills(options = {}) {
  const source = options.sourceRepo ? await resolveSkillSource(options) : null;
  try {
    const skills = await loadSkillIndex(source ? { packsDir: source.packsDir, packs: options.packs } : options);
    const packs = [...new Set(skills.map((skill) => skill.pack))];
    return {
      sourceRepo: source?.sourceRepo || 'local',
      version: source?.version || options.version,
      packs,
      count: skills.length,
      required: skills.filter((skill) => skill.required).map((skill) => skill.id),
      optional: skills.filter((skill) => !skill.required).map((skill) => skill.id),
      skills
    };
  } finally {
    await source?.cleanup();
  }
}
