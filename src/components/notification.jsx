import React from 'react'
import {HOST} from "../util/host"

const Notification = ({data}) => {
  const date = new Date(data.dateCreated)
  return (
    <div className='p-3 bg-[#0a0a0a] flex rounded-2xl text-wrap  w-full m-1 border border-[#383939]'>
    <img src={`${HOST}/${data.sender.personalImage}`}  className=' w-11   h-11 rounded-full'  />

        <div className='text-slate-300 ml-3'> 
        <h1>{data.sender.firstName} {data.sender.lastName}</h1>
            <p>{data.action}</p>
            <p>{date.getDay()}</p>
        </div>
    </div>
  )
}

export default Notification
