import { site } from "../site";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <img src="/icon.jpeg" alt="The La Octava mark" className="hero__mark" />

        <p className="eyebrow">Sant Cugat del Vallès · Barcelona</p>

        <h1 className="hero__title">La Octava</h1>

        <div className="hero__rule" aria-hidden="true">
          <span />
          <em>Piano Bar &amp; House Club</em>
          <span />
        </div>

        <p className="hero__tagline">{site.tagline}</p>
        <p className="hero__summary">{site.summary}</p>

        <p className="hero__nights">
          {site.nights.map((night) => (
            <span key={night}>{night.slice(0, 3)}</span>
          ))}
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#piano-bar">
            Upstairs · Piano Bar
          </a>
          <a className="btn btn--ghost" href="#house-club">
            Downstairs · House Club
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#floors" aria-label="Scroll to the floors">
        <span />
      </a>
    </section>
  );
}
