'use client'

//import { auth } from "../firebaseConfig"

import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SEO from "../Components/SEO"

export default function Build(){
    
    const router=useRouter()
    const user= getCookie('useraidt')
    const fst= getCookie('fst')


    //const user= auth.currentUser

    return(
        <main style={{backgroundImage:'url(https://images.unsplash.com/photo-1711619034500-8f562ce7bf4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundRepeat:'no-repeat'}} className={`flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full  overflow-hidden`}>
           

                
            <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

            <div className="md:mt-[25%] text-neutral-700 md:mx-[30%] xl:mx-[33%] mt-[90%] mx-5 w-[350px] xl:w-[450px]  h-self  backdrop-blur-sm    rounded-[40px] bg-white/40 border p-3  border-white/[0.06]">
                <p className="text-xl mt-2 ">Welcome to Aruarian! </p>
                <p className="mt-4 text-lg">

                    We're so excited to have you join us! <br/>
                    To get started click the button below. <br/>




                </p>
            </div>

            
      
            </div>
        </main>
    )
}