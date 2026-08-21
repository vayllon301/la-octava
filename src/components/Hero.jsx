import { site } from "../site";
import { useT } from "../i18n";

/** "La Octava" split so each letter can drift up on its own beat. */
function Title({ text }) {
  let i = 0;

  return (
    <h1 className="hero__title" aria-label={text}>
      {text.split(" ").map((word) => (
        <span className="hero__word" key={word} aria-hidden="true">
          {[...word].map((letter) => (
            <span
              className="hero__letter"
              key={`${word}-${i}`}
              style={{ "--i": i++ }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

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
        <img
          src="/icon.jpeg"
          alt="The La Octava mark"
          className="hero__mark hero__step"
          style={{ "--step": 0 }}
        />

        <Title text={site.name} />

        <div className="hero__rule hero__step" style={{ "--step": 2 }}>
          <span aria-hidden="true" />
          <em>{t.summary}</em>
          <span aria-hidden="true" />
        </div>

        <p className="hero__tagline hero__step" style={{ "--step": 3 }}>
          {t.tagline}
        </p>

        <p className="hero__nights hero__step" style={{ "--step": 4 }}>
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
