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
import logo from "../imges/sss-01.png"
import Counter from "./counter";
import { useSelector } from "react-redux";

const SideNav = () => {
  const {pathname} = useLocation();
  const notification = useSelector((state)=>state.notification)
  const messages = useSelector((state)=>state.chat)

  return (
    <div className='hidden md:flex  w-16 h-screen  flex-col items-center justify-between p-2  fixed top-0 left-0 '>
        <Link  to="/home"><img src={logo} className=' w-16  h-14' /></Link>
        <div className='  w-16   flex flex-col items-center  '>
         
         <Link  to = '/home' className='  my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
            {   pathname == "/home"  ? <GoHomeFill className='text-slate-300 text-3xl'   /> : <GoHome className='text-slate-300 text-3xl'  />}
            </Link>

         <Link to='/messages' className=' relative my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'> 
           {   pathname == "/messages"  ? <BsSendFill className='text-slate-300 text-2xl'   /> : <FiSend className='text-slate-300 text-2xl'  />}
           <Counter count={messages.count} />
            </Link>

          <Link to='/notifications' className='relative my-2 rounded-2xl hover:bg-[#292929] p-2 flex items-center justify-between'>
          {   pathname == "/notifications"  ? <FaHeart className='text-slate-300 text-2xl'   /> : <FaRegHeart className='text-slate-300 text-2xl'  />}
          <Counter count={notification.count} />
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
