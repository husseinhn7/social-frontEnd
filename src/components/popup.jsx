import React from 'react'

const Popup = ({children ,open , setOpen}) => {
    const close = () =>{
        setOpen(false)
    }
  return (
    <div
            onClick={close}
            className={` w-screen h-screen   backdrop-blur-sm flex justify-center  items-center ${open ? "" : "hidden"}  fixed top-0 left-0  `}>
        <div onClick={(e)=>e.stopPropagation()}>
            { children }
        </div>
    </div>
  )
}

export default Popup
