"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactForm = function () {
    return (react_1["default"].createElement("form", { action: "https://formspree.io/f/xlderjbe", method: "POST", className: "max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" },
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Your email:"),
            react_1["default"].createElement("input", { type: "email", name: "email", required: true, className: "mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { className: "block text-sm font-medium text-gray-700" }, "Your message:"),
            react_1["default"].createElement("textarea", { name: "message", required: true, className: "mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm" })),
        react_1["default"].createElement("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" }, "Send")));
};
exports["default"] = ContactForm;
