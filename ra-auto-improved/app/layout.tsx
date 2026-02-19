import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RA Auto Express | Murfreesboro Auto Body Shop',
  description: 'Expert collision repair, custom paint, and complete auto services in Murfreesboro, TN. Honda specialists serving all makes and models.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
