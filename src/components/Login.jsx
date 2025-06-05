// import React from 'react';
// import loginImage from '../../public/images.png';
// import OutamationAI from '../../public/outamation-llm.png'; // Adjust the path as necessary
// const Login = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Left Side */}
//       <div className="w-1/2 bg-white flex items-center justify-center p-10">
//         <img src={loginImage} alt="Login Visual" className="max-w-full h-auto" />
//       </div>

//       {/* Right Side */}
//       <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
//         <div className="w-full max-w-md space-y-6">
//           <div className="flex items-center space-x-2">
//            <img src={OutamationAI}  alt="OutamationAI Logo" className="h-16 w-auto" />          
//           </div>

//           <h3 className="text-xl font-semibold">Welcome to Document AI</h3>
//           <p className="text-gray-600">Login to your account</p>

//           <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100">
//             <img src="https://img.icons8.com/color/16/000000/microsoft.png" alt="Microsoft Icon" />
//             <span>Sign in with Microsoft</span>
//           </button>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="example@outamation.com"
//                 className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 placeholder="Type password"
//                 className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="text-right text-sm">
//             <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
//           </div>

//           <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
//             Log in
//           </button>

//           <div className="flex justify-between text-sm text-gray-500 mt-6">
//             <a href="#">Term & Condition</a>
//             <a href="#">Privacy Policy</a>
//             <a href="#">Help</a>
//           </div>

//           <p className="text-xs text-center text-gray-400 mt-6">
//             © Copyright 2024. Outamation Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import loginImage from '../../public/images.png'; // Update path to your illustration image
import OutamationLogo from '../../public/outamation-llm.png'; // Update path to your logo

const Login = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-10">
        <img src={loginImage} alt="Login Visual" className="max-w-full h-auto" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-6 md:p-10">
        <div className="w-full max-w-md space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={OutamationLogo} alt="Outamation Logo" className="h-12" />
          </div>
          
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-gray-800">Welcome to Document AI</h1>
          
          {/* Login text */}
          <p className="text-base text-center text-gray-600">Login to your account</p>
          
          {/* Microsoft login button */}
          <button className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
              <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
              <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
              <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
            </svg>
            <span className="text-sm">Sign in with Microsoft</span>
          </button>
          
          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="example@outamation.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Type password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Forgot password link */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">Forgot password?</a>
          </div>
          
          {/* Login button */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Log in
          </button>
          
          {/* Footer links */}
          <div className="flex justify-between text-sm text-gray-500 pt-6">
            <a href="#" className="hover:text-gray-700">Term & Condition</a>
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Help</a>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-center text-gray-500 pt-6">
            © Copyright 2024. Outamation Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;