
'use client'


import { useEffect } from "react"


import { DashNav } from "../Components/DashNav"
import { supabase } from "../lib/supabase"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import LogOut from "../Components/LogOut"




  export default function Dashboard(){

    const router= useRouter()

    





    let user;

    const getUser=async()=>{
      user = (await supabase.auth.getUser()).data.user.id
      console.log(user)
    }

    useEffect( ()=>{

      getUser()
     
    },[])


    

    //const user= auth.currentUser
    return(
        <div>
        <header>
           <title>Dashboard</title>
         </header>
         <main className=' flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>

     <p className='text-black text-xl font-light'>Dashboard</p>

   

     <LogOut/>
     
        </div>
   
        
        
        
      </main>
     </div>
    )
}

