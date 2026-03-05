export default function UnitsGrid({ units = [] }) {
  if (!units.length) {
    return <p className="muted">Unit information will be updated soon.</p>;
  }

  return (
    <div className="units-grid">
      {units.map((unit) => (
        <article key={unit.title} className="unit-card">
          <h3>{unit.title}</h3>
          <p className="price">{unit.price_range}</p>
          <p className="availability">Status: {unit.availability || 'Check with leasing office'}</p>
          {unit.sq_ft ? <p className="muted">{unit.sq_ft} sq ft</p> : null}
          {Array.isArray(unit.features) && unit.features.length ? (
            <ul>
              {unit.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
