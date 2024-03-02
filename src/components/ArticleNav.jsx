import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdGroupAdd } from "react-icons/md";

const ArticleNav = () => {
  return (
    <nav className='flex justify-between items-center border-b-2 pb-2 border-gray-300'>
        <ul className='flex gap-8 items-center justify-between text-base font-light tracking-wide'>
            <li className='hover:font-normal active:font-normal'>All Posts(32)</li>
            <li className='hover:font-normal active:font-normal'>Article</li>
            <li className='hover:font-normal active:font-normal'>Event</li>
            <li className='hover:font-normal active:font-normal'>Education</li>
            <li className='hover:font-normal active:font-normal'>Job</li>
        </ul>
        <div className=' flex  gap-5 items-center'>
            <button type='button' className='px-5 py-2 bg-gray-300 rounded-md flex  gap-2 text-black items-center'>Write a Post <IoMdArrowDropdown /></button>
            <button type='button' className='px-5 py-2 bg-blue-500 rounded-md flex  gap-2 text-white items-center'><MdGroupAdd /> Join Group</button>
        </div>
    </nav>
  )
}

export default ArticleNav