import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/main'
import SideNav from './components/sideNav'
import MobileNav from './components/mobileNav'
import AddPost from './components/addPost'
import { Route , Routes } from 'react-router-dom'
import Test from './pages/test'
import Home from './pages/homePage'
import Profile from './components/profile'
import ProfilePage from './pages/profilePage'
import NotificationsPage from './pages/notificationsPage'
import MessagesPage from './pages/messagesPage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'

function App() {

  return (

    <>
    <SideNav/>
    <MobileNav />
      <Routes>


        <Route path='/home'          element={ <Home />} />
        <Route path='/profile'       element={ <ProfilePage />} />
        <Route path='/messages'      element={ <MessagesPage />} />
        <Route path='/notifications' element={ <NotificationsPage />} />
        <Route path='/login'         element={ <LoginPage />} />
        <Route path='/register'      element={ <RegisterPage />} />
        <Route path='/'              element={ <Test />} />




      </Routes>
   

    
    
    </>
  )
}

export default App
