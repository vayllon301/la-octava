import { mapsUrl, site } from "../site";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/icon.jpeg" alt="" className="footer__mark" />

      <p className="footer__name">La Octava</p>
      <p className="footer__line">{site.tagline}</p>

      <a className="footer__address" href={mapsUrl} target="_blank" rel="noreferrer">
        {site.address.street} · {site.address.postalCode} {site.address.city}
      </a>

      <p className="footer__legal">
        © {new Date().getFullYear()} La Octava — Sant Cugat del Vallès
      </p>
    </footer>
  );
}
