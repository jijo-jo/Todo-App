import React from "react";
import Navbar from "./Navbar";
import CalendarSheet from "./CalenderSheet";
import Footer from "../GlobalComponent/Footbar";
import TaskList from "./TaskList";

const CalenderPage = ()=>{


    if (localStorage.getItem('accessToken') === undefined ||localStorage.getItem('accessToken') === null ) {
        window.location = '/'
      }

    return(
        <>
        <Navbar/>
        <CalendarSheet/>
        <TaskList/>
        <Footer page={'calender'}/>
        </>
    )

}

export default CalenderPage;