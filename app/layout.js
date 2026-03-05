import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { getSiteConfig } from '../lib/content';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata = {
  title: { default: 'Himount Gardens', template: '%s | Himount Gardens' },
  description: 'Comfortable apartment living in Milwaukee, WI. Studio, 1BR, and 2BR apartments at Himount Gardens.'
};

export default function RootLayout({ children }) {
  const site = getSiteConfig();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader site={site} />
        {children}
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
