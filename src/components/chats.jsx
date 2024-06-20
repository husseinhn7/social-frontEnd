import React from 'react'
import Notification from './notification'
import { useSelector } from 'react-redux'
import Chat from './chat'
import { useDispatch } from 'react-redux'
 

const Chats = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state)=>state.auth)

  return (
    <div className='  mb-16 md:mb-0 md:w-[500px]  w-full lg:w-[600px] p-3   border border-gray-600 rounded-2xl  h-[95vh] overflow-y-scroll'>

    <div className='p-3 bg-[#181818] flex flex-col rounded-2xl text-wrap   border border-gray-600 h-[90vh] overflow-y-scroll'>
           {selector.user.following.map((friend)=>{
            return <Chat  data={friend} key={friend._id} />
           })}
         
           
    </div>
    </div>
  )
}

export default Chats
