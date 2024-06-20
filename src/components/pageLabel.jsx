import React from 'react'

const PageLabel = ({title}) => {
  return (
    <label className='w-full text-center text-xl  flex items-center justify-center bg-[#0a0a0a] text-slate-300 p-3 h-[5vh]'>
        {title} 
    </label>
  )
}

export default PageLabel
