import React, { useState } from 'react'
import io from "socket.io-client"

const Sock = () => {
    const [d, setD]  = useState("")
    // const sock = io("ws://localhost:4000")
    // sock.connect()
    // sock.on("m", data =>setD(data))
  return (
    <div className=' ml-52 w-[50vw] bg-slate-500'>
    <input type='text'   className=' w-[50vw] bg-slate-200'  />
    <h1> {d} </h1>



    <button onClick={()=>{sock.emit("message", "fffffffffffffffff")
    }}>send </button> 
      
    </div>
  )
}

export default Sock
