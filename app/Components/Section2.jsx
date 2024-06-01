import React from 'react'
import { motion } from 'framer-motion'

function Section2() {
  return (
    <motion.div
    initial={{ scale:0.8 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: false  }}>
        <div 
       
        className=' md:mx-[25%] p-5 h-screen md:flex mt-32 w-full md:w-1/2 bg-cover rounded-[40px]  backdrop-blur-lg'>

       <div className='text-center md:text-left w-full md:flex lg:-ml-[20%] md:-ml-[35%]   mt-[5%]'>

       <div className='md:mr-20 mt-96'>
    <p className='md:text-5xl text-5xl  font-bold'>Effortless Organization</p>

<p className='text-lg mt-5 font-normal'>No manual organizing or collecting tasks</p>
    </div>

        
       


    <video src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/Clip3.mov' autoPlay muted loop controls className='mt-48 h-fit '/>
    

  </div>
        

     




</div> 

</motion.div>



    
  )
}

export default Section2