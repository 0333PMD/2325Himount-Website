import { getGallery, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';

export const metadata = {
  title: 'Gallery',
  description: 'Photos of Himount Gardens apartments and community in Milwaukee, WI.'
};

export default function GalleryPage() {
  const site = getSiteConfig();
  const images = getGallery();

  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Take a look around Himount Gardens."
      />
      <section className="section">
        <div className="container">
          {images.length > 0 ? (
            <div className="gallery-grid">
              {images.map((img, i) => (
                <figure key={i} className="gallery-item">
                  <img src={img.src} alt={img.alt_text || 'Himount Gardens'} loading="lazy" />
                  {img.alt_text && <figcaption>{img.alt_text}</figcaption>}
                </figure>
              ))}
            </div>
          ) : (
            <p className="muted text-center">Photos coming soon.</p>
          )}
        </div>
      </section>
      <CtaBand site={site} />
    </main>
  );
}
