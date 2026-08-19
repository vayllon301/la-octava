import { useEffect, useState } from "react";
import { mapsUrl } from "../site";

const links = [
  { href: "#piano-bar", label: "Piano Bar" },
  { href: "#house-club", label: "House Club" },
  { href: "#nights", label: "Nights" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [lifted, setLifted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrolled = window.scrollY;
      const runway = document.body.scrollHeight - window.innerHeight;
      setLifted(scrolled > 24);
      setProgress(runway > 0 ? Math.min(scrolled / runway, 1) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Light the nav link for whichever section is sitting under the header. */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav${lifted ? " is-lifted" : ""}`}>
      <span
        className="nav__progress"
        style={{ "--progress": progress }}
        aria-hidden="true"
      />

      <a className="nav__brand" href="#top" aria-label="La Octava — home">
        <img src="/icon.jpeg" alt="" className="nav__mark" />
        <span className="nav__name">La Octava</span>
      </a>

      <nav className="nav__links" aria-label="Sections">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "is-active" : undefined}
            aria-current={active === link.href ? "true" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav__cta" href={mapsUrl} target="_blank" rel="noreferrer">
        Find us
      </a>
    </header>
  );
}
