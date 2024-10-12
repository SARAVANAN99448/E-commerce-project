import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

    // Toggle mobile menu
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu
    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Toggle shop dropdown menu on desktop
    const handleShopMenuToggle = () => {
        setIsShopMenuOpen(!isShopMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm relative">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Hamburger menu for mobile (visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button onClick={handleMobileMenuToggle} className="text-gray-800">
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>

                {/* Logo */}
                <div className="text-3xl font-bold tracking-tight">
                    SHOP.CO
                </div>

                {/* Desktop Menu (hidden on mobile) */}
                <div className="hidden md:flex flex-grow mx-8 items-center justify-center space-x-10">
                    <div className="relative">
                        <button
                            onClick={handleShopMenuToggle}
                            className="text-gray-800 hover:underline flex items-center"
                        >
                            Shop <span className="ml-1">&#9662;</span> {/* Downward triangle for dropdown */}
                        </button>
                        {isShopMenuOpen && (
                            <div className="absolute mt-2 bg-white shadow-md rounded-md p-2 space-y-2 z-50">
                                <NavLink to="/casual" className="block text-gray-700 hover:underline">
                                    Casual
                                </NavLink>
                                <NavLink to="/formal" className="block text-gray-700 hover:underline">
                                    Formal
                                </NavLink>
                                <NavLink to="/party" className="block text-gray-700 hover:underline">
                                    Party
                                </NavLink>
                                <NavLink to="/gym" className="block text-gray-700 hover:underline">
                                    Gym
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/on-sale" className="text-gray-800 hover:underline">
                        On Sale
                    </NavLink>
                    <NavLink to="/new-arrivals" className="text-gray-800 hover:underline">
                        New Arrivals
                    </NavLink>
                    <NavLink to="/brands" className="text-gray-800 hover:underline">
                        Brands
                    </NavLink>
                </div>

                {/* Search input */}
                <div className="hidden md:flex flex-grow-0 w-1/3 relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 text-gray-700 focus:outline-none"
                    />
                    <span className="absolute left-3 top-2 text-gray-400">
                        <FiSearch className="h-6 w-6" />
                    </span>
                </div>

                {/* Cart and User icons */}
                <div className="flex items-center space-x-6">
                    <NavLink to="/cart" className="text-gray-800 hover:text-gray-500">
                        <FiShoppingCart className="h-6 w-6" />
                    </NavLink>
                    <NavLink to="/profile" className="text-gray-800 hover:text-gray-500">
                        <FiUser className="h-6 w-6" />
                    </NavLink>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={handleCloseMobileMenu}></div>
            )}

            {/* Mobile sliding menu (visible on small screens) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } ease-in-out duration-300`}
            >
                <div className="p-4 flex justify-between items-center">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={handleCloseMobileMenu} className="text-gray-800">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>
                <ul className="mt-6 space-y-4 px-4">
                    {/* Shop Dropdown */}
                    <li>
                        <span className="font-semibold">Shop</span>
                        <ul className="ml-4 mt-2 space-y-2">
                            <li>
                                <NavLink to="/casual" className="block text-gray-700 hover:underline">
                                    Casual
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/formal" className="block text-gray-700 hover:underline">
                                    Formal
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/party" className="block text-gray-700 hover:underline">
                                    Party
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/gym" className="block text-gray-700 hover:underline">
                                    Gym
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/on-sale" className="block text-gray-700 hover:underline">
                            On Sale
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-arrivals" className="block text-gray-700 hover:underline">
                            New Arrivals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/brands" className="block text-gray-700 hover:underline">
                            Brands
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
