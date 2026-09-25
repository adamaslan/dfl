import fs from "node:fs";
import path from "node:path";
import { SITE_URL } from "./site-url";

const APP_DIR = path.join(process.cwd(), "src", "app");
const EXCLUDED_DIRS = new Set(["api", "admin", "chatbot", "styles", "fonts"]);
const PAGE_FILES = ["page.js", "page.jsx", "page.tsx"];

function hasPage(dir) {
  return PAGE_FILES.some((file) => fs.existsSync(path.join(dir, file)));
}

function listRoutes() {
  return fs
    .readdirSync(APP_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !EXCLUDED_DIRS.has(name) && !name.startsWith("(") && !name.startsWith("["))
    .filter((name) => hasPage(path.join(APP_DIR, name)))
    .sort();
}

export default function sitemap() {
  const lastModified = new Date();
  const home = { url: SITE_URL, lastModified };
  return [home, ...listRoutes().map((name) => ({ url: `${SITE_URL}/${name}`, lastModified }))];
}
