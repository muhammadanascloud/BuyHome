'use client';

import { useState, useEffect } from 'react'; 
import dynamic from 'next/dynamic';
import L, { LatLngTuple } from 'leaflet';

// Dynamically import the MapContainer component to disable SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

import 'leaflet/dist/leaflet.css';
import homeIconUrl from '/public/images/map-icons/home.png';

const homeIcon = L.icon({
  iconUrl: homeIconUrl.src,
  iconSize: [25, 25],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const US_BOUNDS: LatLngTuple[] = [
  [24.396308, -125.0],  // Southwest boundary
  [49.384358, -66.93457], // Northeast boundary
];

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
    return null;
  }

  return (
    <MapContainer
      center={[37.7749, -95.4194]}
      zoom={4}
      scrollWheelZoom={false}
      maxBounds={L.latLngBounds(US_BOUNDS)}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={homeIcon}
        />
      ))}
    </MapContainer>
  );
}
