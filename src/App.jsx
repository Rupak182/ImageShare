import React from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Share from './components/Share.jsx'
import Loader from './components/Loader.jsx'
import { useState,useEffect } from 'react'



const App = () => {

  let [theme,setTheme]=  useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

  useEffect(()=>{
      
      if(theme==='dark')
        { 
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
        }
      else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");

      }

  },[theme]);





  return (
    <div className='dark:bg-[#121826] bg-[#f9fafc] dark:text-white min-h-[100vh] font-Inter'>
      

      <Navbar setTheme={setTheme} theme={theme} />


        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path=':id' element={<Share/>}> </Route>
        </Routes>

    


    </div>
  )
}

export default App
