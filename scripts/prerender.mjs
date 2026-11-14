// Renders every route to static HTML after the client build, so search engines
// and link previews get full content and per-page meta without running JS.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, routes, site } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await readFile(path.join(dist, "index.html"), "utf8");

const build = (route) => {
  const { html, head } = render(route);
  const page = template
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head)
    .replace('<div id="root"><!--app-->', `<div id="root" data-path="${route}">${html}`);
  if (page === template) throw new Error(`Template markers missing while rendering ${route}`);
  return page;
};

// Subpages first: the home page overwrites the template they are built from.
for (const route of routes.filter((r) => r !== "/")) {
  const dir = path.join(dist, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), build(route));
  console.log(`prerendered ${route}`);
}
await writeFile(path.join(dist, "404.html"), build("/404"));
await writeFile(path.join(dist, "index.html"), build("/"));
console.log("prerendered /");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${site.url}${r}</loc><lastmod>${today}</lastmod><priority>${r === "/" ? "1.0" : "0.8"}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
console.log("wrote sitemap.xml and robots.txt");

await rm(ssrDir, { recursive: true, force: true });
