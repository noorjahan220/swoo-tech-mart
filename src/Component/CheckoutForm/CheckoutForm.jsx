import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
  };

  return (
    <div className="checkout_form_section bg-[#E2E4EB] px-2 sm:px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-white shadow-sm p-4 sm:p-6 md:p-10">
        <div className="font-inter font-bold text-[18px] leading-[21.6px] tracking-[0] uppercase mb-6 md:mb-8">
          Checkout
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          <div className="h-auto py-4 opacity-100 rounded-[10px] border border-[#E9E7E8] bg-[#E9E7E8] flex items-center justify-center sm:justify-start px-4">
            <p className="font-inter font-normal text-center sm:text-left text-[14px] leading-[23.8px] tracking-[0]">
              Returning customer?
              <span className="underline text-[#F1352B] ml-1 cursor-pointer">
                Click here to log in
              </span>
            </p>
          </div>
          <div className="h-auto py-4 opacity-100 rounded-[10px] border border-[#E9E7E8] bg-[#E9E7E8] flex items-center justify-center sm:justify-start px-4">
            <p className="font-inter font-normal text-center sm:text-left text-[14px] leading-[23.8px] tracking-[0]">
              Have a coupon?
              <span className="underline text-[#F1352B] ml-1 cursor-pointer">
                Click here to enter your code
              </span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            <div className="lg:col-span-3">
              <div className="font-inter font-bold text-[16px] leading-[19.2px] tracking-[0] mb-6">
                Billing Detail
              </div>
              <div className="space-y-5">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-x-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                      {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                      {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Company Name (Optional)</label>
                  <input
                    type="text"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    {...register("companyName")}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    defaultValue="USA"
                    {...register("country", { required: "Select a country" })}
                  >
                    <option value="USA">United States (US)</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                  </select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-700">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    placeholder="House number and street name"
                    {...register("streetAddress_1", { required: "This field is required" })}
                  />
                  {errors.streetAddress_1 && <p className="text-red-500 text-xs">{errors.streetAddress_1.message}</p>}
                  <input
                    type="text"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    placeholder="Apartment, suite, unit, etc (Optional)"
                    {...register("streetAddress_2")}
                  />
                </div>
                
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    {...register("cityName", { required: "City is required" })}
                  />
                  {errors.cityName && <p className="text-red-500 text-xs mt-1">{errors.cityName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    State / County <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    defaultValue="Washington"
                    {...register("state", { required: "Select a state" })}
                  >
                    <option value="Washington">Washington</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    <option value="Florida">Florida</option>
                  </select>
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    {...register("zipCode", { required: "Zip code is required" })}
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    {...register("phoneNumber", { required: "Phone Number is required" })}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="create_account"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[rgba(75,62,196,1)] focus:ring-[rgba(75,62,196,1)]"
                    {...register("createAccount")}
                  />
                  <label htmlFor="create_account" className="text-sm text-gray-700">
                    Create an account?
                  </label>
                </div>

                <div className="pt-4">
                  <label className="text-lg font-bold block mb-2">Additional Information</label>
                  <label className="block text-sm text-gray-700 mb-1">Order Notes (Optional)</label>
                  <textarea
                    rows="5"
                    className="w-full text-sm rounded border border-gray-300 p-3 focus:ring-2 focus:ring-[rgba(75,62,196,0.5)] focus:border-[rgba(75,62,196,1)] outline-none"
                    placeholder="Note about your order, e.g. special note for delivery"
                    {...register("message")}
                  />
                </div>
              </div>
            </div>

         
            <div className="lg:col-span-2 mt-10 lg:mt-0 self-end">
              <div className="font-inter font-bold text-[16px] leading-[19.2px] tracking-[0] mb-6">Your Order</div>
              <div className="bg-[#F5F5F5] p-4 md:p-6 rounded-lg space-y-4">
                <div className="flex justify-between font-inter font-medium text-[12px] leading-[14.4px] tracking-[0] uppercase text-[#666666]">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                <hr className="border-gray-300" />

                <div className="flex items-center gap-3">
                  <img src="https://i.ibb.co.com/FLgHwJ5c/1ca36b05619c3f1e50a7b8603401775a7325fdd4.png" alt="Product" className="w-12 h-12 object-contain border bg-white p-1 rounded" />
                  <div>
                    <p className="text-black font-inter font-medium text-[14px] leading-[19.6px]">Pineapple Macbook Pro-2022</p>
                    <p className="text-black font-inter font-medium text-[14px] leading-[19.6px]">MV 512GB</p>
                    <p className="font-inter font-normal text-[14px] leading-[23.8px] text-[#666666] mt-1">x 3</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <p className="text-gray-600">Worldwide Standard Shipping</p>
                  <p className="font-inter font-normal text-[14px] leading-[21px] text-[#F1352B]">+ $9.50</p>
                </div>
                <hr className="border-gray-300" />

                <div className="flex justify-between items-center">
                  <h2 className="font-inter font-bold text-[16px] leading-[24px]">Order Total</h2>
                  <p className="font-inter font-bold text-[16px] leading-[24px] text-[rgba(75,62,196,1)]">$1,746.50</p>
                </div>

                
                <div className="space-y-4 w-full opacity-100 rounded-[10px] bg-[#E1E3EB] p-4">
                  
                  <div className="flex items-start gap-3">
                    <input
                      id="bank_transfer"
                      type="radio"
                      value="bank_transfer"
                      className="h-4 w-4 mt-1 appearance-none border-2 border-gray-400 rounded-full checked:bg-[rgba(75,62,196,1)] checked:border-gray-400"
                      {...register("paymentMethod", { required: true })}
                      defaultChecked
                    />
                    <div>
                      <label htmlFor="bank_transfer" className="font-inter font-bold text-[14px] leading-[16.8px] cursor-pointer">
                        Direct Bank Transfer
                      </label>
                      <p className="font-inter font-normal text-[13px] leading-[22.1px] text-[#666666] mt-2">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                      </p>
                    </div>
                  </div>

               
                  <div className="flex items-start gap-3">
                    <input
                      id="cash_on_delivery"
                      type="radio"
                      value="cod"
                      className="h-4 w-4 mt-1 appearance-none border-2 border-gray-400 rounded-full checked:bg-[rgba(75,62,196,1)] checked:border-gray-400"
                      {...register("paymentMethod", { required: true })}
                    />
                    <label htmlFor="cash_on_delivery" className="font-inter font-bold text-[14px] leading-[16.8px] cursor-pointer">
                      Cash on Delivery
                    </label>
                  </div>

                  
                  <div className="flex items-start gap-3">
                    <input
                      id="paypal"
                      type="radio"
                      value="paypal"
                      className="h-4 w-4 mt-1 appearance-none border-2 border-gray-400 rounded-full checked:bg-[rgba(75,62,196,1)] checked:border-gray-400"
                      {...register("paymentMethod", { required: true })}
                    />
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <label htmlFor="paypal" className="font-inter font-bold text-[14px] leading-[16.8px] cursor-pointer">
                        Paypal
                        <span className="font-inter font-normal text-[14px] leading-[16.8px] underline text-[#0D6EFD] ml-1">
                          What’s Paypal?
                        </span>
                      </label>
                      <img src="https://i.ibb.co/rGHcBngV/4828a955b097780d4cfc39322f712b2f45a624e6-1.png" className="h-4 mt-2 sm:mt-0" alt="Paypal" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="h-[50px] w-full rounded-[10px] text-sm font-bold text-white bg-[rgba(75,62,196,1)] hover:bg-opacity-90 transition-colors uppercase"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;