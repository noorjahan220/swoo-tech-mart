


const UserProfile = () => {


  const navItems = [
    { name: 'Account info', active: true },
    { name: 'My order', active: false },
    { name: 'My address', active: false },
    { name: 'Change password', active: false },
  ];

  const ChevronDownIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
  const HeartIcon = () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
  const SearchIcon = () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
  const MenuIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>;
  const ChevronRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div>
      <div className="bg-[#EBEEF6] w-full min-h-screen pb-10 font-inter">
        

        <main className="max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-[254.5px] flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4 inline-block bg-[#FAFAFA] rounded-lg p-2">
                  <img className="w-36 h-36 object-cover rounded-lg" src="https://i.ibb.co/LXf63kjn/e1061d6d7a2a7662770083f211f37bc54523a829.jpg" alt="Mark Cole" />
                </div>
                <h2 className="font-bold text-[20px] text-black">Mark Cole</h2>
                <p className="font-normal text-[14px] text-[#666666] mb-6">swoo@gmail.com</p>
                <nav className="space-y-2 text-left">
                  {navItems.map((item) => (
                    <a key={item.name} href="#" className={`flex justify-between items-center px-4 py-3 font-normal text-[14px] rounded-[8px] transition-colors duration-200 ${item.active ? 'bg-[#4B3EC4] text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>
                      <span>{item.name}</span>
                      <ChevronRightIcon className="w-5 h-5" />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
            <div className="w-full bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h1 className="font-bold text-2xl sm:text-3xl mb-8">Account Info</h1>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block font-normal text-sm text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input type="text" id="first-name" defaultValue="Mark" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:border-[#4B3EC4] sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block font-normal text-sm text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" id="last-name" defaultValue="Cole" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:border-[#4B3EC4] sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block font-normal text-sm text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" id="email" defaultValue="swoo@gmail.com" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:border-[#4B3EC4] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-normal text-sm text-gray-700 mb-2">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" id="phone" defaultValue="+1 0231 4554 452" className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-1 focus:border-[#4B3EC4] sm:text-sm" />
                </div>
                <div className="pt-2">
                  <button type="submit" className="bg-[#4B3EC4] font-medium text-[12px] uppercase px-8 py-3 rounded-[10px] text-white hover:bg-opacity-90 transition-colors">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
   
    </div>
  );
};

export default UserProfile;