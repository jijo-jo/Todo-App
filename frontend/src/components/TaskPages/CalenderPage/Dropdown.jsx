import React, { useState, useEffect } from 'react';
import { RiArrowDropUpLine,RiArrowDropDownLine } from "react-icons/ri";
import { connect } from 'react-redux';
import { allTaskCalender, statusCalender} from '../../../store/action';
import { filterdataoncalender} from '../../../helpers/filterdataoncalender';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All Tasks');

  const options = ['All Tasks', 'Completed', 'Not Completed','Postponed','Cancelled'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    props.statusCalender(option);
    setIsOpen(false);
  };

  useEffect(()=>{
    let filterdata = filterdataoncalender(props.nonfilterTaskCalender,props.calenderStat);
    console.log(filterdata);
    props.allTaskCalender(filterdata);
 },[props.calenderStat]);

  return (
    <div className="relative inline-block w-[70%] md:w-[30%] lg:w-[25%] px-2 py-4 mt-4">
      <div>
        <button
          type="button"
          className="flex flex-row justify-between inline-flex text-left w-full rounded-md shadow-sm px-4 py-6 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 "
          onClick={toggleDropdown}
        >
          {selectedOption}
          <span className='ml-8 w-5 h-5'>{isOpen?<RiArrowDropUpLine size={32}/>:<RiArrowDropDownLine size={32}/>}</span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 md:w-60 lg:w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  nonfilterTaskCalender: state.nonfilterTaskCalender,
  calenderStat: state.calenderStat
});

const mapDispatchToProps = {
  allTaskCalender,
  statusCalender
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
