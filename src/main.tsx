import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Prerendered pages ship real HTML and are hydrated. If the server answered with
// a different page's HTML (e.g. the SPA fallback), render fresh instead.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
if (container.dataset.path === path) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
