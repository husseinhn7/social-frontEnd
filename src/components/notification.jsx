import React from 'react'
import logo from "../imges/im.jpeg"
const Notification = () => {
  return (
    <div className='p-3 bg-[#0a0a0a] flex rounded-2xl text-wrap  md:w-[400px]  w-[300px] lg:w-[500px] m-1 border border-[#383939]'>
    <img src={logo} className=' w-11   h-11 rounded-full'  /> 
        <div className='text-slate-300 ml-3'> 
            <h1>name</h1>
            <p>did somtin</p>
        
        </div>

      
    </div>
  )
}

export default Notification
