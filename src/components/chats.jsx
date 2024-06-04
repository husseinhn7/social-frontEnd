import React from 'react'
import Notification from './notification'





const Chats = () => {
  return (
    <div className='p-3 bg-[#181818] flex flex-col rounded-2xl text-wrap  m-1 border border-gray-600 h-[90vh] overflow-y-scroll'>
           <Notification />
           <Notification />
           <Notification />
           <Notification />
           <Notification />
           <Notification />
         
           
    </div>
  )
}

export default Chats
