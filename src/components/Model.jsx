import React from 'react'

const Modal = ({isVisible, children}) => {


  return (
    <div  className={`absolute top-12 right-0 flex justify-center items-center bg-opacity-50 z-10`}>
      <div className={`bg-white flex flex-col justify-center items-start px-5 gap-2 overflow-hidden duration-200 transition-all ${isVisible ? 'visible' : 'hidden'} w-48 h-32 rounded-md shadow shadow-gray-500`}>
            {
                children
            }
      </div>
    </div>
  );
};

export default Modal;
