import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function Section3() {
  
  let router = useRouter()
  return (
    <motion.div
    initial={{ scale:0.8 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: false  }}>
        <div 
       
        className=' md:mx-[25%] p-5 h-screen md:flex mt-32 w-full md:w-1/2 bg-cover rounded-[40px]  backdrop-blur-lg'>

       <div className='text-center md:text-left w-full md:flex lg:-ml-[20%] md:-ml-[35%]   mt-[5%]'>

       <div className='md:mr-44 mt-96'>
    <p className='md:text-5xl text-5xl  font-bold'>On the fly changes</p>

<p className='text-lg mt-5 font-normal'>Ari changes with you as you need to</p>
    </div>

        
       


    <video src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/Clip2.mov' autoPlay muted loop controls className='mt-48 h-fit '/>
    

  </div>
        

     




</div> 

<motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' float-left p-4 mt-20 w-[80%] mx-10 md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4 xl:mx-[38%] rounded-2xl bg-white/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>


</motion.div>
  )
}

export default Section3