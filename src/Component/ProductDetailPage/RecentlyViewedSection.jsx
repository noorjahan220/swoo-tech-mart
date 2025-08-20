import React from 'react';

const RecentlyViewedProduct = ({ product }) => {
  return (

    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
  
      <div className="relative flex-shrink-0 w-32 h-24  rounded-lg flex items-center justify-center p-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
        {product.isNew && (
          <div className="absolute top-1 left-1 bg-gray-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
            NEW
          </div>
        )}
        {product.saveAmount && (
        
          <div className="absolute top-1 right-1 bg-[rgba(75,62,196,1)] text-white text-[10px] text-center font-bold px-2 py-1 rounded-md leading-tight">
            SAVE <br /> ${product.saveAmount}
          </div>
        )}
      </div>

      
      <div className="flex-grow text-center sm:text-left">
        {product.reviewCount && (
          <p className="text-xs text-gray-500">({product.reviewCount})</p>
        )}
        <h3 className="font-inter font-bold text-sm leading-snug mt-1 mb-2">
          {product.name}
        </h3>
        <div className="mt-1 flex items-baseline justify-center sm:justify-start space-x-2">
          {product.salePrice ? (
            <>
              <p className="text-red-500 font-bold">{product.salePrice}</p>
              <p className="font-inter font-bold text-base line-through text-gray-400">
                {product.originalPrice}
              </p>
            </>
          ) : (
            <p className="font-bold text-gray-900">{product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const RecentlyViewedSection = () => {
  const recentlyViewedProducts = [
    {
      id: 1,
      imageUrl: 'https://i.ibb.co/jZhNqwW1/6964b4b695280548d1addf6a64f60e42f217efb6.png',
      isNew: true,
      reviewCount: 152,
      name: 'Xomie Remid 8 Sport Water Resitance Watch',
      price: '$579.00',
    },
    {
      id: 2,
      imageUrl: 'https://i.ibb.co/9k3L5qvy/bf7cc387fee5960d068fa7e24bec5f8bb6aa0242.png',
      isNew: true,
      name: 'Microrte Surface 2.0 Laptop',
      price: '$979.00',
    },
    {
      id: 3,
      imageUrl: 'https://i.ibb.co/rK9ZfFwK/a4e1f6fc23ab898ccf43fce87f84e61430d36233.png',
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: '$979.00 - $1,259.00',
    },
    {
      id: 4,
      imageUrl: 'https://i.ibb.co/vvDZWvwm/f3c0dacb6d5add279aaa6437be1c77d3c8b0eb72.png',
      saveAmount: '192.00',
      reviewCount: 152,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      salePrice: '$579.00',
      originalPrice: '$779.00',
    },
  ];

  return (
    <div className="bg-white mb-8 font-inter py-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-baseline space-x-4">
            <h2 className="font-inter font-bold text-lg uppercase tracking-wider text-black">
              Your Recently Viewed
            </h2>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-800 transition">
              View All
            </a>
          </div>
          <div className="flex items-center bg-gray-100 rounded-full p-1 space-x-1">
            <button className="w-5 h-5 bg-white rounded-full shadow"></button>
            <button className="w-5 h-5 bg-gray-200 rounded-full"></button>
          </div>
        </div>

       
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyViewedProducts.map((product) => (
            <RecentlyViewedProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedSection;