// src/app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure the global CSS path is correct
import Navbar from '@/components/Navbar'; // Assuming Navbar is located in /components
import Footer from '@/components/Footer'; // Assuming Footer is located in /components
import { siteMetadata } from './metadata'; // Importing the separated metadata

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar will appear at the top of all pages */}
        <main>{children}</main> {/* Page content will be injected here */}
        <Footer /> {/* Footer will appear at the bottom of all pages */}
      </body>
    </html>
  );
}
