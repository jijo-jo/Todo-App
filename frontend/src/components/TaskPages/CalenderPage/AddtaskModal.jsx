import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import apiconfig from "../../../helpers/apiconfig";


const AddtaskModal = (props) => {
    const [projects,setProjects] = useState([]);

    const [taskDetails, settaskDetails] = useState({ "tname": "", "tdesc": "", "dofstart": "", "doofend": "", "status": "","pid":"" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        settaskDetails({ ...taskDetails, [name]: value });
    };

    useEffect(()=>{
        getProjectData()
    },[])

    const getProjectData = ()=>{
        let user = {"userId":localStorage.getItem("userId")}
        axios(apiconfig.postConfig('/project/getprojects',user))
        .then(response => {
            setProjects(response.data);
        })
        .catch((error)=>{
           alert("Project fetch Unsucceffull");
           console.log(error);
        })
       }

    if (!props.isOpen) return null;

    return (
        <div className="fixed inset-0 z-20 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl mb-4">Add New Task</h2>

                <div className="mb-4">
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        name="tname"
                        placeholder="Task Name"
                        value={taskDetails.tname}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        name="tdesc"
                        placeholder="Task Description"
                        value={taskDetails.tdesc}
                        onChange={handleChange}
                    />
                </div>
                <label className="mb-2">Start Date:</label>
                <div className="mb-4">
                    <input
                        type="date"
                        name="dofstart"
                        value={taskDetails.dofstart}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="Start date"
                    />

                </div>
                <label className="mb-2">End Date:</label>
                <div className="mb-4">
                    <input
                        type="date"
                        name="doofend"
                        value={taskDetails.doofend}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="End date"
                    />

                </div>

                <div className="mb-4">
                    <select
                        name="status"
                        value={taskDetails.status}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    >
                        <option value="">Select Status</option>
                        <option value="completed">Completed</option>
                        <option value="postponed">Postponed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="inprogress">In Progress</option>
                        <option value="todo">Todo</option>
                    </select>
                </div>

                <div className="mb-4">
                    <select
                        name="pid"
                        value={taskDetails.pid}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    >
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                            <option key={project.Id} value={project.Id}>
                                {project.Name}
                            </option>
                        ))}

                    </select>
                </div>


                <div className="flex justify-end">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={props.onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            props.onSubmit(taskDetails)
                            settaskDetails({ "tname": "", "tdesc": "", "dofstart": "", "doofend": "", "status": "","pid":"" })
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    allProjects: state.allProjects,
  });
  
  const mapDispatchToProps = {
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(AddtaskModal);