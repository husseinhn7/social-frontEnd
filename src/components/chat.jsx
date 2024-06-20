import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser , setMessages} from '../store/mainChatSlice'
import { getMessagesApi } from "../api/messageApi"
import { useSelector } from 'react-redux'
import {HOST} from "../util/host"



const Chat = ({data}) => {
    const auth = useSelector((state)=>state.auth)
    const dispatcher = useDispatch()
    const getChat = async () =>{
      console.log(data._id, auth.token)
      const res = await getMessagesApi(data._id, auth.token)
      const messages = await res.data
      console.log(messages)
      dispatcher(setUser(data))
      dispatcher(setMessages(messages))
    }
  return (
    <div onClick={()=>(getChat())} className='p-3 bg-[#0a0a0a] flex rounded-2xl text-wrap  w-full m-1 border border-[#383939] hover:cursor-pointer'>
    <img src={`${HOST}/${auth.user.personalImage}`} className=' w-11   h-11 rounded-full'  /> 
        <div className='text-slate-300 ml-3'> 
            <h1>{data.firstName} {data.lastName}</h1>
            <p>did somtin</p>
        
        </div>

      
    </div>
  )
}

export default Chat
