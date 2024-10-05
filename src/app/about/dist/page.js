"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var MapWithMarkers_1 = require("../../components/MapWithMarkers");
var reviews = [
    {
        name: "John Doe",
        avatar: "/images/reviews/1.jpeg",
        rating: 5,
        comment: "Amazing service! Highly recommended.",
        role: "Parent"
    },
    {
        name: "Jane Smith",
        avatar: "/images/reviews/2.jpeg",
        rating: 4,
        comment: "Good experience, will come back for sure.",
        role: "Developer"
    },
    {
        name: "Sam Wilson",
        avatar: "/images/reviews/3.jpeg",
        rating: 5,
        comment: "Outstanding customer service and quality work!",
        role: "Manager"
    },
    {
        name: "Emily Davis",
        avatar: "/images/reviews/4.jpeg",
        rating: 4,
        comment: "Very professional and helpful team. Great experience overall.",
        role: "Designer"
    },
];
var fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};
var fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};
function AboutUs() {
    var fullText = "Learn More About Our Vision";
    var typingSpeed = 25;
    var _a = react_1.useState(""), typedText = _a[0], setTypedText = _a[1];
    var missionVisionRef = react_1.useRef(null);
    var reviewsRef = react_1.useRef(null);
    var mapRef = react_1.useRef(null);
    var missionVisionControls = framer_motion_1.useAnimation();
    var reviewsControls = framer_motion_1.useAnimation();
    var mapControls = framer_motion_1.useAnimation();
    var isMissionVisionInView = framer_motion_1.useInView(missionVisionRef, { once: false });
    var isReviewsInView = framer_motion_1.useInView(reviewsRef, { once: false });
    var isMapInView = framer_motion_1.useInView(mapRef, { once: false });
    react_1.useEffect(function () {
        var currentIndex = 0;
        var typeText = function () {
            if (currentIndex < fullText.length) {
                setTypedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            }
        };
        typeText();
    }, []);
    react_1.useEffect(function () {
        if (isMissionVisionInView) {
            missionVisionControls.start("visible");
        }
        else {
            missionVisionControls.start("hidden");
        }
        if (isReviewsInView) {
            reviewsControls.start("visible");
        }
        else {
            reviewsControls.start("hidden");
        }
        if (isMapInView) {
            mapControls.start("visible");
        }
        else {
            mapControls.start("hidden");
        }
    }, [
        isMissionVisionInView,
        isReviewsInView,
        isMapInView,
        missionVisionControls,
        reviewsControls,
        mapControls,
    ]);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "relative flex items-center justify-center h-screen w-full text-center bg-black sm:h-3/4 md:h-screen" },
            React.createElement("div", { className: "absolute inset-0" },
                React.createElement("video", { className: "w-full h-full object-cover", src: "/video/about-us-video/aboutus.mp4", autoPlay: true, loop: true, muted: true }),
                React.createElement("div", { className: "absolute inset-0 bg-black opacity-50" })),
            React.createElement("div", { className: "relative z-10 text-white px-6 max-w-4xl" },
                React.createElement("h1", { className: "text-6xl md:text-6xl font-heading mb-6" },
                    typedText.slice(0, 10),
                    " ",
                    React.createElement("br", { className: "block sm:hidden" }),
                    typedText.slice(10, 21),
                    typedText.length >= 21 && (React.createElement("span", { className: "font-bold bg-gradient-to-r from-accent to-highlight text-white px-2 py-1 ml-2 inline-block" }, typedText.slice(21)))),
                React.createElement("p", { className: "text-lg md:text-2xl text-white mb-8" }, "Discover the story behind BuyHome and how we\u2019re dedicated to helping you find your dream property."))),
        React.createElement(framer_motion_1.motion.section, { ref: missionVisionRef, className: "py-20 px-6 bg-black text-center text-white", variants: fadeInUpVariant, initial: "hidden", animate: missionVisionControls, transition: { duration: 0.8 } },
            React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-12" },
                "Our",
                " ",
                React.createElement("span", { className: "font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Mission"),
                " ",
                "&",
                " ",
                React.createElement("span", { className: "font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Vision")),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto" },
                React.createElement(framer_motion_1.motion.div, { className: "bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105", variants: fadeInUpVariant, initial: "hidden", animate: missionVisionControls, transition: { duration: 0.8, delay: 0.2 }, "data-aos": "fade-in" },
                    React.createElement("div", { className: "flex justify-center mb-6" },
                        React.createElement(lucide_react_1.Home, { size: 48, color: "#38bdf8" })),
                    React.createElement("h3", { className: "text-2xl md:text-3xl font-semibold mb-4" },
                        React.createElement("span", { className: "text-white" }, "Our "),
                        React.createElement("span", { className: "bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Mission")),
                    React.createElement("p", { className: "text-base md:text-lg text-gray-400 mb-4" }, "Our mission is to help individuals and families find their dream homes by providing exceptional service, expert advice, and a seamless home-buying experience."),
                    React.createElement("p", { className: "text-2xl md:text-3xl font-extrabold text-blue-500" }, "10,000+"),
                    React.createElement("p", { className: "text-base md:text-lg text-gray-400" }, "Happy Clients")),
                React.createElement(framer_motion_1.motion.div, { className: "bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105", variants: fadeInUpVariant, initial: "hidden", animate: missionVisionControls, transition: { duration: 0.8, delay: 0.4 }, "data-aos": "fade-in" },
                    React.createElement("div", { className: "flex justify-center mb-6" },
                        React.createElement(lucide_react_1.Eye, { size: 48, color: "#38bdf8" })),
                    React.createElement("h3", { className: "text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Our Vision"),
                    React.createElement("p", { className: "text-base md:text-lg text-gray-400 mb-4" }, "Our vision is to be the most trusted real estate company, known for transparency, excellence, and a personalized approach to helping people find their perfect property."),
                    React.createElement("p", { className: "text-2xl md:text-3xl font-extrabold text-blue-500" }, "5,000+"),
                    React.createElement("p", { className: "text-base md:text-lg text-gray-400" }, "Homes Sold")))),
        React.createElement(framer_motion_1.motion.section, { ref: reviewsRef, className: "py-6 px-6 mb-16 bg-black text-center", variants: fadeInUpVariant, initial: "hidden", animate: reviewsControls, transition: { duration: 0.6 } },
            React.createElement(framer_motion_1.motion.div, { variants: fadeInVariant, initial: "hidden", animate: reviewsControls, transition: { duration: 0.6 } },
                React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-20 mt-2" },
                    React.createElement("span", { className: "text-white" }, "Client "),
                    React.createElement("span", { className: "font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Reviews"))),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto" }, reviews.map(function (review, index) { return (React.createElement(framer_motion_1.motion.div, { key: index, className: "bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-8 relative", style: { boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)" }, variants: fadeInUpVariant, initial: "hidden", animate: reviewsControls, transition: { duration: 0.6, delay: 0.2 * index } },
                React.createElement("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-lg" },
                    React.createElement(lucide_react_1.Quote, { size: 32, color: "#38bdf8" })),
                React.createElement("div", { className: "relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 mt-8" },
                    React.createElement(image_1["default"], { src: review.avatar, alt: review.name, layout: "fill", objectFit: "cover", className: "rounded-full" })),
                React.createElement("h3", { className: "text-xl md:text-2xl font-semibold text-white" }, review.name),
                React.createElement("p", { className: "text-gray-400 mb-4" }, review.role),
                React.createElement("p", { className: "text-gray-300 mb-6" }, review.comment),
                React.createElement("div", { className: "flex justify-center" }, Array.from({ length: review.rating }, function (_, i) { return (React.createElement("svg", { key: i, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-yellow-400", viewBox: "0 0 20 20", fill: "currentColor" },
                    React.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.21a1 1 0 00.95.69h4.418c.969 0 1.371 1.24.588 1.81l-3.58 2.598a1 1 0 00-.364 1.118l1.367 4.21c.3.921-.755 1.688-1.54 1.118l-3.581-2.598a1 1 0 00-1.175 0l-3.58 2.598c-.785.57-1.84-.197-1.54-1.118l1.367-4.21a1 1 0 00-.364-1.118L2.21 9.637c-.784-.57-.38-1.81.588-1.81h4.418a1 1 0 00.95-.69l1.367-4.21z" }))); })))); }))),
        React.createElement(framer_motion_1.motion.section, { ref: mapRef, className: "w-full py-16 px-6 bg-black text-center text-white", variants: fadeInUpVariant, initial: "hidden", animate: mapControls, transition: { duration: 0.8 } },
            React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-12" },
                React.createElement("span", { className: "text-white" }, "Our "),
                React.createElement("span", { className: "font-extrabold bg-gradient-to-r from-accent to-highlight text-transparent bg-clip-text" }, "Locations")),
            React.createElement(MapWithMarkers_1["default"], null))));
}
exports["default"] = AboutUs;
