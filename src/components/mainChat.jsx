import React from 'react'
import logo from "../imges/im.jpeg"
import { IoSendOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import Message from './message';


const MainChat = () => {
  return (
    <div className='p-3 bg-[#181818] flex flex-col rounded-2xl text-wrap md:w-[400px] sm:w-[200px] lg:w-[500px] m-1 overflow-scroll border border-gray-600 h-[90vh]'>
            <div className=' sticky top-0 flex justify-between items-center  py-2'>
                     <a href='' className='flex items-center content-center  '>
                        <img src={logo} className=' w-11 h-11 rounded-full inline '  /> 
                        <h2 className=' ml-2 text-slate-300'> name </h2>

                     </a>   
            </div>


            <div className=' grow  text-slate-100  overflow-y-scroll py-2'>
                <Message sender={true} />
                <Message sender={false}  />
                <Message sender={true} />
                <Message sender={false}  /><Message sender={true} />
                <Message sender={false}  /><Message sender={true} />
                <Message sender={false}  /><Message sender={true} />
                <Message sender={false}  /><Message sender={true} />
                <Message sender={false}  /><Message sender={true} />
                <Message sender={false}  />

                    
            
            </div>

            

 
      <div className=' w-full    self-end  flex items-center justify-between'>
        <input  type='text' className='outline-none   grow   h-12 bg-[#0a0a0a] border-none focus:border-gray-600  placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='type a message' />
        <button>  <IoSend className='my-2 rounded-2xl text-3xl mx-2 text-blue-400' /> </button>
      

      </div>
    </div>
  )
}

export default MainChat
