import React from 'react'
import Post from './post'
const PostsTab = ({posts}) => {
  return (
    <div className=' text-white'>
      {posts.map((post)=>{
        return <Post data={post} key={post._id} />
      })}
    </div>
  )
}

export default PostsTab
