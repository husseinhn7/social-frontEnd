import React, { useEffect } from 'react'
import MainLayout from '../components/main'
import Notification from '../components/notification'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getNotifications } from '../store/notificationSlice'
import getNotificationsApi from '../api/notificationApi'
import { resetCount } from '../store/notificationSlice'
import PageLabel from '../components/pageLabel'


const NotificationsPage = () => {
  const dispatcher = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const selector = useSelector((state)=>state.notification)
  console.log(selector.notification)
  useEffect(()=>{
    const getNotificationsData = async ()=>{
      const res = await getNotificationsApi(auth.token)
      const data = await res.data
      console.log(data)

      dispatcher(getNotifications(data))
      dispatcher(resetCount())
    }
    if(!selector.notification){
      console.log("======================")

    }   
    
    getNotificationsData()

  },[])

  return (
    <MainLayout>
    <PageLabel  title="Notifications"/>
    <div className='md:w-[500px]  w-full lg:w-[600px] p-3  mb-16 md:mb-0 border border-gray-600 rounded-2xl  h-[95vh] overflow-y-scroll'>
          {

            selector.notifications ? selector.notifications.map((note, index)=>{
              console.log(note)
              return  <Notification data= {note} key={index}/>}) : ""
          }
        </div>
     </MainLayout>
  )
}

export default NotificationsPage
