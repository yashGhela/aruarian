
'use client'

import {motion} from 'framer-motion'

import { useState } from "react"
import ReactPlayer from "react-player"
import Modal from './Modal'




export default function LandingVideo(){

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }
      const [showModal,setShowModal]=useState(false)

    


    return(
        <div className=" self-center w-full mt-20 ml-5  ">

{/* <video autoPlay={true} loop className='w-full h-full rounded-lg'>
        <source src="https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/FocuSee%20Project%202024-04-27%2015-22-00.mp4?t=2024-04-27T13%3A47%3A43.277Z" />
      </video> */}

       
      <motion.button 
    
      
       whileHover={{scale:1.05}} onClick={()=>{setShowModal(true)}} className=' -ml-6  p-4 xl:mt-96 mt-48 w-self md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4   xl:mx-[38%] rounded-2xl bg-white/30 border font-bold   border-white/[0.06] '>Watch the video</motion.button>
       

       <Modal showModal={showModal} Header={'Demo Video'} setShowModal={setShowModal}>
        
       <ReactPlayer 
       playing={true}
    
       width={'100%'}
       height={'100%'}
       controls={true}
       
       style={{borderRadius:'10px'}}
       url='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/FocuSee%20Project%202024-04-27%2015-22-00.mp4?t=2024-04-27T13%3A47%3A43.277Z'
       className=' rounded-2xl invisible md:visible  '/>

             
       </Modal>

        </div>
    )
}