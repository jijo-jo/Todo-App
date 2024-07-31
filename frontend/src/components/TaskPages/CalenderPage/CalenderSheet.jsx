import { useState, useEffect } from "react";
import React from 'react';
import { connect } from 'react-redux';
import { format, getDaysInMonth } from 'date-fns';
import { PiCalendarPlusFill } from "react-icons/pi";
import CalenderModal from "./CalenderModal";
import AddtaskModal from "./AddtaskModal";
import axios from "axios";
import apiconfig from "../../../helpers/apiconfig";
import { allTaskCalender,nonfilteredTaskCalender } from "../../../store/action";
import { filterdataoncalender } from "../../../helpers/filterdataoncalender";

const CalendarSheet = (props) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const today = new Date();

  const [year, setYear] = useState(`${today.getFullYear()}`);
  const [month, setMonth] = useState(`${months[today.getMonth()]}`);
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [isModalopen, setIsModalOpen] = useState(false);
  const [isModalopentask, setIsModalOpenTak] = useState(false);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    updateDates(months.indexOf(month), year);
  }, [month, year]);

  useEffect(() => {
    setSelectedDate(today.getDate());
    getTaskPerDate(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
  }, []);

  const handleonclick = () => {
    setIsModalOpen(!isModalopen);
  };

  const getTaskPerDate = (datesel)=>{
    let project = {"userId":localStorage.getItem("userId"),"datetask":datesel}
    axios(apiconfig.postConfig('/task/gettaskbydate',project))
    .then(response => {
      props.nonfilteredTaskCalender(response.data);
      console.log(props.calenderStat)
      let filterdata = filterdataoncalender(response.data,props.calenderStat);
      props.allTaskCalender(filterdata);
       
    })
    .catch((error)=>{
       console.log(error);
    })
   }

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (yeararg, montharg) => {
    setYear(yeararg);
    setMonth(montharg);
    setIsModalOpen(false);
  };

  const handleonclicktask = () => {
    setIsModalOpenTak(!isModalopentask);
  };

  const handleClosetask = () => {
    setIsModalOpenTak(false);
  };

  const handleSubmittask = (data) => {
    let tdata = {
      "name": data.tname,
      "description": data.tdesc,
      "datefinish": data.doofend,
      "datestart": data.dofstart,
      "status": data.status,
      "userId": localStorage.getItem("userId"),
      "projectId": data.pid
    };
    axios(apiconfig.postConfig('/task/addtask', tdata))
      .then(response => {
        alert("Task created successfully");
        setIsModalOpenTak(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDates = (month, year) => {
    const daysInMonth = getDaysInMonth(new Date(year, month));
    const datesArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      datesArray.push({ date: i, day: format(date, 'EEEE') });
    }
    setDates(datesArray);
  };

  const handleDateClick = (date) => {
    console.log(date);
    setSelectedDate(date);
    getTaskPerDate(`${year}-${months.indexOf(month)+1}-${date}`);
  };

  return (
    <>
      <CalenderModal isOpen={isModalopen} months={months} onClose={handleClose} onSubmit={handleSubmit} />
      <AddtaskModal isOpen={isModalopentask} onClose={handleClosetask} onSubmit={handleSubmittask} />
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className='flex flex-row mt-2'>
            <h2 className="text-2xl font-bold ml-8 md:ml-16 lg:ml-16">{`${month.substring(0, 3)}, ${year}`}</h2>
            <span className='ml-4 mt-2 w-16 h-16'>
              <PiCalendarPlusFill onClick={handleonclick} />
            </span>
          </div>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow" onClick={handleonclicktask}>+ Add Task</button>
        </div>
        <div className="mt-4 overflow-x-auto whitespace-nowrap">
          {dates.map((dateObj, index) => (
            <div
              key={index}
              className={`inline-block w-14 md:w-24 lg:w-30 text-center p-2 cursor-pointer rounded-full ${dateObj.date === selectedDate ? 'bg-purple-200 text-purple-700 w-14 md:w-24 lg:w-30' : ''}`}
              onClick={() => handleDateClick(dateObj.date)}
            >
              <div className="text-sm mb-2">{dateObj.day.substring(0, 2)}</div>
              <div className="text-lg font-medium">{dateObj.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  allTaskscalval: state.allTaskscalval,
  calenderStat: state.calenderStat
});

const mapDispatchToProps = {
  allTaskCalender,
  nonfilteredTaskCalender
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSheet);

