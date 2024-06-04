import { GoHomeFill } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { BsSendFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const MobileNav = () => {
  const {pathname} = useLocation();

  return (
    <div className=' w-screen h-16 flex items-center justify-center p-2 md:hidden fixed  bottom-0  bg-black '>
        <div className=' w-full    flex  items-center  self-center justify-between px-3'>
         
        <a href='/home' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
        {   pathname == "/home"  ? <GoHomeFill className='text-slate-300 text-3xl'   /> : <GoHome className='text-slate-300 text-3xl'  />}
        
        </a>

     <a href='/messages' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'> 
       {   pathname == "/messages"  ? <BsSendFill className='text-slate-300 text-2xl'   /> : <FiSend className='text-slate-300 text-2xl'  />}
        </a>

      <a href='/notifications' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
      {   pathname == "/notifications"  ? <FaHeart className='text-slate-300 text-2xl'   /> : <FaRegHeart className='text-slate-300 text-2xl'  />}
        </a>
      
      <a href='/profile' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
      {   pathname == "/profile"  ? <IoMdPerson className='text-slate-300 text-3xl'   /> : <MdOutlinePerson className='text-slate-300 text-3xl' />}            
        </a> 
        <button className='my-1 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>          <HiMiniBars3CenterLeft className='text-slate-300 text-4xl' /> </button> 

          </div>

        
        
    </div>
  )
}

export default MobileNav
