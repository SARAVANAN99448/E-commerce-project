import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'; // Social Icons

const Footer = () => {

    const onSubmitHandler = (event)=> {
        event.preventDefault();
    }

    return (
        <>
            <div className='relative'>
                <div className="w-[90%] mx-6 md:mx-16 bg-black rounded-3xl text-white px- py-8 md:py-12 my-12 absolute z-10">
                    <div className="max-w-6xl mx-auto md:flex items-center space-y-8 justify-between gap-24 px-8">
                        {/* Text Section */}
                        <h2 className="text-2xl md:text-4xl font-extrabold  ">
                            STAY UPTO DATE ABOUT <br className="md:hidden" /> OUR LATEST OFFERS
                        </h2>

                        {/* Input and Button Section */}
                        <div className="flex flex-col w-full md:w-1/2 space-y-4">
                            <form onSubmit={onSubmitHandler} className='flex flex-col gap-4'>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-12 py-3 rounded-full bg-white text-black outline-none" required
                                    />
                                </div>
                                <button className="w-full px-6 py-3 rounded-full bg-white text-black font-bold">
                                    Subscribe to Newsletter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="bg-gray-200 w-full  text-black pt-44 md:pt-40 pb-8 absolute top-44 z-0">
                    <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-4">
                        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                            {/* Left Side: Logo and Social Links */}
                            <div className="md:w-1/4 mr-8">
                                <h1 className="text-2xl md:text-4xl font-black pb-2">SHOP.CO</h1>
                                <p className="text-sm mt-2 mb-4 pb-2">
                                    We have clothes that suit your style and which you’re proud to wear. From women to men.
                                </p>
                                <div className="flex space-x-4">
                                    <FaTwitter className="text-gray-500 hover:text-black text-2xl" />
                                    <FaFacebookF className="text-gray-500 hover:text-black text-2xl" />
                                    <FaInstagram className="text-gray-500 hover:text-black text-2xl" />
                                    <FaGithub className="text-gray-500 hover:text-black text-2xl" />
                                </div>
                            </div>

                            {/* Right Side: Links Sections */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4">
                                <div>
                                    <h3 className="font-bold">COMPANY</h3>
                                    <ul className="mt-4 space-y-4 text-sm">
                                        <li><a href="#" className="hover:underline">About</a></li>
                                        <li><a href="#" className="hover:underline">Features</a></li>
                                        <li><a href="#" className="hover:underline">Works</a></li>
                                        <li><a href="#" className="hover:underline">Career</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold">HELP</h3>
                                    <ul className="mt-4 space-y-4 text-sm">
                                        <li><a href="#" className="hover:underline">Customer Support</a></li>
                                        <li><a href="#" className="hover:underline">Delivery Details</a></li>
                                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold">FAQ</h3>
                                    <ul className="mt-4 space-y-4 text-sm">
                                        <li><a href="#" className="hover:underline">Account</a></li>
                                        <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
                                        <li><a href="#" className="hover:underline">Orders</a></li>
                                        <li><a href="#" className="hover:underline">Payments</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold">RESOURCES</h3>
                                    <ul className="mt-4 space-y-4 text-sm">
                                        <li><a href="#" className="hover:underline">Free eBooks</a></li>
                                        <li><a href="#" className="hover:underline">Development Tutorial</a></li>
                                        <li><a href="#" className="hover:underline">How to - Blog</a></li>
                                        <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section: Copyright and Payment Methods */}
                        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
                            <p>Shop.co © 2000-2023, All Rights Reserved</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                                <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
                                <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
                                <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
