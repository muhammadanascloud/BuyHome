"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa"); // Keep other icons
var image_1 = require("next/image"); // Import Next.js Image component for optimized image handling
var link_1 = require("next/link");
function Footer() {
    return (react_1["default"].createElement("footer", { className: "bg-gradient-to-r from-black to-gray-800 text-gray-300 py-10" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4" },
            react_1["default"].createElement("section", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" },
                react_1["default"].createElement("section", null,
                    react_1["default"].createElement("h3", { className: "text-e74c3c text-lg font-semibold mb-4" }, "BuyHome"),
                    react_1["default"].createElement("p", { className: "text-ecf0f1" }, "Helping you find your dream home with the latest listings and expert advice.")),
                react_1["default"].createElement("nav", { "aria-label": "Quick Links" },
                    react_1["default"].createElement("h3", { className: "text-e74c3c text-lg font-semibold mb-4" }, "Quick Links"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/about", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" }, "About Us")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/properties", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" }, "Properties")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/contact", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" }, "Contact")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement(link_1["default"], { href: "/faqs", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" }, "FAQs")))),
                react_1["default"].createElement("section", null,
                    react_1["default"].createElement("h3", { className: "text-e74c3c text-lg font-semibold mb-4" }, "Follow Us"),
                    react_1["default"].createElement("div", { className: "flex space-x-4" },
                        react_1["default"].createElement(link_1["default"], { href: "#", "aria-label": "Facebook", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" },
                            react_1["default"].createElement(fa_1.FaFacebook, { size: 24 })),
                        react_1["default"].createElement(link_1["default"], { href: "#", "aria-label": "X (Twitter)", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" },
                            react_1["default"].createElement(image_1["default"], { src: "/images/x-icon.png", alt: "Twitter", width: 24, height: 24, className: "object-contain" })),
                        react_1["default"].createElement(link_1["default"], { href: "#", "aria-label": "LinkedIn", className: "hover:text-e67e22 transition duration-200 focus:outline-none focus:ring-2 focus:ring-e67e22" },
                            react_1["default"].createElement(fa_1.FaLinkedin, { size: 24 })))),
                react_1["default"].createElement("section", null,
                    react_1["default"].createElement("h3", { className: "text-e74c3c text-lg font-semibold mb-4" }, "Newsletter"),
                    react_1["default"].createElement("p", { className: "text-ecf0f1 mb-4" }, "Subscribe to our newsletter to receive the latest news and updates."),
                    react_1["default"].createElement("form", null,
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("label", { htmlFor: "newsletter", className: "sr-only" }, "Your Email"),
                            react_1["default"].createElement("input", { id: "newsletter", type: "email", placeholder: "Your Email", "aria-label": "Your Email", className: "w-full px-4 py-2 rounded-l-lg bg-gray-700 border-none text-ecf0f1 outline-none focus:ring-2 focus:ring-e67e22" }),
                            react_1["default"].createElement("button", { type: "submit", className: "bg-c0392b px-4 py-2 rounded-r-lg text-heading hover:bg-e74c3c transition-colors focus:outline-none focus:ring-2 focus:ring-e67e22" }, "Subscribe"))))),
            react_1["default"].createElement("section", { className: "mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm" },
                react_1["default"].createElement("p", null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " BuyHome. All rights reserved.")))));
}
exports["default"] = Footer;
