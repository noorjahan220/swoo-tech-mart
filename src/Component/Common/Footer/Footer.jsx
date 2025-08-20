import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaBehance } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { IoReload } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity, MdChat } from 'react-icons/md';
const USFlagIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 72 48" 
    className={className}
    aria-hidden="true"
  >
    <defs>
      <clipPath id="us-flag-clip">
        <path d="M0 0h72v48H0z"/>
      </clipPath>
    </defs>
    <g clipPath="url(#us-flag-clip)">
      <path fill="#b22234" d="M0 0h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0z"/>
      <path fill="#fff" d="M0 4h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0zm0 8h72v4H0z"/>
      <path fill="#3c3b6e" d="M0 0h36v28H0z"/>
      <path fill="#fff" d="m6 4 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zm12 0 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zm12 0 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zM12 11l1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zm12 0 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zM6 18l1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zm12 0 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4zm12 0 1.3 4 4-1.3-3 2.7 2 3.5-4-1.6-3.8.4 3-3-1.2-4.1 3.7 1.4z"/>
    </g>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800  h-[572.39px] top-[7209.08px] rotate-0 opacity-100 p-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 
        <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-24 gap-y-6 text-center border-b border-gray-200 pb-8 mb-8">
          <div className="flex items-center gap-3">
            <TbTruckDelivery className="text-indigo-600 w-6 h-6" />
            <span className="text-xs font-semibold text-gray-900 tracking-wider">FREE SHIPPING OVER $99</span>
          </div>
          <div className="flex items-center gap-3">
            <IoReload className="text-indigo-600 w-6 h-6" />
            <span className="text-xs font-semibold text-gray-900 tracking-wider">30 DAYS MONEY BACK</span>
          </div>
          <div className="flex items-center gap-3">
            <MdSecurity className="text-indigo-600 w-6 h-6" />
            <span className="text-xs font-semibold text-gray-900 tracking-wider">100% SECURE PAYMENT</span>
          </div>
          <div className="flex items-center gap-3">
            <MdChat className="text-indigo-600 w-6 h-6" />
            <span className="text-xs font-semibold text-gray-900 tracking-wider">24/7 DEDICATED SUPPORT</span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10">
         
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-gray-900 mb-2">Swoo - Online Electronic Market</h3>
            <div className="mt-6">
              <p className="text-xs text-gray-500">HOTLINE 24/7</p>
              <p className="text-2xl font-bold text-indigo-600 my-1">(025) 3686 25 16</p>
              <p className="text-sm text-gray-500 mt-4">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
              <p className="text-sm text-gray-500">contact@swateletro.com</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Twitter" className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                <FaTwitter className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#" aria-label="Facebook" className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                <FaFacebookF className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                <FaInstagram className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#" aria-label="Youtube" className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                <FaYoutube className="w-4 h-4 text-gray-800" />
              </a>
              <a href="#" aria-label="Behance" className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                <FaBehance className="w-4 h-4 text-gray-800" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Top Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">TV/Televisions</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Computers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Laptops</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Mobiles & Tablets</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Audios</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Cameras</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Gadget</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Sport Equipments</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Office</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Smart Home</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">About Swoop</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Career</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Sitemap</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Store Locations</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Help Center</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Customer Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Track Order</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">My Account</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Product Support</a></li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Partner</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Become Seller</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Affiliate</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Advertise</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-indigo-600">Partnership</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
         <div className="bg-[#f0f2f5] border-t border-gray-200 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Copyright Text */}
        <div className="text-xs text-gray-500">
          © 2024 <strong className="font-semibold text-gray-800">Shawonetc3</strong>. All Rights Reserved
        </div>

        {/* Payment Icons using <img> tags */}
        <div className="hidden lg:flex items-center gap-6">
          <img src="https://i.ibb.co/qMWhMq6r/4f88470ef7ca7089c358161cd638255e61147b79.png" alt="PayPal" className="h-4 object-contain" />
          <img src="https://i.ibb.co/B5bmFKhV/6bd6f9a9a1d8c62348529d351a6bbed14866b496.png" alt="Stripe" className="h-3 object-contain" />
          <img src="https://i.ibb.co/k2K8Py8m/5b9d40ecdd1b5c0980dfc3ae57c167489f831783.png" alt="Mastercard" className="h-5 object-contain" />
          <img src="https://i.ibb.co/QFCb76JS/3b5e4d8866baeaa152d51cf08f5031769fbf6263.png" alt="Klarna" className="h-2 object-contain" />
          <img src="https://i.ibb.co/jvK7mcbG/647ccd9eac28cd11f9fb6cd49c52dea670811cb9.png" alt="Visa" className="h-3 object-contain" />
        </div>

        {/* Language and Currency */}
        <div className="flex items-center gap-x-4">
          <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900">
            <span>USD</span>
            <FaChevronDown className="w-2.5 h-2.5 text-gray-500" />
          </button>
          <div className="h-4 w-px bg-gray-300"></div>
          <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
            <USFlagIcon className="w-5 rounded-sm" />
            <span>Eng</span>
            <FaChevronDown className="w-2.5 h-2.5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaChevronUp className="w-3.5 h-3.5 text-gray-600" />
      </button>
    </div>
      </div>
    </footer>
  );
};

export default Footer;