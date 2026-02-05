import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Shared hosting (REG.RU / ISPmanager) may serve SPA as static files via nginx
 * without fallback to /index.html. That breaks direct navigation to routes like
 * /privacy-policy and /documents.
 *
 * Workaround: after build, copy dist/index.html into:
 * - dist/privacy-policy/index.html
 * - dist/documents/index.html
 *
 * This also fixes /documents/ -> 403 (directory without index) by adding index.html
 * while keeping /documents/contract/* assets accessible.
 */

const DIST_DIR = path.resolve(process.cwd(), "dist");
const SOURCE = path.join(DIST_DIR, "index.html");

const ROUTES = ["privacy-policy", "documents"];

async function ensureExists(p) {
  try {
    await fs.access(p);
  } catch {
    throw new Error(`Missing file: ${p}. Run "npm run build" first.`);
  }
}

await ensureExists(SOURCE);
const html = await fs.readFile(SOURCE, "utf8");

await Promise.all(
  ROUTES.map(async (route) => {
    const dir = path.join(DIST_DIR, route);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, "index.html"), html, "utf8");
  }),
);

