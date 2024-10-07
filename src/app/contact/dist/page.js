'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ContactPage() {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), message = _c[0], setMessage = _c[1];
    var _d = react_1.useState(''), successMessage = _d[0], setSuccessMessage = _d[1];
    // Handle form submission with validation
    var handleSubmit = function (e) {
        e.preventDefault();
        // Simple validation to check if all fields are filled out
        if (!name || !email || !message) {
            setSuccessMessage('Please fill out all fields.');
            return;
        }
        // Simulate form submission success
        setSuccessMessage('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
    };
    return (React.createElement("div", { className: "min-h-screen flex items-start justify-center bg-black text-white px-4 mt-24 md:mt-32" },
        React.createElement("div", { className: "w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg mt-4 md:mt-8" },
            React.createElement("h1", { className: "text-5xl md:text-6xl font-heading text-heading mb-8 text-center" },
                React.createElement("span", { className: "text-white" }, "Contact"),
                " ",
                React.createElement("span", { className: "text-blue-500" }, "Us")),
            successMessage && React.createElement("p", { className: "text-center text-green-500 mb-4" }, successMessage),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-text mb-2" }, "Your Name"),
                    React.createElement("input", { type: "text", value: name, onChange: function (e) { return setName(e.target.value); }, placeholder: "Enter your name", className: "w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent" })),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-text mb-2" }, "Your Email"),
                    React.createElement("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Enter your email", className: "w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent" })),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-text mb-2" }, "Your Message"),
                    React.createElement("textarea", { value: message, onChange: function (e) { return setMessage(e.target.value); }, placeholder: "Enter your message", rows: 5, className: "w-full px-4 py-2 rounded-lg border text-black outline-none focus:ring-2 focus:ring-accent" })),
                React.createElement("div", null,
                    React.createElement("button", { type: "submit", className: "bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-300 hover:to-blue-500 transition-all duration-300 w-full" }, "Send Message"))))));
}
exports["default"] = ContactPage;
