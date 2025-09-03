/* eslint-disable @next/next/no-page-custom-font */
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Svatební web',
  description: 'Svatební web, 10.10.2025',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <meta name="seznam-wmt" content="hzXbpu3bEHLMrUanKHs8TztyHyAkfeFh" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}