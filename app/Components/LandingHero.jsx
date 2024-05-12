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
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
        className=' -mt-20 mb-[10%]  pb-[60%] -ml-16 w-full h-screen  md:mx-0  float-left text-center  md:items-center items-center  p-5 flex-col '
        
        
      
       
       > 




  


      <div className="flex-1">

      <motion.img whileHover={{scale:1.04}} onClick={()=>{router.push('/')}}  className="h-14 w-14 ml-[40%] mt-64  md:mx-[48%] shadow-2xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/aruarianlogo2.png' alt="" />

      

     
      <p className='  mt-8  pb-10   text-transparent bg-clip-text bg-white/50    md:-ml-0 md:text-[14rem] text-[4rem]     font-bold'>AruarianAI</p>

      

      <p className='  -mt-20  lg:px-64 -ml-10  text-white/50   text-xl font-normal'>Aruarian AI is an AI powered task management companion</p>

{/* //Discover serenity with your intuitive AI-powered task manager, */}
   



      <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' float-left p-4 mt-8 w-full md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4  ml-5 xl:mx-[38%] rounded-2xl bg-white/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>
       
   

       
       

      
       

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