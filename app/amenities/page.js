import { getPage, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import MarkdownContent from '../components/MarkdownContent';

export const metadata = {
  title: 'Amenities | Himount Gardens',
  description: 'Amenities and community features at Himount Gardens.'
};

export default function AmenitiesPage() {
  const site = getSiteConfig();
  const page = getPage('amenities');

  return (
    <main>
      <PageHero
        title={page.title || 'Amenities'}
        subtitle="Community features designed for practical, comfortable living."
        ctaText={site.marketing_knobs?.secondary_cta || 'Schedule Tour'}
        ctaHref="/contact"
      />

      <section className="container section">
        <MarkdownContent html={page.html} />
      </section>
    </main>
  );
}
