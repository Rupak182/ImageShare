import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import Box2 from './Box2'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Share = () => {

    let {id} = useParams();
    let [url,setUrl]= useState("");
    // console.log(id);

    useEffect(()=>{
        if(id)
            {
               axios.get(`https://imageshare-uynt.onrender.com/image/${id}`)
               .then((res)=>{
                // console.log(res.data);
                // console.log(res.data[0].avatar)
                setUrl(res.data[0].avatar);
               })
               .catch((error)=>{
                console.log("Error:"+error)
               })
            }
    },[])


  return (
    <div>
      
      <div className=' w-full h-[1px] bg-[#E5E7EB] dark:bg-[#4D5562]'> </div>
    <div className=' w-full flex items-center h-[80vh] justify-center'>
        <Box2 url={url} id ={id} />
    </div>
</div>
  )
}

export default Share
