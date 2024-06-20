import React from 'react'
import Follower from './follower'
import { useSelector } from 'react-redux'


const FollowersTab = ( ) => {
  const auth = useSelector((state)=>state.auth)

  return (
    <div className=' text-white'>
      {auth.user.followers.map((follower)=>{
        return <Follower data={follower} follower={true}  />
      })}
    </div>
  )
}

export default FollowersTab
