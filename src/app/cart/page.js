'use client'
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,  clear,  decrease,  remove } from '../features/addtocart/cartSlice';
import { ImBin } from "react-icons/im";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";


export default function cart() {
    const data = useSelector((state) => state.cart);
    
    const dispatch = useDispatch()
    const handleRemove = (item) =>{
      dispatch(remove(item))
    }
    const handleAdd = (item) =>{
      dispatch(addToCart(item))
    }
    const handleClear = () =>{
      dispatch(clear())
    }
    const handleDecrease = (item) =>{
      dispatch(decrease(item))
    }
   
  return (
    <div className=' w-[85%] sm:w-[75%] mx-auto min-h-[60vh]'>
      <p className='text-center text-3xl font-bold my-20'>Your cart</p>
      {(data.cartItem.length === 0) ? (
        <div className='flex flex-col items-center'>
        <div className='text-center text-2xl font-bold text-[#f54748]'>Cart is empty</div>
        <Image src='/empty-cart.png' alt='' height={300} width={300}/>
        <Link href='/'><p className='bg-[#f54748] text-xl flex items-center gap-2 px-4 py-2 rounded font-bold text-white'>Order now!<FaArrowRight/></p></Link>
        </div>
      ) : (
        <div className='flex flex-col gap-6 sm:my-10'>
        {data.cartItem.map((item)=>{
          return(
            <div key={item.id} className='shadow-md border border-[#f54748] py-5 px-5 rounded-xl '>
            <div className='flex justify-between items-center '>
              
              <Link href={`../details/${item.id}`} className='flex items-center sm:w-3/4 lg:gap-16 gap-5'>
              <Image className='rounded-xl ' src={item.image} alt='' width={130} height={130}/>
              <p className='hidden sm:block lg:text-xl text-md font-semibold'>{item.name}</p>
              </Link>
              <div className='grid grid-cols-1 sm:grid-cols-2 text-center items-center justify-center gap-5 sm:gap-12  '>
              <p className=' sm:w-1/4 lg:text-xl text-md font-bold'>{item.caloriesPerServing * item.count}tk </p>
              <div className='flex items-center gap-3 bg-[#f54748] text-white font-semibold rounded px-3 py-1 w-fit'>
                <button onClick={()=>handleDecrease(item)}>-</button>
                <p>{item.count}</p>
                <button  onClick={()=>handleAdd(item)}>+</button>
              </div>
              </div>
              <button onClick={()=>handleRemove(item)}><ImBin className=' sm:block hidden text-[#f54748]  mx-10' size={20}/></button>
        
            </div>
            <div className='flex items-center justify-between sm:hidden  pt-4'>
            <p className=' font-bold text-md'>{item.name}</p>
            <button onClick={()=>handleRemove(item)}><ImBin className='text-[#f54748] sm:mx-20' size={20}/></button>
            </div>
           
            </div>
          )
        })}
        <div className='sm:mx-16 space-y-10 my-10'>

        <div className='flex sm:text-2xl text-lg font-bold'>Subtotal : 48930</div>
        <div className='flex items-center justify-between sm:text-xl text-lg font-semibold'>
         <button onClick={()=>{handleClear()}} className='px-5 py-2 bg-[#f54748] text-white rounded-md'>Clear Cart</button>
         <Link href='/order' className='px-5 py-2 bg-[#f54748] text-white rounded-md'>Place Order</Link>
         </div>
        
        </div>
      </div>
      )}
    </div>
  )
}
