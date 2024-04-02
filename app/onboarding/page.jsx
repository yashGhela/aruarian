'use client'

//import { auth } from "../firebaseConfig"

import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import SEO from "../Components/SEO"
import { supabase } from "../lib/supabase"

export default function Build(){
    
    const router=useRouter()
  
   

    let user;

    const getUser=async()=>{
      user = (await supabase.auth.getUser())
      console.log(user)

      if(user.data.user===null){
        router.push('/auth')
    }

      
    }

    useEffect(()=>{

        getUser()

    },[])


    

    return(
        <main style={{backgroundImage:'url(https://images.unsplash.com/photo-1711619034500-8f562ce7bf4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundRepeat:'no-repeat'}} className={`flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full  overflow-hidden`}>
           

                
            <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

            <div className="mt-[10%] text-neutral-700 md:mx-[35%] xl:mx-[33%]  mx-5 w-[350px] xl:w-[450px]  h-self  backdrop-blur-sm    rounded-[40px] bg-white/40 border p-3  border-white/[0.06]">
                <p className="text-2xl mt-2 ">Welcome to Aruarian! </p>
                <p className="mt-2 text-lg p-10">

                    We're so excited to have you join us! <br/>
                    Aruarian is an early stage AI productivity tool. <br/>
                    Ari can schedule your tasks for you, <br/> tell you what's coming up for the week  and give you specific details on your upcoming tasks on the fly. <br/>
                     Ari is still in the early stages of development and as such there may be bugs and/or errors. <br/>
                     Ari currently cannot update tasks or batch create tasks but these features are being built <br/>


                    To get started click the button below. <br/>





                </p>

                <button onClick={()=>{router.push('/Dashboard')}} className=' text-white p-4 mt-14 w-full rounded-2xl bg-white/40 border font-bold  float-left  border-white/[0.06] '> Thanks!</button>
        
   
            </div>

            
      
            </div>
        </main>
    )
}