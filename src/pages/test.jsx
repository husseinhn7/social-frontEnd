import React, { useState } from 'react'
import Popup from '../components/popup'
import Login from "../components/login"
import { useDispatch, useSelector } from 'react-redux'
import { add, min } from '../store/testSilce'
import Sock from '../components/sock'
import Follower from '../components/follower'
import Alert from '../components/alert'
const Test = () => {
    const state2 = useSelector((state)=>state.test.value)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false )
  return (
    <div>

        <p className="text-2xl ml-24 text-cyan-900 ">        {state2}          </p>
        <button className="text-2xl ml-24 text-cyan-900 " onClick={()=>dispatch(add())}> add </button> 
        <button  className="text-2xl ml-24 text-cyan-900 " onClick={()=>dispatch(min())}> min </button> 

        <Popup open= {open} setOpen={setOpen}  >
          <Login />
          <Alert />


        
        
        </Popup>
  
    </div>
  )
}

export default Test
