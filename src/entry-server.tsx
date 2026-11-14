import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { renderHead } from "./lib/seo";
import { routes, seoForPath, site } from "./lib/site";

export { routes, site };

export function render(path: string) {
  const html = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  );
  return { html, head: renderHead(seoForPath(path)) };
}
