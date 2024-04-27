'use client'
import Head from "next/head"
import Auth from "../Components/Auth"
import SEO from "../Components/SEO"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect } from "react"


export default function AuthPage() {
    
  //const user= auth.currentUser
  const router= useRouter()

 


    


  return (
    <div    className={`flex  self-center place-content-center bg-gradient-to-b from-slate-300 via-red-100 to-zinc-200 text-center p-5 max-w-full min-w-screen text-neutral-700  min-h-screen max-h-full overflow-y-auto`}>

    <SEO title={'Auth'}/>

    <div className="fixed inset-0   bg-black opacity-10"></div>

    

   {/* <div style={{backgroundImage:'url(https://images.unsplash.com/photo-1703555508141-4397207fc6d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}} className="h-[62rem] bg-fit sm:invisible invisible md:visible sm:w-[50%] -mb-20 lg:w-[50%] md:w-[90%]  -mt-10 -ml-[50%]  ">

    <img onClick={()=>{router.push('/')}}  className="h-20 w-20 shadow-xl lg:ml-[48%] sm:ml-[55%] mt-20 cursor-pointer " src="https://firebasestorage.googleapis.com/v0/b/artfolio-one.appspot.com/o/Resources%2Flogo5.png?alt=media&token=7c137d40-0712-4a16-9bf8-f45ebe35d441" alt="" />

    <p className="mt-20 text-center font-bold  text-3xl md:text-2xl sm:text-xl sm:ml-[50%] md:ml-[55%] lg:ml-[40%]">Supercharge your career now!</p>

    <img className=' rounded-lg sm:invisible invisible sm:w-[40%] md:ml-[55%] lg:ml-[48%] sm:ml-[65%] mt-10  md:visible md:w-[40%] md:h-[40%] lg:h-[50%] lg:w-[40%] border shadow-xl ' src="https://firebasestorage.googleapis.com/v0/b/artfolio-one.appspot.com/o/Resources%2FUntitled%20design%20(1).gif?alt=media&token=38672d5b-719c-4758-9049-8f7f960cc24c" alt="" /> 
             
        
    
    </div>     */}
   <Auth/>

   <div  className="h-[62rem] bg-fit sm:invisible invisible md:visible sm:w-[50%] fixed right-0 -mb-20 lg:w-[50%] md:w-[90%]  mt-10  ">

    <motion.img whileHover={{scale:1.04}} onClick={()=>{router.push('/')}}  className="h-20 w-20  md:ml-[24rem] lg:ml-40 ml-40 mt-20 cursor-pointer " src='https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/aruarianlogo2.png' alt="" />

    

    <img className=' rounded-lg sm:invisible invisible sm:w-[50%] ml-40 md:ml-[24rem] lg:ml-40 mt-10  md:visible md:w-[50%] md:h-[40%] lg:h-[50%] m-2 lg:w-[50%]  shadow-xl ' src="https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/Copy%20of%20Untitled%20Design%20(2).gif" alt="" /> 
             
        
    
    </div>  
   </div>
  )
}