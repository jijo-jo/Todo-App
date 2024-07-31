import React from 'react';
import bulb from '../../../Images/Vector (3).png'

const ProjectCard = ({ project }) => {
  const months = ['January','February','March','April','May','June','July','August','Septemper','October','Novemder','December']
  const projectDate = new Date(project.Datestart);
  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg w-64 md:w-[30rem] lg:w-[46rem] h-64 md:h-[17rem] lg:h-[17rem">
      <div className="flex items-center mb-4">
        <div className="bg-purple-400 p-2 rounded-lg">
          <img className="w-8 h-8 text-white" src={bulb} alt="bulb image"></img>
        </div>
        <h3 className="ml-4 md:ml-8 lg:ml-8 text-lg font-medium">{project.Name}</h3>
      </div>
      <h2 className="text-left ml-2 md:mt-4 lg:mt-8 text-2xl font-bold mb-4">{project.Description}</h2>
      <p className="text-left ml-2 md:mt-4 lg:mt-8 text-lg">{`${months[projectDate.getMonth()]} ${projectDate.getDate()} , ${projectDate.getFullYear()}`}</p>
    </div>
  );
};

export default ProjectCard;
