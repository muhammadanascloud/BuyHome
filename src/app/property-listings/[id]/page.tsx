import Link from 'next/link';
import Image from 'next/image';
import properties from '@/data/properties';

export default function PropertyListings() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <section className="pt-16 pb-2 sm:pb-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl sm:leading-snug md:leading-tight mb-4">
            Explore Our Property Listings
          </h1>
        </div>
      </section>

      <section className="pt-8 sm:pt-12 pb-6 md:pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {properties.map((property) => (
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
                  priority // Ensure the images load quickly
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
