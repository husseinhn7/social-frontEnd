import React from 'react'
import Popup from './popup'
import logo from "../imges/im.jpeg"
import { useState, useRef } from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { Post } from '../api/postApi'
import { useSelector } from 'react-redux'


const AddPost = ({personalImage, name}) => {
  const user = useSelector((state)=>state.auth)

  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    text  : "",
    image : null
  })
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };
  const imageChange = (e) =>{
    const image = URL.createObjectURL(e.target.files[0])
    setData((prev)=>{
      return {
        ...prev,
        image : image
      }
    })
  }

  const handelChange = ( e )=>{
    const value = e.target.name == "text" ? e.target.value : e.target.files[0] 
    const {name} = e.target
    setData((prev)=>{
      return {
        ...prev,
        [ name ] : value
      }
    })
     
  }
  const imagePreview = () =>{
    return  data.image ?  URL.createObjectURL(data.image) : ""
  }
  const post = async () =>{
    const formData = new FormData()
    console.log(data)
    formData.append("text", data.text  )
    formData.append("photo", data.image )
 
    const res = await Post(formData, user)
    const json = await res.data
    console.log(json)
  }
  return (

    <div className=' bg-[#181818] flex rounded-2xl text-wrap md:w-[400px] sm:w-[200px] lg:w-[500px] m-3 border border-gray-600 h-16  items-center   p-2  mt-20  '>
    <img src={`http://localhost:4000/${personalImage}`} className=' w-11 h-11 rounded-full'  /> 

    <button
      onClick={()=>setOpen(true)}
      className=' lg:w-96 h-12 sm:w-80 text-[#55585a]  text-left border-none  my-3   px-3 rounded-md hover:cursor-text' > whats on your mind ?</button>
    <Popup open={open} setOpen={setOpen}  >
        <div className='p-3 bg-[#181818] flex rounded-2xl text-wrap  md:w-[400px] sm:w-[200px] lg:w-[500px] m-3 border border-[#383939]'>
          <img src={`http://localhost:4000/${personalImage}`} className=' w-11   h-11 rounded-full'  /> 
            <div className=' ml-3 flex flex-col'> 
                <h1 className=' text-slate-300'>{name}</h1>
                <textarea 
                  ref={textareaRef}
                  value={data.text}
                  name='text'
                  onChange={(e)=>{handelChange(e) ; handleTextareaChange(e)}}
                  placeholder="whats on your mind..."                
                  className = 'outline-none sm:w-80 lg:w-96 h-12 bg-[#181818] resize-none border-none focus:border-gray-600   placeholder:text-[#55585a] px-3 rounded-md  text-slate-300' />
                  <div className={`border border-gray-600 rounded-2xl ${data.image ? "block" : "hidden"} relative`}>
                  <button className=' absolute top-2 right-2  ' onClick={()=>setData("")}> <MdOutlineCancel className=' text-slate-300 text-2xl' /></button> 
                                    <img src={imagePreview()} className='border border-gray-600 rounded-2xl'/> 

                  </div>
                  <label htmlFor='t'><CiImageOn className='text-slate-300   text-2xl hover:cursor-pointer my-2' /></label>
                  <input name='image' type='file' accept='image/*'  className='hidden'  id='t' onChange={(e)=>{handelChange(e);  }} />
                  <button onClick={()=>{console.log(data) ; post()}} className=' text-slate-300  border rounded border-gray-600 p-1 w-16 self-end'>Post</button> 
            </div>

      
    </div>
    
    </Popup>
</div>
  )
}

export default AddPost
