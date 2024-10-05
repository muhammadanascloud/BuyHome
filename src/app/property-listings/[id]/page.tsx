import fs from 'fs';
import path from 'path';
import PropertySlider from '@/components/PropertySlider';
import properties, { Property } from '@/data/properties';
import { Home, Info, Car } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PropertyDetails({ params }: { params: { id: string } }) {
  const propertyId = parseInt(params.id);
  const foundProperty = properties.find((prop) => prop.id === propertyId);

  if (!foundProperty) {
    return notFound();
  }

  const imageFiles = await getPropertyImages(propertyId);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative w-full max-w-6xl mx-auto text-center py-10 mt-12 md:mt-16">
        <h1 className="text-5xl font-bold mb-4 md:text-6xl">
          {foundProperty.title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            {foundProperty.title.split(' ').slice(-1)}
          </span>
        </h1>
        <p className="text-4xl bg-gradient-to-r from-blue-500 to-blue-700 text-white inline-block px-4 py-2 rounded-lg mt-4">
          ${foundProperty.price.toLocaleString()}
        </p>
      </section>

      <section className="relative w-full max-w-6xl mx-auto mb-10 px-4 md:px-0">
        {imageFiles.length > 0 ? (
          <PropertySlider images={imageFiles} title={foundProperty.title} />
        ) : (
          <div>No images available</div>
        )}
      </section>

      <section className="max-w-6xl mx-auto p-6 mt-12 rounded-lg text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Home size={40} className="text-blue-400" />
              <h2 className="text-2xl font-semibold ml-3">General Info</h2>
            </div>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <span className="font-bold">Location:</span> {foundProperty.location}
              </li>
              <li>
                <span className="font-bold">Beds:</span> {foundProperty.bedrooms} Beds
              </li>
              <li>
                <span className="font-bold">Baths:</span> {foundProperty.bathrooms} Baths
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Info size={40} className="text-blue-400" />
              <h2 className="text-2xl font-semibold ml-3">Dimensions</h2>
            </div>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <span className="font-bold">Square Footage:</span> {foundProperty.squareFootage} sq ft
              </li>
              <li>
                <span className="font-bold">Year Built:</span> {foundProperty.yearBuilt}
              </li>
              <li>
                <span className="font-bold">Price per Sq Ft:</span> ${foundProperty.pricePerSqFt}
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Car size={40} className="text-blue-400" />
              <h2 className="text-2xl font-semibold ml-3">Amenities</h2>
            </div>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <span className="font-bold">Parking:</span> {foundProperty.parkingAvailability}
              </li>
              {foundProperty.hoaFees && (
                <li>
                  <span className="font-bold">HOA Fees:</span> ${foundProperty.hoaFees}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="p-6 bg-gray-900 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Property Description</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
            {foundProperty.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

async function getPropertyImages(propertyId: number) {
  const imageDir = path.join(process.cwd(), 'public', 'images', 'properties', `property ${propertyId}`);
  let imageFiles: string[] = [];

  try {
    const files = fs.readdirSync(imageDir);
    imageFiles = files.map((file) => `/images/properties/property ${propertyId}/${file}`);
  } catch (error) {
    console.error('Error reading image files:', error);
  }

  return imageFiles;
}
