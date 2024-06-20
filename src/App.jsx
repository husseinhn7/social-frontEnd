import { useEffect } from 'react'
import SideNav from './components/sideNav'
import MobileNav from './components/mobileNav'
import { Route , Routes, Navigate } from 'react-router-dom'
import Test from './pages/test'
import Home from './pages/homePage'
import ProfilePage from './pages/profilePage'
import NotificationsPage from './pages/notificationsPage'
import MessagesPage from './pages/messagesPage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import { socket } from './util/socket'
import { useSelector } from 'react-redux'
import { addMassage } from './store/mainChatSlice'
import { useDispatch } from 'react-redux'
import { addNotification, addOne } from './store/notificationSlice'
import { addOneMessage } from './store/mainChatSlice'
import PrivateRoute from './util/privateRoute'

function App() {
  const dispatcher = useDispatch()
  const selector = useSelector((state)=>state.auth)
  const notification = useSelector((state)=>state.notification)

  useEffect(()=>{    
    if(selector.user){
      console.log("---------------==============----------------")
      socket.connect()
    }
    socket.on('connect', (s)=>{
        console.log(selector.user)
        socket.emit("setSocketId", selector.user._id)
    });
    socket.on("message" , (socket)=>{
      console.log(socket)
      dispatcher(addMassage(socket))
      dispatcher(addOneMessage())

    })

    socket.on("sendNotification" , (socket)=>{
      console.log(socket)
      dispatcher(addNotification(socket))
    })

    socket.on("like" , (socket)=>{
      console.log(socket)
       dispatcher(addOne())
    })
  
    socket.on("comment" , (socket)=>{
      console.log(socket)
      dispatcher(addNotification(socket))
      dispatcher(addOne())

    })

    socket.on("follow" , (socket)=>{
      console.log(socket)
      dispatcher(addNotification(socket))
      dispatcher(addOne())

    })
 
  return () => {
    socket.off('connect', ()=>console.log("remove connect event "));
    socket.off('p', ()=>console.log("remove p event "));
    socket.off('sendNotification', ()=>console.log("remove p event "));
    socket.off('like', ()=>console.log("remove p event "));
    socket.off('follow', ()=>console.log("remove p event "));
    socket.off('comment', ()=>console.log("remove p event "));
  };
  
   }
  
  ,[])

  return (

    <>
    <SideNav/>
    <MobileNav />
      <Routes>
        <Route element={<PrivateRoute />} >
            <Route path='/home'          element={ <Home />} />
            <Route path='/profile'       element={ <ProfilePage />} />
            <Route path='/messages'      element={ <MessagesPage />} />
            <Route path='/notifications' element={ <NotificationsPage />} />
            <Route path='/'              element={ <Test />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
        <Route path='/login'         element={ <LoginPage />} />
        <Route path='/register'      element={ <RegisterPage />} />
      </Routes>
 

    
    
    </>
  )
}

export default App
