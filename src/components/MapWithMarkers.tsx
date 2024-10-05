import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import homeIconUrl from '/public/images/map-icons/home.png';

const homeIcon = L.icon({
  iconUrl: homeIconUrl.src,
  iconSize: [25, 25],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const US_BOUNDS = L.latLngBounds(
  [24.396308, -125.0],
  [49.384358, -66.93457]
);

const locations = [
  { position: [34.0522, -118.2437] as [number, number], label: "Los Angeles" },
  { position: [40.7128, -74.006] as [number, number], label: "New York" },
  { position: [41.8781, -87.6298] as [number, number], label: "Chicago" },
  { position: [29.7604, -95.3698] as [number, number], label: "Houston" },
  { position: [33.4484, -112.074] as [number, number], label: "Phoenix" },
  { position: [39.7392, -104.9903] as [number, number], label: "Denver" },
  { position: [25.7617, -80.1918] as [number, number], label: "Miami" },
];

const MapWithMarkers = () => {
  return (
    <MapContainer
      center={[37.7749, -95.4194]}
      zoom={4}
      scrollWheelZoom={false}
      maxBounds={US_BOUNDS}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={homeIcon} />
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
