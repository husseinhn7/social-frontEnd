import React, {useEffect, useState} from 'react'
import PostsTab from './postsTab'
import FollowersTab from './followersTab'
import FollowingTab from './followingTab'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../api/postApi'
import Popup from './popup'
import EditProfile from './editProfile'
import {HOST } from "../util/host"






const Profile = () => {
  const [open, setOpen] = useState(false)
  const auth = useSelector((state)=>state.auth)
  const [tab, setTab] = useState("posts")
  const [tabData , setTabData] = useState([])
  const get = async ()=>{
    console.log(auth.user)
    const res = await  getAllPosts(auth.user._id, auth.token)
    const re  = await res.data
    setTabData(re.posts)
    console.log(re)
 
  }
  return (
    <div className='p-3 bg-[#181818] flex rounded-2xl text-wrap  w-full border border-[#383939]'>
    <div className=' flex flex-col items-center w-full'>
        <div className=' flex items-center justify-between w-full px-3 py-2'>
            <h1 className=' text-lg text-slate-300' >{auth.user.firstName} {auth.user.lastName} </h1>
            <img src={`${HOST}/${auth.user.personalImage}`} className=' w-20   h-20 rounded-full'  /> 
        </div>

        <button onClick={()=>{setOpen(true)}} className='w-full p-1 rounded border border-gray-600 text-slate-300 my-2'> edit profile </button>
        <div className=' flex items-center w-full border-b-slate-800 justify-around'>
            <button onClick={()=>{ get() ; setTab("posts") ;}} className={` w-1/3 p-2 text-[#383939] border-b border-[#383939] ${ tab == "posts" &&  " text-slate-300 border-b-2  border-b-slate-200"}`}>posts</button>
            <button onClick={()=>setTab("followers")}  className={` w-1/3 p-2 text-[#383939] border-b border-[#383939] ${tab == "followers" && " text-slate-300 border-b-2 border-b-slate-200"}`}>followers</button> 
            <button onClick={()=>setTab("following")}  className={` w-1/3 p-2 text-[#383939] border-b border-[#383939] ${tab == "following" &&  " text-slate-300 border-b-2 border-b-slate-200"}`}>following</button>

        
        </div>
        <div className=' min-h-[60vh] w-full'>
          {tab == "posts" && <PostsTab posts={tabData} />}
          {tab == "following" && <FollowingTab following ={auth.user.following}/>}
          {tab == "followers" && <FollowersTab following ={auth.user.followers} />}
        
        </div>
        
    
    </div>

    <Popup open={open} setOpen={setOpen}>
      <EditProfile />
    </Popup>
   

      
    </div>
  )
}

export default Profile
