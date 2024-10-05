"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccessMessage("Please fill out all fields.");
      return;
    }

    setSuccessMessage("Your message has been sent!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-black text-white px-4 mt-24 md:mt-32">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg mt-4 md:mt-8">
        <h1 className="text-5xl md:text-6xl font-heading text-heading mb-8 text-center">
          <span className="text-white">Contact</span> <span className="text-blue-500">Us</span>
        </h1>

        {successMessage && (
          <p className="text-center text-green-500 mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-text mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-text mb-2">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-text mb-2">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-300 hover:to-blue-500 transition-all duration-300 w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
