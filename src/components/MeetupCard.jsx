import React, { useState } from 'react'
import { IoMdCalendar, IoMdShare } from 'react-icons/io'
import { IoEyeOutline, IoLocationOutline } from 'react-icons/io5'
import { SlOptions } from 'react-icons/sl'
import Modal from './Model'

const MeetupCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlOptionsClick = () => {
      setIsModalOpen(prev => !prev);
    };


  return (
    <div className='w-full lg:h-[480px] shadow-md border rounded-md'>
      <div className='w-full h-[150px] lg:h-[220px] rounded-tr-md rounded-tl-md'>
        <img className='w-full h-full rounded-tr-md rounded-tl-md' src="/assets/card2.png"alt='card' />
      </div>
      <div className='lg:p-4 p-2 flex flex-col gap-3 lg:gap-5'>
        <span>🗓️ Meetup</span>
        <div className='flex flex-col gap-3'>
            <div className='relative flex justify-between items-center lg:gap-32 gap-5'>
                <h2 className='lg:text-2xl text-xl'>Finance & Investment Elite Social Mixer @Lujiazui</h2>
                <SlOptions onClick={handleSlOptionsClick} className='bg-gray-200 rounded-md text-4xl p-2'  />
                <Modal isVisible={isModalOpen} >
                    <button>Edit</button>
                    <button>Report</button>
                    <button>Option 3</button>
                </Modal>
            </div>
            <div className='flex gap-10'>
                <div className='flex gap-2 items-center'>
                <IoMdCalendar className='text-xl font-bold' />
                <h5 className='text-sm font-normal'>Fri, 12 Oct, 2018</h5>
                </div>
                <div className='flex gap-2 items-center'>
                <IoLocationOutline className='text-xl font-bold' />
                <h5 className='text-sm font-normal'>Ahmedabad, India</h5>
                </div>
            </div>
            <button type='button' className='w-full border-2 py-2 tracking-wider text-red-600 font-medium rounded-xl border-gray-300 text-xs'>Visit Website</button>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="/assets/profile2.png" alt='' />
            <p className='text-base font-medium'>Ronal Jones</p>
          </div>
          <div className='flex items-center gap-2 text-gray-500'>
            <IoEyeOutline />
            <p>1.4k views</p>
            <IoMdShare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetupCard