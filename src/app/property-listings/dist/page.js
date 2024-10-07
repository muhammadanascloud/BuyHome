'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var properties_1 = require("@/data/properties");
function PropertyListings() {
    var headingClasses = "text-3xl sm:text-4xl md:text-5xl sm:leading-snug md:leading-tight mb-4 md:mb-4 lg:mb-2";
    var sectionClasses = "pt-20 sm:pt-24 md:pt-28 pb-6";
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var fullText = 'Your Dream Home is just a Search away';
    var typingSpeed = 40;
    var _b = react_1.useState(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = react_1.useState('All'), selectedListingType = _c[0], setSelectedListingType = _c[1];
    var _d = react_1.useState('All'), selectedPropertyType = _d[0], setSelectedPropertyType = _d[1];
    var _e = react_1.useState(''), minPrice = _e[0], setMinPrice = _e[1];
    var _f = react_1.useState(''), maxPrice = _f[0], setMaxPrice = _f[1];
    var _g = react_1.useState(properties_1["default"]), filteredProperties = _g[0], setFilteredProperties = _g[1];
    var _h = react_1.useState(1), currentPage = _h[0], setCurrentPage = _h[1];
    var propertiesPerPage = 6;
    var _j = react_1.useState(''), errorMessage = _j[0], setErrorMessage = _j[1];
    // Typing effect for hero section
    react_1.useEffect(function () {
        var currentIndex = 0;
        var typeText = function () {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeText, typingSpeed);
            }
        };
        typeText();
    }, []);
    // Handle search and filtering logic
    var handleSearch = function (e) {
        e.preventDefault();
        // Basic price validation
        if (minPrice && parseInt(minPrice) <= 0) {
            setErrorMessage('Please enter a valid minimum price.');
            return;
        }
        if (maxPrice && parseInt(maxPrice) <= 0) {
            setErrorMessage('Please enter a valid maximum price.');
            return;
        }
        if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
            setErrorMessage('Minimum price should not exceed maximum price.');
            return;
        }
        setErrorMessage('');
        // Filter properties based on search criteria
        var newFilteredProperties = properties_1["default"].filter(function (property) {
            return ((property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (selectedListingType === 'All' || property.listingType === selectedListingType) &&
                (selectedPropertyType === 'All' || property.title.includes(selectedPropertyType)) &&
                (!minPrice || property.price >= parseInt(minPrice)) &&
                (!maxPrice || property.price <= parseInt(maxPrice)));
        });
        setFilteredProperties(newFilteredProperties);
        setCurrentPage(1); // Reset pagination
    };
    // Pagination logic
    var indexOfLastProperty = currentPage * propertiesPerPage;
    var indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    var currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
    var totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    // Pagination buttons rendering
    var renderPagination = function () {
        var pageNumbers = [];
        var startPage = currentPage;
        var endPage = Math.min(totalPages, currentPage + 2);
        if (currentPage >= totalPages - 2) {
            startPage = totalPages - 2;
            endPage = totalPages;
        }
        startPage = Math.max(1, startPage);
        var _loop_1 = function (i) {
            pageNumbers.push(React.createElement("button", { key: i, onClick: function () { return paginate(i); }, className: "px-3 py-2 rounded-lg " + (currentPage === i ? 'bg-accent text-heading' : 'bg-background text-text') + " hover:bg-highlight transition-colors" }, i));
        };
        for (var i = startPage; i <= endPage; i++) {
            _loop_1(i);
        }
        if (endPage < totalPages - 1) {
            pageNumbers.push(React.createElement("span", { key: "right-ellipsis", className: "px-3 py-2 rounded-lg text-text" }, "..."));
        }
        if (endPage < totalPages) {
            pageNumbers.push(React.createElement("button", { key: totalPages, onClick: function () { return paginate(totalPages); }, className: "px-3 py-2 rounded-lg " + (currentPage === totalPages ? 'bg-accent text-heading' : 'bg-background text-text') + " hover:bg-highlight transition-colors" }, totalPages));
        }
        return pageNumbers;
    };
    return (React.createElement("div", { className: "min-h-screen bg-black text-white font-body" },
        React.createElement("section", { className: "pt-16 pb-2 sm:pb-4 text-center" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h1", { className: headingClasses }, text.split(' ').map(function (word, index) { return (React.createElement("span", { key: index, className: "" + (word === 'Home' || word === 'Search'
                        ? 'font-bold bg-gradient-to-r from-accent to-highlight text-white px-2 py-1 mx-1'
                        : 'mx-1') }, word)); })))),
        React.createElement("section", { className: "pt-8 sm:pt-12 pb-6 md:pb-8 px-6" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("form", { className: "flex flex-col md:flex-row flex-wrap items-center gap-4 mb-6", onSubmit: handleSearch },
                    React.createElement("input", { type: "text", placeholder: "Search by city, neighborhood, or address...", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, className: "w-full md:flex-grow px-4 py-2 border rounded-none text-black outline-none bg-white" }),
                    React.createElement("div", { className: "flex flex-col md:flex-row gap-4 w-full md:w-auto" },
                        React.createElement("div", { className: "relative w-full md:w-auto" },
                            React.createElement("select", { value: selectedListingType, onChange: function (e) { return setSelectedListingType(e.target.value); }, className: "w-full px-4 py-2 border rounded-none text-black outline-none bg-white" },
                                React.createElement("option", { value: "All" }, "All"),
                                React.createElement("option", { value: "For Sale" }, "For Sale"),
                                React.createElement("option", { value: "For Rent" }, "For Rent"))),
                        React.createElement("div", { className: "relative w-full md:w-auto" },
                            React.createElement("select", { value: selectedPropertyType, onChange: function (e) { return setSelectedPropertyType(e.target.value); }, className: "w-full px-4 py-2 border rounded-none text-black outline-none bg-white" },
                                React.createElement("option", { value: "All" }, "All Types"),
                                React.createElement("option", { value: "Apartment" }, "Apartment"),
                                React.createElement("option", { value: "House" }, "House"),
                                React.createElement("option", { value: "Villa" }, "Villa"),
                                React.createElement("option", { value: "Commercial" }, "Commercial"))),
                        React.createElement("input", { type: "number", placeholder: "Min Price", value: minPrice, onChange: function (e) { return setMinPrice(e.target.value); }, className: "w-full md:w-32 px-4 py-2 border rounded-none text-black outline-none bg-white", min: 1 }),
                        React.createElement("input", { type: "number", placeholder: "Max Price", value: maxPrice, onChange: function (e) { return setMaxPrice(e.target.value); }, className: "w-full md:w-32 px-4 py-2 border rounded-none text-black outline-none bg-white", min: 1 }),
                        React.createElement("button", { type: "submit", className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-none hover:from-blue-400 hover:to-blue-500 transition-colors" }, "Search"))),
                errorMessage && React.createElement("p", { className: "text-red-500" }, errorMessage),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" }, currentProperties.length > 0 ? (currentProperties.map(function (property) { return (React.createElement("div", { key: property.id, className: "bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform" },
                    React.createElement(image_1["default"], { src: property.imageUrl, alt: property.title, width: 400, height: 300, className: "w-full h-56 object-cover" }),
                    React.createElement("div", { className: "p-6" },
                        React.createElement("h3", { className: "text-2xl font-heading text-white mb-2" }, property.title),
                        React.createElement("p", { className: "text-lg text-white mb-1" },
                            "$",
                            property.price.toLocaleString()),
                        React.createElement("p", { className: "text-sm text-gray-300" }, property.location),
                        React.createElement("p", { className: "text-sm text-gray-300" },
                            property.bedrooms,
                            " Beds \u2022 ",
                            property.bathrooms,
                            " Baths"),
                        React.createElement(link_1["default"], { href: "/property-listings/" + property.id, className: "mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center px-4 py-2 rounded-none font-bold hover:from-blue-400 hover:to-blue-500 transition-colors block" }, "View Details")))); })) : (React.createElement("p", { className: "text-white" }, "No properties found"))),
                React.createElement("div", { className: "flex justify-center mt-8 space-x-2" },
                    currentPage > 1 && (React.createElement("button", { onClick: function () { return paginate(currentPage - 1); }, className: "px-3 py-2 rounded-lg bg-accent text-heading hover:bg-highlight transition-colors" }, "<")),
                    renderPagination(),
                    currentPage < totalPages && (React.createElement("button", { onClick: function () { return paginate(currentPage + 1); }, className: "px-3 py-2 rounded-lg bg-accent text-heading hover:bg-highlight transition-colors" }, ">")))))));
}
exports["default"] = PropertyListings;
