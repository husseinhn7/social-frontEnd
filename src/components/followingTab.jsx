import React from 'react'
import Follower from './follower'
import { useSelector } from 'react-redux'

const FollowingTab = () => {
  const auth = useSelector((state)=>state.auth)

  return (
    <div className=' text-white'>
    {auth.user.following.map((follower)=>{
      return <Follower data={follower} follower={false}  />
    })}
  </div>
  )
}

export default FollowingTab
