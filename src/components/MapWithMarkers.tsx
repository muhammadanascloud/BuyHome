'use client';

import { useState, useEffect } from 'react'; 
import dynamic from 'next/dynamic';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dynamically import the Map components from react-leaflet to prevent SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

// Import custom icon for the home marker
import homeIconUrl from '/public/images/map-icons/home.png';

// Define the custom home icon using Leaflet's L.icon
const homeIcon: L.Icon = L.icon({
  iconUrl: homeIconUrl.src,
  iconSize: [25, 25],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

// Define US bounds for map restriction
const US_BOUNDS: LatLngTuple[] = [
  [24.396308, -125.0],  // Southwest boundary
  [49.384358, -66.93457], // Northeast boundary
];

// List of locations to add markers for
const locations: { position: LatLngTuple; label: string }[] = [
  { position: [34.0522, -118.2437], label: "Los Angeles" },
  { position: [40.7128, -74.0060], label: "New York" },
  // Add more locations if needed
];

export default function MapWithMarkers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null if still server-side rendering
  }

  return (
    <MapContainer
      center={[37.7749, -95.4194] as LatLngTuple} // Use LatLngTuple to typecast center
      zoom={4}                                   // Initial zoom level
      scrollWheelZoom={false}                    // Disable scroll wheel zoom
      maxBounds={L.latLngBounds(US_BOUNDS)}      // Restrict map to US bounds
      style={{ height: '500px', width: '100%' }} // Map dimensions
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
        attribution={'&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors' as unknown as string}
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={homeIcon as L.Icon} // Typecast homeIcon to L.Icon
        />
      ))}
    </MapContainer>
  );
}
