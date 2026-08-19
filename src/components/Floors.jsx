import { floors } from "../site";
import Reveal from "./Reveal";

/**
 * Two stacked rooms — the lit one belongs to this card. Inside it, three marks
 * keep time: piano keys upstairs, a level meter downstairs. The outlines draw
 * themselves in once the card reveals (see .floor.is-visible in App.css).
 */
function FloorPlan({ active }) {
  const upper = active === "piano-bar";

  return (
    <svg className={`plan plan--${active}`} viewBox="0 0 120 120" aria-hidden="true">
      <rect
        x="14"
        y="16"
        width="92"
        height="42"
        rx="2"
        className={`plan__room${upper ? " plan__room--on" : ""}`}
      />
      <rect
        x="14"
        y="62"
        width="92"
        height="42"
        rx="2"
        className={`plan__room${upper ? "" : " plan__room--on"}`}
      />
      <line x1="14" y1="60" x2="106" y2="60" className="plan__slab" />

      <g className="plan__marks" transform={upper ? "translate(0 0)" : "translate(0 46)"}>
        {[0, 1, 2].map((n) => (
          <rect
            key={n}
            x={46 + n * 10}
            y="25"
            width="5"
            height="13"
            rx="1"
            className={upper ? "plan__key" : "plan__bar"}
            style={{ "--n": n }}
          />
        ))}
      </g>

      <text x="60" y={upper ? 52 : 98} className="plan__label">
        {upper ? "PIANO" : "HOUSE"}
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
            variant={i === 0 ? "left" : "right"}
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
