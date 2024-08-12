'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import getData from '../request'
import Load from './load.js'
import Link from 'next/link'
export default function Menu() {
 const [data, setData] = useState();
 const [load, setLoad] = useState(true);
    useEffect(() =>{
            const get = async () => {
                setLoad(true)
                try {
                    const pizza = await getData();
                    setData(pizza.recipes)
                } catch (error) {
                    console.log(error);
                }finally{
                    setLoad(false)
                }
            }
            get();
        },[]);
   
  return (
    <div className='w-[85%] sm:w-[75%] mx-auto sm:my-28'>
        <div>
            <p className='sm:w-[50%] w-[80%] sm:text-5xl text-xl font-bold my-10 tracking-tight'><span className='bg-[#f54748] text-white '>Menu</span> That Always Make You Fall In Love.</p>
        </div>
       <div>
       
        {load?(
            <div><Load/></div>
        ):(
            
            <div className='grid sm:grid-cols-3 gap-9 '>
                {data.map((a)=>{
                    return (
                        <Link key={a.id} href={`./details/${a.id}`}>
                        <div className='mx-auto' key={a.id}>
                            <div className='overflow-hidden rounded-3xl inline-block'>
                                <Image src={a.image} alt='' height={370} width={370} className='object-contain rounded-3xl hover:scale-110 transition-transform duration-500'/>
                            </div>
                            <div className=' mx-3'>
                            <p className='text-xl font-semibold py-4'>{a.name}</p>
                            <p className='text-[#f54748] font-bold text-xl'>$ {a.caloriesPerServing}</p>
                            </div>
                        </div></Link>
                    )})}
            </div>
            
        )}
       </div>
    </div>
  )
}
