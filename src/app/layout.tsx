import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure that global styles are being applied
import Navbar from '@/components/Navbar'; // Assuming Navbar is located in /components
import Footer from '@/components/Footer'; // Assuming Footer is located in /components
import { siteMetadata } from './metadata'; // Importing the separated metadata

// Load Inter font with the latin subset
const inter = Inter({ subsets: ['latin'] });

// Set the metadata by importing from metadata.ts
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
        <main>{children}</main> {/* This is where the page content will be injected */}
        <Footer /> {/* Footer will appear at the bottom of all pages */}
      </body>
    </html>
  );
}
