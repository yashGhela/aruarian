import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

function Container({todos}) {


  
  return (
    <div>
        <div className="w-[300px] h-[300px]    md:w-[300px] lg:w-full mt-20 lg:mt-0">
  <div
    className="w-full h-full overflow-y-auto  backdrop-blur-sm    rounded-[40px] bg-white/20 border p-3  border-white/[0.06]"
    style={{ boxShadow: "6px 4px 4px 0 rgba(12,28,48,0.12)" }}>

  { todos.map((i)=>{
   return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}
    
    id='to-do container' className="w-full h-[114px] rounded-[30px] mb-3 bg-white/[0.13] border border-white/10">
    <div className="flex">
      <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-[#b9e7c9]/[0.38]">
        <p className="-mt-1 text-sm font-light text-left text-[#a8d4a7]">{i.board} </p>
      </div>
      <div className="w-self ml-2 h-[20px] mt-2 p-1 rounded-lg bg-[#eab3b3]/[0.38]">
        <p className="-mt-1 text-sm font-light text-left text-[#dc7a7a]">{i.due_date}</p>
      </div>
    </div>
    <p className="w-[70%] ml-5 mt-2 h-12 text-lg font-light text-left ">
      {i.content}
    </p>
    <div className="w-10 h-[33px] -mt-[10%] ml-[80%] rounded-md bg-white/[0.14]  border border-white/10"></div>
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