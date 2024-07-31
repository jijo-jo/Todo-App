import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <nav className="bg-[#F2F5FF] p-8">
      <div className="container mx-auto flex justify-between items-center">
        <FaBars className="text-gray-700 text-2xl cursor-pointer" />
        <div className="relative">
          <FaCircleUser
            className="text-gray-700 text-2xl cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

