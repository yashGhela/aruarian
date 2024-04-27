'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function LandingAction(){
    const router = useRouter()
    return(
        <div className="my-[20%]">
             <p className=' text-4xl font-bold '>Join the future of productivity today</p>
             <p className='font-normal  text-neutral-600 text-lg mt-4 p-2 md:text-center'>What are you waiting for?</p>
         

             <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' float-left p-4 mt-20 w-[80%] mx-10 md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4 xl:mx-[38%] rounded-2xl bg-white/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>


        </div>
    )
}