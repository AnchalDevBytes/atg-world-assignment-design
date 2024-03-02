import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";

const CreateAccount = ({setIsCreateAccountOpen}) => {
  return (
    <div className="bg-black/60 flex items-center justify-center z-10 fixed top-0 left-0 h-screen w-screen">
          <div
            id="signup"
            className="w-[50%] h-[55%] -translate-y-10 bg-white rounded-md relative"
          >
            <button
              onClick={() => setIsCreateAccountOpen(false)}
              className="text-2xl h-8 w-8 font-bold p-1 rounded-full bg-gray-200/70 flex items-center justify-center absolute -top-10 right-0 active:bg-gray-300/90"
            >
              &times;
            </button>
            <div className='h-full'>
              <div className='bg-green-200/50 py-3 rounded-t-md text-center font-medium'>
                <p className='text-green-700'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
              </div>
              <div className='flex items-center justify-between px-10 py-3'>
                <h3 className='text-2xl font-bold'>Create Account</h3>
                <p className='text-sm font-medium text-gray-500'>Already have an account? <span className='text-blue-600'>Sign In</span></p>
              </div>
              <div className='flex items-start w-full gap-5'>
                <div className='w-1/2 px-16 rounded flex flex-col items-center gap-4'>
                  <form className='border flex flex-col'>
                    <div className='flex items-center justify-center w-full'>
                      <input type="text" className='w-1/2 py-2 px-3 focus:outline-none bg-neutral-50 border-r' placeholder='First Name'/>
                      <input type="text" className='w-1/2 py-2 px-3 focus:outline-none bg-neutral-50 border-none' placeholder='Last Name'/>
                    </div>
                    <input type="email" placeholder='Email' className='w-full py-2 px-3 border-y focus:outline-none bg-neutral-50'/>
                    <input type="password" className='w-full py-2 px-3 border-b focus:outline-none bg-neutral-50' placeholder='Password'/>
                    <input type="password" className='w-full py-2 px-3 border border-gray-400 focus:outline-none bg-neutral-50 border-none' placeholder='Confirm Password'/>
                  </form>
                  <button className='px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-lg w-full'>Create Account</button>
                  <div className='flex flex-col items-center gap-2 w-full'>
                    <button className='bg-white py-2 px-5 w-full border flex items-center justify-center gap-2'><span><FaFacebook fill='blue'size={20} /></span> <span>Sign up with Facebook</span></button>
                    <button className='bg-white py-2 px-5 w-full border flex items-center justify-center gap-2'><span><FcGoogle size={20}/></span> <span>Sign up with Google</span></button>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <img src="/assets/createVector.png" alt="signup vector image" />
                  <p className='text-sm text-gray-500 font-light'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CreateAccount