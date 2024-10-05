"use strict";
exports.__esModule = true;
var StarRating = function (_a) {
    var rating = _a.rating;
    return (React.createElement("div", { className: "flex justify-center my-2" }, globalThis.Array(5).fill(null).map(function (_, index) { return (React.createElement("svg", { key: index, xmlns: "http://www.w3.org/2000/svg", fill: index < rating ? "#fbbf24" : "#e4e5e9", viewBox: "0 0 24 24", stroke: "none", className: "w-5 h-5" },
        React.createElement("path", { d: "M12 .587l3.668 7.573L24 9.75l-6 5.857L19.335 24 12 20.21 4.665 24 6 15.607 0 9.75l8.332-1.59z" }))); })));
};
exports["default"] = StarRating;
