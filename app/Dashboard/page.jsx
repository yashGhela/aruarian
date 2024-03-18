
'use client'


import { useEffect } from "react"


import { DashNav } from "../Components/DashNav"
import { supabase } from "../lib/supabase"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import LogOut from "../Components/LogOut"
import img from '../assets/image 3.png'
import Container from "../Components/container"




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
         <main style={{backgroundImage:'url(https://images.unsplash.com/photo-1604275344754-22da9779c2ff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundPosition: '50% 70%', backgroundRepeat:'no-repeat'}} className=' flex self-center place-content-center     text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>

     <div className="mt-[25%] mx-20 xs:flex-col lg:flex  xl:flex">
     <p className='text-[#E8E8E8] text-4xl text-left  font-thin'>Good Evening Yash, <br/> You have 2 <span className="font-normal">To-Dos </span> left for <br/> the day</p>


     <div className="lg:ml-[20%] -mt-10" id="to-dos container ">

     <Container/>

      


     </div>


     </div>

 

     <LogOut/>
     
        </div>
   
        
        
        
      </main>
     </div>
    )
}

