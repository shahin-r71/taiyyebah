import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taiyyebah - Premium Attar Collection',
  description: 'Discover the finest collection of premium attars and fragrances at Taiyyebah. Experience luxury scents that captivate your senses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
