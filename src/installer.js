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

const mandatoryAgentMemory = {
  required: true,
  installMode: 'npx',
  mcpServerName: 'agentmemory',
  serverCommand: 'npx @agentmemory/agentmemory',
  mcpCommand: 'npx -y @agentmemory/mcp'
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

async function writeIfMissing(filePath, content) {
  if (await pathExists(filePath)) return false;
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content);
  return true;
}

async function writePlanningWorkspace(projectDir) {
  const planDir = path.join(projectDir, '.agent-plans');
  const files = [
    ['README.md', 'PLAN_README.md'],
    ['INDEX.md', 'PLAN_INDEX.md'],
    [path.join('templates', 'PLAN_TEMPLATE.md'), 'PLAN_TEMPLATE.md'],
    [path.join('templates', 'SPEC_TEMPLATE.md'), 'SPEC_TEMPLATE.md'],
    [path.join('templates', 'ADR_TEMPLATE.md'), 'ADR_TEMPLATE.md']
  ];

  const created = [];
  await ensureDir(path.join(planDir, 'active'));
  await ensureDir(path.join(planDir, 'archived'));
  await ensureDir(path.join(planDir, 'decisions'));
  await ensureDir(path.join(planDir, 'templates'));

  for (const [relativePath, templateName] of files) {
    const content = await fs.readFile(path.join(templatesRoot, templateName), 'utf8');
    const target = path.join(planDir, relativePath);
    if (await writeIfMissing(target, content)) {
      created.push(path.relative(projectDir, target));
    }
  }

  return created;
}

async function writeAgentMemoryIntegration(projectDir) {
  const integrationDir = path.join(projectDir, '.agents', 'integrations');
  await ensureDir(integrationDir);

  const guidePath = path.join(integrationDir, 'agentmemory.md');
  const configPath = path.join(integrationDir, 'agentmemory.mcp.example.json');
  const guide = `# AgentMemory Integration

AgentMemory is mandatory for projects installed with Agent Skill Vault. It gives agents a shared project memory layer across sessions.

## Default setup

Start the local memory server:

\`\`\`bash
npx @agentmemory/agentmemory
\`\`\`

Register the MCP bridge in your agent host:

\`\`\`bash
npx -y @agentmemory/mcp
\`\`\`

Use \`agentmemory\` as the MCP server name.

## Antigravity

If Antigravity allows MCP config edits and reloads, add the JSON from \`agentmemory.mcp.example.json\` and reload MCP servers.

If Antigravity does not allow the agent to reload MCP servers, paste the JSON into Antigravity's MCP config manually, then restart or reload the host.

## Advanced self-host mode

Clone and self-host \`rohitg00/agentmemory\` only when you need to pin a commit, audit source, or change server behavior. Keep the selected mode recorded in project planning notes when \`.agent-plans\` exists.

## Required checks

- AgentMemory server is started with \`npx @agentmemory/agentmemory\`.
- MCP config contains a server named \`agentmemory\`.
- The MCP bridge uses \`npx -y @agentmemory/mcp\`.
- Health is verified when possible at \`http://localhost:3111/agentmemory/health\`.
- Major setup decisions are recorded in \`.agent-plans/decisions/\` when the planning workspace exists.
`;
  const config = {
    mcpServers: {
      agentmemory: {
        command: 'npx',
        args: ['-y', '@agentmemory/mcp']
      }
    }
  };

  await fs.writeFile(guidePath, guide);
  await writeJson(configPath, config);

  return [
    path.relative(projectDir, guidePath),
    path.relative(projectDir, configPath)
  ];
}

export async function installSkills({ projectDir, targets = ['codex', 'claude', 'gemini'], packs = ['flutter'], version = 'v0.4.0', requestedSkills = ['all'], sourceRepo = 'local' }) {
  const absoluteProject = path.resolve(projectDir);
  const source = await resolveSkillSource({ sourceRepo, version });
  try {
    const installedPacks = normalizePacks(packs);
    const skills = await loadSkillIndex({ packsDir: source.packsDir, packs: [...installedPacks, 'agents'] });
    const selectableSkills = skills.filter((skill) => installedPacks.includes(skill.pack));
    const requestedForSelection = requestedSkills?.filter((id) => id !== 'agentmemory-integration') || requestedSkills;
    const selected = normalizeSkillSelection(requestedForSelection, selectableSkills);
    if (!skills.some((skill) => skill.id === 'agentmemory-integration')) {
      throw new Error('Missing mandatory skill: agentmemory-integration');
    }
    if (!selected.includes('agentmemory-integration')) selected.push('agentmemory-integration');
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
    const planningFiles = installedPacks.includes('planning') ? await writePlanningWorkspace(absoluteProject) : [];
    const integrationFiles = await writeAgentMemoryIntegration(absoluteProject);

    const copiedFiles = [];
    for (const target of uniqueTargets) {
      copiedFiles.push(...await listFilesRecursive(path.join(absoluteProject, targetDirs[target])));
    }
    const checksumFiles = [
      ...copiedFiles,
      ...integrationFiles.map((file) => path.join(absoluteProject, file))
    ];

    const lock = {
      sourceRepo: source.sourceRepo,
      version: source.version,
      installedPacks,
      installedSkills: selected,
      targetAgents: uniqueTargets,
      requiredIntegrations: ['agentmemory'],
      agentMemory: mandatoryAgentMemory,
      installedAt: new Date().toISOString(),
      checksum: await hashFiles(checksumFiles)
    };

    await writeJson(path.join(absoluteProject, '.agents', 'skills.lock.json'), lock);

    return {
      projectDir: absoluteProject,
      sourceRepo: lock.sourceRepo,
      version: lock.version,
      installedPacks,
      installed: selected,
      targets: uniqueTargets,
      planningFiles,
      integrationFiles,
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
