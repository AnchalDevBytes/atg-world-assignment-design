import React, { useState } from 'react';
import { IoMdShare } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { SlOptions } from 'react-icons/sl';
import Modal from './Model';

const ArticleCard = ({ imageSrc, headline, authorName, authorProfile, topTitle}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlOptionsClick = () => {
      setIsModalOpen(prev => !prev);
    };

  return (
    <div className='w-full lg:h-[480px] shadow-md border rounded-md'>
      <div className='w-full h-[150px] lg:h-[220px] rounded-tr-md rounded-tl-md'>
        <img className='w-full h-full rounded-tr-md rounded-tl-md' src={imageSrc} alt='card' />
      </div>
      <div className='lg:p-4 p-2 flex flex-col gap-3 lg:gap-5'>
        <span>{topTitle}</span>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between items-center lg:gap-32 gap-5 relative'>
            <h2 className='lg:text-2xl text-xl'>{headline}</h2>
            <SlOptions className='bg-gray-200 rounded-md text-4xl p-2' onClick={handleSlOptionsClick} />
            <Modal isVisible={isModalOpen} >
                <button>Edit</button>
                <button>Report</button>
                <button>Option 3</button>
            </Modal>
          </div>
          <p className='lg:text-lg text-sm font-normal tracking-wide text-gray-500'>
            I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src={authorProfile} alt='' />
            <p className='text-base font-medium'>{authorName}</p>
          </div>
          <div className='flex items-center gap-2 text-gray-500'>
            <IoEyeOutline />
            <p>1.4k views</p>
            <IoMdShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
