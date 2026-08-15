import { mapsUrl, site } from "../site";
import Reveal from "./Reveal";
import MiniMap from "./MiniMap";

export default function Visit() {
  const { street, city, region, postalCode } = site.address;

  return (
    <section className="visit" id="visit">
      <div className="visit__grid">
        <Reveal className="visit__left">
          <p className="eyebrow">Visit</p>
          <h2 className="section-title">
            Avinguda del
            <br />
            Pla del Vinyet 57
          </h2>

          <address className="visit__address">
            {street}
            <br />
            {postalCode} {city}
            <br />
            {region}
          </address>

          <p className="visit__note">
            15 minutes from Barcelona via C-16 Túnels de Vallvidrera.
            <br />
            8-minute walk from FGC Sant Cugat · Underground parking adjacent.
          </p>

          <div className="visit__actions">
            <a className="btn btn--solid" href={mapsUrl} target="_blank" rel="noreferrer">
              Open in Maps
            </a>
          </div>

          <dl className="visit__facts">
            <div>
              <dt>Nights</dt>
              <dd>{site.nights.map((n) => n.slice(0, 3)).join(" · ")}</dd>
            </div>
            <div>
              <dt>Upstairs</dt>
              <dd>Piano Bar — dinner, piano &amp; live music</dd>
            </div>
            <div>
              <dt>Downstairs</dt>
              <dd>House Club — house music, late</dd>
            </div>
            <div>
              <dt>Dress</dt>
              <dd>An evening worth dressing up for</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="visit__right" delay={140}>
          <MiniMap />
        </Reveal>
      </div>
    </section>
  );
}
