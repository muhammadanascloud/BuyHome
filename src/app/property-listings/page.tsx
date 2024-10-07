'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import properties from '@/data/properties';
import type { Property } from '@/data/properties';

type ListingType = 'All' | 'For Sale' | 'For Rent';
type PropertyType = 'All' | 'Apartment' | 'House' | 'Villa' | 'Commercial';

export default function PropertyListings() {
  const headingClasses = `text-3xl sm:text-4xl md:text-5xl sm:leading-snug md:leading-tight mb-4 md:mb-4 lg:mb-2`;
  const sectionClasses = `pt-20 sm:pt-24 md:pt-28 pb-6`;

  const [text, setText] = useState('');
  const fullText = 'Your Dream Home is just a Search away';
  const typingSpeed = 40;

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedListingType, setSelectedListingType] = useState<ListingType>('All');
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyType>('All');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Typing effect for hero section
  useEffect(() => {
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

  // Handle search and filtering logic
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic price validation
    if (minPrice && parseInt(minPrice) <= 0) {
      setErrorMessage('Please enter a valid minimum price.');
      return;
    }

    if (maxPrice && parseInt(maxPrice) <= 0) {
      setErrorMessage('Please enter a valid maximum price.');
      return;
    }

    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
      setErrorMessage('Minimum price should not exceed maximum price.');
      return;
    }

    setErrorMessage('');

    // Filter properties based on search criteria
    const newFilteredProperties = properties.filter((property: Property) => {
      return (
        (property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedListingType === 'All' || property.listingType === selectedListingType) &&
        (selectedPropertyType === 'All' || property.title.includes(selectedPropertyType)) &&
        (!minPrice || property.price >= parseInt(minPrice)) &&
        (!maxPrice || property.price <= parseInt(maxPrice))
      );
    });

    setFilteredProperties(newFilteredProperties);
    setCurrentPage(1); // Reset pagination
  };

  // Pagination logic
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Pagination buttons rendering
  const renderPagination = () => {
    const pageNumbers = [];
    let startPage = currentPage;
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 2;
      endPage = totalPages;
    }

    startPage = Math.max(1, startPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-2 rounded-lg ${
            currentPage === i ? 'bg-accent text-heading' : 'bg-background text-text'
          } hover:bg-highlight transition-colors`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span key="right-ellipsis" className="px-3 py-2 rounded-lg text-text">
          ...
        </span>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`px-3 py-2 rounded-lg ${
            currentPage === totalPages ? 'bg-accent text-heading' : 'bg-background text-text'
          } hover:bg-highlight transition-colors`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-black text-white font-body">
      <section className="pt-16 pb-2 sm:pb-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className={headingClasses}>
            {text.split(' ').map((word, index) => (
              <span
                key={index}
                className={`${
                  word === 'Home' || word === 'Search'
                    ? 'font-bold bg-gradient-to-r from-accent to-highlight text-white px-2 py-1 mx-1'
                    : 'mx-1'
                }`}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <section className="pt-8 sm:pt-12 pb-6 md:pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <form
            className="flex flex-col md:flex-row flex-wrap items-center gap-4 mb-6"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:flex-grow px-4 py-2 border rounded-none text-black outline-none bg-white"
            />

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <select
                  value={selectedListingType}
                  onChange={(e) => setSelectedListingType(e.target.value as ListingType)}
                  className="w-full px-4 py-2 border rounded-none text-black outline-none bg-white"
                >
                  <option value="All">All</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>

              <div className="relative w-full md:w-auto">
                <select
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value as PropertyType)}
                  className="w-full px-4 py-2 border rounded-none text-black outline-none bg-white"
                >
                  <option value="All">All Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full md:w-32 px-4 py-2 border rounded-none text-black outline-none bg-white"
                min={1}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full md:w-32 px-4 py-2 border rounded-none text-black outline-none bg-white"
                min={1}
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-none hover:from-blue-400 hover:to-blue-500 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {currentProperties.length > 0 ? (
              currentProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-white mb-2">
                      {property.title}
                    </h3>
                    <p className="text-lg text-white mb-1">
                      ${property.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-300">{property.location}</p>
                    <p className="text-sm text-gray-300">
                      {property.bedrooms} Beds • {property.bathrooms} Baths
                    </p>
                    <Link
                      href={`/property-listings/${property.id}`}
                      className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center px-4 py-2 rounded-none font-bold hover:from-blue-400 hover:to-blue-500 transition-colors block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No properties found</p>
            )}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-3 py-2 rounded-lg bg-accent text-heading hover:bg-highlight transition-colors"
              >
                &lt;
              </button>
            )}

            {renderPagination()}

            {currentPage < totalPages && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-3 py-2 rounded-lg bg-accent text-heading hover:bg-highlight transition-colors"
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
