import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const selector = useSelector((state)=>state.auth.user)
  return (
            selector  ? <Outlet/> : <Navigate to="/login" />
        )
}

export default PrivateRoute
