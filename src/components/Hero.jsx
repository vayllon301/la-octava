import { useT } from "../i18n";

export default function Hero() {
  const t = useT();

  return (
    <section className="hero" id="top">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <img src="/icon.jpeg" alt="The La Octava mark" className="hero__mark" />

        <p className="eyebrow">{t.heroEyebrow}</p>

        <h1 className="hero__title">La Octava</h1>

        <div className="hero__rule" aria-hidden="true">
          <span />
          <em>{t.heroSubtitle}</em>
          <span />
        </div>

        <p className="hero__tagline">{t.tagline}</p>
        <p className="hero__summary">{t.summary}</p>

        <p className="hero__nights">
          {t.nightNames.map((night) => (
            <span key={night}>{night.slice(0, 3)}</span>
          ))}
        </p>


      </div>

      <a className="hero__scroll" href="#floors" aria-label={t.heroScrollAriaLabel}>
        <span />
      </a>
    </section>
  );
}
