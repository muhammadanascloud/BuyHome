"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var image_1 = require("next/image");
var react_slick_1 = require("react-slick");
function PropertySlider(_a) {
    var images = _a.images, title = _a.title;
    var sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: React.createElement(PrevArrow, null),
        nextArrow: React.createElement(NextArrow, null)
    };
    return (React.createElement("div", { className: "relative w-full max-w-6xl mx-auto" },
        React.createElement(react_slick_1["default"], __assign({}, sliderSettings), images.map(function (imageFile, idx) { return (React.createElement("div", { key: idx, className: "relative w-full h-[600px] overflow-hidden" },
            React.createElement(image_1["default"], { src: imageFile, alt: "Property image " + (idx + 1), fill: true, sizes: "100vw", className: "object-cover" }))); }))));
}
exports["default"] = PropertySlider;
function PrevArrow(props) {
    var className = props.className, onClick = props.onClick;
    return (React.createElement("div", { className: className + " absolute z-10 top-[50%] left-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer flex justify-center items-center", style: { transform: "translateY(-50%)" }, onClick: onClick }, "\u2B05\uFE0F"));
}
function NextArrow(props) {
    var className = props.className, onClick = props.onClick;
    return (React.createElement("div", { className: className + " absolute z-10 top-[50%] right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 cursor-pointer flex justify-center items-center", style: { transform: "translateY(-50%)" }, onClick: onClick }, "\u27A1\uFE0F"));
}
