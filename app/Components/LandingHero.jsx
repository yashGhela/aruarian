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
        className='mt-20 mx-10   md:items-center items-center text-left p-5 flex '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false  }}
      
       
       > 
          

        <div className=' flex-1'>

      

            
        <p className={`text-transparent mt-7 text-6xl md:text-6xl bg-clip-text pb-3  bg-gradient-to-r from-blue-300 to-blue-800 font-bold text-gray-700`}>Create  a beautiful portfolio in minutes</p>
         
         <p className='font-lighter text-gray-500 text-lg mt-4 p-2 md:text-left'>
        Wake up to a flood of job opportunities and freelance gigs in your inbox. Say goodbye to confusing editors and hello to more time doing what you love. Boost your visibility, job prospects, and impressions effortlessly with Artfolio.</p>
         
          
    
        <div className="flex-col  w-full  lg:w-[50%] mt-5 ">
        <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className={`font-bold shadow-lg md:h-20  sm:h-28 lg:h-full w-full md:w-full text-white text-xl rounded-xl bg-blue-400 hover:bg-blue-600 mt-5   p-2 mr-1`}>Get started for Free</motion.button>
        

 


        </div>
        <div className='mt-10 '>
        <a href="https://www.producthunt.com/posts/artfolio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-artfolio" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=423767&theme=light" alt="Artfolio - Build&#0032;a&#0032;professional&#0032;art&#0032;portfolio&#0032;in&#0032;5&#0032;minutes | Product Hunt" style={{width: '250px', height: '54px'}}  /></a>
        

       
       </div>
        </div>


        <img className='mt-0 rounded-lg invisible sm:w-[40%]  md:visible h-full w-[20%]  shadow-xl ' src="https://firebasestorage.googleapis.com/v0/b/artfolio-one.appspot.com/o/Resources%2FUntitled%20design%20(1).gif?alt=media&token=38672d5b-719c-4758-9049-8f7f960cc24c" alt="" /> 
             
        
         
        
        </motion.div>   
    )
}