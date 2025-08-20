import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className="contact_section common_padding  py-5 ">
  
     

      <div className="conatact_info px-[30px] py-[30px]  bg-white  border border-gray-100 rounded-lg ">
        <div className="title text-[18px] uppercase font-semibold mb-12 ">
          ready to work with us
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="contact_form">
          <h2 className="text-xl font-bold tracking-wide mb-2">READY TO WORK WITH US</h2>
          <p className="text-gray-500 mb-8">
            Contact us for all your questions and opinions
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" } })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                {...register("phoneNumber")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                  {...register("country", { required: "Please select a country" })}
                >
                  <option>United States (US)</option>
                  <option>United Kingdom (UK)</option>
                  <option>Canada (CA)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                {...register("subject")}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-[rgba(75,62,196,1)] focus:border-[rgba(75,62,196,1)]"
                placeholder="Note about your order, e.g. special note for delivery"
                {...register("message")}
              ></textarea>
            </div>
            
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[rgba(75,62,196,1)] focus:ring-[rgba(75,62,196,1)]"
                {...register("terms")}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I want to receive news and updates once in a while. By submitting, I'm agreed to the{' '}
                <Link to="/terms" className="text-[rgba(75,62,196,1)] font-medium">Terms & Conditions</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[rgba(75,62,196,1)] text-white font-bold rounded-lg hover:bg-[rgba(75,62,196,1)] "
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
          
          <div className="address">
            <div className="address_details bg-[#EDEFF6]  p-[30px] rounded-lg ">
           
              <div className="usa mb-10">
                <h2 className=" text-[12px] font-light uppercase primay_paragrap_text_color ">
                  united states (head quater){" "}
                </h2>

                <p className=" text-[14px] capitalize font-normal text-black mt-5 mb-2  ">
                  152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16
                </p>

                <p className="text-[14px] text-[rgba(75,62,196,1)] capitalize font-normal primary_text_color ">
                  hello@swattechmart.com{" "}
                </p>
              </div>

              
              <div className="uk mb-[50px] ">
                <h2 className="text-[12px] font-light uppercase primay_paragrap_text_color">
                  united kingdom (branch){" "}
                </h2>

                <p className="text-[14px] capitalize font-normal text-black mt-5 mb-2  ">
                  12 Buckingham Rd, Thornthwaite, HG3 4TY, UK (+718) 895-5350
                </p>

                <p className="text-[14px] text-[rgba(75,62,196,1)] capitalize font-normal primary_text_color">
                  contact@swattechmart.co.uk{" "}
                </p>
              </div>

            
              <div className="soical_links flex gap-3 ">
                <div className="twiter w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">
                  {" "}
                  <FaTwitter></FaTwitter>{" "}
                </div>
                <div className="facebook w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">
                  {" "}
                  <FaFacebook></FaFacebook>{" "}
                </div>
                <div className="instaram w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">
                  {" "}
                  <FaInstagram></FaInstagram>{" "}
                </div>
                <div className="youtube w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">
                  {" "}
                  <FaYoutube></FaYoutube>{" "}
                </div>
                <div className="Pinterest w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center  ">
                  {" "}
                  <FaPinterest></FaPinterest>{" "}
                </div>
              </div>
            </div>
            {/* contact image  */}
            <div className="contact_img mt-4 ">
              <img src="https://i.ibb.co.com/MqC8KWS/0e9548e9e6eb90d824e0f474838d5c16868a730a.png" className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* google map */}

      <div className="google_map bg-white shadow-md border border-gray-100 rounded-lg  p-[30px] my-4">
        <div className="title text-[18px] uppercase font-semibold  ">
          finds on google map
          <div className="w-full h-[416px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12189.401829414623!2d90.38626405219566!3d23.77889464001167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1755594438049!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;