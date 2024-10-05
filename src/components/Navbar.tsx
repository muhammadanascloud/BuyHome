'use client'; 

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth >= 768 && navbar) {
      navbar.addEventListener('mouseenter', () => setIsVisible(true));
      navbar.addEventListener('mouseleave', () => setIsVisible(false));
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener('mouseenter', () => setIsVisible(true));
        navbar.removeEventListener('mouseleave', () => setIsVisible(false));
      }
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = useMemo(
    () => (path: string) => {
      if (!isMounted) return '';
      return pathname === path
        ? 'bg-accent text-white px-4 py-2'
        : 'text-white px-4 py-2 transition-colors hover:text-blue-300';
    },
    [isMounted, pathname]
  );

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-heading text-white">
              BuyHome
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
            <Link href="/about" className={isActive('/about')}>
              About
            </Link>
            <Link href="/property-listings" className={isActive('/property-listings')}>
              Properties
            </Link>
            <Link href="/contact" className={isActive('/contact')}>
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-highlight focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 bg-black p-4 rounded-lg">
              <Link href="/" className={isActive('/')}>
                Home
              </Link>
              <Link href="/about" className={isActive('/about')}>
                About
              </Link>
              <Link href="/property-listings" className={isActive('/property-listings')}>
                Properties
              </Link>
              <Link href="/contact" className={isActive('/contact')}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
