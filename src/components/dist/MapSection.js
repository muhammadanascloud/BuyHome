"use strict";
exports.__esModule = true;
var react_leaflet_1 = require("react-leaflet");
var leaflet_1 = require("leaflet");
require("leaflet/dist/leaflet.css");
// Define the icon for each location
var iconUrls = {
    home: "/images/map-icons/Home.png",
    building: "/images/map-icons/Building.png",
    landmark: "/images/map-icons/Landmark.png",
    plane: "/images/map-icons/Plane.png"
};
// Function to create icons dynamically based on the icon URL
var createIcon = function (iconUrl) {
    return leaflet_1["default"].icon({
        iconUrl: iconUrl,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
};
var MapWithMarkers = function () {
    return (React.createElement("section", { className: "py-20 px-6 bg-gray-900 text-white text-center" },
        React.createElement("h2", { className: "text-5xl font-heading mb-10 text-white" }, "Explore Our Locations"),
        React.createElement("div", { className: "w-full h-[500px]" },
            React.createElement(react_leaflet_1.MapContainer, { center: [39.8283, -98.5795], zoom: 4, scrollWheelZoom: false, className: "h-full w-full" },
                React.createElement(react_leaflet_1.TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
                React.createElement(react_leaflet_1.Marker, { position: [34.0522, -118.2437], icon: createIcon(iconUrls.home) },
                    React.createElement(react_leaflet_1.Popup, null, "Los Angeles")),
                React.createElement(react_leaflet_1.Marker, { position: [40.7128, -74.006], icon: createIcon(iconUrls.building) },
                    React.createElement(react_leaflet_1.Popup, null, "New York")),
                React.createElement(react_leaflet_1.Marker, { position: [41.8781, -87.6298], icon: createIcon(iconUrls.landmark) },
                    React.createElement(react_leaflet_1.Popup, null, "Chicago")),
                React.createElement(react_leaflet_1.Marker, { position: [33.749, -84.388], icon: createIcon(iconUrls.plane) },
                    React.createElement(react_leaflet_1.Popup, null, "Atlanta"))))));
};
exports["default"] = MapWithMarkers;
