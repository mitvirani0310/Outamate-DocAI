import React from 'react';
import loginImage from '../../public/Privacy policy-rafiki.svg'; // Update path to your illustration image
import OutamationLogo from '../../public/outamation-llm.png'; // Update path to your logo

const Login = () => {
  return (
    <div className="h-screen overflow-hidden  flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex md:w-1/2  overflow-hidden">
          <div className="w-full h-full flex items-center justify-center p-8">
            <img
              src={loginImage}
              alt="Login Visual"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 bg-white  p-6 md:py-8 md:px-10 flex flex-col">
          <div className="flex-grow w-full max-w-md mx-auto space-y-4">
            {/* Logo */}
            <div className="flex justify-center mb-2">
              <img
                src={OutamationLogo}
                alt="Outamation Logo"
                className="h-20"
              />
            </div>

            {/* Heading */}
            <h1 className="text-xl font-bold text-center text-gray-800">
              Welcome to Document AI
            </h1>

            {/* Login text */}
            <p className="text-base text-center font-medium text-gray-600 mb-2">
              Login to your account
            </p>

            {/* Microsoft login button */}
            <div className="flex justify-center">
              <button className="border border-gray-300 py-2 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                  <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                  <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                  <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
                </svg>
                <span className="ml-2">Sign in with Microsoft</span>
              </button>
            </div>
            {/* Form fields */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@outamation.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Type password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Forgot password link */}
            <div>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Log in
            </button>
          </div>

          {/* Footer links */}
          <div className="w-full flex justify-between text-sm font-medium text-gray-700 pt-6 pb-4 max-w-md mx-auto">
            <a href="#" className="hover:text-gray-900">
              Term & Condition
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Help
            </a>
          </div>

          {/* <div className="w-full flex justify-center mt-24">
            <p className="text-sm font-medium text-center text-gray-500">
                © Copyright 2024. Outamation Inc. All rights reserved.
            </p>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full absolute bottom-4 left-0">
        <p className="text-sm text-center text-gray-500">
          © Copyright 2024. Outamation Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;