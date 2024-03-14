"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
    
    const [ openNav, setOpenNav ] = useState(false);
    return(
    <>
        <div className="fixed top-0 left-0 w-full h-full z-10 ">
            <video autoPlay muted loop className=" object-cover absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] min-w-full min-h-full w-auto h-auto z-[-1]">
            <source src="https://static.warthunder.com/upload/image/media/warland/wl193.mp4" type="video/mp4" />
            <source src="https://static.warthunder.com/upload/image/media/warland/wl193.ogv" type="video/ogg" />
            <source src="https://static.warthunder.com/upload/image/media/warland/wl193.webm" type="video/webm" />
            </video>
        </div>
            
        <header className='w-full h-[100px] flex sticky z-20 items-center justify-between p-4 bg-zinc-950 bg-opacity-80'>
            <div>
                <div>   
                    <Link href="/">
                        <Image src='assets/img/logo.svg' alt='logo' width={120} height={120} className='lg:mx-10 h-[50] w-[50]  lg:h-[120] lg:w-[120] ' />
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center'>
              <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0' } fixed w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`} />
              <Navbar containerStyle='hidden md:flex' />
                <div className='px-10 flex justify-center items-center gap-2 lg:block lg:gap-0'>
                    <ul>
                        <li>
                            <Link href="/" className='lg:text-xl lg:font-medium bg-red-500 rounded-md lg:h-[40px]  lg:w-[100px] lg:p-0 h-[20] w-[60] p-2 flex text-center items-center justify-center  '>Купыв</Link>
                        </li>
                    </ul>
                    <button onClick={() => setOpenNav(!openNav)} className='text-xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
  </>
  )
}

export default Header