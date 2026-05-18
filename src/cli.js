import { installSkills, updateSkills } from './installer.js';
import { loadSkillIndex, listSkills } from './registry.js';
import { recommendStack } from './recommend.js';
import { runDoctor } from './doctor.js';
import { runMcpServer } from './mcp.js';

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      args._.push(token);
      continue;
    }
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function help() {
  return `Agent Skill Vault

Usage:
  agent-skills list [--pack all|core,planning,ai,code,flutter,kotlin,javascript,design,git,agents,mcp,research,security,devops,data,ml,creative] [--source github:user/repo|https://github.com/user/repo] [--version v0.1.0]
  agent-skills recommend-flutter-stack [--size small|medium|large] [--flow simple|standard|event-heavy] [--async simple|complex]
  agent-skills install --project <path> [--packs core,planning,ai,code,security,devops] [--source github:user/repo|https://github.com/user/repo] [--targets codex,claude,gemini] [--version v0.1.0] [--skills all|name,name]
  agent-skills update --project <path> --version <vX.Y.Z>
  agent-skills doctor --project <path> [--packs flutter]
  agent-skills mcp [--source github:user/repo|https://github.com/user/repo] [--version v0.1.0]
`;
}

export async function main(argv) {
  const args = parseArgs(argv);
  const command = args._[0];

  if (!command || command === 'help' || args.help) {
    process.stdout.write(help());
    return;
  }

  if (command === 'list') {
    printJson(await listSkills({ sourceRepo: args.source || 'local', version: args.version || 'v0.1.0', packs: args.pack || args.packs || 'all' }));
    return;
  }

  if (command === 'recommend-flutter-stack' || command === 'recommend-stack') {
    printJson(recommendStack({
      size: args.size,
      flow: args.flow,
      asyncComplexity: args.async,
      preference: args.preference
    }));
    return;
  }

  if (command === 'install') {
    if (!args.project) throw new Error('Missing --project <path>.');
    const result = await installSkills({
      projectDir: args.project,
      targets: String(args.targets || 'codex,claude,gemini').split(',').map((x) => x.trim()).filter(Boolean),
      packs: String(args.packs || 'flutter').split(',').map((x) => x.trim()).filter(Boolean),
      version: args.version || 'v0.1.0',
      requestedSkills: args.skills ? String(args.skills).split(',').map((x) => x.trim()) : ['all'],
      sourceRepo: args.source || 'local'
    });
    printJson(result);
    return;
  }

  if (command === 'update') {
    if (!args.project) throw new Error('Missing --project <path>.');
    if (!args.version) throw new Error('Missing --version <vX.Y.Z>.');
    printJson(await updateSkills({ projectDir: args.project, version: args.version }));
    return;
  }

  if (command === 'doctor') {
    if (!args.project) throw new Error('Missing --project <path>.');
    printJson(await runDoctor({ projectDir: args.project, packs: args.packs ? String(args.packs).split(',').map((x) => x.trim()).filter(Boolean) : undefined }));
    return;
  }

  if (command === 'mcp') {
    await runMcpServer({
      listSkills: (toolArgs = {}) => listSkills({ sourceRepo: toolArgs.sourceRepo || args.source || 'local', version: toolArgs.version || args.version || 'v0.1.0', packs: toolArgs.packs || 'all' }),
      loadSkillIndex,
      recommendFlutterStack: recommendStack,
      installSkills: (toolArgs) => installSkills({ ...toolArgs, sourceRepo: toolArgs.sourceRepo || args.source || 'local', version: toolArgs.version || args.version || 'v0.1.0' }),
      updateSkills: (toolArgs) => updateSkills({ ...toolArgs, sourceRepo: toolArgs.sourceRepo || args.source }),
      runDoctor
    });
    return;
  }

  throw new Error(`Unknown command: ${command}\n\n${help()}`);
}
