import React from 'react'
import logo from "../imges/im.jpeg"

const Profile = () => {
  return (
    <div className='p-3 bg-[#181818] flex rounded-2xl text-wrap  md:w-[400px] sm:w-[200px] lg:w-[500px] m-3 border border-[#383939]'>
    <div className=' flex flex-col items-center w-full'>
        <div className=' flex items-center justify-between w-full px-3 py-2'>
            <h1 className=' text-lg text-slate-300' >name </h1>
            <img src={logo} className=' w-20   h-20 rounded-full'  /> 
        </div>

        <button className='w-full p-1 rounded border border-gray-600 text-slate-300 my-2'> edit profile </button>
        <div className=' flex items-center w-full border-b-slate-800 justify-around'>
            <button className=' w-1/3 p-2 text-[#383939] border-b border-[#383939]'>posts</button>
            <button className=' w-1/3 p-2 text-[#383939] border-b border-[#383939]'>followers</button> 
            <button className=' w-1/3 p-2 text-[#383939] border-b border-[#383939]'>following</button>

        
        </div>
        <div className=' min-h-[60vh] w-full'>
        
        </div>
        
    
    </div>
   

      
    </div>
  )
}

export default Profile
