import { useEffect, useState } from "react";
import { mapsUrl } from "../site";
import { useI18n, useT } from "../i18n";

export default function Nav() {
  const [lifted, setLifted] = useState(false);
  const { lang, toggleLang } = useI18n();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#piano-bar", label: t.navPianoBar },
    { href: "#house-club", label: t.navHouseClub },
    { href: "#nights", label: t.navNights },
    { href: "#visit", label: t.navVisit },
  ];

  return (
    <header className={`nav${lifted ? " is-lifted" : ""}`}>
      <a className="nav__brand" href="#top" aria-label={t.navAriaHome}>
        <img src="/icon.jpeg" alt="" className="nav__mark" />
        <span className="nav__name">La Octava</span>
      </a>

      <nav className="nav__links" aria-label={t.navAriaSections}>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
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
