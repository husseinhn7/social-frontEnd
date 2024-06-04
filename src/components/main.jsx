import React from 'react'
import Login from './login'
import Register from './register'
import Post from './post'
import SideNav from './sideNav'
import Notification from './notification'
import Profile from './profile'
import MobileNav from './mobileNav'




const MainLayout = ({children}) => {
  return (
    <div className='bg-[#0a0a0a] w-screen min-h-screen flex justify-center flex-col items-center '>

    { children }
      
    </div>
  )
}

export default MainLayout
