'use client'

import {motion} from 'framer-motion'
import { useState } from "react"

export default function Modal({showModal,setShowModal, children, Header, thin, height}){

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 0 }, //original is 100%    
        
      }

      const modheight = height || 'h-[50%]'

    

    return(
        <div>
            {showModal &&<div className="fixed inset-0 z-20   bg-black opacity-40"></div>}

            

            <motion.dialog 
            open={showModal}
             className={` rounded-[40px] bg-neutral-400/80  border-2 p-3  backdrop-blur-sm  border-white/[0.06] md:${thin?'md:w-[20%] w-[90%] sm:w-[30%] xl:w-[20%]':'w-[40%]'} md:${modheight} p-5  z-50  fixed inset-1 overflow-auto`}
             animate={showModal ? "open" : "closed"}
            variants={variants}>
            <div className='grid grid-cols-2  p-2'>
            <p className='text-white font-normal text-md p-2'>{Header}</p>
            <button onClick={()=>{setShowModal(false)}} className={`rounded-md  md:ml-[70%] ml-[30%]  text-white  p-2`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </div>


            

            <div className="mt-5">{children}</div>

            
 
            
            
                


            </motion.dialog>
        </div>


    )
}