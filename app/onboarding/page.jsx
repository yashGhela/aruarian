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
        <main className={`flex self-center place-content-center  bg-gradient-to-r from-neutral-300 via-orange-400/30  to-neutral-300  text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full  overflow-hidden`}>
           

                
            <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

            <div className="mt-[10%] text-neutral-700 md:mx-[35%] xl:mx-[33%]  mx-5 w-[350px] xl:w-[450px]  h-self  backdrop-blur-sm    rounded-[40px] bg-white/40 border p-3  border-white/[0.06]">
                <p className="text-2xl mt-2 ">Welcome to Aruarian! </p>
                <p className="mt-2 text-left text-lg p-10">

                    
                    Aruarian is an early stage AI productivity tool. <br/>
                    Ari can schedule your tasks for you, change your schedule on the fly, <br/> tell you what's coming up for the week  and give you specific details on your upcoming tasks. <br/>
                     Ari is still in the early stages of development and as such there may be bugs and/or errors. <br/>
                
                     Ari can add tasks, update tasks, read lists and batch add your tasks <br/>

                     Ari can also organize your tasks into  boards you've added <br/>


                    To get started click the button below. <br/>





                </p>

                <button onClick={()=>{router.push('/Dashboard')}} className='  p-4 mt-14 w-full rounded-2xl bg-white/40 border font-bold  float-left  border-white/[0.06] '> Get Started</button>
        
   
            </div>

            
      
            </div>
        </main>
    )
}