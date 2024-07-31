import React from 'react';
import { FaEllipsisV, FaCheckSquare } from 'react-icons/fa';
import TaskCard from '../Dasboard/TaskCard';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import imgicon from '../../../Images/Vector (5).png'

const tasks = [
  { name: 'Design Changes', date: '2 Days ago' },
  { name: 'UI changes', date: '2 Days ago' },
  { name: 'Water plants', date: '2 Days ago' },
  { name: 'Feed the dog', date: '2 Days ago' },
];

const TaskList = (props) => {
  return (
    <div className="m-4 p-4">
      <div className="flex flex-col mb-4">
        <h2 className="text-left text-2xl font-bold">Tasks</h2>
        <p className='mt-2 text-left text-xl text-grey-500'>Status</p>
          <Dropdown/>
      </div>
      <div className="space-y-4">
        {props.allTaskscalval.map((task, index) => (
          <TaskCard task={task} imgsrc={imgicon} page={'calender'}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allTaskscalval: state.allTaskscalval,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
