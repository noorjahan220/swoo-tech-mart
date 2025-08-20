import React from 'react';

const CheckmarkIcon = () => (
  <svg
    className="w-4 h-4 text-[rgba(75,62,196,1)]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ProductCard = ({ product }) => {
  return (
    <div className="text-left">
      <div className="relative bg-white p-4 rounded-lg flex items-center justify-center h-64 group">
        <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain" />

        {product.saveAmount && (
          <div className="absolute top-2 left-2 bg-[rgba(75,62,196,1)] text-white text-xs font-bold py-1 px-3 rounded-md">
            SAVE ${product.saveAmount}
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold py-1 px-3 rounded-md">
            NEW
          </div>
        )}

        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 4.25a.75.75 0 01.75.75v4.25h4.25a.75.75 0 010 1.5H10.75v4.25a.75.75 0 01-1.5 0V10.75H5a.75.75 0 010-1.5h4.25V5a.75.75 0 01.75-.75z" /></svg>
        </button>
      </div>

      <div className="mt-4 px-2">
        <p className="text-gray-500 text-sm">({product.reviewCount})</p>
        <h3 className="font-bold text-sm leading-tight text-gray-800 mt-1 h-12">{product.name}</h3>
        
        <div className="mt-2 flex items-baseline flex-wrap gap-x-2">
          {product.originalPrice ? (
            <>
              <p className="text-red-500 text-xl font-bold">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-gray-900 text-xl font-bold">{product.price}</p>
          )}
        </div>
        
        <div className="mt-3 inline-flex flex-wrap gap-1">
            {product.tags?.map((tag) => (
                 <span key={tag.label} className={`text-xs font-semibold px-2 py-1 rounded-full ${tag.style}`}>
                    {tag.label}
                 </span>
            ))}
        </div>

        <div className="mt-3 flex items-center space-x-1.5 text-sm">
          {product.stockStatus === 'inStock' ? (
            <>
              <CheckmarkIcon />
              <span className="text-gray-600">In stock</span>
            </>
          ) : (
            <span className="text-gray-600">Contact</span>
          )}
        </div>

        {product.colorSwatches && (
          <div className="mt-4 flex justify-start space-x-2">
            {product.colorSwatches.map((swatch, index) => (
              <button key={index} className="w-10 h-10 rounded-md p-0.5 border-2 border-transparent focus:border-[rgba(75,62,196,1)]">
                  <img src={swatch} alt={`Color swatch ${index + 1}`} className="w-full h-full object-cover rounded-sm" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://i.ibb.co/pj8Pn9G3/175d4e01c3ccc08552a7608516d07ff4f2593a4a.png',
      reviewCount: 152,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: 579.00,
      originalPrice: 859.00,
      saveAmount: '199.00',
      tags: [{ label: 'FREE SHIPPING', style: 'bg-[rgba(75,62,196,0.1)] text-[rgba(75,62,196,1)]' }],
      stockStatus: 'inStock',
    },
    {
      id: 2,
      imageUrl: 'https://i.ibb.co/spXB4DS5/f7311fe8359d8e443a010f51a2a03878d38edca5.png',
      reviewCount: 0,
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: '$979.00 - $1,259.00',
      isNew: true,
      tags: [{ label: '$2.98 SHIPPING', style: 'bg-gray-200 text-gray-800' }],
      stockStatus: 'inStock',
    },
    {
      id: 3,
      imageUrl: 'https://i.ibb.co/ZqsGKK9/66c6f051495408c542c7505a9cdefb7e1a6d1184.jpg',
      reviewCount: 5,
      name: 'OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS',
      price: '$659.00',
      tags: [
          { label: 'FREE SHIPPING', style: 'bg-[rgba(75,62,196,0.1)] text-[rgba(75,62,196,1)]' },
          { label: 'FREE GIFT', style: 'bg-red-100 text-red-800' },
      ],
      stockStatus: 'inStock',
      colorSwatches: [
          'https://i.ibb.co/pj8Pn9G3/175d4e01c3ccc08552a7608516d07ff4f2593a4a.png',
          'https://i.ibb.co/ZqsGKK9/66c6f051495408c542c7505a9cdefb7e1a6d1184.jpg',
          'https://i.ibb.co/fVsK0gwS/e9716b3da8adab464285c71a3f34ecbb005d65b2.png',
      ]
    },
    {
      id: 4,
      imageUrl: 'https://i.ibb.co/fVsK0gwS/e9716b3da8adab464285c71a3f34ecbb005d65b2.png',
      reviewCount: 9,
      name: 'Xiamoi Redmi Note 5, 64GB',
      price: 1239.00,
      originalPrice: 1619.00,
      saveAmount: '59.00',
      tags: [{ label: 'FREE SHIPPING', style: 'bg-[rgba(75,62,196,0.1)] text-[rgba(75,62,196,1)]' }],
      stockStatus: 'contact',
    },
    {
      id: 5,
      imageUrl: 'https://i.ibb.co/cSZWnYXK/42eb7d4d774278b9ccbcc9f8fbb93c2ef1a71ce1.png',
      reviewCount: 8,
      name: 'Microsute Alpha Ultra S5 Surface 128GB 2022, Silver',
      price: '$1,729.00',
      tags: [{ label: 'FREE SHIPPING', style: 'bg-[rgba(75,62,196,0.1)] text-[rgba(75,62,196,1)]' }],
      stockStatus: 'contact',
      colorSwatches: [
          'https://i.ibb.co/HDJht01G/70fb3352120a006a36410fe660bdcf040428d535.png',
          'https://i.ibb.co/cSZWnYXK/42eb7d4d774278b9ccbcc9f8fbb93c2ef1a71ce1.png',
      ]
    },
  ];

  const NavButton = ({ direction }) => (
    <button className="absolute top-1/3 -translate-y-1/2 bg-white shadow-lg rounded-md w-8 h-16 flex items-center justify-center text-gray-400 text-xs tracking-widest uppercase transform hover:bg-gray-100"
      style={{ writingMode: 'vertical-rl', [direction]: '-20px' }}
    >
      {direction === 'left' ? 'Prev' : 'Next'}
    </button>
  );

  return (
    <div className="bg-white py-12 my-6">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="relative  pb-2 mb-8">
           <h2 className="font-inter font-bold text-lg uppercase tracking-wide text-black">
             Related Products
           </h2>
        </div>
        
        <div className="relative">
            <NavButton direction="left" />
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 gap-x-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <NavButton direction="right" />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;