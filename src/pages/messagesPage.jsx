import React from 'react'
import Chats from '../components/chats'
import MainChat from '../components/mainChat'


const MessagesPage = () => {
  return (
    <div className='bg-[#0a0a0a] w-screen min-h-screen flex justify-center   items-center '>
        <MainChat />
        <Chats />
      
    </div>
  )
}

export default MessagesPage
