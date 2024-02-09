"use client";

import { useThemeStore } from '@/app/theme/store';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { Sacramento } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"]
})

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { darkTheme, toggleTheme } = useThemeStore(state => state)

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="bg-white dark:bg-black w-full max-w-full border-b box-border">
      <div className="relative flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="
            text-lg tracking-tight text-black dark:text-sky-50 focus:outline-none focus:ring lg:text-2xl
            flex items-center
            " href="/">
            <Image className='hidden md:block ' src={'/images/cala.png'} alt='Cala' width={100} height={100} />
            <span className={` ${sacramento.className} lg:text-3xl`}>
              Spalatoria Cala
            </span>
          </a>
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isDrawerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Drawer style navigation */}
        <div className={`fixed top-0 left-0 z-50 w-64 h-full transform bg-white p-5 transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <nav className="flex flex-col">
            <a href="/servicii" className="py-2 text-sm text-gray-500 hover:text-blue-500">Servicii</a>
            <a href="/galerie" className="py-2 text-sm text-gray-500 hover:text-blue-500">Galerie</a>
            <a href="/preturi" className="py-2 text-sm text-gray-500 hover:text-blue-500">Preturi</a>
            <a href="/contact" className="py-2 text-sm text-gray-500 hover:text-blue-500">Contact</a>
            <a href="/despre_noi" className="py-2 text-sm text-gray-500 hover:text-blue-500">Despre noi</a>
            <a href="/faq" className="py-2 text-sm text-gray-500 hover:text-blue-500">Intrebari frecvente</a>
          </nav>
        </div>
        {/* Overlay */}
        {isDrawerOpen && (
          <div className="fixed inset-0 z-40 bg-black opacity-50 transition-transform duration-200 ease-in-out " onClick={closeDrawer}></div>
        )}
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-row items-center ">
          <a href="/servicii" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Servicii</a>
          <a href="/galerie" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Galerie</a>
          <a href="/preturi" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Preturi</a>
          <a href="/despre_noi" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Despre noi</a>
          <a href="/faq" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Intrebari frecvente</a>
          {darkTheme ? <MoonIcon className='w-6 h-6' onClick={toggleTheme} /> : <SunIcon className='w-6 h-6  ' onClick={toggleTheme} />}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
