import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const NotFound = () => (
  <section className="grain relative flex min-h-[100svh] items-center bg-espresso">
    <div className="container relative text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 text-5xl text-cream md:text-7xl">
        This page has <span className="accent">stepped out.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md text-cream/65">
        The page you&rsquo;re looking for isn&rsquo;t here, but your appointment still can be.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link to="/" className="btn-gold">
          Return Home
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
        <a href={site.phoneHref} className="btn-ghost">
          Call {site.phone}
        </a>
      </div>
    </div>
  </section>
);

export default NotFound;
