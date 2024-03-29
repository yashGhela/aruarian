import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

function Container({todos}) {


  function convertTimestampToDateTime(timestamp) {
    // Create a new Date object with the timestamp (in milliseconds)
    const date = new Date(timestamp);
    const currentDate = new Date();

    // If it's today, display time only
    if (
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
    ) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `Today ${hours}:${minutes}`;
    }

    // Otherwise, return the date in the format YYYY-MM-DD
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

  const completeToDo= async({id})=>{

    console.log(id)

    const {data, error}= await supabase.from('To-Dos').update(
      {
        completed: true
      }
    ).eq('tid', id)

    if(error){
      console.log(error)

    }else{
      console.log('Successfully updated!')
    }

  }


  
  return (
    <div>
        <div className="w-[120%] sm:w-full h-[300px]    md:w-[370px] lg:w-full mt-20 lg:mt-0">
  <div
    className="w-full h-full overflow-y-auto  backdrop-blur-sm sm:w-[70%] lg:w-full    rounded-[40px] bg-white/20 border p-3  border-white/[0.06]"
    style={{ boxShadow: "6px 4px 4px 0 rgba(12,28,48,0.12)" }}>

  { todos.map((i)=>{
   return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}
    
    id='to-do container' className="w-full min-h-[180px] max-h-[200px] sm:min-h-[160px] xl:min-h-[114px] xl:max-h-[145px] md:max-h-[150px] p-2 rounded-[30px] mb-3 bg-white/[0.13] border border-white/10">
    <div className="flex">
      <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-gray-200/[0.38]">
        <p className="-mt-1 text-sm font-light text-left text-gray-700">{i.board} </p>
      </div>
      <div className="w-self ml-2 h-[20px] mt-2 p-1 rounded-lg bg-blue-200/[0.38]">
        <p className="-mt-1 text-sm font-light text-left text-slate-600">{convertTimestampToDateTime(i.due_date)}</p>
      </div>
    </div>
    <p className="w-[70%]  p-2 ml-5 mt-1 h-12 text-[17px] font-light text-left ">
      {i.content}
    </p>

  
    <motion.div onClick={()=>{completeToDo({id: i.tid})}} whileTap={{scale:1.04}}  className={`w-10 h-[33px] -mt-[10%] ml-[80%] cursor-pointer rounded-md ${i.completed? 'bg-white/[0.50]':'bg-white/[0.14]'}  border border-white/10`}></motion.div>
  </motion.div>
   )
  })}

{/* <div id='to-do container' className="w-full h-[114px] rounded-[30px]  bg-white/[0.13] border border-white/10">
  <div className="flex">
    <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-[#E0B9E7]/[0.38]">
      <p className="-mt-1 text-sm font-light text-left text-[#d4a7cc]">Love 💗</p>
    </div>
    <div className="w-self ml-2 h-[20px] mt-2 p-1 rounded-lg bg-[#B3C9EA]/[0.38]">
      <p className="-mt-1 text-sm font-light text-left text-[#526C94]">22:00 Today</p>
    </div>
  </div>
  <p className="w-[70%] ml-5 mt-2 h-12 text-lg font-light text-left ">
    Date night with Anna at the Bolstro
  </p>
  <div className="w-10 h-[33px] -mt-[10%] ml-[80%] rounded-md bg-white/[0.14] border border-white/10"></div>
</div> */}

  
 
 
  
 
 


 



    </div>
 
</div>
    </div>
  )
}

export default Container