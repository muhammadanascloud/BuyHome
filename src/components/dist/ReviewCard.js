"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
// Data for 4 reviews
var reviews = [
    {
        id: 1,
        name: "John Doe",
        review: "BuyHome helped me find my dream home with ease. The service was exceptional, and the team was very professional!",
        rating: 5,
        img: "/images/reviews/1.jpeg"
    },
    {
        id: 2,
        name: "Michael Smith",
        review: "The team was very helpful throughout the entire process. I couldn't have asked for a better experience.",
        rating: 4,
        img: "/images/reviews/2.jpeg"
    },
    {
        id: 3,
        name: "Sarah Brown",
        review: "I had an amazing experience working with BuyHome. They truly understand the needs of their clients.",
        rating: 5,
        img: "/images/reviews/3.jpeg"
    },
    {
        id: 4,
        name: "Emily White",
        review: "Great service! They provided excellent advice and made the buying process so easy.",
        rating: 4,
        img: "/images/reviews/4.jpeg"
    },
];
// Star Rating Component
var StarRating = function (_a) {
    var rating = _a.rating;
    return (React.createElement("div", { className: "flex justify-center my-2" }, Array.from({ length: 5 }).map(function (_, index) { return (React.createElement("svg", { key: index, xmlns: "http://www.w3.org/2000/svg", fill: index < rating ? "#fbbf24" : "#e4e5e9", viewBox: "0 0 24 24", stroke: "none", className: "w-5 h-5" },
        React.createElement("path", { d: "M12 .587l3.668 7.573L24 9.75l-6 5.857L19.335 24 12 20.21 4.665 24 6 15.607 0 9.75l8.332-1.59z" }))); })));
};
var ReviewCard = function () {
    return (React.createElement("section", { className: "py-20 px-6 bg-gray-900 text-center" },
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-5xl" }, reviews.map(function (review, index) { return (React.createElement("div", { key: review.id, className: "bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-sm mx-auto " + (index % 2 === 0 ? "translate-y-4" : "-translate-y-4") },
            React.createElement("div", { className: "flex justify-center mb-4" },
                React.createElement(image_1["default"], { src: review.img, alt: review.name, width: 80, height: 80, className: "rounded-full object-cover border-4 border-gray-700" })),
            React.createElement("h3", { className: "text-lg font-bold text-center" }, review.name),
            React.createElement(StarRating, { rating: review.rating }),
            React.createElement("p", { className: "text-sm text-gray-300 text-center mt-2" }, review.review))); }))));
};
exports["default"] = ReviewCard;
