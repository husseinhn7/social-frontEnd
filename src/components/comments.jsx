import React, { useEffect } from 'react'
import Message from './message'
import logo from "../imges/im.jpeg"
import Comment from './comment';
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { addComment, getAllComments } from '../api/commentsApi';
import { useSelector } from 'react-redux';




const Comments = ({postId, commentsData}) => {
  const auth = useSelector((state) =>state.auth)
  const [comments , setComments] = useState([])
  const [commentData, setCommentData] = useState("")
   const change = (e)=>{
    setCommentData(e.target.value)
  }


  const sendComment = async () =>{
    const comment = {comment : commentData, post : postId }
    const res = await addComment(comment, auth.token )
    const data = await res.data
     if (data){
      setCommentData("")
      console.log(commentsData)
      setComments((prev)=>{
        return [
          ...prev,
          comment
        ]
      })
    }
    console.log(data)
  }

  useEffect(()=>{
    setComments([])
  },[commentsData])

  
  return (
    <div className='p-3 bg-[#181818] flex flex-col rounded-2xl text-wrap md:w-[400px] sm:w-[200px] lg:w-[500px] m-1 overflow-scroll border border-gray-600 h-[70vh]'>
            <div className=' sticky top-0 flex justify-between items-center  '>
                     <a href='' className='flex items-center content-center  '>
                         <h2 className=' ml-2 text-slate-300 py-2'> comments </h2>

                     </a>   
            </div>


            <div className=' grow  text-slate-100  overflow-y-scroll py-2'>
              {
                commentsData.map((comment, index) =>{
                  return <Comment data = {comment} key={index}   />
                })
              }

              {
                comments.map((comment, index) =>{
                  return <Comment data = {comment} key={index}   />
                })
              }
                
            
            </div>

            

 
      <div className=' w-full    self-end  flex items-center justify-between'>
        <input onChange={change} value={commentData} name='commentData' type='text' className='outline-none   grow   h-12 bg-[#0a0a0a] border-none focus:border-gray-600  placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='add a comment ' />
        <button onClick={()=>sendComment()}>  <IoSend className='my-2 rounded-2xl text-3xl mx-2 text-blue-400' /> </button>
      

      </div>
    </div>
  )
}

export default Comments
