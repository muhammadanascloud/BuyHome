'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the MapContainer component to disable SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import homeIconUrl from '/public/images/map-icons/home.png';

// Create the home icon using Leaflet's icon method
const homeIcon = L.icon({
  iconUrl: homeIconUrl.src,
  iconSize: [25, 25],  // Adjust size of the icon
  iconAnchor: [12, 24],  // Anchor point of the icon
  popupAnchor: [0, -24],  // Position of the popup in relation to the icon
});

// Define boundaries for the map
const US_BOUNDS = L.latLngBounds(
  [24.396308, -125.0],  // South-west bound
  [49.384358, -66.93457]  // North-east bound
);

// Define an array of locations with latitude and longitude tuples
const locations = [
  { position: [34.0522, -118.2437] as [number, number], label: "Los Angeles" },
  { position: [40.7128, -74.0060] as [number, number], label: "New York" },
  { position: [41.8781, -87.6298] as [number, number], label: "Chicago" },
  { position: [29.7604, -95.3698] as [number, number], label: "Houston" },
  { position: [33.4484, -112.0740] as [number, number], label: "Phoenix" },
  { position: [39.7392, -104.9903] as [number, number], label: "Denver" },
  { position: [25.7617, -80.1918] as [number, number], label: "Miami" },
];

// Map component with markers
const MapWithMarkers = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only set this to true after the component has mounted
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Do not render anything during SSR
  }

  return (
    <MapContainer
      center={[37.7749, -95.4194]}  // Center the map at a general US location
      zoom={4}  // Set the initial zoom level
      scrollWheelZoom={false}  // Disable zooming with the scroll wheel
      maxBounds={US_BOUNDS}  // Limit the map bounds to the US
      style={{ height: '500px', width: '100%' }}  // Set the map size
    >
      {/* Load a tile layer from CartoDB */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
      />
      {/* Loop through the locations and add a marker for each */}
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}  // Ensure the position is a tuple of [latitude, longitude]
          icon={homeIcon}  // Use the custom home icon
        />
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
