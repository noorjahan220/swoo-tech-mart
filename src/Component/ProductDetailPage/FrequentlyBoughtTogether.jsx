import React from 'react';

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0006 20.25L11.0856 19.4025C6.7356 15.495 3.7506 12.81 3.7506 9.6075C3.7506 7.0425 5.7906 5.0625 8.3556 5.0625C9.8406 5.0625 11.2506 5.7975 12.0006 6.885C12.7506 5.7975 14.1606 5.0625 15.6456 5.0625C18.2106 5.0625 20.2506 7.0425 20.2506 9.6075C20.2506 12.81 17.2656 15.495 12.9156 19.41L12.0006 20.25Z" />
    </svg>
);

const ProductCheckbox = ({ id, checked, isThisItem, name, price }) => (
    <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-5 h-5">
            <input
                type="checkbox"
                id={id}
                defaultChecked={checked}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#E0E0E0] checked:border-[#bdbdbd]"
            />
            <span className="pointer-events-none absolute hidden text-sm text-[#333] peer-checked:block">
                ✓
            </span>
        </div>
        <label htmlFor={id} className="cursor-pointer text-base text-[#4F4F4F]">
            {isThisItem && <strong className="font-semibold text-[#1D1D1F]">This item: </strong>}
            {name} ( <span className="font-medium text-[#EB5757]">{price}</span> )
        </label>
    </div>
);

const ProductBundleSection = () => {

    const products = [
        { id: 'item1', checked: true, isThisItem: true, name: 'Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone', price: '$569.00' },
        { id: 'item2', checked: false, isThisItem: false, name: 'BOSO 2 Wireless On Ear Headphone', price: '$369.00' },
        { id: 'item3', checked: false, isThisItem: false, name: 'Opplo Watch Series 8 GPS + Cellular Stainless Stell Case with Mitanese Loop', price: '$129.00' }
    ];

    return (
        <div className="flex mt-5 mb-4  ">
            <div className="grid w-full  grid-cols-1 gap-6 xl:grid-cols-[2.5fr_1fr]">

                <div className="flex flex-col gap-5  bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] lg:flex-row lg:justify-between  w-full h-full rounded-[10px] opacity-100">
                    <div className="flex-grow">
                        <h2 className="font-inter font-bold text-[18px] leading-[21.6px] tracking-[0] align-middle uppercase text-[#1D1D1F]">
                            FREQUENTLY BOUGHT TOGETHER
                        </h2>

                        <div className="mb-10 flex items-center justify-start gap-8">
                            <img src="https://i.ibb.co.com/YCwf9X5/cb63a88e3f9dd9ea9cbb40ebeb823e85781adb5b.jpg" alt="Somseng Galatero X6 Ultra" className="h-auto max-w-[160px] object-contain" />
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-2xl font-normal text-[#333]">+</span>
                            <img src="https://i.ibb.co.com/vCT7qHP6/155311afa0a15b9fb5b25c2602a27c5d39274e67.jpg" alt="BOSO 2 Wireless On Ear Headphone" className="h-auto max-w-[160px] object-contain" />
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] text-2xl font-normal text-[#333]">+</span>
                            <img src="https://i.ibb.co.com/wX5YGRM/78fab688f5e7811faf9d728b5d7b8e1773647040.jpg" alt="Opplo Watch Series 8" className="h-auto max-w-[160px] object-contain" />
                        </div>

                        <div className="flex flex-col gap-4">
                            {products.map(product => (
                                <ProductCheckbox key={product.id} {...product} />
                            ))}
                        </div>
                    </div>

                    <div className="relative flex min-w-[260px] flex-col  pt-16 ">
                        <p className="font-inter font-normal text-[12px] leading-[18px] tracking-[0] align-middle uppercase mb-2 text-sm  text-[#828282]">TOTAL PRICE:</p>
                        <p className="font-inter font-bold text-[30px] leading-[36px] tracking-[0] align-middle text-[#1D1D1F]">$609.00</p>
                        <button className="w-[217px] h-[50px] rounded-[10px] opacity-100 py-4 text-base mb-1 mt-6 text-white bg-[rgba(75,62,196,1)] font-inter font-medium text-[12px] leading-[18px] tracking-[0] text-center align-middle uppercase ">
                            ADD TO CART
                        </button>
                        <a href="#" className="font-inter font-normal text-[14px] leading-[21px] tracking-[0] align-middle text-[#666666]  group mt-6 flex items-center gap-2 text-base   ">
                            <div className="text-[#828282] transition-colors group-hover:text-[#333]">
                                <HeartIcon />
                            </div>
                            Ad all to Wishlist
                        </a>
                        <div className="absolute bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#EB5757]"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-[#4F4F4F]">
                        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-[130px] font-extrabold leading-none text-transparent" >
                            SALE
                        </div>
                        <div className="absolute right-5 top-5 z-30 rounded-lg bg-[#333333] px-4 py-2 text-lg font-bold text-white">
                            50%
                        </div>
                        <img src="https://i.ibb.co.com/23md73Rk/a0e0b0c2ddfbedd8cd25291d0fbe69e37e05c7fb.png" alt="Xbox controllers on sale" className="absolute left-1/2 top-1/2 z-10 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div
                        className="relative flex h-[240px] items-center justify-start overflow-hidden rounded-2xl bg-cover bg-center"
                        style={{ backgroundImage: "url('https://i.ibb.co.com/DDXNt2Qj/42c2d52d5f465ac35ffa884c805d48cc0e11c4ea.png')" }}
                    >
                        {/* Overlay Text */}
                        <div className="ml-4 text-white z-20">
                            <p className="font-inter font-bold text-[22px] leading-[26.4px]">oPad Pro <br /> <span className='font-inter font-medium text-[22px] leading-[26.4px]'>Mini 5</span></p>
                            <p className="font-inter font-normal text-[10px] leading-[15px] uppercase text-[#999999] mt-8">from</p>
                            <p className="font-inter font-extra light text-[24px] leading-[28.8px] mt-1">$169</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductBundleSection;