'use client'
import Link from "next/link";
import { SmoothScrollLink } from "./SmoothScrollLink";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingBar({isLand}){
  const router = useRouter()
    return(
        <div className={`flex justify-center items-center ml-0 lg:mx-[10%] w-full md:w-[90%] lg:w-full h-14 rounded-md mt-0 text-center`}>
       {/*
     */}
      
     
        {isLand?
      <div className='mt-5 float-right left-10 fixed  flex'>
      <SmoothScrollLink to='features' >About</SmoothScrollLink>
        <SmoothScrollLink to='pricing' >Pricing</SmoothScrollLink>
       
        
       </div>:null}


     

       <div className={`flex mt-8 fixed right-10`}>
       <Link href='/auth?state=Login'  className={`  ml-2 md:ml-4  pt-1 underline   p-4 mt-10 font-normal  rounded-md`}>Login</Link>
       <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' p-4 mt-5 w-full ml-2 rounded-2xl bg-white/20 border font-bold  float-left  border-white/[0.06] '>Start Now</motion.button>
        

       </div>
      
       


</div>
    )
}