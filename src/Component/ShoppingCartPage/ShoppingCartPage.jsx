

const QuantitySelector = () => (
  <div className="flex items-center border border-gray-200 rounded-md w-fit bg-white">
    <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">-</button>
    <span className="px-4 py-1 text-gray-800 font-medium">1</span>
    <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">+</button>
  </div>
);

const CheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const CartItem = ({ item }) => {
  const getTagComponent = (tag) => {
    switch (tag.type) {
      case 'shipping':
        if (tag.value === 'FREE SHIPPING') {
          return <span key={tag.type} className="text-xs bg-[#4B3EC4] text-white font-medium px-2 py-1 rounded-md">{tag.value}</span>;
        }
        return <span key={tag.type} className="text-xs bg-gray-200 text-gray-600 font-medium px-2 py-1 rounded-md">{tag.value}</span>;
      case 'gift':
        return <span key={tag.type} className="text-xs bg-red-100 text-red-700 font-medium px-2 py-1 rounded-md">{tag.value}</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative w-full sm:w-[832.66px] min-h-[282px] rounded-[10px] bg-[#FAFAFA]">
      <div className="relative flex-shrink-0 w-32 sm:w-40 self-center">
        {item.tags.find(t => t.type === 'save') && (
          <div className="absolute -top-6 -left-6 bg-[#4B3EC4] text-white text-xs font-bold px-3 py-1.5 rounded-md">
            SAVE<br />${item.tags.find(t => t.type === 'save').value}
          </div>
        )}
        {item.tags.find(t => t.type === 'new') && (
          <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </div>
        )}
        <img src={item.image} alt={item.name} className="w-full h-auto object-contain" />
      </div>

      <div className="flex-grow w-full">
        {item.reviews && <p className="text-gray-500 text-xs">({item.reviews})</p>}
        <h3 className="font-bold text-gray-800 text-base mt-1">{item.name}</h3>
        <p className="text-red-500 font-bold text-xl my-2">${item.price.toFixed(2)}</p>
        <QuantitySelector />
        <div className="flex items-center flex-wrap gap-2 mt-3">
          <div className="flex items-center text-[#4B3EC4] text-sm font-medium mr-2">
            <CheckIcon />
            <span className="ml-1">In stock</span>
          </div>
          {item.tags.filter(t => t.type !== 'save' && t.type !== 'new').map(getTagComponent)}
        </div>
      </div>

      <div className="flex gap-2 sm:self-start sm:ml-auto">
        {item.colors.map((color, index) => (
          <button key={index} style={{ backgroundColor: color }} className="w-6 h-6 rounded-full border border-gray-200"></button>
        ))}
      </div>
    </div>
  );
};

const OrderSummary = () => (
  <div className="w-full lg:w-[401.33px] rounded-[10px] border border-solid border-[#4B3EC4] p-4 self-start lg:self-end">
    <h2 className="text-lg font-bold text-gray-800 mb-6">Order Summary</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-200">
        <span>Sub Total:</span>
        <span className="font-bold text-gray-900">$1,000.00</span>
      </div>
      <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-200">
        <span>Shipping estimate:</span>
        <span className="font-bold text-gray-900">$600.00</span>
      </div>
      <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-200">
        <span>Tax estimate:</span>
        <span className="font-bold text-gray-900">$137.00</span>
      </div>
      <div className="flex justify-between items-center font-bold text-gray-800 pt-2 text-lg">
        <span>ORDER TOTAL:</span>
        <span>$1,737.00</span>
      </div>
    </div>
    <button className="w-full bg-[#4B3EC4] text-white font-bold py-3 rounded-lg mt-6">
      CHECKOUT
    </button>
  </div>
);

const ShoppingCartPage = () => {
  const cartItems = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/pj8Pn9G3/175d4e01c3ccc08552a7608516d07ff4f2593a4a.png',
      name: 'SROK Smart Phone 128GB, Oled Retina',
      reviews: 152,
      price: 579.00,
      tags: [
        { type: 'save', value: '199.00' },
        { type: 'shipping', value: 'FREE SHIPPING' }
      ],
      colors: ['#D6E1FF', '#FFD6D6']
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/spXB4DS5/f7311fe8359d8e443a010f51a2a03878d38edca5.png',
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      reviews: null,
      price: 979.00,
      tags: [
        { type: 'new' },
        { type: 'shipping', value: '$2.98 SHIPPING' }
      ],
      colors: ['#D6E1FF', '#FFD6D6']
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/7NKVtmgJ/ea0c93bf3f5c87594153c93d6ee1cb8aa3dece52.png',
      name: 'Samsung Galaxy X6 Ultra LTE 4G/128 GB, Black Smartphone',
      reviews: 5,
      price: 659.00,
      tags: [
        { type: 'new' },
        { type: 'shipping', value: 'FREE SHIPPING' },
        { type: 'gift', value: 'FREE GIFT' }
      ],
      colors: ['#D6E1FF', '#FFD6D6']
    }
  ];

  return (
    <div>
      <div className="bg-[#EBEEF6] w-full pt-8 pb-8 font-inter mt-8">
        

        {/* <div className="mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-bold text-[14px] text-[#999999] bg-white rounded-md shadow-sm p-4 flex items-center text-sm">
            <span>Home</span><span className="mx-2">/</span><span>Pages</span><span className="mx-2">/</span><span className="font-bold text-gray-800">Profile</span>
          </div>
        </div> */}

        <div className="w-full lg:w-[1360px] bg-white pt-10 mx-auto rounded-[10px] p-4 sm:p-10">
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-2/3 space-y-4">
              {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <OrderSummary />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ShoppingCartPage;
