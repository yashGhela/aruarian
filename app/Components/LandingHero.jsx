'use client';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import TestimonialAvatars from './TestimonialAvatars';
import LogoFeature from './LogoFeature';
import TestimonialBar from './TestimonialBar';

export default function LandingHero(){

    const router=useRouter()
    return(
        <motion.div 
        className='mt-20 mx-10   md:items-center items-center text-center p-5 flex-col '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }}
      
       
       > 


  


      <div className="flex-1">
      <p className='  mt-[25%] text-[10rem] font-bold'>AruarianAI </p>
      <p className='   text-xl font-light'>is a natural language intelligent planning and scheduling app designed to give you more Zen and time of day. </p>

      </div>
          

       
         
        
        </motion.div>   
    )
}