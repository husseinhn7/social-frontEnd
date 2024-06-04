import React from 'react'
import AddPost from '../components/addPost'
import Post from '../components/post'
import MainLayout from '../components/main'
import Profile from '../components/profile'
import PageLabel from '../components/pageLabel'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getTimeLine } from '../api/postApi'
const Home = () => {
  const [data, setData] = useState([])
  const auth = useSelector((state)=>state.auth )
  useEffect(()=>{
    const getPosts = async () =>{
      const posts = await getTimeLine(auth.user._id, auth.token)
      const postData = await posts.data
      setData(postData)
      console.log(postData)
    }
    getPosts()
  },[])
  return (
    <MainLayout>
      <PageLabel title="home" />
      <AddPost personalImage = {auth.user.personalImage} name={auth.user.firstName} />
        {
          data.map((post, index)=>{
            return <Post data={post} key= {index} /> 
          })
        }
         
    </MainLayout>
  )
}

export default Home
