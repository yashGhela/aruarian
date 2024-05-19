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
  //shadow-inner    rounded-[20px]  bg-white/40  border-2   border-white/10
  //min-h-[180px] shadow-md max-h-[200px] sm:min-h-[120px] xl:min-h-[124px] xl:max-h-[145px] md:min-h-[125px]

  

  
  return (
    
        <div className={`  w-full  ${isRes?'h-[300px] md:h-[450px]':'h-[550px]'}  xl:w-1/2 2xl:w-full xl:ml-64 2xl:ml-0  border-white/60 border-2 bg-white/70 rounded-[30px]  mt-20 lg:mt-0`}>
  <div
    className="w-full h-full overflow-y-auto     p-3  "
 >

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
    
    id='to-do container' className="w-full lg:w-full  xl:w-full xl:ml-0  h-self pb-5 p-2 rounded-[30px] mb-3 bg-white border  border-neutral-600/20">
    <div className="flex">
      <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-gray-200/[0.38]">
        <p className="-mt-1 text-sm font-normal text-left text-gray-700">{i.board} </p>
      </div>
      <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg  ">
        <p className="-mt-1 text-sm font-light text-left text-neutral-600">{convertTimestampToDateTime(i.due_date)}</p>
      </div>
    </div>

      
   <div className="flex">
   <motion.div onClick={()=>{
      
      completeToDo({id: i.tid})

      const updatedTodos = todos.filter((item) => item.tid !== i.tid);

      setTodos(updatedTodos)


      
      }} whileTap={{scale:1.04}}  className={`w-8 h-8 ml-5 mt-5 cursor-pointer rounded-2xl border shadow-sm border-neutral-600/50  ${i.completed? 'bg-neutral-600/[0.3]':'bg-white/0]'} `}> </motion.div>
    <p className="w-[70%] text-neutral-700  p-2 ml-5  mt-4 h-12 text-[17px] font-normal text-left ">
      {i.content}
    </p>
   </div>


  </motion.div>
   )
  })}

  
 
 
  
 
 


 



    </div>
 
</div>
  
  )
}

export default Container