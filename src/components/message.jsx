import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({data}) => {
  const selector = useSelector((state)=>state.auth)
  return (
    <div className={` flex  ${data.sender == selector.user._id ? " " : "  flex-row-reverse  "  } `}>
        <p className={`rounded-lg text-slate-300 bg-[#0a0a0a] w-fit p-2 text-center my-1 ${ data.sender == selector.user._id  ? " bg-[#0a0a0a] " : "  bg-blue-400"  } `}>
            {data.text}
        </p>
    </div>
  )
}

export default Message