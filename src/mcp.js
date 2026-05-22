function send(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function tool(name, description, inputSchema) {
  return { name, description, inputSchema };
}

export async function runMcpServer(impl) {
  let buffer = Buffer.alloc(0);

  process.stdin.on('data', async (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    while (buffer.length > 0) {
      let rawMessage;
      const headerEnd = buffer.indexOf('\r\n\r\n');
      if (headerEnd >= 0) {
        const header = buffer.slice(0, headerEnd).toString('utf8');
        const match = header.match(/Content-Length:\s*(\d+)/i);
        if (!match) throw new Error('Invalid MCP message: missing Content-Length.');
        const length = Number(match[1]);
        const bodyStart = headerEnd + 4;
        const bodyEnd = bodyStart + length;
        if (buffer.length < bodyEnd) break;
        rawMessage = buffer.slice(bodyStart, bodyEnd).toString('utf8');
        buffer = buffer.slice(bodyEnd);
      } else {
        const lineEnd = buffer.indexOf('\n');
        if (lineEnd < 0) break;
        rawMessage = buffer.slice(0, lineEnd).toString('utf8').trim();
        buffer = buffer.slice(lineEnd + 1);
        if (!rawMessage) continue;
      }
      let request;
      try {
        request = JSON.parse(rawMessage);
        await handle(request, impl);
      } catch (error) {
        send({
          jsonrpc: '2.0',
          id: request?.id ?? null,
          error: { code: -32603, message: error?.message || String(error) }
        });
      }
    }
  });
}

async function handle(request, impl) {
  const { id, method, params = {} } = request;

  if (method === 'initialize') {
    send({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2024-11-05',
        capabilities: { tools: {} },
        serverInfo: { name: 'agent-skill-vault', version: '0.3.0' }
      }
    });
    return;
  }

  if (method === 'tools/list') {
    send({
      jsonrpc: '2.0',
      id,
      result: {
        tools: [
          tool('list_skills', 'List available agent skills by pack from local files or a GitHub skill repo.', {
            type: 'object',
            properties: {
              packs: { type: 'array', items: { type: 'string' } },
              sourceRepo: { type: 'string' },
              version: { type: 'string' }
            }
          }),
          tool('recommend_flutter_stack', 'Recommend Flutter state management and default packages.', {
            type: 'object',
            properties: {
              size: { type: 'string', enum: ['small', 'medium', 'large'] },
              flow: { type: 'string', enum: ['simple', 'standard', 'event-heavy'] },
              asyncComplexity: { type: 'string', enum: ['simple', 'complex'] },
              preference: { type: 'string', enum: ['Provider', 'Riverpod', 'Bloc', 'Cubit'] }
            }
          }),
          tool('install_skills', 'Install pinned skill packs into a project for Codex, Claude, and Gemini.', {
            type: 'object',
            required: ['projectDir'],
            properties: {
              projectDir: { type: 'string' },
              packs: { type: 'array', items: { type: 'string' } },
              targets: { type: 'array', items: { type: 'string', enum: ['codex', 'claude', 'gemini'] } },
              version: { type: 'string' },
              sourceRepo: { type: 'string' },
              requestedSkills: { type: 'array', items: { type: 'string' } }
            }
          }),
          tool('update_skills', 'Update already installed skills to a new pinned semver tag.', {
            type: 'object',
            required: ['projectDir', 'version'],
            properties: {
              projectDir: { type: 'string' },
              sourceRepo: { type: 'string' },
              version: { type: 'string' }
            }
          }),
          tool('doctor', 'Check a project for skill installation and pack-specific mandatory conventions.', {
            type: 'object',
            required: ['projectDir'],
            properties: {
              projectDir: { type: 'string' },
              packs: { type: 'array', items: { type: 'string' } }
            }
          })
        ]
      }
    });
    return;
  }

  if (method === 'tools/call') {
    const name = params.name;
    const args = params.arguments || {};
    let result;
    if (name === 'list_skills') result = await impl.listSkills(args);
    else if (name === 'recommend_flutter_stack' || name === 'recommend_stack') result = impl.recommendFlutterStack(args);
    else if (name === 'install_skills') result = await impl.installSkills(args);
    else if (name === 'update_skills') result = await impl.updateSkills(args);
    else if (name === 'doctor') result = await impl.runDoctor(args);
    else throw new Error(`Unknown tool: ${name}`);

    send({
      jsonrpc: '2.0',
      id,
      result: {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      }
    });
    return;
  }

  if (id !== undefined) {
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: `Unknown method: ${method}` } });
  }
}
