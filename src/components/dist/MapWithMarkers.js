"use strict";
exports.__esModule = true;
var react_leaflet_1 = require("react-leaflet");
var leaflet_1 = require("leaflet");
require("leaflet/dist/leaflet.css");
var home_png_1 = require("/public/images/map-icons/home.png");
var homeIcon = leaflet_1["default"].icon({
    iconUrl: home_png_1["default"].src,
    iconSize: [25, 25],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
});
var US_BOUNDS = leaflet_1["default"].latLngBounds([24.396308, -125.0], [49.384358, -66.93457]);
var locations = [
    { position: [34.0522, -118.2437], label: "Los Angeles" },
    { position: [40.7128, -74.006], label: "New York" },
    { position: [41.8781, -87.6298], label: "Chicago" },
    { position: [29.7604, -95.3698], label: "Houston" },
    { position: [33.4484, -112.074], label: "Phoenix" },
    { position: [39.7392, -104.9903], label: "Denver" },
    { position: [25.7617, -80.1918], label: "Miami" },
];
var MapWithMarkers = function () {
    return (React.createElement(react_leaflet_1.MapContainer, { center: [37.7749, -95.4194], zoom: 4, scrollWheelZoom: false, maxBounds: US_BOUNDS, style: { height: '500px', width: '100%' } },
        React.createElement(react_leaflet_1.TileLayer, { url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", attribution: '\u00A9 <a href="https://carto.com/attributions">CartoDB</a> contributors' }),
        locations.map(function (location, index) { return (React.createElement(react_leaflet_1.Marker, { key: index, position: location.position, icon: homeIcon })); })));
};
exports["default"] = MapWithMarkers;
