import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HomeNavbar = () => {
    const navigate = useNavigate();

    const handlePageChange = (e) => {
        const value = e.target.value;
        if (value) navigate(value);
    };

    return (
        <div>
            {/* Top Banner Section */}
            <div className="w-full bg-[rgba(75,62,196,1)]">
                <div className="mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 h-auto py-2 sm:h-[55.8px] px-4 sm:px-2">
                    <button className="w-auto px-3 h-[20.39px] rounded-[800px] bg-white font-inter font-bold text-[12px] leading-[20.4px] text-center text-black">
                        Special
                    </button>
                    <p className='font-inter font-normal text-[14px] leading-[23.8px] text-center text-white'>
                        Get 10% <span className="font-bold uppercase">Discount</span> for first order
                    </p>
                    <Link to="/register" className='font-inter font-normal italic text-[14px] leading-[23.8px] underline text-white'>
                        Register Now
                    </Link>
                </div>
            </div>

          {/* Main Navbar Section */}
          <div className='w-full px-4 md:w-11/12 mx-auto bg-white'>
              {/* Logo, Search, Hotline, and Icons */}
              <div className="flex flex-col md:flex-row justify-between items-center border-b-[1px] h-auto md:h-[111px] py-4 md:p-0 gap-4 md:gap-0">

                {/* Logo - Centered on mobile */}
                <div className="flex-shrink-0">
                    <img
                        className="w-[150px] h-[40px]"
                        src="https://i.ibb.co/SXVjdKs1/fc5fee22bca55277d3a8957a96c6ca225392b9fc.png"
                        alt="Logo"
                    />
                </div>

                {/* Search Bar - Full width on mobile */}
                <div className="flex items-center w-full md:w-[421px] h-[47px] rounded-[30px] border border-solid border-gray-300 overflow-hidden">
                    <select className="hidden sm:block w-[140px] h-[45px] rounded-l-[4px] bg-[#EBEEF6] px-3 font-inter text-[13px] leading-[19.5px] outline-none">
                        <option>All Categories</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="flex-1 h-[45px] px-3 outline-none font-sans text-[13px]"
                    />

                    <button className="w-[42px] h-[42px] rounded-full bg-[rgba(75,62,196,1)] flex justify-center items-center flex-shrink-0 m-1">
                        <FontAwesomeIcon className="text-white text-[16px]" icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* Hotline Info - Aligned for mobile */}
                <div className="flex w-full md:w-auto justify-center md:justify-end">
                    <div className="flex items-center gap-2">
                        <div className="w-[45px] h-[45px] rounded-full bg-[#EBEEF6]"></div>
                        <div>
                            <p className="font-inter text-[13px] leading-[19.5px]">Hotline 24/7</p>
                            <p className="font-inter font-bold text-[20px] leading-[24px] text-[rgba(75,62,196,1)]">
                                (025) 3686 25 16
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wishlist Icon - Aligned for mobile */}
                <div className="flex w-full md:w-auto justify-center md:justify-end md:mr-6">
                    <img width="28" height="28" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like" />
                </div>
            </div>

            {/* Bottom Navigation Links */}
            <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 gap-6 md:gap-0">
                {/* Pages & Categories Links - Centered and wrapped on mobile */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 justify-center">
                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none bg-transparent">
                        <option>Demos</option>
                        <option>Demo 1</option>
                        <option>Demo 2</option>
                    </select>

                    <select
                        className="h-[21px] font-inter text-[14px] leading-[21px] border-none bg-transparent"
                        onChange={handlePageChange}
                    >
                        <option value="">Pages</option>
                        <option value="/shoppingCart">ShoppingCart</option>
                        <option value="/userProfile">UserProfile</option>
                        <option value="/productDetail">ProductDetailPage</option>
                        <option value="/login">LogIn</option>
                        <option value="/register">Register</option>
                        <option value="/contact">Contact</option>
                        <option value="/checkoutForm">CheckoutForm</option>
                    </select>

                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none bg-transparent">
                        <option>Products</option>
                        <option>Product 1</option>
                        <option>Product 2</option>
                    </select>
                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none bg-transparent">
                        <option>Contact</option>
                        <option>Contact 1</option>
                        <option>Contact 2</option>
                    </select>
                </div>

                {/* Utility Links - Centered and wrapped on mobile */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center">
                    <div className="flex items-center gap-2">
                        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/shop.png" alt="shop" />
                        <p className="text-sm font-inter">Sell on Swoo</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img width="20" height="20" src="https://img.icons8.com/material-sharp/24/shopping-bag.png" alt="shopping-bag" />
                        <p className="text-sm font-inter">Order Tracking</p>
                    </div>

                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none outline-none bg-transparent">
                        <option>Recently Viewed</option>
                    </select>

                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none outline-none bg-transparent">
                        <option>USD</option>
                    </select>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HomeNavbar;