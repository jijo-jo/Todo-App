import React, { useState } from "react";


const ProjectAddModal = ({ isOpen, onClose, onSubmit }) => {
    const [projectDetails, setProjectDetails] = useState({ "pname": "", "pdesc": "", "dofstart": "", "doofend": "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails({ ...projectDetails, [name]: value });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-20 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl mb-4">Add New Project</h2>

                <div className="mb-4">
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        name="pname"
                        placeholder="Project Name"
                        value={projectDetails.pname}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        name="pdesc"
                        placeholder="Project Description"
                        value={projectDetails.pdesc}
                        onChange={handleChange}
                    />
                </div>
                <label className="mb-2">Start Date:</label>
                <div className="mb-4">
                    <input
                        type="date"
                        name="dofstart"
                        value={projectDetails.dofstart}
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
                        value={projectDetails.doofend}
                        onChange={handleChange}
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        placeholder="End date"
                    />

                </div>


                <div className="flex justify-end">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            onSubmit(projectDetails)
                            setProjectDetails({ "pname": "", "pdesc": "", "dofstart": "", "doofend": "" })
                        }
                        }
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectAddModal;