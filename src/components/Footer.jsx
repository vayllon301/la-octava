import { mapsUrl, instagramUrl, site } from "../site";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/icon.jpeg" alt="" className="footer__mark" />

      <p className="footer__name">La Octava</p>
      <p className="footer__line">{site.tagline}</p>

      <div className="footer__links">
        <a className="footer__address" href={mapsUrl} target="_blank" rel="noreferrer">
          {site.address.street} · {site.address.postalCode} {site.address.city}
        </a>

        <a
          className="footer__instagram"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="La Octava on Instagram (@laoctavasantcugat)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>@laoctavasantcugat</span>
        </a>
      </div>

      <p className="footer__legal">
        © {new Date().getFullYear()} La Octava — Sant Cugat del Vallès
      </p>
    </footer>
  );
}
