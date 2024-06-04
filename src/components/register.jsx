import React from 'react'
import { register } from '../api/userApi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { setLocalStorage } from '../util/localStorage'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const dispatcher = useDispatch()

  const [data, setData] = useState({
    firstName : "",
    lastName : "" ,
    email : "",
    password : "",
    confirmPassword : ""
  })

  const change = (e) =>{
    const {name, value} = e.target
    setData((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })



  }
  const post = async () =>{
    const res = await register(data)
    const loginData = await res.data
    setLocalStorage("token", loginData.token)
    setLocalStorage("user", loginData.user)

    dispatcher(setCredentials(loginData))
    navigate("/home")


  }
  const dataIsValid = () =>{
    return data.password === data.confirmPassword
  }
  
  return (
    <div className=' border  min-w-72 p-3 rounded-2xl  border-gray-600 flex items-center content-evenly flex-col'>
        <label className='text-slate-300'> create your account   </label>
        <input name="firstName" value={data.firstName}  onChange={change} type='text' className='outline-none sm:w-80 lg:w-96    h-12 bg-[#181818] border-none focus:outline-slate-200 my-3 placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='first name'/>
        <input name='lastName' value={data.lastName} onChange={change} type='text' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300'  placeholder='last name' />
        <input name='email' value={data.email} onChange={change} type='email' className='outline-none sm:w-80 lg:w-96    h-12 bg-[#181818] border-none focus:outline-slate-200 my-3 placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='email'/>
        <input name='password' value={data.password} onChange={change} type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300'  placeholder='password' />
        <input name='confirmPassword' value={data.confirmPassword} onChange={change} type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300 mt-3'  placeholder='confirm password' />

        <button onClick={post}  className=' lg:w-96 h-12 sm:w-80  border-none focus:border-gray-600 my-3 placeholder:text-[#55585a] px-3 rounded-md bg-slate-300' >create account</button>
        <Link href="/login" className='text-[#55585a]'>   already have an account? login     </Link>
        <br className=' bg-slate-100' />

    </div>
  )
}

export default Register
