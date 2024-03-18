'use client'
import Link from "next/link";
import { SmoothScrollLink } from "./SmoothScrollLink";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingBar({isLand}){
  const router = useRouter()
    return(
        <div className={`flex justify-center items-center ml-10 lg:mx-[10%] w-full md:w-[90%] lg:w-[80%] h-14 rounded-md mt-0 text-center`}>
        <p className={` text-gray-500 font-bold   mt-4`}>Project Name </p>
      
     
        {isLand?
      <div className='mt-5 md:ml-[20%] -ml-52  flex'>
      <SmoothScrollLink to='features' >Features</SmoothScrollLink>
        <SmoothScrollLink to='pricing' >Pricing</SmoothScrollLink>
       
        
       </div>:null}

       <div className={`flex mt-8 ${isLand?'md:ml-[1%] lg:ml-[20%]': 'md:ml-[80%] lg:ml-[60%]'} ml-28 sm:ml-28 `}>
       <Link href='/auth?state=Login'  className={`p-3  ml-2 md:ml-4 mt-0 pt-1 underline   font-normal text-gray-400  rounded-md`}>Login</Link>
       <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className={`font-bold shadow-lg  md:w-full md:h-full  h-full text-sm    md:text-md rounded-xl bg-blue-400 hover:bg-blue-600 -mt-1 ml-2   p-2 mr-1`}>Start Now</motion.button>
        

       </div>
      
       


</div>
    )
}