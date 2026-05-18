import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

export async function ensureDir(target) {
  await fs.mkdir(target, { recursive: true });
}

export async function readJson(target) {
  return JSON.parse(await fs.readFile(target, 'utf8'));
}

export async function writeJson(target, value) {
  await ensureDir(path.dirname(target));
  await fs.writeFile(target, `${JSON.stringify(value, null, 2)}\n`);
}

export async function copyDir(source, destination) {
  await ensureDir(destination);
  const entries = await fs.readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      await copyDir(from, to);
    } else if (entry.isFile()) {
      await ensureDir(path.dirname(to));
      await fs.copyFile(from, to);
    }
  }
}

export async function hashFiles(files) {
  const hash = crypto.createHash('sha256');
  for (const file of files.sort()) {
    hash.update(file);
    hash.update(await fs.readFile(file));
  }
  return hash.digest('hex');
}

export async function listFilesRecursive(root) {
  if (!(await pathExists(root))) return [];
  const result = [];
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) {
      result.push(...await listFilesRecursive(full));
    } else if (entry.isFile()) {
      result.push(full);
    }
  }
  return result;
}
