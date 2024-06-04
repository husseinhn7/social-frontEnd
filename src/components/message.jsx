import React from 'react'

const Message = ({sender}) => {
  return (
    <div className={` flex  ${ sender ? " " : "  flex-row-reverse  "  } `}>
        <p className={`rounded-lg text-slate-300 bg-[#0a0a0a] w-fit p-2 text-center my-1 ${ sender ? " bg-[#0a0a0a] " : "  bg-blue-400"  } `}>
            the first message !
        </p>
      
    </div>
  )
}

export default Message
