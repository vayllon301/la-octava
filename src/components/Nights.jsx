import { useT } from "../i18n";
import Reveal from "./Reveal";

export default function Nights() {
  const t = useT();

  return (
    <section className="nights" id="nights">
      <Reveal className="section-head section-head--center">
        <p className="eyebrow">{t.nightsEyebrow}</p>
        <h2 className="section-title">{t.nightsTitle}</h2>
      </Reveal>

      <div className="nights__row">
        {t.nightNames.map((night, i) => (
          <Reveal key={night} className="night" variant="zoom" delay={i * 140}>
            <span className="night__short">{night.slice(0, 3)}</span>
            <span className="night__long">{night}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="nights__note" delay={420}>
        <p>{t.nightsNote}</p>
      </Reveal>
    </section>
  );
}
