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
        <div className={`flex justify-center items-center ml-0 lg:mx-[10%] w-full md:w-[90%] lg:w-full h-14 rounded-md mt-0 text-center`}>
       {/*
     */}
      
     
        {isLand?
      <div className='mt-5 float-right left-10 fixed  flex'>
      <motion.button whileTap={{scale:1.1}} onClick={()=>{setAboutOpen(true)}} className={` mt-12 p-4 sm:invisible invisible md:visible ml-8 cursor-pointer`} >About</motion.button>
        <motion.button whileTap={{scale:1.1}} onClick={()=>{setPricingOpen(true)}} className={` mt-12 p-4 sm:invisible invisible md:visible ml-8 cursor-pointer`} >Pricing</motion.button>
       
        
       </div>:null}


       <Modal height={'h-full'} Header={'Pricing'} showModal={pricingOpen} setShowModal={setPricingOpen} >
        <Pricing landing={true}/>
       </Modal>

       <Modal height={'h-[50%]'} Header={'About'} thin={true} showModal={aboutOpen} setShowModal={setAboutOpen}>
      
       <span className=" text-left text-white  p-10"> 
     

          Hey, Yash here. <br/>

          I'm the founder of AruarianAI. <br/>

          I created AruarianAI because I hated every other productivity app,

          They were all too manual and felt like I could've just used a pen and paper and gotten the same effect. <br/>

          Anyways, as I got more into AI I realized that I could use AI to automate my task management, and just like that AruarianAI was born. <br/>

          Aruarian can add new todos for you, create lists for you and find you specific information on the fly<br/> <br/>

          It's not perfect yet and it's still very early days, but I figure there are other people out there tired of 'productivity' apps that charge you through the ass and give you basically nothing in return <br/>

          If you want to give me any feedback you can hit me up  <span className="underline cursor-pointer" onClick={()=>{window.open('https://twitter.com/yashmakesstuff')}}>here</span>. <br/>

           ✌️

       </span>

       <img className="rounded-3xl" src="https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/20240217_175352.jpg" alt="" />

       </Modal>


     

       <div className={`flex mt-8 fixed right-10`}>
       <Link href='/auth?state=Login'  className={`  ml-2 md:ml-4  pt-1 underline   p-4 mt-10 font-normal  rounded-md`}>Login</Link>
       <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' p-4 mt-5 w-full ml-2 rounded-2xl bg-white/20 border font-bold  float-left  border-white/[0.06] '>Start Now</motion.button>
        

       </div>
      
       


</div>
    )
}