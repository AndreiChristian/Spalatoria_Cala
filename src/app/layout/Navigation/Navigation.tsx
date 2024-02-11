"use client";

import { useThemeStore } from '@/app/theme/store';
import { Sacramento } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DesktopLink from './DesktopLink';
import MobileLink from './MobileLink';

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"]
})

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { darkTheme, toggleTheme } = useThemeStore(state => state)

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className=" p-2 md:p-0 dark:bg-black w-full max-w-full box-border border-b">
      <div className="relative flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link className="
            text-lg tracking-tight text-black dark:text-sky-50 focus:outline-none lg:text-2xl
            flex items-center
            " href="/">
            <Image className='hidden md:block ' src={'/images/cala.png'} alt='Cala' width={100} height={100} />
            <span className={` ${sacramento.className} text-2xl lg:text-5xl`}>
              Spalatoria Cala
            </span>
          </Link>
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
        <div className={`opacity-100 fixed top-0 left-0 z-50 w-64 h-full transform bg-white p-5 transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <nav className="flex flex-col">
            <Link className='self-center mb-5 flex flex-col items-center ' href={'/'}>
              <Image src={'/images/cala.png'} alt='Cala' width={100} height={100} />
              <span className={` ${sacramento.className} text-3xl lg:text-3xl`}>
                Spalatoria Cala
              </span>
            </Link>
            <MobileLink closeDrawer={closeDrawer} href='/' text='Acasa' />
            <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/servicii' text='Servicii' />
            <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/galerie' text='Galerie' />
            <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/preturi' text='Preturi' />
            <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/contact' text='Contact' />
            <MobileLink closeDrawer={() => setIsDrawerOpen(false)} href='/faq' text='Intrebari frecvente' />
          </nav>
        </div>
        {/* Overlay */}
        {isDrawerOpen && (
          <div className=" fixed inset-0 z-40 bg-black opacity-85 transition-transform duration-200 ease-in-out " onClick={closeDrawer}></div>
        )}
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-row items-center gap-2">
          <DesktopLink href='/' text='Acasa' />
          <DesktopLink href='/servicii' text='Servicii' />
          <DesktopLink href='/galerie' text='Galerie' />
          <DesktopLink href='/preturi' text='Preturi' />
          <DesktopLink href='/contact' text='Contact' />
          <DesktopLink href='/faq' text='Intrebari frecvente' />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
