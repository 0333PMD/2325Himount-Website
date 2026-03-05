import './globals.css';

export const metadata = {
  title: 'Himount Gardens',
  description: 'Himount Gardens apartments in Milwaukee, WI'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
