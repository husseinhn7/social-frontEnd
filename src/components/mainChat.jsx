import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import Message from './message';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { socket } from '../util/socket';
import { addMassage, setUser } from '../store/mainChatSlice';
import addMessageApi from '../api/messageApi';
import {HOST} from "../util/host"
import { FaArrowRight } from "react-icons/fa6";
 


  const MainChat = () => {
  
  const dispatch = useDispatch()
  const chat = useSelector(state=>state.chat)
  const auth = useSelector(state=>state.auth)
  const [message, setMessage] = useState("")


  const sendMessage = async () =>{
    const senderId = auth.user._id
    const receiverId = chat.user._id
    const messageBody = {
      sender:senderId , 
      receiver:receiverId ,  
      text: message
    }
    const res = await addMessageApi(auth.token, messageBody)
    const messageRes = await res.data
    if (messageRes){
          dispatch(addMassage(messageBody))
    }
    setMessage("")
  
  }
  return (
    <div className='md:w-[500px]  mb-16 md:mb-0 w-full lg:w-[600px] p-3  border border-gray-600 rounded-2xl  h-[95vh] overflow-y-scroll'>

    <div className='p-3 pt-0 bg-[#181818] flex flex-col rounded-2xl text-wrap w-full m-1 overflow-scroll border border-gray-600 h-[90vh]'>


    {
      chat.user ? 
    
    <>
            <div className=' sticky top-0 flex justify-between items-center  py-2  border-b border-gray-600'>
                     <a href='' className='flex items-center content-center  '>
                        <img src={`${HOST}/${chat.user.personalImage}`} className=' w-11 h-11 rounded-full inline '  /> 
                        <h2 className=' ml-2 text-slate-300'> {chat.user.firstName} {chat.user.lastName} </h2>
                     </a>   
                     <button  className='hidden md:block' onClick={()=>{dispatch(setUser(null))}}>
                     
                          <FaArrowRight className='text-slate-300 text-xl md:hidden block'/>
                     </button>
            </div>


            <div  className=' grow  text-slate-100  overflow-y-scroll py-2 flex   flex-col-reverse '>
                {
                  chat.messages.map((massage, i)=><Message data={massage} key={i}   />)
                }
                

                    
            
            </div>

            

 
      <div className=' w-full    self-end  flex items-center justify-between'>
        <input
                onKeyDown={(e)=>{e.key == "Enter" ? sendMessage() : null}}
         onChange={(e)=>setMessage(e.target.value)} value={message}  type='text' className='outline-none   grow   h-12 bg-[#0a0a0a] border-none focus:border-gray-600  placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='type a message' />
        <button onClick={sendMessage}>  <IoSend className='my-2 rounded-2xl text-3xl mx-2 text-blue-400' /> </button>
      

      </div>


      </>: <h1>no chats</h1>


        }
    </div>
    </div>
  )
}

export default MainChat
