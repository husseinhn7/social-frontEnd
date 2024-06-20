import React, { useEffect } from 'react'
import Chats from '../components/chats'
import MainChat from '../components/mainChat'
import { resetCount } from '../store/mainChatSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import PageLabel from '../components/pageLabel'

const MessagesPage = () => {
  const selector = useSelector((state)=>state.chat)
  const dispatcher = useDispatch()
  useEffect(()=>{
    dispatcher(resetCount())
  },[])
  return (
    <>
    <PageLabel  title="Messages"  />

    <div className='bg-[#0a0a0a] w-screen min-h-screen flex justify-center   items-center gap-1 '>
        { window.innerWidth > 700 ?  <MainChat /> :  selector.user && <MainChat />}
        {window.innerWidth > 700 ? <Chats /> :  !selector.user &&    <Chats />}
      
    </div>
    
    </>
  )
}

export default MessagesPage
