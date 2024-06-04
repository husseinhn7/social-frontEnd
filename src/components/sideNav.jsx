import { GoHomeFill } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { BsSendFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const SideNav = () => {
  const {pathname} = useLocation();
  return (
    <div className='hidden md:flex  w-16 h-screen  flex-col items-center justify-between p-2  fixed top-0 left-0 '>
        <div className=' bg-slate-50 w-16 h-16'></div>
        <div className='  w-16   flex flex-col items-center  '>
         
         <Link  to = '/home' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
            {   pathname == "/home"  ? <GoHomeFill className='text-slate-300 text-3xl'   /> : <GoHome className='text-slate-300 text-3xl'  />}
            
            </Link>

         <Link to='/messages' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'> 
           {   pathname == "/messages"  ? <BsSendFill className='text-slate-300 text-2xl'   /> : <FiSend className='text-slate-300 text-2xl'  />}
            </Link>

          <Link to='/notifications' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
          {   pathname == "/notifications"  ? <FaHeart className='text-slate-300 text-2xl'   /> : <FaRegHeart className='text-slate-300 text-2xl'  />}
            </Link>
          
          <Link to='/profile' className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
          {   pathname == "/profile"  ? <IoMdPerson className='text-slate-300 text-3xl'   /> : <MdOutlinePerson className='text-slate-300 text-3xl' />}            
            </Link> 
          
          </div>
        <a className='my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>    <HiMiniBars3CenterLeft className='text-slate-300 text-3xl' /> </a> 

        
        
    </div>
  )
}
export default SideNav
