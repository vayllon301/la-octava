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

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${lifted ? " is-lifted" : ""}`}>
      <a className="nav__brand" href="#top" aria-label="La Octava — home">
        <img src="/icon.jpeg" alt="" className="nav__mark" />
        <span className="nav__name">La Octava</span>
      </a>

      <nav className="nav__links" aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
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
