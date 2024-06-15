import React from 'react'
import Navbar from './Navbar'
import Box from './Box'

const Home = ({theme,setTheme}) => {
    return (
        <div >
      <div className=' w-full h-[1px] bg-[#E5E7EB] dark:bg-[#4D5562]'> </div>
      <div className=' w-full flex items-center h-[80vh] justify-center'>
                <Box />
            </div>
        </div>
    )
}

export default Home
