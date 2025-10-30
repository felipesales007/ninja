import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavbarComponent from './components/navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased bg-stone-100 dark:bg-black p-7">
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
