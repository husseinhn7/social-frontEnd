import React, { useState } from 'react'
import logo from "../imges/im.jpeg"
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { useSelector } from 'react-redux';
import Popup from './popup';
import Comments from './comments';
import { getAllComments } from '../api/commentsApi';
import { reactPost } from '../api/postApi';

const Post = ({data}) => {
  const [comments, setComments] = useState([])

  const authData = useSelector((state)=>state.auth )
  const [open, setOpen] = useState(false)


  const getComments = async () =>{
    const commentsRes = await getAllComments(data._id, authData.token)
    const Comdata = await commentsRes.data
    setComments(Comdata.comments)
    console.log(Comdata.comments)
  }
  const reactToPost = async () =>{
    console.log(authData.token)
    const res = await reactPost(data._id, authData.token)
    const da = await res.data
    console.log(da)
  }
  return (
    <div className='p-3 bg-[#181818] flex rounded-2xl text-wrap md:w-[400px] sm:w-[200px] lg:w-[500px] m-1 border border-[#383939]'>
            <img src={`http://localhost:4000/${authData.user.personalImage}`} className=' w-11   h-11 rounded-full'  /> 
        <div className=' flex flex-col px-3 w-full text-wrap'>
            <div className=' flex items-center  h-10  justify-between   '> <a className='text-slate-300' > {data?.user?.firstName  } </a>  <button className='hover:bg-[#292929] p-2 rounded-2xl'>    <BsThreeDots className=' text-lg text-slate-300' />  </button>   </div>

            <div className='w-full text-slate-300 flex flex-col'> <p>{data?.text}</p> 
            <img className=' my-2 rounded-xl' src={`http://localhost:4000/${data.image}`} /></div>

            <div className = ' flex items-start' >
                
                <button onClick= {()=>{reactToPost()}} className='mr-3  rounded-2xl hover:bg-[#292929] px-2 py-1 flex items-center justify-between'> <FaRegHeart className=' text-lg text-slate-300' /> <p className='ml-2  text-slate-300'>34</p> </button>
                <button onClick={()=>{getComments() ; setOpen(true)}} className='mr-3  rounded-2xl hover:bg-[#292929] px-2 py-1 flex items-center justify-between'>  <FaRegComment className=' text-lg text-slate-300' />  <p className='ml-2  text-slate-300'>34</p> </button>                  
                <button className='mr-3  rounded-2xl hover:bg-[#292929] px-2 py-1 flex items-center justify-between'> <FiSend className=' text-lg text-slate-300'/> <p className='ml-2  text-slate-300'>34</p> </button>

        </div>
        
        </div>


        <Popup open={open}  setOpen={setOpen}>
          <Comments postId = {data._id} commentsData = {comments}  />
        </Popup>
      
    </div>
  )
}

export default Post
