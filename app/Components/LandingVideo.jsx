
'use client'

import {motion} from 'framer-motion'

import { useState } from "react"
import ReactPlayer from "react-player"



export default function LandingVideo(){

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }

    


    return(
        <div className=" self-center w-full mt-20 ml-5  ">

{/* <video autoPlay={true} loop className='w-full h-full rounded-lg'>
        <source src="https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/FocuSee%20Project%202024-04-27%2015-22-00.mp4?t=2024-04-27T13%3A47%3A43.277Z" />
      </video> */}

      <ReactPlayer 
       playing={true}
    
       width={'100%'}
       height={'100%'}
       
       style={{borderRadius:'10px'}}
       url='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/FocuSee%20Project%202024-04-27%2015-22-00.mp4?t=2024-04-27T13%3A47%3A43.277Z'
       className=' rounded-2xl invisible md:visible  '/>

            

        </div>
    )
}