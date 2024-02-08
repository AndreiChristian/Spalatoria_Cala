"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to close the drawer
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="w-full mx-auto bg-white border-b">
      <div className="relative flex flex-col w-full p-2 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
            <span className="lg:text-lg uppercase focus:ring-0">
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
        <nav className="hidden md:flex md:flex-row">
          <a href="/servicii" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Servicii</a>
          <a href="/galerie" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Galerie</a>
          <a href="/preturi" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Preturi</a>
          <a href="/despre_noi" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Despre noi</a>
          <a href="/faq" className="px-2 py-2 text-md text-gray-500 hover:text-blue-500">Intrebari frecvente</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
