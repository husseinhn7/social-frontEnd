import React, { useState } from 'react'
import { loginApi } from '../api/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials, logout } from '../store/authSlice'
import { Link } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from '../util/localStorage'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const dispatcher = useDispatch()
  const authData = useSelector((state)=>state.auth)
  
  const [data, setData] = useState({
    email : "",
    password : ""
  })

  const change = (e) =>{
    const { value , name  } = e.target
    setData((prev) =>{
      return {
        ...prev,
        [name] : value
      }
    })
  }
 
    const send = async () =>{
      console.log(data)
      const res = await loginApi(data)
      const loginData = await res.data
      setLocalStorage("token", loginData.token)
      setLocalStorage("user", loginData.user)

      dispatcher(setCredentials(loginData))
      navigate("/home")
    }

    const print = ()=>{
      console.log(authData.user.firstName)
    }

  return (
    <div className=' border  min-w-72 p-3 rounded-2xl bg-[#0a0a0a]  border-gray-600 flex items-center content-evenly flex-col'>
         <label className='text-slate-300'> login to your account </label>
        <input 
        value={data.email}
        onChange={e=>change(e)}
        name='email'
        
        type='email' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:border-gray-600 my-3 placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='email'/>
        <input
        value={data.password}
        onChange={e=>change(e)}
        name='password'

        type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:border-gray-600   placeholder:text-[#55585a] px-3 rounded-md  text-slate-300'  placeholder='password' />
        <button 
        onClick={()=>{send()}}
        className=' lg:w-96 h-12 sm:w-80  border-none focus:border-gray-600 my-3 placeholder:text-[#55585a] px-3 rounded-md bg-slate-300' >login</button>
 
        <Link to="/forgotPassword" className='text-[#55585a]'>   forgot password ?     </Link>
        <Link to="/register" className='text-[#55585a]'>   create account     </Link>

 
    </div>
  )
}

export default Login
