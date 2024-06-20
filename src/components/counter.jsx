 


const Counter = ({count}) => {
  return (
   
    <div className={`bg-red-600 w-6 h-6 rounded-full absolute top-0 text-slate-300 flex items-center justify-center p-1  left-7 ${count ? "" : "hidden"}`}>
        { count }
    </div>
  )
}

export default Counter
