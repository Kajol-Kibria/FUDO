'use client'
import React from 'react';


import { TbPhone, TbMail  } from "react-icons/tb";
import { FaFacebookF, FaInstagram ,FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";


export default function Page() {
 
  return (
    <div className=' w-[80%] lg:w-[65%] mx-auto  lg:my-44'>
<div className='lg:flex gap-8'>
  <div className='lg:w-1/3'>
    <h1 className='uppercase   lg:text-2xl text-xl lg:pt-0 pt-8 pb-8 font-bold'>feel free to contact me</h1>
    <p className='  pb-5'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
    <div className='flex items-center gap-3 pb-4'>
      <TbMail  size={44} className=' text-[#f54748]'/>
      <div>
        <p className='text-gray-400'>MAIL ME</p>
        <p  className='  font-bold'>kajolkibria95@gmail.com</p>
      </div>
    </div>
    <div className='flex items-center gap-3'>
      <TbPhone size={44} className='text-[#f54748]'/>
      <div>
        <p className='text-gray-400'>Call ME</p>
        <p  className='  font-bold'>01402874542</p>
      </div>
    </div>
      <div className='flex gap-4 py-6'>
        <a className=' p-3 bg-gray-100   rounded-full hover:text-white hover:bg-[#f54748] transition-all duration-200' href='https://github.com/Kajol-Kibria'><FaGithub  size={20}/></a>
        <a className=' p-3 bg-gray-100   rounded-full hover:text-white hover:bg-[#f54748] transition-all duration-200' href='https://www.facebook.com/kajol.kibria.77'><FaFacebookF  size={20}/></a>
        <a className=' p-3 bg-gray-100   rounded-full hover:text-white hover:bg-[#f54748] transition-all duration-200' href='https://www.instagram.com/kajolkibria07/'><FaLinkedinIn  size={20}/></a>
        <a className=' p-3 bg-gray-100   rounded-full hover:text-white hover:bg-[#f54748] transition-all duration-200' href='https://www.linkedin.com/in/kajol-kibria-8b2004252/'><FaInstagram  size={20}/></a>
      </div>
  </div>
  <div className='lg:w-2/3'>
  <form  >
      <div className='lg:flex gap-5 space-y-5 lg:space-y-0'>
        <input name="from_name" type='text' placeholder='Your subject' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-[#f54748] focus:placeholder-white placeholder-[#f54748]/60 transition-all duration-200 rounded-full'/>
        <input name="user_name"  type='text' placeholder='Your name' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-[#f54748] focus:placeholder-white  placeholder-[#f54748]/60 transition-all duration-200 rounded-full'/>
        <input name="user_email" type='email' placeholder='Your email' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-[#f54748] focus:placeholder-white placeholder-[#f54748]/60 transition-all duration-200 rounded-full'/>
      </div>
      <textarea name="user_message" placeholder='Your subject' className='py-3 pr-3 pl-5 my-8 w-full h-44 border border-gray-400 outline-none focus:border-[#f54748] focus:placeholder-white placeholder-[#f54748]/60 transition-all duration-200 rounded-3xl '/>
      <button type="submit" value="Send" className='group uppercase lg:text-lg flex gap-3 items-center py-2 px-4 border  border-[#f54748] rounded-full hover:text-white hover:bg-[#f54748] transition-all duration-200 font-bold active:scale-90 mb-12'>send message <RiSendPlaneFill className='text-[#f54748] group-hover:text-white  transition-all duration-200' size={28}/></button>
  </form>
</div>
</div>

</div>
  )
}
