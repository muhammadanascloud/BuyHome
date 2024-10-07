'use client'; // Mark this component as a Client Component since it uses React hooks

import Image from 'next/image';
import { Home, Eye, Quote } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Typings for reviews
type Review = {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  role: string;
};

const reviews: Review[] = [
  {
    name: 'John Doe',
    avatar: '/images/reviews/1.jpeg',
    rating: 5,
    comment: 'Amazing service! Highly recommended.',
    role: 'Parent',
  },
  {
    name: 'Jane Smith',
    avatar: '/images/reviews/2.jpeg',
    rating: 4,
    comment: 'Good experience, will come back for sure.',
    role: 'Developer',
  },
];

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const fullText = 'Learn More About Our Vision';
  const typingSpeed = 25;
  const [typedText, setTypedText] = useState('');

  const missionVisionRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const missionVisionControls = useAnimation();
  const reviewsControls = useAnimation();

  // Typing animation for the header
  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  }, []);

  // Scroll-based animation for mission/vision and reviews
  useEffect(() => {
    const handleScroll = () => {
      if (missionVisionRef.current?.getBoundingClientRect().top! < window.innerHeight) {
        missionVisionControls.start('visible');
      }
      if (reviewsRef.current?.getBoundingClientRect().top! < window.innerHeight) {
        reviewsControls.start('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [missionVisionControls, reviewsControls]);

  return (
    <>
      {/* Header Section */}
      <section className="relative flex items-center justify-center h-screen w-full text-center bg-black">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" src="/video/about-us-video/aboutus.mp4" autoPlay loop muted />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 text-white px-6 max-w-4xl">
          <h1 className="text-6xl font-heading mb-6">{typedText}</h1>
          <p className="text-lg text-white mb-8">
            Discover the story behind BuyHome and how we’re dedicated to helping you find your dream property.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <motion.section
        ref={missionVisionRef}
        className="py-20 px-6 bg-black text-center text-white"
        variants={fadeInUpVariant}
        initial="hidden"
        animate={missionVisionControls}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="font-extrabold text-accent">Mission</span> &{' '}
          <span className="font-extrabold text-accent">Vision</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105"
            variants={fadeInUpVariant}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <Home size={48} color="#38bdf8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">
              Our mission is to help individuals and families find their dream homes by providing exceptional service.
            </p>
            <p className="text-2xl font-extrabold text-blue-500">10,000+</p>
            <p className="text-gray-400">Happy Clients</p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105"
            variants={fadeInUpVariant}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-center mb-6">
              <Eye size={48} color="#38bdf8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-4">
              Our vision is to be the most trusted real estate company, known for transparency and excellence.
            </p>
            <p className="text-2xl font-extrabold text-blue-500">5,000+</p>
            <p className="text-gray-400">Homes Sold</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        ref={reviewsRef}
        className="py-6 px-6 mb-16 bg-black text-center"
        variants={fadeInUpVariant}
        initial="hidden"
        animate={reviewsControls}
        transition={{ duration: 0.6 }}
      >
        <motion.div variants={fadeInUpVariant}>
          <h2 className="text-4xl font-bold mb-20">
            Client <span className="font-extrabold text-accent">Reviews</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 shadow-lg rounded-lg p-8 relative"
              variants={fadeInUpVariant}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full">
                <Quote size={32} color="#38bdf8" />
              </div>
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 mt-8">
                <Image src={review.avatar} alt={review.name} width={80} height={80} />
              </div>
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-gray-400">{review.role}</p>
              <p className="text-gray-300">{review.comment}</p>
              <div className="flex justify-center">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.21a1 1 0 00.95.69h4.418c.969 0 1.371 1.24.588 1.81l-3.58 2.598a1 1 0 00-.364 1.118l1.367 4.21c.3.921-.755 1.688-1.54 1.118l-3.581-2.598a1 1 0 00-1.175 0l-3.58 2.598c-.785.57-1.84-.197-1.54-1.118l1.367-4.21a1 1 0 00-.364-1.118L2.21 9.637c-.784-.57-.38-1.81.588-1.81h4.418a1 1 0 00.95-.69l1.367-4.21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
