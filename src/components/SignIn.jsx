import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignIn = ({setIsSigninOpen}) => {
  return (
<div className="bg-black/60 flex items-center justify-center z-10 fixed top-0 left-0 h-screen w-screen">
          <div
            id="login"
            className="lg:w-[50%] lg:h-[55%] h-[47%] w-full -translate-y-10 bg-white rounded-md relative"
          >
            <button
              onClick={() => setIsSigninOpen(false)}
              className="text-2xl h-8 w-8 font-bold p-1 rounded-full bg-gray-200/70 flex items-center justify-center absolute -top-10 right-0 active:bg-gray-300/90"
            >
              &times;
            </button>
            <div className='h-full'>
              <div className='bg-green-200/50 py-3 hidden lg:flex rounded-t-md px-24 text-center font-medium'>
                <p className='text-green-700'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
              </div>
              <div className='flex items-center justify-between px-5 lg:px-10 py-3'>
                <h3 className='text-2xl font-bold'>Sign In</h3>
                <p className='text-sm font-medium hidden lg:flex text-gray-500'>Don't have an account? <span className='text-blue-600'> Create Account </span></p>
              </div>
              <div className='flex items-start w-full gap-5'>
                <div className='lg:w-1/2 w-full px-5 lg:px-16 rounded flex flex-col items-center gap-4'>
                  <form className='border flex flex-col w-full'>
                    <input type="email" placeholder='Email' className='w-full py-2 px-3 border-y focus:outline-none bg-neutral-50'/>
                    <input type="password" className='w-full py-2 px-3 border-b focus:outline-none bg-neutral-50' placeholder='Password'/>
                  </form>
                  <div className='flex justify-between w-full items-center'>
                    <button className='px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-lg w-1/2 lg:w-full'>Sign In</button>
                    <span className='text-blue-600 flex lg:hidden'>or, Create Account</span>
                  </div>
                  <div className='flex flex-col items-center gap-2 w-full'>
                    <button className='bg-white py-2 px-5 w-full border flex items-center justify-center gap-2'><span><FaFacebook fill='blue'size={20} /></span> <span>Sign in with Facebook</span></button>
                    <button className='bg-white py-2 px-5 w-full border flex items-center justify-center gap-2'><span><FcGoogle size={20}/></span> <span>Sign in with Google</span></button>
                    <p className='text-sm mt-2 text-center flex lg:hidden text-gray-500 font-light'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                  </div>
                </div>
                <div className='lg:flex hidden flex-col items-center'>
                  <img src="/assets/createVector.png" alt="signup vector image" />
                  <p className='text-sm text-gray-500 font-light'>By signing in, you agree to our Terms & conditions, Privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SignIn