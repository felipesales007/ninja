import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'App Ninja',
  description: 'Test pour le poste de développeur chez Ninja',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
