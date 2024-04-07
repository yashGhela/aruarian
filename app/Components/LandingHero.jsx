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
        className='mt-20 mx-10   md:items-center items-center text-center p-5 flex-col '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }}
      
       
       > 


  


      <div className="flex-1">

       <div className='md:mx-[20%] -mx-432'>
     
       <motion.p initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }} 
        className='w-full mt-2 h-full overflow-y-auto  backdrop-blur-sm  md:w-1/2 text-left    rounded-[40px]  bg-white/40 border   border-white/[0.06] p-10'>
            Hey Ari, remind me to get some pizzas for John's part on Friday.
        </motion.p>



        
        <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }}
        
        className='w-full h-full overflow-y-auto ml-20 backdrop-blur-sm  md:w-1/2 text-left  float-right mt-10 mb-10 md:mb-0   rounded-[40px]  bg-white/40 border shadow-sm shadow-emerald-100/[0.5]   border-white/[0.06] p-5'>
            
            <p className='p-5'>Sure, I'll remind you to get some pizzas for John's party on Friday</p>

                            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false  }}
                    
                    id='to-do container' className="w-full mt-2  min-h-[180px] max-h-[200px] sm:min-h-[160px] xl:min-h-[114px] xl:max-h-[145px] md:max-h-[150px] p-2 rounded-[30px] mb-3 bg-white/[0.33] border border-white/10 ">
                    <div className="flex">
                    <div className="w-self ml-5 h-[20px] mt-2 p-1 rounded-lg bg-gray-200/[0.38]">
                        <p className="-mt-1 text-sm font-normal text-left text-gray-700">General </p>
                    </div>
                    <div className="w-self ml-2 h-[20px] mt-2 p-1 rounded-lg bg-blue-200/[0.38]">
                        <p className="-mt-1 text-sm font-light text-left text-slate-600">Friday 16:00</p>
                    </div>
                    </div>
                    <p className="w-[70%]  p-2 ml-5 mt-1 h-12 text-[17px] font-normal text-left ">
                    Get Pizzas for John's party
                    </p>

                
                    <motion.div  whileTap={{scale:1.04}}  className={`w-10 h-[33px] -mt-[10%] ml-[80%] cursor-pointer rounded-md border-2 border-neutral-400  bg-white/[0.50]`}></motion.div>
                </motion.div>
        </motion.span>
       </div>


      

      <p className=' mt-[28%] text-left     text-xl font-normal'>Discover serenity with AruarianAI, your intuitive AI-powered task manager, </p>
      <p className='   mt-10  p-0 md:-mt-18 -ml-8 md:-ml-0 md:text-[10rem] xl:text-[14rem]  text-6xl text-center 2xl:text-[17rem] font-bold'>AruarianAI </p>
   


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