'use client';
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation';
import TestimonialAvatars from './TestimonialAvatars';
import LogoFeature from './LogoFeature';
import TestimonialBar from './TestimonialBar';
import { SmoothScrollLink } from './SmoothScrollLink';
import { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

// import myVideo from '../../public/videos'

export default function LandingHero(){

    const variant=['Organize', 'Track', 'Complete']


    const router=useRouter()

    const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => (prevNumber + 1) % variant.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
    return(
        <motion.div 
        
        className='  -mt-20 mb-[10%]    pb-[60%] sm:mx-0 lg:-ml-0 xl:ml-0 w-full md:w-full h-screen   md:px-24   text-center  md:items-center items-center  p-5 flex-col '
        
        
      
       
       > 




  


      <div className="flex-1">

      {/* <motion.img whileHover={{scale:1.04}} onClick={()=>{router.push('/')}}  className="h-14 w-14 ml-[40%] mt-64  md:mx-[48%] shadow-2xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/aruarianlogo2.png' alt="" />

       */}

     
      <motion.p
      initial={{ y:'50%', opacity:0 }}
      whileInView={{ y:'-50%', opacity:1 }}
      viewport={{ once: false  }}
       className='  mt-[25rem] md:mt-[35%] lg:mt-[35%] xl:mt-[20%]  -ml-6    md:text-[5rem]    xl:text-[6rem] text-[4rem]     font-bold'>

        <ReactTypingEffect
          text={[`${variant[number]}`]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={500}
          typingDelay={100}
          cursorClassName="TypingCursor"
        />
        <br/>
         your to-do list with AI


       </motion.p>

      

      

      <motion.p
      initial={{ y:'50%', opacity:0  }}
      whileInView={{ y:'-50%', opacity:1 }}
      transition={{delay:0.3}}
       className='  md:-mt-5  lg:px-64 px-10   text-black/50   text-xl font-normal'> Your AI-powered personal assistant, always within reach</motion.p>

      <motion.button 
       initial={{ y:'50%', opacity:0 }}
       whileInView={{ y:'-50%', opacity:1 }}
      
      transition={{delay:0.5}} whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' -ml-2  p-4 mt-12 w-self md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4   xl:mx-[38%] rounded-2xl bg-white/30 border font-bold   border-white/[0.06] '>Join Now</motion.button>
       

      <motion.img 
       initial={{ y:'10%', opacity:0 }}
       whileInView={{ y:'-1%', opacity:1 }}
        transition={{delay:0.7}}  className="h-[80%] w-[80%] mx-[10%]  shadow-2xl mt-20 rounded-2xl   cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/Screenshot%202024-05-18%20204514.png' alt="" />

      {/* <video controls  className="h-[80%] w-[80%] mx-[10%]  shadow-2xl mt-20 rounded-2xl   cursor-pointer " >
        <source src='/Demo_video.mp4' type='video/mp4'/>
      </video> */}


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