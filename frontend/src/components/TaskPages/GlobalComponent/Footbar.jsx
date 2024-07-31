import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaBell, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(props.page === 'dashboard'?'home':"calender");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    if(iconName === 'home'){
       navigate('/dashboard')
    }
    else if(iconName === "calendar"){
      navigate('/calender')
    }
    else{
      navigate('/*')
    }
  };

  return (
    <footer className="bg-[#F2F5FF] bottom-0 w-full flex justify-around items-center p-4 shadow-lg">
      <FooterIcon 
        Icon={FaHome} 
        isActive={activeIcon === 'home'} 
        onClick={() => handleIconClick('home')} 
      />
      <FooterIcon 
        Icon={FaCalendarAlt} 
        isActive={activeIcon === 'calendar'} 
        onClick={() => handleIconClick('calendar')} 
      />
      <FooterIcon 
        Icon={FaBell} 
        isActive={activeIcon === 'bell'} 
        onClick={() => handleIconClick('bell')} 
      />
      <FooterIcon 
        Icon={FaSearch} 
        isActive={activeIcon === 'search'} 
        onClick={() => handleIconClick('search')} 
      />
    </footer>
  );
};

const FooterIcon = ({ Icon, isActive, onClick }) => {
  return (
    <div 
      className={`cursor-pointer p-2 transition-colors`}
      onClick={onClick}
    >
      <Icon className={`text-2xl ${isActive ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700'}`} />
    </div>
  );
};

export default Footer;



