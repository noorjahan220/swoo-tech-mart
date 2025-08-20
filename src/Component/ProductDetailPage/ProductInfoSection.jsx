import React from 'react';

const ProductInfoSection = () => {

  const activeTabName = 'description';


  const TabButton = ({ name, label, count }) => (
    <button
      className={`whitespace-nowrap py-4 px-2 sm:px-4 text-sm font-bold tracking-wide transition-colors duration-300 focus:outline-none ${
        activeTabName === name
          ? 'text-gray-800 border-b-2 border-[rgba(75,62,196,1)]'
          : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent'
      }`}
    >
      {label} {count && `(${count})`}
    </button>
  );

  
  const DescriptionContent = () => (
    <div className="text-gray-600 text-sm leading-relaxed">
      <p className="mb-4 font-inter text-sm leading-loose">
        Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes
        anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display.
        Expandable memory lets you enjoy more of your favorite content. And connecting and sharing
        between all your Samsung devices is easier than ever. Welcome to life with the reimagined
        Samsung Galaxy Tab S2. Watch the world come to life on your tablet's{' '}
        <strong className="text-gray-800">Super AMOLED display *</strong>. With deep contrast, rich
        colors and crisp details, you won’t miss a thing.
      </p>

      <div className="my-6">
        <img
          src="https://i.ibb.co/0RGVpLyg/6ea9c6998affb467c8406ea6e31f8a92e6c8c4bf.jpg"
          alt="Galaxy Tab S2 in use"
          className="w-full rounded-lg"
        />
        <p className="text-center text-xs text-gray-500 mt-3 px-4">
          * The Galaxy Tab S2’s 4 : 3 ratio display provides you with an ideal environment for
          performing office tasks.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">From the manufacturer</h3>
        <p className="mb-4 font-inter text-sm leading-loose">
          Dive into the blockbuster movies you can’t wait to see. Switch between your favorite apps
          quickly and easily. The new and improved octa-core processor gives you the power and speed
          you need to see more and do more. Expand your tablet’s memory from 32GB to up to an
          additional 128GB and enjoy more of your favorite music, photos, movies and games on the
          go with a microSD card. With Quick Connect, start a show on your Smart TV and, with the
          touch of a button, take it with you by moving it to your Galaxy Tab S2.
        </p>
        <p className="font-inter text-sm leading-loose mb-6">
          Or send videos and photos from your tablet{' '}
          <span className="text-[rgba(75,62,196,1)]">screen to your TV screen</span> to share with everyone
          in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with
          SideSync. Quickly drag and drop photos between devices. And even respond to a call from
          your smartphone right on your tablet screen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <img
          src="https://i.ibb.co/fd7bq62M/d15cfb1bd9dce4527a8f1acabd5f2d425c2c5819.png"
          alt="Man using Samsung device"
          className="rounded-lg w-full h-full object-cover"
        />
        <img
          src="https://i.ibb.co/whd4ktHj/1d98a9fb2b514ca34cfffbd5ebbada8397107e7e.png"
          alt="Samsung device screen"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-gray-800">
          Semsong Galaxy Tab S2, 8-Inch, White
        </h3>
        <p className="font-inter text-sm leading-loose">
          The Semsong Galaxy Tab S2 offers dual cameras: a rear-facing 8-megapixel camera with Auto
          Focus and a 2.1-megapixel camera on the front. Take high-quality pictures and video or
          video chat with friends, family, and colleagues. Customize your Galaxy Tab S2 with the
          apps you use most. The Samsung Galaxy Essentials widget provides a collection of premium,
          complimentary apps optimized for your tablet screen. Select and download the apps you
          want to instantly upgrade your tablet experience.
        </p>
      </div>

      <div className="pt-4">
        <button className="text-[rgba(75,62,196,1)] font-bold text-xs uppercase tracking-wider pb-1">
          Show More
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[10px] overflow-hidden py-8 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-2 sm:space-x-4 overflow-x-auto" aria-label="Tabs">
          <TabButton name="description" label="DESCRIPTION" />
          <TabButton name="reviews" label="REVIEWS" count={5} />
          <TabButton name="additional" label="ADDITIONAL INFORMATION" />
        </nav>
      </div>

      <div className="pt-8">
        {activeTabName === 'description' && <DescriptionContent />}
      </div>
    </div>
  );
};

export default ProductInfoSection;