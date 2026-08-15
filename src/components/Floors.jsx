import { floors } from "../site";
import Reveal from "./Reveal";

/** Two stacked rooms — upper lit for the piano bar, lower lit for the club. */
function FloorPlan({ active }) {
  const upper = active === "piano-bar";

  return (
    <svg className="plan" viewBox="0 0 120 120" aria-hidden="true">
      <rect
        x="14"
        y="16"
        width="92"
        height="42"
        rx="2"
        className={upper ? "plan__room plan__room--on" : "plan__room"}
      />
      <rect
        x="14"
        y="62"
        width="92"
        height="42"
        rx="2"
        className={!upper ? "plan__room plan__room--on" : "plan__room"}
      />
      <line x1="14" y1="60" x2="106" y2="60" className="plan__slab" />
      <text x="60" y="43" className="plan__label">
        {upper ? "PIANO" : "·"}
      </text>
      <text x="60" y="89" className="plan__label">
        {upper ? "·" : "HOUSE"}
      </text>
    </svg>
  );
}

export default function Floors() {
  return (
    <section className="floors" id="floors">
      <Reveal className="section-head">
        <p className="eyebrow">Two floors, one night</p>
        <h2 className="section-title">
          Piano upstairs.
          <br />
          House downstairs.
        </h2>
      </Reveal>

      <div className="floors__grid">
        {floors.map((floor, i) => (
          <Reveal
            as="article"
            key={floor.id}
            id={floor.id}
            className="floor"
            delay={i * 120}
          >
            <FloorPlan active={floor.id} />

            <p className="floor__level">{floor.level}</p>
            <h3 className="floor__name">{floor.name}</h3>
            <p className="floor__kicker">{floor.kicker}</p>
            <p className="floor__body">{floor.description}</p>

            <dl className="floor__details">
              {floor.details.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
