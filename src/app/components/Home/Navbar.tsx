"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from "lucide-react";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="">
        <div className="flex justify-between items-center top-2 px-2  absolute w-full h-[56px]">
       
          <p className="text-3xl volkhov-regular font-[400]">FASCO</p>
  
       
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="poppins-thin text-sm text-black font-[400]">Home</Link>
            <Link href="/" className="poppins-thin text-sm text-black font-[400]">Deals</Link>
            <Link href="/" className="poppins-thin text-sm text-black font-[400]">New Arrivals</Link>
            <Link href="/" className="poppins-thin text-sm text-black font-[400]">Packages</Link>
            <Link href="/" className="poppins-thin text-sm text-black font-[400]">Sign in</Link>
            <button className="bg-gray-800 text-white poppins-thin1 text-sm rounded-lg px-5 py-2 hover:bg-gray-900">
              Sign Up
            </button>
          </div>
  
       
          <button className="md:hidden sm:block sm:absolute sm:right-0" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
     
        {isOpen && (
          <div className="md:hidden sm:flex sm:flex-col sm:bg-white sm:shadow-md sm:p-2 sm:space-y-3 sm:absolute sm:right-0 sm:top-4 sm:z-50">
            <button className="md:hidden sm:block sm:absolute sm:right-0" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
            <Link href="/" className="text-sm text-gray-700">Home</Link>
            <Link href="/" className="text-sm text-gray-700">Deals</Link>
            <Link href="/" className="text-xs text-gray-700">New Arrivals</Link>
            <Link href="/" className="text-sm text-gray-700">Packages</Link>
            <Link href="/" className="text-sm text-gray-700">Sign in</Link>
            <button className="bg-gray-800 text-white text-sm rounded-lg px-5 py-2 w-full hover:bg-gray-900">
              Sign Up
            </button>
          </div>
        )}
      </div>
    );
  
}

export default Navbar;