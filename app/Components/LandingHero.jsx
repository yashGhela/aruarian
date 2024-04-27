'use client';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import TestimonialAvatars from './TestimonialAvatars';
import LogoFeature from './LogoFeature';
import TestimonialBar from './TestimonialBar';
import { SmoothScrollLink } from './SmoothScrollLink';

export default function LandingHero(){

    const router=useRouter()
    return(
        <motion.div 
        className=' mt-20 mb-[10%] mx-10 float-left text-center  md:items-center items-center  p-5 flex-col '
        
        
      
       
       > 




  


      <div className="flex-1">

      <motion.img whileHover={{scale:1.04}} onClick={()=>{router.push('/')}}  className="h-14 w-14 ml-[40%] mt-10  md:mx-[48%] shadow-2xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/aruarianlogo2.png' alt="" />

      

     
      <p className='  mt-8 border pb-10 -ml-10   text-transparent bg-clip-text bg-gradient-to-b from-slate-400 via-red-200 to-zinc-300  md:px-32  md:-ml-0 text-6xl   sm:text-7xl  font-bold'>The first ever AI to-do management tool</p>

      

<p className=' mt-10  lg:px-64 -ml-10    text-xl font-normal'>Aruarian makes task management easy, just tell Ari whats up and get on with life </p>

{/* //Discover serenity with your intuitive AI-powered task manager, */}
   



      <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' float-left p-4 mt-8 w-full md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4 -ml-5 xl:mx-[38%] rounded-2xl bg-white/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>
       
   

       
       

      
       

    {/* <motion.div whileHover={{scale:1.05}} className='mx-[50%] mt-40'>
    <SmoothScrollLink>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
     </SmoothScrollLink>
    </motion.div> */}
    

      
  

      </div>
          

       
         
        
        </motion.div>   
    )
}