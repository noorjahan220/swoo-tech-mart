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
            {/* Top Blue Banner */}
            <div className="w-full bg-[rgba(75,62,196,1)]">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center gap-3 h-[55.8px]">
                    <button className="w-[58.48px] h-[20.39px] rounded-[800px] bg-[rgba(255,255,255,1)] font-inter font-bold text-[12px] leading-[20.4px] tracking-[0] text-center align-middle text-black">
                        Special
                    </button>
                    <p className='font-inter font-normal text-[14px] leading-[23.8px] tracking-[0] text-center align-middle'>
                        Get 10% <span className="font-inter font-bold text-[14px] leading-[23.8px] tracking-[0] text-center align-middle uppercase">Discount</span> for first order
                    </p>
                    <Link className='font-inter font-normal italic text-[14px] leading-[23.8px] tracking-[0] text-center align-middle underline decoration-solid decoration-[0] underline-offset-[0]'>
                        Register Now
                    </Link>
                </div>
            </div>
            {/* 2nd section of nav */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b-[1px]  w-full h-auto md:h-[111px] p-4 md:p-0 gap-4 md:gap-0">


                <div className="flex-shrink-0">
                    <img
                        className="w-[150px] h-[40px] relative top-[5px]"
                        src="https://i.ibb.co.com/SXVjdKs1/fc5fee22bca55277d3a8957a96c6ca225392b9fc.png"
                        alt="Logo"
                    />
                </div>


                <div className="flex items-center w-full md:w-[421px] h-[47px] rounded-[30px] border border-solid border-gray-300 overflow-hidden">

                    <select className="w-[140px] h-[45px] rounded-l-[4px] bg-[#EBEEF6] px-3 font-inter text-[13px] leading-[19.5px]">
                        <option>All Categories</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                    </select>


                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="flex-1 h-[45px] px-3 outline-none font-sans font-normal text-[13px] leading-[100%] tracking-normal"
                    />


                    <button className="w-[42px] h-[42px] rounded-[20px] bg-[rgba(75,62,196,1)] flex justify-center items-center">
                        <FontAwesomeIcon className="text-white text-[16px]" icon={faMagnifyingGlass} />
                    </button>
                </div>


                <div className="flex w-full md:w-[228.59px] h-[45px] justify-start md:justify-end">
                    <div className="flex items-center gap-2">
                        <div className="w-[45px] h-[45px] rounded-full bg-[#EBEEF6]"></div>
                        <div>
                            <p className="font-inter font-normal text-[13px] leading-[19.5px]">Hotline 24/7</p>
                            <p className="font-inter font-bold text-[20px] leading-[24px] text-[rgba(75,62,196,1)]">
                                (025) 3686 25 16
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[207.81px] h-[36px] flex justify-start md:justify-end">
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like" />
                </div>
            </div>

            {/* oeder section */}
            <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 gap-4 md:gap-0">

                <div className="flex flex-wrap gap-5">
                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none">
                        <option>Demos</option>
                        <option>Demo 1</option>
                        <option>Demo 2</option>
                    </select>

                   
                    <select
                        className="h-[21px] font-inter text-[14px] leading-[21px] border-none"
                        onChange={handlePageChange}
                    >
                        <option value="">Pages</option>
                        <option value="/shoppingCart">ShoppingCart</option>
                        <option value="/userProfile">UserProfile</option>
                        <option value="/productDetail">ProductDetailPage</option>
                    </select>

                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none">
                        <option>Products</option>
                        <option>Product 1</option>
                        <option>Product 2</option>
                    </select>
                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none">
                        <option>Contact</option>
                        <option>Contact 1</option>
                        <option>Contact 2</option>
                    </select>
                </div>

                <div className="flex flex-wrap items-center gap-6">

                    <div className="flex items-center gap-2">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios-glyphs/30/shop.png"
                            alt="shop"
                        />
                        <p className="text-sm font-inter">Sell on Swoo</p>
                    </div>


                    <div className="flex items-center gap-2">
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/material-sharp/24/shopping-bag.png"
                            alt="shopping-bag"
                        />
                        <p className="text-sm font-inter">Order Tracking</p>
                    </div>


                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none outline-none">
                        <option>Recently Viewed</option>
                    </select>


                    <select className="h-[21px] font-inter text-[14px] leading-[21px] border-none outline-none">
                        <option>USD</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HomeNavbar;