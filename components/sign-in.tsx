"use client";

import Link from 'next/link';
import React from 'react';


export default function Login() {
  return (
    <div className="max-w-[400px] mx-auto mt-16 p-8 rounded-xl bg-[#fefefe] shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-[#3C6382]">Next.js</h1>

      <div className="mt-8">
        <input 
          type="email" 
          placeholder="Enter your Email*" 
          aria-label="Email"
          className="w-full h-12 px-4 mb-4 border border-[#bdc3c7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#82ccdd] focus:border-[#82ccdd]" 
        />
      </div>
      
      <div className="mt-4">
        <input 
          type="password" 
          placeholder="Enter your Password*" 
          aria-label="Password"
          className="w-full h-12 px-4 mb-4 border border-[#bdc3c7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#82ccdd] focus:border-[#82ccdd]" 
        />
      </div>

      <div className="mb-6">
        <button className="w-full py-3 px-4 text-lg font-medium text-white bg-[#3C6382] rounded-lg hover:bg-[#0a3d62] transition duration-300">
          Log In
        </button>
      </div>

      <div className="text-center text-gray-600 text-sm">
        <p>
          Don&apos;t have an account? 
          <Link href="/signup" className="text-[#3C6382] hover:underline"> Sign Up</Link>
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 my-6">
        <div className="h-[1px] w-full bg-[#3C6382]"></div>
        <p className="text-gray-500 text-sm">OR</p>
        <div className="h-[1px] w-full bg-[#3C6382]"></div>
      </div>

      <div className="my-4">
        <button 
          
          className="w-full py-3 px-4 text-lg text-[#0a3d62] bg-white border border-[#bdc3c7] rounded-lg hover:bg-[#ecf0f1] transition duration-300">
          Log In with Github
        </button>
      </div>

      <div className="my-4">
        <button 
         
          className="w-full py-3 px-4 text-lg text-[#0a3d62] bg-white border border-[#bdc3c7] rounded-lg hover:bg-[#ecf0f1] transition duration-300">
          Log In with Google
        </button>
      </div>
    </div>
  );
}
