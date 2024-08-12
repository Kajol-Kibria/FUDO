'use client'
import React from 'react'
import { getDetails } from '../../request'
import Image from 'next/image';

import Link from 'next/link';
import { addToCart } from '@/app/features/addtocart/cartSlice';
import { useDispatch } from 'react-redux';
export default async function Details({params}) {
 const dispatch = useDispatch();
  const handleAdd = (details) =>{
    dispatch(addToCart(details))
  }
const id = params.id
const details = await getDetails(id);

  return (
    <div className='w-[85%] sm:w-[75%] mx-auto sm:my-20'>
      <div className='sm:flex justify-between items-center'>
         <div className='sm:w-1/2'>
       <div className='hidden sm:block'>

      </div>
      <div>
      <Image className=' mx-auto' src={details.image} alt='' width={500} height={500}/>
</div>
      </div>
      <div className='sm:w-1/2'>
      
        <div className='space-y-6'>
        <p className='text-3xl font-bold'>{details.name}</p>
        <p className='text-gray-600'>{details.name} is available for super fast delivery.</p>
        <p className='font-bold text-xl text-[#f54748]'>{details.caloriesPerServing} tk</p>
        <div className='text-xl font-bold flex gap-5 items-center'>Quantity 
          <Image src='/arrowLeft.png' alt='' width={10} height={6}/>

          <p>1</p>
          <Image src='/arrowRight.png' alt='' width={10} height={6}/>
        </div>
        <button onClick = {()=>{handleAdd(details)}} className='py-3 px-5 bg-[#f54748] text-white rounded-full'>Add to Cart</button>
        <Link href='/ ' className='py-3 px-5 hover:bg-[#f54748] rounded-full mx-3 border border-[#f54748] hover:text-white'>Back to Menu</Link>
        </div>
      </div>
      </div>
     
    </div>
  )
}
