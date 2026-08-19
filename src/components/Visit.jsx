import { mapsUrl, site, visitFacts } from "../site";
import Reveal from "./Reveal";
import MiniMap from "./MiniMap";

export default function Visit() {
  const { city, postalCode } = site.address;

  return (
    <section className="visit" id="visit">
      <div className="visit__grid">
        <Reveal className="visit__left" variant="left">
          <p className="eyebrow">Visit</p>
          <h2 className="section-title">
            Avinguda del
            <br />
            Pla del Vinyet 57
          </h2>

          <address className="visit__address">
            {postalCode} {city} · Barcelona
          </address>

          <div className="visit__actions">
            <a className="btn btn--solid" href={mapsUrl} target="_blank" rel="noreferrer">
              <span>Open in Maps</span>
            </a>
          </div>

          <dl className="visit__facts">
            {visitFacts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="visit__right" variant="right" delay={140}>
          <MiniMap />
        </Reveal>
      </div>
    </section>
  );
}
