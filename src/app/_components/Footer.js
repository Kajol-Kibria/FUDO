import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaGithub   } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className='flex flex-col  items-center'>
        <div className='flex gap-10 text-4xl text-[#f54748] py-6'>
            <a href='https://www.facebook.com/kajol.kibria.77'><FaFacebook/></a>
            <a href='https://www.instagram.com/kajolkibria07/'><FaInstagram/></a>
            <a href='https://github.com/Kajol-Kibria'><FaGithub/></a>
            
            

        </div>
        <div>
        <ul className='flex gap-12 text-md pb-10'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Menu</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
        <div>
            <div className='w-[80vw] border-t border-dashed border-[#f54748]/80'/>
            <div className='text-center text-sm py-5'>copyright © 2024  developed by <span className='font-bold text-white bg-[#f54748]'>KIBRIA</span></div>
        </div>
    </footer>
  )
}
