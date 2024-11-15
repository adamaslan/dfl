"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Palette_Mosaic } from "next/font/google"; // Import optimized Google font

// Configure the font
const paletteMosaic = Palette_Mosaic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 flex-wrap">
      <Link href="/" className="text-2xl font-extrabold text-[#001022] font-palette-mosaic">
              Drinks Food<span className="font-light text-3xl"> Life</span>
            </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col cursor-crosshair w-8 h-8 justify-around items-center md:hidden"
      >
        <span className={`block w-8 h-0.5 bg-[#0D0C1D] transition-transform ${isOpen ? "rotate-45" : ""}`}></span>
        <span className={`block w-8 h-0.5 bg-[#0D0C1D] transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-8 h-0.5 bg-[#0D0C1D] transition-transform ${isOpen ? "-rotate-45" : ""}`}></span>
      </div>
      <div
        className={`flex flex-col items-center justify-between w-full mt-4 transition-all duration-300 ease-in-out md:flex-row md:mt-0 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        } md:max-h-full md:w-auto`}
      >
        <Link href="./subscribe" className="py-2 px-4 text-center text-[#001022] text-lg hover:text-yellow-500 transition-colors">
          Subscribe
        </Link>
        <Link href="./about" className="py-2 px-4 text-center text-[#001022] text-lg hover:text-yellow-500 transition-colors">
          About
        </Link>
        {/* <a href="/api/auth/signin" className="py-2 px-4 text-center text-[#001022] text-lg hover:text-yellow-500 transition-colors">
            Login
          </a> */}
      </div>
    </div>
  );
};

export default Nav;
