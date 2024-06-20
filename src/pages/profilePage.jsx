import React from 'react'
import Profile from '../components/profile'
import MainLayout from '../components/main'
import Post from '../components/post'
import PageLabel from '../components/pageLabel'

const ProfilePage = () => {
  return (
    <MainLayout>
    <PageLabel title="Profile"  />
    <div className='md:w-[500px]   w-full lg:w-[600px] p-3  mb-16 md:mb-0 border border-gray-600 rounded-2xl  h-[95vh] overflow-y-scroll'>

        <Profile />
    </div>
    </MainLayout>
  )
}

export default ProfilePage
