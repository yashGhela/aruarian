
'use client'

import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";

import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";


export default function LogOut(){
    //const user= auth.currentUser

    const router=useRouter()

  
    const signOut= async()=>{
      const {error} = await supabase.auth.signOut()

      if(error){
        console.log(error)
      }else{
        router.push('/')
      }
    }
      

    return(

      <motion.button
      whileHover={{scale:1.05}}
      onClick={()=>{signOut()}}
      class="fixed bottom-8 right-8 text-black/80    px-4 py-2 rounded-full"
  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>


          
      </motion.button>

    )
}