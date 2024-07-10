"use client";

import { Sacramento } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DesktopLink from './DesktopLink';
import Overlay from './Overlay';
import Drawer from './Drawer';

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"]
})


const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="sticky bg-white drop-shadow-sm z-30 top-0 p-2 md:p-0 dark:bg-black w-full max-w-full box-border ">
        <div className="bg-transparent relative flex flex-col w-full px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="bg-transparent flex flex-row items-center justify-between lg:justify-start">
            <Logo />
            <DrawerToggle isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          </div>
          <DesktopNavigation />
        </div>
      </div>
      <Drawer closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Overlay isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </>
  );
};

function DesktopNavigation() {
  return (
    <nav className="hidden md:flex md:flex-row items-center gap-2">
      <DesktopLink href='/' text='Acasa' />
      <DesktopLink href='/servicii' text='Servicii' />
      <DesktopLink href='/preturi' text='Preturi' />
      <DesktopLink href='/contact' text='Contact' />
      <DesktopLink href='/faq' text='Intrebari frecvente' />
    </nav>
  )
}

function DrawerToggle({ isDrawerOpen, setIsDrawerOpen }: { isDrawerOpen: boolean, setIsDrawerOpen: (arg: boolean) => void }) {
  return (

    <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isDrawerOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
        )}
      </svg>
    </button>
  )
}

function Logo() {
  return (
    <Link className="
            text-lg tracking-tight text-black dark:text-sky-50 focus:outline-none lg:text-2xl
            flex items-center
            " href="/">
      <Image className='hidden md:block ' src={'/images/cala.png'} alt='Cala' width={100} height={100} />
      <span className={` ${sacramento.className} text-2xl lg:text-5xl`}>
        Spalatoria Cala
      </span>
    </Link>

  )
}

export default Navbar;
