import React from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import { Navigate } from 'react-router-dom'
import { useState,useRef } from 'react'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Box = () => {

  let [goToShare,setGoToShare]  = useState(false);
  let [loading,setLoading] = useState(false);

  const idRef=useRef(uuidv4());

  const onDrop= (acceptedFiles)=>{

    if(acceptedFiles.length>0)
      {
        setLoading(true);
        console.log(acceptedFiles)
        acceptedFiles.forEach(async(acceptedFile)=>{
          const formData = new FormData();
          formData.append("id",idRef.current);
          formData.append("image",acceptedFile);
          const res =await axios.post("https://imageshare-uynt.onrender.com/image",formData);
          console.log(res);
          setTimeout(()=>{
            setGoToShare(true);
          },0);
      })
    }

    else{
      toast.error("Error occured");
    }



  }
  const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop,
    accept: 
    {
      'image/jpeg': [".jpeg",".jpg"],
      'image/png': [".png"],
      'image/gif': [".gif"]
    },
    maxFiles:1,
    maxSize:2*1024*1024,
    
});


  if(goToShare)
  {
    return <Navigate to={`/${idRef.current}`} />
  }

  if(loading)
  {
    return <Loader/>
  }

  return (

    <div {...getRootProps(
      {
        className:`p-2 w-1/3 h-1/2 ${isDragActive?'bg-blue-200':'bg-white'} rounded-md shadow-lg dark:bg-[#212936]` 
      }
    )}  >
    <div   className='w-full h-full  flex items-center flex-col justify-center gap-1  border-2  border-dotted border-[#e7eaee] rounded-md'>
      <img className='mb-4' src="exit.svg" alt="" />
      <span className='text-xs font-medium'>Drag & drop a file or <span className='text-[#3662E3]'>browse files </span></span>
      <span className='text-xs'>JPG, PNG or GIF - Max file size 2MB</span>
      <input {...getInputProps()} type="file" name="image" id="" />
      
    </div>
    <ToastContainer />

    </div>

  )

}

export default Box
