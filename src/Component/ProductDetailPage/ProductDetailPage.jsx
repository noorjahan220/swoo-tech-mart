import React, { useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import ProductBundleSection from './FrequentlyBoughtTogether';
import ProductInfoSection from './ProductInfoSection';
import RelatedProducts from './RelatedProducts';
import RecentlyViewedSection from './RecentlyViewedSection';

const ProductDetailPage = () => {

    const productData = {
        name: 'Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone',
        reviewCount: 5,
        priceRange: '$569.00 - $609.00',
        totalPrice: '$609.00',
        affirmPrice: '$49/m',
        features: [
            'Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core',
            'DDDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory',
            'Commanding Power Design: Twin 16+1+2 Phases Digital VRM'
        ],
        tags: ['FREE SHIPPING', 'FREE GIFT'],
        images: {
            main: 'https://i.ibb.co/7NKVtmgJ/ea0c93bf3f5c87594153c93d6ee1cb8aa3dece52.png',
            thumbnails: [
                { id: 1, src: 'https://i.ibb.co/7NKVtmgJ/ea0c93bf3f5c87594153c93d6ee1cb8aa3dece52.png' },
                { id: 2, src: 'https://i.ibb.co/ycY8tSxP/bab12ae8194f334b24c4fe0b4631d2b9cc9690d9.jpg' },
                { id: 3, src: 'https://i.ibb.co/SXx5Vw2J/5293b22c4cdc0d039b9b345ea11129ce13ce497c.jpg' }
            ]
        },
        options: {
            colors: [
                { name: 'Midnight Blue', price: '$569.00', img: 'https://i.ibb.co/7NKVtmgJ/ea0c93bf3f5c87594153c93d6ee1cb8aa3dece52.png' },
                { name: 'Deep Purple', price: '$569.00', img: 'https://i.ibb.co/7NKVtmgJ/ea0c93bf3f5c87594153c93d6ee1cb8aa3dece52.png' },
                { name: 'Space Black', price: '$569.00', img: 'https://i.ibb.co/YCwf9X5/cb63a88e3f9dd9ea9cbb40ebeb823e85781adb5b.jpg' }
            ],
            memorySizes: ['64GB', '128GB', '256GB', '512GB']
        },
        promotion: {
            image: "https://i.ibb.co/hJyCN3xP/c7ab26c1f722f7e04c396a2b71c210dbe5906e1b.png",
            offers: [
                'Buy <span class="font-bold text-[rgba(75,62,196,1)]">02</span> boxes get a <span class="font-bold text-black">Snack Tray</span>',
                'Buy <span class="font-bold text-[rgba(75,62,196,1)]">04</span> boxes get a free <span class="font-bold text-black">Block Toys</span>'
            ],
            expiry: "9h00pm, 25/5/2024"
        },
        meta: {
            sku: 'ABC025168',
            category: 'Cell Phones & Tablets',
            brand: 'sumsong'
        },
        stock: {
            available: true,
            shipsFrom: 'United States'
        },
        frequentlyBoughtTogether: [
            { id: 1, name: 'Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone', price: 569.00, image: 'https://i.ibb.co/jGG0sVz/image.png', isThisItem: true, checked: true },
            { id: 2, name: 'BOSO 2 Wireless On Ear Headphone', price: 369.00, image: 'https://i.ibb.co/dK5kRkR/image.png', isThisItem: false, checked: true },
            { id: 3, name: 'Opplo Watch Series 8 GPS + Cellular Stainless Stell Case with Milanese Loop', price: 129.00, image: 'https://i.ibb.co/Xz9t5y8/image.png', isThisItem: false, checked: false },
        ]
    };

    const [selectedColor, setSelectedColor] = useState(productData.options.colors[0].name);
    const [selectedMemory, setSelectedMemory] = useState(productData.options.memorySizes[1]);
    const [mainImage, setMainImage] = useState(productData.images.main);
    const [quantity, setQuantity] = useState(1);

    const socialIcons = [
        { icon: faTwitter, key: 'twitter' },
        { icon: faFacebook, key: 'facebook' },
        { icon: faInstagram, key: 'instagram' },
        { icon: faYoutube, key: 'youtube' },
        { icon: faUser, key: 'user' }
    ];

    return (
        <>
            
            <div className="bg-white">
                <div className=" px-4 py-8 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute top-2 left-2 z-10">
                                    <span className="px-2 py-1 text-xs font-semibold uppercase bg-gray-900 text-white rounded-md">
                                        NEW
                                    </span>
                                </div>
                                <img src={mainImage} alt="Product" className="w-full h-auto max-h-[550px] rounded-lg object-contain mb-4" />
                            </div>
                            <div className="flex space-x-2">
                                {productData.images.thumbnails.map(thumb => (
                                    <img
                                        key={thumb.id}
                                        src={thumb.src}
                                        alt={`Thumbnail ${thumb.id}`}
                                        className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === thumb.src ? 'border-[rgba(75,62,196,1)]' : 'border-transparent'}`}
                                        onClick={() => setMainImage(thumb.src)}
                                    />
                                ))}
                            </div>
                        </div>
                        
                       
                        <div className="lg:col-span-4">
                            <p className="text-gray-500 text-sm">({productData.reviewCount})</p>
                            <h1 className="font-inter font-bold text-lg leading-tight mt-1">{productData.name}</h1>
                            <p className="font-inter font-semibold text-2xl my-4">{productData.priceRange}</p>
                            <ul className="space-y-2 list-disc list-inside font-inter text-sm text-gray-700">
                                {productData.features.map((feature, index) => <li key={index}>{feature}</li>)}
                            </ul>
                            <div className="flex items-center space-x-2 my-4">
                                {productData.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className={`text-xs font-medium px-3 py-1 rounded-md ${tag === 'FREE SHIPPING'
                                            ? 'bg-[rgba(75,62,196,0.1)] text-[rgba(75,62,196,1)]'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="w-full py-4 border-y border-gray-300 mt-6">
                                <p className="font-inter font-bold text-sm uppercase">
                                    COLOR: <span className="font-normal text-gray-600 capitalize">{selectedColor}</span>
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {productData.options.colors.map(color => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`flex items-center space-x-2 border rounded-lg p-2 transition ${selectedColor === color.name ? 'border-[rgba(75,62,196,1)] ring-2 ring-[rgba(75,62,196,0.1)]' : 'border-gray-300'}`}
                                        >
                                            <img src={color.img} alt={color.name} className="w-8 h-8 rounded-md object-cover" />
                                            <div className="text-left">
                                                <p className="text-xs font-semibold text-gray-800">{color.name}</p>
                                                <p className="text-xs text-gray-600">{color.price}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="font-inter font-bold text-sm uppercase">MEMORY SIZE: <span className="font-normal text-gray-600">{selectedMemory}</span></p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {productData.options.memorySizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedMemory(size)}
                                            className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${selectedMemory === size ? 'border-[rgba(75,62,196,1)] bg-[rgba(75,62,196,0.05)] text-[rgba(75,62,196,1)]' : 'border-gray-300 text-gray-500 hover:border-gray-400'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full rounded-lg bg-[rgba(75,62,196,0.08)] border border-dashed border-[rgba(75,62,196,0.4)] p-4 mt-6 flex items-center space-x-4">
                                <img src={productData.promotion.image} alt="Gift" className="w-16 h-16 flex-shrink-0" />
                                <div>
                                    <ul>
                                        {productData.promotion.offers.map((offer, index) => (
                                            <li key={index} className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: offer }} />
                                        ))}
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-2">Promotion expires in: {productData.promotion.expiry}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 mt-6 space-y-1">
                                <p><span className="font-bold text-gray-800">SKU:</span> {productData.meta.sku}</p>
                                <p><span className="font-bold text-gray-800">CATEGORY:</span> {productData.meta.category}</p>
                                <p><span className="font-bold text-gray-800">BRAND:</span> <span className="text-[rgba(75,62,196,1)] font-semibold">{productData.meta.brand}</span></p>
                            </div>
                            <div className="flex space-x-2 mt-4">
                                {socialIcons.map(({ icon, key }) => (
                                    <a key={key} href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-black hover:bg-gray-200">
                                        <FontAwesomeIcon icon={icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                       
                        <div className="lg:col-span-3">
                            <div className="rounded-lg bg-[#EDEFF6] p-6">
                                <p className="text-xs uppercase text-gray-600">TOTAL PRICE:</p>
                                <p className="font-bold text-3xl">{productData.totalPrice}</p>
                                <div className="flex items-center border-b border-gray-300 py-4 my-2">
                                    <img src="https://i.ibb.co/LzpwzgMJ/64be87a6096a7c17617839c2b1e54f84f718863e.png" alt="Affirm" className="h-4 mr-2" />
                                    <p className="text-sm text-gray-600 whitespace-nowrap">
                                        <span className="font-bold text-[rgba(75,62,196,1)]">{productData.affirmPrice}</span> in 12 months. <a href="#" className="text-[rgba(75,62,196,1)] underline">See more</a>
                                    </p>
                                </div>
                                {productData.stock.available && (
                                    <div className="flex items-center text-[rgba(75,62,196,1)] text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>In stock</span>
                                    </div>
                                )}
                                <div className="flex items-center border border-gray-300 rounded-md w-fit bg-white my-4">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-gray-500 text-xl">-</button>
                                    <span className="px-5 py-2 text-gray-800 font-bold">{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-gray-500 text-xl">+</button>
                                </div>
                                <button className="w-full bg-[rgba(75,62,196,1)] text-white py-3 text-sm font-medium uppercase rounded-lg hover:bg-opacity-90 transition-colors">
                                    ADD TO CART
                                </button>
                                <button className="w-full border border-[rgba(75,62,196,1)] text-black py-2.5 rounded-lg mt-2 flex items-center justify-center gap-1 hover:bg-[rgba(75,62,196,0.05)]">
                                    <p className='text-sm uppercase font-medium'>Buy with</p>
                                    <img src="https://i.ibb.co/F4SLF2d5/4828a955b097780d4cfc39322f712b2f45a624e6.png" alt="Buy with PayPal" className="h-4" />
                                </button>
                                <div className="flex items-center gap-3 text-sm mt-4">
                                    <a href="#" className="flex items-center whitespace-nowrap font-semibold text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[rgba(75,62,196,1)]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                        Wishlist
                                    </a>
                                    <div className="h-4 w-px bg-gray-300"></div>
                                    <a href="#" className="flex items-center whitespace-nowrap text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                                        Compare
                                    </a>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm">Guaranteed Safe Checkout</p>
                                    <div className="flex items-center space-x-1 mt-2">
                                        <img src="https://i.ibb.co/RTMBB1Zv/2239667a7df436f0d9e3723918a9ee8560fd2b80-1.png" alt="Payment methods" className="h-5" />
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg bg-[#EDEFF6] p-6 mt-4 text-left">
                                <button className="bg-gray-800 text-white text-sm py-2 px-4 rounded-md font-medium">Quick Order 24/7</button>
                                <p className="font-bold text-2xl my-2">(025) 3886 25 16</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-4 p-6 lg:p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10M16 16V4a1 1 0 00-1-1h-1m2 13l2-2m-2 2l-2-2" /></svg>
                                Ships from <span className="font-bold text-gray-800 ml-1">{productData.stock.shipsFrom}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <div>
                <ProductBundleSection />
            </div>
            <div>
                <ProductInfoSection />
            </div>
            <div>
                <RelatedProducts />
            </div>
            <div>
                <RecentlyViewedSection />
            </div>
        </>
    );
};

export default ProductDetailPage;