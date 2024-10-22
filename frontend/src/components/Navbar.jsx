import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu
    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const { search, setSearch, setShowSearch } = useContext(ShopContext)


    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Hamburger menu for mobile (visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button onClick={handleMobileMenuToggle} className="text-gray-800">
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>

                {/* Logo */}
                <div className="text-3xl font-black tracking-tight font-integral">
                    <NavLink to="/">
                        SHOP.CO
                    </NavLink>
                </div>

                {/* Desktop Menu (hidden on mobile) */}
                <div className="hidden md:flex flex-grow mx-8 items-center justify-center space-x-10 ">
                    <div className="group realtive">
                        <div className='flex items-center gap-1'>
                            <div>
                                Shop
                            </div>
                            <div className='pt-1'>
                                <FiChevronDown />
                            </div>
                        </div>
                        <div className='group-hover:block hidden absolute dropdown-menu left-50 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
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
                        </div>
                    </div>
                    <NavLink to="/on-sale" className="text-gray-800 hover:underline">
                        On Sale
                    </NavLink>
                    <a href='#newArrival' className="text-gray-800 hover:underline">
                        New Arrivals
                    </a>
                    <a href='#Brand' className="text-gray-800 hover:underline">
                        Brands
                    </a>
                </div>

                {/* Search input */}
                <div className='flex '>
                    <div className='border border-none px-4 py-2 rounded-full hidden md:flex items-center  gap-4 bg-gray-200 '>
                        <FiSearch />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none bg-inherit pr-36' placeholder='Search' />
                    </div>
                </div>

                {/* Cart and  icons */}
                <div className="flex items-center space-x-6">

                    <FiSearch className="h-6 w-6 text-gray-800 hover:text-gray-500 md:hidden" onClick={()=>setShowSearch(true)} />

                    <NavLink to="/cart" className="text-gray-800 hover:text-gray-500 relative">
                        <FiShoppingCart className="h-6 w-6" />
                        <p className='text-[10px] py-1 px-2 bg-black text-white rounded-[50%] absolute top-[-12px] right-[-10px]'>0</p>
                    </NavLink>
                    <div className="group realtive">
                        <FiUser className="h-6 w-6" />
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={handleCloseMobileMenu}></div>
            )}

            {/* Mobile sliding menu (visible on small screens) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } ease-in-out duration-300`}>
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
                        <a href='#newArrival' className="block text-gray-700 hover:underline">
                            New Arrivals
                        </a>
                    </li>
                    <li>
                        <a href='#Brand' className="block text-gray-700 hover:underline">
                            Brands
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;



