import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

function Container({todos, todayStart, todayEnd, isRes, setTodos}) {


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


// const handleYesterdayTodos = () => {
//   const yesterdayStart = new Date();
//   yesterdayStart.setDate(yesterdayStart.getDate() - 1);
//   yesterdayStart.setHours(0, 0, 0, 0);
//   const yesterdayEnd = new Date();
//   yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
//   yesterdayEnd.setHours(23, 59, 59, 999);
//    todayStart= yesterdayStart;
//    todayEnd= yesterdayEnd
// };

// const handleTomorrowTodos = () => {
//   const tomorrowStart = new Date();
//   tomorrowStart.setDate(tomorrowStart.getDate() + 1);
//   tomorrowStart.setHours(0, 0, 0, 0);
//   const tomorrowEnd = new Date();
//   tomorrowEnd.setDate(tomorrowEnd.getDate() + 1);
//   tomorrowEnd.setHours(23, 59, 59, 999);
//   todayStart= tomorrowStart;
//   todayEnd= tomorrowEnd
// };

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
        <div className={` ${isRes?'w-full':'w-[120%]'} sm:w-full h-[300px]    md:w-[370px] lg:w-full xl:w-full mt-20 lg:mt-0`}>
  <div
    className="w-full h-full overflow-y-auto  backdrop-blur-sm sm:w-[70%] lg:w-full    rounded-[40px]  bg-white/40 border   border-white/[0.06] p-3  "
    style={{ boxShadow: "6px 4px 4px 0 rgba(12,28,48,0.12)" }}>

      {/* <div className="flex mb-1 -mt-1">
        <motion.button whileTap={{scale:1.1}} className='text-white hover:text-teal-50 ml-4 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>

        </motion.button>

        <motion.button whileTap={{scale:1.1}} className='text-white hover:text-teal-50 float-right ml-[70%] xl:ml-[80%] sm:ml-[80%] md:ml-[70%] '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


        </motion.button>
      </div> */}

  { todos.map((i)=>{
   return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}
    
    id='to-do container' className="w-full min-h-[180px] max-h-[200px] sm:min-h-[240px] xl:min-h-[114px] xl:max-h-[145px] md:min-h-[175px] p-2 rounded-[30px] mb-3 bg-white/[0.33] border border-white/10 ">
    <div className="flex">
      <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-gray-200/[0.38]">
        <p className="-mt-1 text-sm font-normal text-left text-gray-700">{i.board} </p>
      </div>
      <div className="w-self ml-2 h-[20px] mt-2 p-1 rounded-lg bg-blue-200/[0.38]">
        <p className="-mt-1 text-sm font-light text-left text-slate-600">{convertTimestampToDateTime(i.due_date)}</p>
      </div>
    </div>
    <p className="w-[70%]  p-2 ml-5 mt-1 h-12 text-[17px] font-normal text-left ">
      {i.content}
    </p>

  
    <motion.div onClick={()=>{
      
      completeToDo({id: i.tid})

      const updatedTodos = todos.filter((item) => item.tid !== i.tid);

      setTodos(updatedTodos)


      
      }} whileTap={{scale:1.04}}  className={`w-10 h-[33px] -mt-[10%] ml-[80%] cursor-pointer rounded-md border-2 border-neutral-400  ${i.completed? 'bg-white/[0.50]':'bg-white/[0.14]'} `}></motion.div>
  </motion.div>
   )
  })}

  
 
 
  
 
 


 



    </div>
 
</div>
    </div>
  )
}

export default Container