import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdGroupAdd } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ArticleNav = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <nav className='flex justify-between items-center border-b-2 pb-2 border-gray-300'>
      {/* for small screens */}
      <div className='flex gap-36 px-4 items-center lg:hidden'>
        <p className='hover:font-normal active:font-normal'>All Posts(32)</p>
        <div className='relative'>
          <button
            onClick={toggleFilters}
            className='text-sm flex items-center tracking-widest text-gray-600 bg-gray-200 p-2 rounded-md relative'
          >
            Filters: All
            <IoMdArrowDropdown />
          </button>
          {showFilters && (
            <div className='absolute top-full left-0 w-full bg-white border p-2 border-gray-300 mt-1 rounded-md shadow-md'>
              <ul>
                <NavLink className={({isActive}) => isActive ? "font-normal" : "font-light text-base tracking-wide"}>All Posts(32)</NavLink>
                <li className='p-2 hover:bg-gray-100'>Article</li>
                <li className='p-2 hover:bg-gray-100'>Event</li>
                <li className='p-2 hover:bg-gray-100'>Education</li>
                <li className='p-2 hover:bg-gray-100'>Job</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* for large screens */}
      <ul className='hidden lg:flex gap-8 items-center justify-between text-base font-light tracking-wide'>
        <li className='hover:font-normal active:font-normal'>All Posts(32)</li>
        <li className='hover:font-normal active:font-normal'>Article</li>
        <li className='hover:font-normal active:font-normal'>Event</li>
        <li className='hover:font-normal active:font-normal'>Education</li>
        <li className='hover:font-normal active:font-normal'>Job</li>
      </ul>
      <div className='hidden lg:flex gap-5 items-center'>
        <button type='button' className='px-5 py-2 bg-gray-300 rounded-md flex gap-2 text-black items-center'>
          Write a Post <IoMdArrowDropdown />
        </button>
        <button type='button' className='px-5 py-2 bg-blue-500 rounded-md flex gap-2 text-white items-center'>
          <MdGroupAdd /> Join Group
        </button>
      </div>
    </nav>
  );
};

export default ArticleNav;
