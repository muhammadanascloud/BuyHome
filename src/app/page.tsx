"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Find Your Dream Home";
  const typingSpeed = 30;

  useEffect(() => {
    AOS.init({ duration: 1000 });

    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
  }, []);

  return (
    <>
      <section className="relative flex items-center justify-center h-screen text-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/video/homepage-herovideos/video.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading text-white mb-4">
            {text.slice(0, 15)}
            {text.length >= 15 && (
              <span className="font-bold bg-gradient-to-r from-accent to-highlight text-white px-2 py-1 ml-4 inline-block">
                {text.slice(15)}
              </span>
            )}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
            Discover properties that match your lifestyle and budget with BuyHome.
          </p>

          <form className="flex items-center w-full max-w-lg mx-auto bg-secondaryBg rounded-lg overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address..."
              className="flex-grow px-4 py-3 text-black outline-none w-full"
            />
            <button className="bg-gradient-to-r from-accent to-highlight px-4 py-3 text-white font-bold hover:bg-gradient-to-r hover:from-highlight hover:to-accent transition-colors rounded-r-lg flex items-center justify-center">
              <Search className="h-6 w-6 sm:hidden" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </form>
        </div>
      </section>

      <section className="bg-black py-20 text-white px-4 sm:px-8">
        <div className="text-center mb-16" data-aos="fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="font-extrabold">How</span> It{" "}
            <span className="font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl mt-4 text-gray-400 max-w-3xl mx-auto">
            Learn how our simple 3-step process helps you find your dream property
          </p>
        </div>

        <div
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-6"
          data-aos="fade-up"
        >
          <div
            className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-in"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/images/how-it-works/Search-Properties.png"
                alt="Search Properties"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Step 1: Search Properties
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              Use our advanced search tool to find properties that match your preferences, location, and budget.
            </p>
          </div>

          <div
            className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-in"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/images/how-it-works/Get-Expert-Advice.png"
                alt="Get Expert Advice"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Step 2: Get Expert Advice
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              Our experienced agents will guide you through every step of the buying process with personalized advice.
            </p>
          </div>

          <div
            className="bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-in"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/images/how-it-works/Close-the-Deal.png"
                alt="Close the Deal"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Step 3: Close the Deal
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              Negotiate and finalize your purchase seamlessly with the help of our professionals.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-black min-h-screen flex items-center justify-center py-20"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Meet{" "}
            <span className="font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Our Team
            </span>
          </h2>
          <p className="text-gray-400 mb-16">
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Anna Oldman",
                title: "Real Estate Agent",
                img: "/images/team/1.jpeg",
              },
              {
                name: "Emily Johnson",
                title: "Marketing Specialist",
                img: "/images/team/2.jpeg",
              },
              {
                name: "Michael Smith",
                title: "Sales Director",
                img: "/images/team/3.jpeg",
              },
              {
                name: "Sarah Lee",
                title: "Design Lead",
                img: "/images/team/4.jpeg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={`${(idx + 1) * 100}`}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={450}
                  className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {member.name}
                  </h3>{" "}
                  <p className="text-base sm:text-lg md:text-xl text-white mt-2">
                    {member.title}
                  </p>{" "}
                  <div className="flex space-x-4 mt-4">
                    <Link href="#" className="text-white hover:text-highlight">
                      <i className="fab fa-behance"></i>
                    </Link>
                    <Link href="#" className="text-white hover:text-highlight">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className="text-white hover:text-highlight">
                      <i className="fab fa-github"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-8 px-6 text-center text-heading sm:min-h-0">
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/video/refer-a-friend/refer.mp4"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 w-full h-full bg-black opacity-80 z-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col justify-center sm:justify-start h-full sm:h-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
            Refer a{" "}
            <span className="font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Friend
            </span>{" "}
            & Earn{" "}
            <span className="font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text">
              Rewards
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Share the love and get rewarded when your friends buy a property with us!
          </p>
          <div
            className="flex justify-center mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-accent to-highlight rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl sm:text-4xl text-white font-bold">🎁</span>
            </div>
          </div>
          <ul
            className="text-base sm:text-lg text-gray-300 list-disc list-inside mb-4 leading-relaxed text-left max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <li className="mb-3">Earn $100 for every successful referral.</li>
            <li className="mb-3">
              No limit on how much you can earn—invite as many friends as you like!
            </li>
            <li>Help your friends find their dream home while earning rewards.</li>
          </ul>
          <div data-aos="fade-up" data-aos-delay="400" className="mb-2">
            <button className="bg-gradient-to-r from-accent to-highlight text-white px-10 py-4 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              Start Referring
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
