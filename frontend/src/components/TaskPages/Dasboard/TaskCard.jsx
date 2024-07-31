import React from 'react';
import { useState } from 'react';
import { RiMore2Fill } from "react-icons/ri";
import apiconfig from '../../../helpers/apiconfig';
import axios from 'axios';
import { calculateDaysDifference } from '../../../helpers/finddaydifference';

const TaskCard = ({ task , imgsrc , page }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDelete = (taskId) =>{
      console.log(taskId);
      setDropdownOpen(false);
      axios.delete(apiconfig.deleteURL(`/task/deltask/${taskId}`))
      .then(response => {
          setDropdownOpen(false);
          window.location.reload()
      })
      .catch((error)=>{
         alert("Task delete Unsucceffull")
         console.log(error);
      })

  }

  const daysleft = calculateDaysDifference(task.Datestart);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between w-[90%] md:w-[75%] lg:w-[60%] mt-8 mb-8 md:ml-8 lg:ml-16">
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-lg">
          <img className={`w-6 h-8 ${page === 'dashboard' ? 'w-6 h-8':'w-4 h-4'} text-white`} src={imgsrc} alt='writepad'></img>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{task.Name}</h3>
          <p className="text-gray-500">{`${daysleft} Days ago`}</p>
        </div>
      </div>
      <div className="text-gray-300 relative">
        <RiMore2Fill className='w-6 h-6' onClick={toggleDropdown}/>
        {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={()=>{handleDelete(task.Id)}}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default TaskCard;
