import React, { useState } from 'react'
import { IoMdShare } from 'react-icons/io'
import { IoEyeOutline, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
import Modal from './Model'

const JobCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlOptionsClick = () => {
      setIsModalOpen(prev => !prev);
    };


  return (
    <div className='w-full h-[270px] shadow-md border rounded-md'>
      <div className='p-4 flex flex-col gap-5'>
        <span>💼️ Job</span>
        <div className='flex flex-col gap-3'>
            <div className='relative flex justify-between items-center gap-32'>
                <h2 className='text-2xl'>Software Developer</h2>
                <SlOptions onClick={handleSlOptionsClick} className='bg-gray-200 rounded-md text-4xl p-2'  />
                <Modal isVisible={isModalOpen} >
                    <button>Edit</button>
                    <button>Report</button>
                    <button>Option 3</button>
                </Modal>
            </div>
            <div className='flex gap-10'>
                <div className='flex gap-2 items-center'>
                <MdOutlineMarkunreadMailbox className='text-xl font-bold' />
                <h5 className='text-sm font-normal'>Innovaccer Analytics Private Ltd.</h5>
                </div>
                <div className='flex gap-2 items-center'>
                <IoLocationOutline className='text-xl font-bold' />
                <h5 className='text-sm font-normal'>Noida, India</h5>
                </div>
            </div>
            <button type='button' className='w-full border-2 py-2 tracking-wider text-green-500 font-medium rounded-xl border-gray-300 text-xs'>Apply on Timesjobs</button>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img src="/assets/profile3.png" alt='' />
            <p className='text-base font-medium'>Joseph Gray</p>
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

export default JobCard