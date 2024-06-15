import React from 'react'

const Loader = () => {
  return (
    <div className='bg-white p-5 w-1/3 flex-col gap-4  flex items-center justify-center shadow-md rounded-md dark:bg-[#212936]'>
      <span className='text-xs'><span className='font-medium'>Uploading</span>, please wait..</span>
      <span className='rounded-md overflow-hidden bg-[#E5E7EB] w-full h-[4px] flex '>
        <span className='rounded-md animate-moving-bar w-1/4 h-[4px] bg-[#3662E3] '></span>
      </span>
    </div>
  )
}

export default Loader
