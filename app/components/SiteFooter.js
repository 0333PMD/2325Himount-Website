export default function SiteFooter({ site }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{site.site_title}</h3>
          <p>
            {site.address?.street}<br />
            {site.address?.city}, {site.address?.state} {site.address?.zip}
          </p>
        </div>

        <div>
          <h4>Leasing</h4>
          <p>
            Phone: <a href={`tel:${site.phone_number?.replace(/[^0-9]/g, '')}`}>{site.phone_number}</a>
          </p>
          <p>{site.footer?.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
