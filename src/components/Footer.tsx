import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Keep other icons
import Image from 'next/image'; // Import Next.js Image component for optimized image handling
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <section>
            <h3 className="text-e74c3c text-lg font-semibold mb-4">BuyHome</h3>
            <p className="text-ecf0f1">
              Helping you find your dream home with the latest listings and expert advice.
            </p>
          </section>
          <nav aria-label="Quick Links">
            <h3 className="text-e74c3c text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
          <section>
            <h3 className="text-e74c3c text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                <FaFacebook size={24} />
              </Link>

              {/* Use the downloaded Twitter icon */}
              <Link href="#" aria-label="X (Twitter)" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                <Image
                  src="/images/x-icon.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>

              <Link href="#" aria-label="LinkedIn" className="hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </section>
          <section>
            <h3 className="text-e74c3c text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-ecf0f1 mb-4">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
            <form>
              <div className="flex">
                <label htmlFor="newsletter" className="sr-only">Your Email</label>
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="w-full px-4 py-2 rounded-l-lg bg-gray-700 border-none text-ecf0f1 outline-none focus:ring-2 focus:ring-e67e22"
                />
                <button
                  type="submit"
                  className="bg-c0392b px-4 py-2 rounded-r-lg text-heading hover:bg-e74c3c transition-colors focus:outline-none focus:ring-2 focus:ring-e67e22"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </section>
        </section>
        <section className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BuyHome. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}
