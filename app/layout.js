import './globals.css';
import { getSiteConfig } from '../lib/content';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata = {
  title: 'Himount Gardens',
  description: 'Himount Gardens apartments in Milwaukee, WI'
};

export default function RootLayout({ children }) {
  const site = getSiteConfig();

  return (
    <html lang="en">
      <body>
        <SiteHeader site={site} />
        {children}
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
