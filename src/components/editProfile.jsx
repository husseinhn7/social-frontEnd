import { useState } from 'react'
import { useSelector } from 'react-redux'
import { editCurrentUser } from '../api/userApi'
import { HOST } from "../util/host"

 const EditProfile = () => {
    const auth = useSelector((state)=>state.auth)
    const [data, setData] = useState({

        firstName : auth.user.firstName,
        lastName  : auth.user.lastName,
        email     : auth.user.email,
        personalImage : "",
        password  : "",
        confirmNewPassword  : "",
        newPassword  : ""
    })
    const change = (e) =>{
      const value = e.target.name == "personalImage" ?  e.target.files[0]  : e.target.value
      const {name} = e.target
      setData((prev)=>{
        return {
          ...prev,
          [ name ] : value
        }
      })

    }
    const post = async () =>{
      const formData = new FormData()
      console.log(Object.keys(data))
      Object.keys(data).forEach(key=>{
        if (data[key]) {
          formData.append(key, data[key])
        }
      })
      const res = await editCurrentUser( auth.token, formData)
      const d = await res.data
      console.log(d)

    }
    const imagePreview = () =>{
      return !data.personalImage ? `${HOST}/${auth.user.personalImage}` : URL.createObjectURL(data.personalImage) 
    }
  return (
    <div className=' border bg-[#181818] w-full min-w-72 p-3 rounded-2xl  border-gray-600 flex items-center content-evenly flex-col'>
        <label className='text-slate-300'> edit your account   </label>
        <label htmlFor='profileImage' className=' cursor-pointer'> 
            <img src={  imagePreview() } className='my-2 w-20 h-20 rounded-full'  /> 

            <input type='file' className=' hidden'  id='profileImage' name='personalImage' onChange={change} />
        </label>
        <input name="firstName" value={data.firstName}  onChange={change} type='text' className='outline-none sm:w-80 lg:w-96    h-12 bg-[#181818] border-none focus:outline-slate-200 my-3 placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='first name'/>
        <input name='lastName' value={data.lastName} onChange={change} type='text' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300'  placeholder='last name' />
        <input name='email' value={data.email} onChange={change} type='email' className='outline-none sm:w-80 lg:w-96    h-12 bg-[#181818] border-none focus:outline-slate-200 my-3 placeholder:text-[#55585a] px-3 rounded-md text-slate-300'  placeholder='email'/>
        <input name='password' value={data.password} onChange={change} type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300 mb-3'  placeholder='password' />
        <input name='newPassword' value={data.newPassword} onChange={change} type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300'  placeholder='new password' />
        <input name='confirmNewPassword' value={data.confirmNewPassword} onChange={change} type='password' className='outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] border-none focus:outline-slate-200  placeholder:text-[#55585a] px-3 rounded-md  text-slate-300 mt-3'  placeholder='confirm new password' />
        <button onClick={post}  className=' lg:w-96 h-12  w-full border-none focus:border-gray-600 my-3 placeholder:text-[#55585a] px-3 rounded-md bg-slate-300' >save changes</button>
 
    </div>
  )
}

export default EditProfile
