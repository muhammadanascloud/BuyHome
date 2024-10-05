'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Navbar = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(false), isMounted = _b[0], setIsMounted = _b[1];
    var _c = react_1.useState(true), isVisible = _c[0], setIsVisible = _c[1];
    var _d = react_1.useState(0), lastScrollY = _d[0], setLastScrollY = _d[1];
    var pathname = navigation_1.usePathname();
    react_1.useEffect(function () {
        var handleScroll = function () {
            if (window.innerWidth >= 768) {
                if (window.scrollY > lastScrollY) {
                    setIsVisible(false);
                }
                else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    react_1.useEffect(function () {
        var navbar = document.getElementById('navbar');
        if (window.innerWidth >= 768 && navbar) {
            navbar.addEventListener('mouseenter', function () { return setIsVisible(true); });
            navbar.addEventListener('mouseleave', function () { return setIsVisible(false); });
        }
        return function () {
            if (navbar) {
                navbar.removeEventListener('mouseenter', function () { return setIsVisible(true); });
                navbar.removeEventListener('mouseleave', function () { return setIsVisible(false); });
            }
        };
    }, []);
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    var isActive = react_1.useMemo(function () { return function (path) {
        if (!isMounted)
            return '';
        return pathname === path
            ? 'bg-accent text-white px-4 py-2'
            : 'text-white px-4 py-2 transition-colors hover:text-blue-300';
    }; }, [isMounted, pathname]);
    return (React.createElement("nav", { id: "navbar", className: "fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-transform duration-500 " + (isVisible ? 'translate-y-0' : '-translate-y-full') },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex justify-between items-center h-16" },
                React.createElement("div", { className: "flex-shrink-0" },
                    React.createElement(link_1["default"], { href: "/", className: "text-2xl font-heading text-white" }, "BuyHome")),
                React.createElement("div", { className: "hidden md:flex space-x-6" },
                    React.createElement(link_1["default"], { href: "/", className: isActive('/') }, "Home"),
                    React.createElement(link_1["default"], { href: "/about", className: isActive('/about') }, "About"),
                    React.createElement(link_1["default"], { href: "/property-listings", className: isActive('/property-listings') }, "Properties"),
                    React.createElement(link_1["default"], { href: "/contact", className: isActive('/contact') }, "Contact")),
                React.createElement("div", { className: "md:hidden" },
                    React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "text-highlight focus:outline-none" },
                        React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' }))))),
            isOpen && (React.createElement("div", { className: "md:hidden" },
                React.createElement("div", { className: "flex flex-col space-y-4 mt-4 bg-black p-4 rounded-lg" },
                    React.createElement(link_1["default"], { href: "/", className: isActive('/') }, "Home"),
                    React.createElement(link_1["default"], { href: "/about", className: isActive('/about') }, "About"),
                    React.createElement(link_1["default"], { href: "/property-listings", className: isActive('/property-listings') }, "Properties"),
                    React.createElement(link_1["default"], { href: "/contact", className: isActive('/contact') }, "Contact")))))));
};
exports["default"] = Navbar;
