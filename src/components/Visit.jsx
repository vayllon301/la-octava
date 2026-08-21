import { mapsUrl, site } from "../site";
import { useT } from "../i18n";
import Reveal from "./Reveal";
import MiniMap from "./MiniMap";

export default function Visit() {
  const t = useT();
  const { street, city, region, postalCode } = site.address;

  return (
    <section className="visit" id="visit">
      <div className="visit__grid">
        <Reveal className="visit__left">
          <p className="eyebrow">{t.visitEyebrow}</p>
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
            {t.visitNote1}
            <br />
            {t.visitNote2}
          </p>

          <div className="visit__actions">
            <a className="btn btn--solid" href={mapsUrl} target="_blank" rel="noreferrer">
              {t.visitOpenMaps}
            </a>
          </div>

          <dl className="visit__facts">
            <div>
              <dt>{t.visitNightsLabel}</dt>
              <dd>{t.nightNames.map((n) => n.slice(0, 3)).join(" · ")}</dd>
            </div>
            <div>
              <dt>{t.visitUpstairsLabel}</dt>
              <dd>{t.visitUpstairsValue}</dd>
            </div>
            <div>
              <dt>{t.visitDownstairsLabel}</dt>
              <dd>{t.visitDownstairsValue}</dd>
            </div>
            <div>
              <dt>{t.visitDressLabel}</dt>
              <dd>{t.visitDressValue}</dd>
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
