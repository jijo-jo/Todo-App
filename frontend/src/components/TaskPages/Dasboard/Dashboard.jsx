import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { setProjects,setAlltask} from "../../../store/action";
import Navbar from "../GlobalComponent/Navbar";
import Footer from "../GlobalComponent/Footbar";
import Task from "./Task";
import Progress from "./Progress";
import UserWelcome from "./UserWelcome";
import ActiveSlider from "./ActiveSlider";
import apiconfig from "../../../helpers/apiconfig";

const Dashboard = (props)=>{

    if (localStorage.getItem('accessToken') === undefined ||localStorage.getItem('accessToken') === null ) {
        window.location = '/'
      }
    
    
    useEffect(()=>{
        getProjectData();
    },[]);

    const getProjectData = ()=>{
     let user = {"userId":localStorage.getItem("userId")}
     axios(apiconfig.postConfig('/project/getprojects',user))
     .then(response => {
         props.setProjects(response.data);
     })
     .catch((error)=>{
        console.log(error);
     })
    }

    return (
        <>
        <Navbar/>
        <UserWelcome getdata={getProjectData}/>
        <Task/>
        <ActiveSlider/>
        <Progress/>
        <Footer page={'dashboard'}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    allProjects: state.allProjects,
  });
  
  const mapDispatchToProps = {
    setProjects,
    setAlltask
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);