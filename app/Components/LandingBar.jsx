'use client'
import Link from "next/link";
import { SmoothScrollLink } from "./SmoothScrollLink";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import Pricing from "./Pricing";

export default function LandingBar({isLand}){

  const [pricingOpen, setPricingOpen]=useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const router = useRouter()
    return(
        <div className={`flex fixed z-20 inset-2  justify-center items-center -ml-2 backdrop-blur-sm p-0 w-full md:w-[90%] lg:w-full h-20 border-b-0 rounded-md -mt-2 text-center`}>
       {/*
     */}

     <p className="absolute left-5 text-neutral-700 text-lg  italic mt-12">ari</p>
      
     
        {isLand?
      <div className=' mt-0 float-right md:left-[20%] left-[10%] absolute  flex'>
      <SmoothScrollLink to='How-it-works'>How it works</SmoothScrollLink>
       <SmoothScrollLink to='pricing'>Pricing</SmoothScrollLink>
        
       </div>:null}



       <div className={`flex mt-8 absolute right-10`}>
       {/* <Link href='/auth?state=Login'  className={`  ml-2 md:ml-4  pt-1 underline   p-4 mt-10 font-normal  rounded-md`}>Login</Link> */}
       <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className='  p-4 mt-5 w-full ml-2 rounded-2xl bg-white/20 border font-bold  float-left  border-white/[0.06] '>Join Now</motion.button>
        

       </div>
      
       


</div>
    )
}