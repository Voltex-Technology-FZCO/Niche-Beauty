import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer, MobileCallBar } from "@/components/Footer";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import { seoForPath, services, site } from "@/lib/site";

/** Keeps title, description and canonical in sync during client-side navigation. */
function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const seo = seoForPath(path);
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${site.url}${seo.path === "/" ? "/" : seo.path}`);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <>
    <RouteEffects />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-champagne focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
    <Header />
    <main id="main">
      <Routes>
        <Route path="/" element={<Index />} />
        {services.map((s) => (
          <Route key={s.slug} path={s.path} element={<ServicePage slug={s.slug} />} />
        ))}
        {/* Legacy URLs from the previous site */}
        <Route path="/scalp-spa" element={<Navigate to="/" replace />} />
        <Route path="/location/*" element={<Navigate to="/" replace />} />
        <Route path="/team" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <MobileCallBar />
  </>
);

export default App;
