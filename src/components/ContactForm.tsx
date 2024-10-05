
import React from 'react';

const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/xlderjbe" method="POST" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Your email:</label>
        <input type="email" name="email" required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Your message:</label>
        <textarea name="message" required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
    </form>
  );
};

export default ContactForm;
