import React from 'react'
import logo from "../imges/im.jpeg"

const Follower = ({data, follower}) => {
  return (
    <div className='p-3 bg-[#0a0a0a] flex rounded-2xl text-wrap  w-full m-1 border border-[#383939]'>
    <img src={logo} className='w-11 h-11 rounded-full'  /> 
        <div className='text-slate-300 ml-3 flex items-center justify-between w-full'> 
            <h1>{data.firstName +  " "  + data.lastName } </h1>
            { follower &&  <button  > follow   </button>}
        </div>
    </div>
  )
}

export default Follower
