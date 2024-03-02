import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";

const Recommendation = () => {
  return (
    <div className='w-[28vw] h-screen px-10 flex flex-col py-10 gap-5 '>
        <div className='flex justify-between items-center border-b-2 pb-1 border-gray-300'>
            <div className='flex gap-2 items-center'>
              <IoLocationOutline className='text-2xl font-bold' />
              <h5 className='text-base font-medium'>Noida, India</h5>
            </div>
            <BiSolidPencil className='text-lg font-bold' />
        </div>
        <div className=' flex gap-2  items-start'>
            <CiCircleInfo className='text-4xl font-medium' />
            <p className='text-sm font-light'>Your location will help us serve better and extend a personlised experience.</p>
        </div>
    </div>
  )
}

export default Recommendation