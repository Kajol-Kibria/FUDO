'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosRestaurant, IoMdRestaurant  } from "react-icons/io";
import { useSelector } from 'react-redux'

export default function Navbar() {
    const [hydra, setHydra] = useState(false);
    useEffect(()=>{setHydra(true)},[])
    const navArray = [
        {name:'Home',
            link:'/'   
        },
        
        {name:'Contact',
            link:'/contact'   
        },
        
    ]
    const path = usePathname();
    const [menu, setMenu] = useState(true);
    
    
    const data = useSelector((state) => state.cart);
    console.log(data.cartItem);
  return (
    <header className='w-[85%] sm:w-[85%] mx-auto'>
        <div className='flex items-center justify-between my-8'>
        <Link href='/' className='flex items-center gap-3 w-1/4'>
            <Image className='rounded w-10 sm:w-20' src='/Logo.png' alt='' height={80} width={80} />
            <span className='sm:text-3xl text-xl font-bold'>Fudo</span>
        </Link>
        <div className='hidden sm:block'>
            <div className='flex gap-14 text-xl w-1/4'>
            {navArray.map(({name, link})=>{
            return (<div key={name}>
                <Link className={`${path === link && 'border-b-2 border-[#f54748]'} hover:border-b-2 border-[#f54748]`} href={link}>{name}</Link>
            </div>)
           })} 
            </div>
        </div>
        <div className='flex items-center justify-end sm:w-1/4'>
            <Link href='../cart' className={`${path === '/cart' && 'border-b-2 border-[#f54748]'} hover:border-b-2 border-[#f54748]`}><HiOutlineShoppingBag size={38}/></Link>
            <Link href='../cart' className='bg-[#f54748] w-5 text-center text-white h-5 rounded-full -translate-x-3 -translate-y-2'>{hydra && data.cartItem.length}</Link>
        <div className='sm:hidden block -rotate-90' onClick={()=>{setMenu(!menu)}}>
            {menu?<IoIosRestaurant size={38}/>:<IoMdRestaurant size={38}/>}
        </div>
        </div>
        </div>
        
        <div onClick={()=>{setMenu(!menu)}} className={`${menu?'hidden':'block'} fixed right-10 left-10 transition-all duration-500 mx-auto bg-[#f54748] py-5 px-8 text-center rounded-lg text-white z-50`}>
        <div className='space-y-4'>
           {navArray.map(({name, link})=>{
            return (<div key={name}>
                <Link className={`${path === link && 'border-b-2 border-white'}`} href={link}>{name}</Link>
            </div>)
           })}     
            </div>
        </div>
    </header>
  )
}
