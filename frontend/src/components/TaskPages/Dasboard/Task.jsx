import React, { useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import { setAlltask,dasboardbuttonstatus } from '../../../store/action';
import { filterTasks } from '../../../helpers/filterdataonstatus';

const TaskButton = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border-2 focus:outline-none transition ${
        isActive ? 'bg-white text-black font-semibold border-white' : 'bg-[#E5EAFC] text-black border-[#E5EAFC]'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const Task = (props) => {
  const [enable, setEnable] = useState({ "my-task": true, "in-Progress": false, "Completed": false });

  const statusChange = (buttonName) => {
    setEnable((prevState) => {
      const newState = {};
      for (const key in prevState) {
        if (prevState.hasOwnProperty(key)) {
          newState[key] = key === buttonName;
        }
      }
      return newState;
    });
    if(buttonName === "in-Progress"){
       props.dasboardbuttonstatus('inprogress')
    }
    else if(buttonName === "Completed"){
      props.dasboardbuttonstatus('completed')
    }
    else{
      props.dasboardbuttonstatus('mytasks')
    }
  };

  useEffect(()=>{
     let filterdata = filterTasks(props.nonfilteredTasks,props.dashBoardStatus);
     props.setAlltask(filterdata);
  },[props.dashBoardStatus])

  return (
    <div className="mt-4 p-4">
      <div className="flex flex-row ml-2 md:ml-8 lg:ml-20 space-x-2 md:space-y-0 md:space-x-4">
        {Object.keys(enable).map((key) => (
          <TaskButton
            key={key}
            name={key.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            isActive={enable[key]}
            onClick={() => statusChange(key)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allProjects: state.allProjects,
  dashBoardStatus: state.dashBoardStatus,
  nonfilteredTasks: state.nonfilteredTasks
});

const mapDispatchToProps = {
  setAlltask,
  dasboardbuttonstatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

