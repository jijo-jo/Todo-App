import React, { useEffect } from 'react';
import axios from 'axios';
import apiconfig from '../../../helpers/apiconfig';
import { connect } from 'react-redux';
import TaskCard from './TaskCard';
import { setAlltask,nonfilteredTask } from '../../../store/action';
import iconimage from '../../../Images/Vector (4).png';
import { filterTasks } from '../../../helpers/filterdataonstatus';


const Progress = (props) => {

  useEffect(()=>{
     if(props.allProjects.length >0){
      getTaskPerproject(props.allProjects[0].Id);
     }
    },[props.allProjects])

  
    useEffect(()=>{
      if(props.activeSlide !== undefined){
       getTaskPerproject(props.activeSlide);
      }
     },[props.activeSlide])

  const getTaskPerproject = (projectId)=>{
    let project = {"userId":localStorage.getItem("userId"),"projectId":projectId}
    axios(apiconfig.postConfig('/task/gettask',project))
    .then(response => {
        props.nonfilteredTask(response.data);
        let filterdata = filterTasks(response.data,props.dashBoardStatus);
        props.setAlltask(filterdata);   
    })
    .catch((error)=>{
       console.log(error);
    })
   }

  return (
    <div className="mt-4 md:mt-8 lg:mt-8">
      <h2 className="text-left ml-8 md:ml-16 lg:ml-24 text-2xl font-bold">Progress</h2>
      <div className="mt-4 md:mt-8 lg:mt-8 ml-16 mr-4">
       {
        props.allTasks.map((item)=>(
          <div key={item.Id}>
          <TaskCard task={item} imgsrc={iconimage} page={'dashboard'} />
          </div>
        ))
       }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allProjects: state.allProjects,
  allTasks:state.allTasks,
  activeSlide:state.activeSlide,
  dashBoardStatus:state.dashBoardStatus

});

const mapDispatchToProps = {
  setAlltask,
  nonfilteredTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);

