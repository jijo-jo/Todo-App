import React from 'react';
import { useState } from 'react';
import ProjectAddModal from './ProjectAddModal';
import apiconfig from '../../../helpers/apiconfig';
import axios from "axios";

const UserWelcome = ({getdata}) => {
   const [isModalopen, setIsModalOpen] = useState(false);
   const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleonclick = () => {
    setIsModalOpen(!isModalopen)
  }

  const handleSubmit = (data) => {
     let pdata ={
      "name":data.pname,
      "description":data.pdesc,
      "datefinish":data.doofend,
      "datestart":data.dofstart,
      "userId":localStorage.getItem("userId")
     }
     axios(apiconfig.postConfig('/project/addproject', pdata))
     .then(response => {
         alert("Project created Successfull")
         setIsModalOpen(false);
         getdata()
     })
     .catch((error)=>{
        alert("Project adding Unsucceffull")
        console.log(error);
     })
  }


  return (
    <>
    <ProjectAddModal isOpen={isModalopen} onClose={handleClose} onSubmit={handleSubmit} />
    <div className='text-left mt-8 ml-8 md:ml-16 lg:ml-24 '>
      <div className='flex flex-row justify-between'>
         <div className="text-3xl font-bold text-black">Hello User!</div>
         <button className="bg-purple-500 text-white py-2 px-4 rounded-full mr-8 md:mr-16 lg:mr-16" onClick={()=>{handleonclick()}}>+ Add Project</button>
      </div>
      <div className="text-[18px] text-gray-500 mt-2">Have a nice day</div>
    </div>
    </>
  );
};

export default UserWelcome;
