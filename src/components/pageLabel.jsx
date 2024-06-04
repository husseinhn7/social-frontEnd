import React from 'react'

const PageLabel = ({title}) => {
  return (
    <label className='md:w-[400px] sm:w-[200px] lg:w-[500px] text-center text-xl fixed top-0 bg-[#0a0a0a] text-slate-300 p-3'>
        {title} 
    </label>
  )
}

export default PageLabel
