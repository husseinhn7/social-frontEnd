import React from 'react'
import MainLayout from '../components/main'
import Notification from '../components/notification'
const NotificationsPage = () => {
  return (
    <MainLayout>
    <div className='p-3 bg-[#181818] flex flex-col rounded-2xl text-wrap  m-1 border border-gray-600 h-[90vh] overflow-y-scroll'>

        <Notification />
        <Notification />

        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />

      </div>
    </MainLayout>
  )
}

export default NotificationsPage
