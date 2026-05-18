import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const packsRoot = path.join(repoRoot, 'packs');
export const templatesRoot = path.join(repoRoot, 'templates');
