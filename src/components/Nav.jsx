import { useEffect, useState } from "react";
import { mapsUrl } from "../site";
import { useI18n, useT } from "../i18n";

const SECTION_IDS = ["piano-bar", "house-club", "nights", "visit"];

export default function Nav() {
  const [lifted, setLifted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const { lang, toggleLang } = useI18n();
  const t = useT();

  const labels = [t.navPianoBar, t.navHouseClub, t.navNights, t.navVisit];
  const links = SECTION_IDS.map((id, i) => ({ href: `#${id}`, label: labels[i] }));

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

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );

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

      <a className="nav__brand" href="#top" aria-label={t.navAriaHome}>
        <img src="/icon.jpeg" alt="" className="nav__mark" />
        <span className="nav__name">La Octava</span>
      </a>

      <nav className="nav__links" aria-label={t.navAriaSections}>
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

      <div className="nav__right">
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          type="button"
        >
          <span className={`lang-toggle__option${lang === "en" ? " is-active" : ""}`}>EN</span>
          <span className="lang-toggle__sep" aria-hidden="true">/</span>
          <span className={`lang-toggle__option${lang === "es" ? " is-active" : ""}`}>ES</span>
        </button>

        <a className="nav__cta" href={mapsUrl} target="_blank" rel="noreferrer">
          {t.navFindUs}
        </a>
      </div>
    </header>
  );
}
