import React from 'react'

const Navbar = ({setTheme,theme}) => {


  return (


    
    <div className='flex justify-between m-auto w-4/5 p-5 '>
      <img  src={theme==='light'?"logo.svg":"logo_dark.svg"} alt="" />
      <button onClick={()=>{setTheme(theme==='dark'?'light':'dark')}} className='bg-white dark:bg-[#364153] p-1 rounded-md'><img src={theme==='light'?"Moon_fill.svg":"Sun_fill.svg"} alt="" />
      </button>
      
    </div>

    
  )
}

export default Navbar
