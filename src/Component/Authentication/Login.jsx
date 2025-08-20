import React from 'react';

const Login = () => {
  return (
    <div className="max-w-[1300px] flex flex-col mx-auto mb-6 mt-6">
      
      

      <div className="w-full bg-white rounded-[10px] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="hidden md:flex justify-center">
            <img 
              src="https://i.ibb.co.com/Wvqf7mGf/ec69a4e46c21d583fca24d9604b381d37a07ab34.png" 
              alt="Login Illustration" 
              className="max-w-[401px] h-[327px]"
            />
          </div>

          <div className="flex flex-col justify-center h-[523px]">
            <h1 className="text-[28px] font-bold text-green-600 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm font-normal tracking-wider mb-8">
              LOGIN TO CONTINUE
            </p>

            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-normal text-gray-800 mb-2"
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Example@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-normal text-gray-800 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    id="password"
                    placeholder="...."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 cursor-pointer">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="text-left -mt-4">
                <a href="#" className="text-[13px] font-normal text-gray-500 hover:underline">
                  Forget Password ?
                </a>
              </div>

              <button 
                type="submit"
                className="w-[138px] h-[51px] bg-green-500 text-white font-medium text-lg py-3 rounded-[10px] hover:bg-green-600 transition-colors"
              >
                LOGIN
              </button>
            </form>
            
            <p className="text-left text-sm text-gray-400 mt-8">
              NEW USER ? 
              <a href="#" className="font-normal text-sm text-green-500 hover:underline ml-1">
                SIGN UP
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;