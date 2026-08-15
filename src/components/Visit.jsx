import { mapsUrl, site } from "../site";
import Reveal from "./Reveal";

export default function Visit() {
  const { street, city, region, postalCode } = site.address;

  return (
    <section className="visit" id="visit">
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

        <a className="btn btn--solid" href={mapsUrl} target="_blank" rel="noreferrer">
          Open in Maps
        </a>
      </Reveal>

      <Reveal className="visit__right" delay={140}>
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
    </section>
  );
}
