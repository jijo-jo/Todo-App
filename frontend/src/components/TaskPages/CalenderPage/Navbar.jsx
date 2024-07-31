import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center pt-8 pb-8 md:pt-16 md:pb-8 lg:pt-16 lg:pb-8">
      <FaArrowLeft className="text-gray-700 text-xl cursor-pointer ml-8 md:ml-16 lg:ml-16" />
      <FaSearch className="text-gray-700 text-xl cursor-pointer mr-8 md:mr-16 lg:mr-16" />
    </nav>
  );
};

export default Navbar;
