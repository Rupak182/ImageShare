import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const Box2 = ({ url, id }) => {
  const handleDownload = async () => {
    try {
      const res = await axios.get(url, {
        responseType: "blob"
      });

      if (url === '')
        throw "empty"

      console.log(res);
      const ImageBlob = new Blob([res.data], { type: res.data.type })

      const imgurl = URL.createObjectURL(ImageBlob);

      const link = document.createElement("a");
      link.href = imgurl;
      link.setAttribute("download", "untitled");
      document.body.appendChild(link);
      link.click();
    }
    catch (error) {
      console.log(error)
      toast.error("Error occured")
    }
  }


  const handleShare = () => {
    let data =window.location.origin + "/"+ id   ;
    navigator.clipboard.writeText(data);
    toast.success("Copied to clipboard");
  }


  return (
    <div>

      <div className='flex flex-col gap-2 items-center justify-end dark:bg-[#212936]'>

        <div className='p-2   bg-white dark:bg-[#212936] rounded-md shadow-lg items-center justify-center' >
          <img src={url} className='w-[500px]' alt="" />
          <div className='w-full h-full  flex items-center flex-col justify-center gap-1  border border-dotted border-[#e7eaee] rounded-md'>
          </div>
        </div>


      </div>
      <div className='flex gap-2 items-center justify-center my-5'>
        <button onClick={handleShare} className='p-1 px-3 flex gap-1 items-center justify-center bg-[#3662E3] text-white text-xs   rounded-md'><img src="Link.svg" alt="" /> Share</button>

        <button onClick={handleDownload} className='p-1 px-3 flex gap-1 items-center justify-center bg-[#3662E3] text-white text-xs   rounded-md'><img src="download.svg" alt="" /> Download</button>
      </div>
        <ToastContainer />

    </div>





  )
}

export default Box2
