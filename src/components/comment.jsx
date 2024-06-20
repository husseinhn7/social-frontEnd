import React from 'react'
import { useSelector } from 'react-redux'
import {HOST } from "../util/host"



const Comment = ({data}) => {
  const auth = useSelector((state)=>state.auth)

   return (
    <div className={` flex text-slate-300  w-fit p-2 text-center my-2  max-w-full  `}>
        <img src={`${HOST}/${auth.user.personalImage}`} className='w-11 h-11 rounded-full'  /> 
        <div className='flex flex-col ml-2   bg-[#0a0a0a] p-2  rounded-lg max-w-full    overflow-scroll text-wrap'>
        <h className="self-start text-lg">{auth.user.firstName}</h>     
        <p className={` max-w-full text-wrap text-start `}>
            {data?.comment}
        </p>
        </div>
    </div>
  )
}
export default Comment
