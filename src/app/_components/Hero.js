import Image from 'next/image'
import React from 'react';
import { MdPhone } from "react-icons/md";


export default function Hero() {
  return (
<div className='sm:flex items-center justify-center w-[85%] sm:w-[75%] mx-auto'>
  <div className='sm:w-1/2'>
    <div className='flex items-center sm:m-10'>
      <span className='text-[#f54748] text-md font-semibold'>Faster than Fastest</span>
      <Image src='/Cherry.png' alt='' width={35} height={20}/>
    </div>
    <h1 className='lg:text-8xl text-3xl font-bold sm:w-[80%] my-10 '>Get Your <span className='text-[#f54748]'>FOOD</span> with Fastest Delivery.</h1>
    <p className='text-gray-700 lg:w-[60%] '>Our Mission is to filling your tummy with delicious foods with country&apos;s fastest delivery service. 
    </p>
    <button className='py-3 px-7 my-7 text-white bg-[#f54748] rounded-full'>Order now!</button>
  </div>
  <div className='sm:w-1/2 relative'>
  <div className='absolute flex items-center lg:gap-4 text-lg font-semibold bg-gray-50/10 backdrop-blur-md shadow-xl sm:pl-5 sm:pr-3 pr-2 pl-2 py-2 rounded-full sm:left-28 sm:top-80 top-64 hover:scale-105 cursor-pointer hover:-translate-y-5 transition-all duration-500'>
        <h1 className='sm:block hidden'>Order Now!</h1>
        <MdPhone className='text-white bg-green-500 p-2 rounded-full animate-pulse' size={40}/>
      </div>
    <Image src='/HeroImage.png' alt='' height={680} width={680}/>
    <div className=''>

    <div className=' animate-pulse hover:animate-none absolute sm:right-20 right-52 bottom-56 sm:bottom-40 sm:flex py-3 px-3 bg-gray-50/10 backdrop-blur-md rounded shadow-xl hover:scale-105 cursor-pointer hover:-translate-y-5 transition-all duration-500'>
      <Image src='/p1.jpg' alt='' height={70} width={70} className='rounded'/>
      <div className='flex flex-col px-4 font-semibold'>
        <span className='lg:block hidden'>Italian Pizza</span>
        <span className='lg:block hidden text-[#f54748]'>$<span className='text-black'> 6.89</span></span>
      </div>
     
    </div>
    </div>
  </div>
  
</div>
)
}
