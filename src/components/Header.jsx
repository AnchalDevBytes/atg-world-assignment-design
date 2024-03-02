import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import Modal from "./Model";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

const Header = () => {
  // this is to open the option model for createAccount/signin
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState(false);

  // this is to open card model for each authentication
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

  const handleAuthOptionClick = () => {
    setIsCreateAccountModalOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between px-5 lg:px-10 py-2 lg:py-4 items-center shadow-md">
      <div className="flex items-center">
        <h2 className="text-green-400 text-base lg:text-2xl font-light">
          ATG.<span className="text-gray-600">W</span>
        </h2>
        <img src="/assets/logo.png" className="lg:h-full lg:w-full h-4 w-4 " alt="logo" />
        <h2 className="text-gray-600 text-base lg:text-2xl font-light">RLD</h2>
      </div>
      <div className="relative hidden lg:flex">
        <input
          className="bg-gray-200 px-10 py-2 rounded-full pl-12 placeholder:text-sm placeholder:font-medium placeholder:text-gray-600"
          type="text"
          placeholder="Search for your favorite groups in ATG"
        />
        <IoMdSearch className="absolute top-0 left-0 m-3 text-gray-500 font-bold text-xl" />
      </div>
      <div className="flex items-center gap-1">
        <p className="lg:text-base text-sm font-normal">Create account.</p>
        <div
          onClick={handleAuthOptionClick}
          className="flex items-center px-1 lg:px-5 py-2 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 cursor-pointer relative"
        >
          <span className="text-blue-600 font-bold text-sm lg:text-base">It's free!</span>
          <IoMdArrowDropdown />
          <Modal isVisible={isCreateAccountModalOpen}>
            <button
              onClick={() => setIsCreateAccountOpen(true)}
              className="hover:text-blue-500 transition-all duration-200"
            >
              Create Account
            </button>
            <button
              onClick={() => setIsSigninOpen(true)}
              className="hover:text-blue-500 transition-all duration-200"
            >
              Sign in
            </button>
          </Modal>
        </div>
      </div>

      {/* Create Account and Signin model */}

      {/* Create Account */}
      {isCreateAccountOpen && (
        <CreateAccount setIsCreateAccountOpen={setIsCreateAccountOpen}/>
      )}

      {/* Sign in */}
      {isSigninOpen && (
        <SignIn setIsSigninOpen={setIsSigninOpen}/>
      )}
      
    </nav>
  );
};

export default Header;
