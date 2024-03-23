import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

function Overlay({user}) {


   const [showModal, setShowModal]=useState(false)


  const getUserBoards=async()=>{

  }

  const addNewBoard=async()=>{
    
  }
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}>
        <motion.div whileHover={{scale:1.05}}    className={`flex z-20 fixed cursor-pointer hover:shadow-inner  top-8 left-8 rounded-full p-1 `}>

        <svg className='w-8 h-8' viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22H112" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M26 22L26 119" stroke="white" stroke-width="10" stroke-linecap="round"/>
<path d="M100 22L100 119" stroke="white" stroke-width="10" stroke-linecap="round"/>
</svg>
      
    
      </motion.div>



      <motion.button onClick={()=>{setShowModal(true)}} className='fixed flex top-40 z-20 left-8 invisible md:visible p-2 rounded-lg bg-white/20 border   border-white/[0.06] ' whileHover={{scale:1.02}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-[1px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg><p className='text-md ml-2 '>Add a board</p>
</motion.button>

<Modal setShowModal={setShowModal} showModal={showModal} thin={true} Header={'Add a new board'}>

<p className='text-md text-neutral-200  p-2 mt-2  text-left '>Name your board</p>

<input  type="text"  className="  w-full focus:outline-none p-2 rounded-lg bg-white/20 border  border-white/[0.06]" />
   

</Modal>



      {/* <div className='fixed flex bottom-8 z-50 left-8 invisible md:visible '>

      <motion.svg whileHover={{scale:1.05, rotate:3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</motion.svg>


<motion.svg whileHover={{scale:1.05, rotate:3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 ml-2 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</motion.svg>


</div> */}



    </motion.div>
  )
}

export default Overlay