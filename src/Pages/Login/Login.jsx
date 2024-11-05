import React from 'react';
import lgo from "../utils/lgoo.svg"
import ailogo from "../utils/ai.png"
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-black p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center  justify-center">
            <img src={lgo} alt="" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Mascot Image */}
          <div className="w-32 h-32 mb-8">
            <img
              src={ailogo}
              alt="Joy mascot"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Welcome Text */}
          <h1 className="text-xl w-[343px] font-medium text-center mb-8">
            Firstly, <span className="font-bold">what's your name</span> and <span className="font-bold">email</span>, friend?
          </h1>

          {/* Google Sign In Button */}
          <button
            className="w-full mb-6 font-bold flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <FcGoogle className='text-xl' />
            Continue with Google
          </button>

          <div className="w-full mb-6 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form className="w-full space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your first name here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-sm text-black font mt-4">
              By continuing, you agree to our{' '}
              <a href="#" className="underline font-bold">Terms uses  & </a><a href="#" className="underline font-bold">Privacy Policy</a>
            </div>


            <Link
            to="/otpverification"
            >
            <button
              type="submit"
              className="w-full bg-black text-white text-sm md:text-base lg:text-base py-3 px-4 rounded-md hover:bg-black/90 transition-colors mt-6"
            >
              Continue with email
            </button>
            </Link>


          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;