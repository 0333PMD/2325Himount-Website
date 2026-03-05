export default function PageHero({ title, subtitle, ctaText, ctaHref = '/contact' }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Himount Gardens</p>
        <h1>{title}</h1>
        {subtitle ? <p className="hero-subtitle">{subtitle}</p> : null}
        {ctaText ? (
          <a className="hero-cta" href={ctaHref}>
            {ctaText}
          </a>
        ) : null}
      </div>
    </section>
  );
}
