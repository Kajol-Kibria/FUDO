import Image from 'next/image'
import React from 'react'

export default function Services() {
  return (
    <div className='w-[85%] sm:w-[75%] mx-auto'>
        <div>
            <div className='text-center'>
                <p className='uppercase text-[#f54748] font-bold'>what we serve</p>
                <p className='lg:text-5xl text-2xl my-4 leading-relaxed font-bold sm:w-[50%] mx-auto'>Your Favourite Food Delivery Partner</p>
            </div>
            <div className='sm:flex items-center justify-around text-center my-14 '>
                <div className='flex flex-col items-center sm:w-1/3'>
                    <Image className='object-contain h-[300px] w-[300px]' src='/s1.png' alt='' width={250} height={250}/>
                    <p className='font-bold py-4'>Easy to order</p>
                    <p className='text-gray-700 lg:text-xl'>Two step ordering process.</p>
                </div>
                <div className='flex flex-col items-center text-center sm:w-1/3'>
                    <Image className='object-contain h-[300px] w-[300px]' src='/s2.png' alt='' width={250} height={250}/>
                    <p className='font-bold py-4'>Proper hygiene</p>
                    <p className='text-gray-700 lg:text-xl'>Deliver to you with proper hygiene</p>
                </div>
                <div className='flex flex-col items-center text-center sm:w-1/3'>
                    <Image className='object-contain h-[300px] w-[300px]' src='/s3.png' alt='' width={250} height={250}/>
                    <p className='font-bold py-4'>Super fast delivery</p>
                    <p className='text-gray-700 lg:text-xl'>Deliver your food in less than 20 minutes.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
