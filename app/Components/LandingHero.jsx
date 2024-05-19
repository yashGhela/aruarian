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
        
        className='  -mt-20 mb-[10%] xs:-ml-20   pb-[60%] sm:-ml-[35%] lg:-ml-0 xl:ml-0 w-[110vw] md:w-full h-screen  md:mx-0  float-left text-center  md:items-center items-center  p-5 flex-col '
        
        
      
       
       > 




  


      <div className="flex-1">

      {/* <motion.img whileHover={{scale:1.04}} onClick={()=>{router.push('/')}}  className="h-14 w-14 ml-[40%] mt-64  md:mx-[48%] shadow-2xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/aruarianlogo2.png' alt="" />

       */}

     
      <p className='  mt-64  pb-10    md:text-[10rem]    md:-ml-0 xl:text-[7rem] text-[4rem]     font-bold'>Never schedule again</p>

      

      

      <p className='  md:-mt-10  lg:px-64 -ml-10  text-black/50   text-xl font-normal'>Never schedule again</p>

      <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className='  p-4 mt-8 w-full md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4   xl:mx-[38%] rounded-2xl bg-neutral-300/50 border font-bold   border-white/[0.06] '>Join Now</motion.button>
       

      <motion.img   className="h-[80%] w-[80%] mx-[10%]  shadow-2xl mt-20 rounded-xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/Screenshot%202024-05-18%20204514.png' alt="" />


{/* //Discover serenity with your intuitive AI-powered task manager, */}
   



     
   

       
       

      
       

    {/* <motion.div whileHover={{scale:1.05}} className='mx-[50%] mt-40'>
    <SmoothScrollLink>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>
     </SmoothScrollLink>
    </motion.div> */}

{/* <div className='w-[110%] -ml-5 backdrop-blur-lg rotate-180 h-20 align-bottom mt-[31rem]'></div> */}
    {/* <div className='w-[110%] -ml-5 backdrop-blur-lg  h-20 align-bottom mt-[31rem] '></div> */}
    

      
  

      </div>
          

       
         
        
        </motion.div>   
    )
}