import { site } from "../site";
import Reveal from "./Reveal";

export default function Nights() {
  return (
    <section className="nights" id="nights">
      <Reveal className="section-head section-head--center">
        <p className="eyebrow">Open three nights</p>
        <h2 className="section-title">Thursday to Saturday</h2>
      </Reveal>

      <div className="nights__row">
        {site.nights.map((night, i) => (
          <Reveal key={night} className="night" variant="zoom" delay={i * 140}>
            <span className="night__short">{night.slice(0, 3)}</span>
            <span className="night__long">{night}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="nights__note" delay={420}>
        <p>Tables are limited — worth asking ahead.</p>
      </Reveal>
    </section>
  );
}
