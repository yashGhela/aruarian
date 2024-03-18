
'use client'


import { useEffect, useState } from "react"


import { DashNav } from "../Components/DashNav"
import { supabase } from "../lib/supabase"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import LogOut from "../Components/LogOut"
import img from '../assets/image 3.png'
import Container from "../Components/container"
import Overlay from "../Components/Overlay"




  export default function Dashboard(){

    const router= useRouter()

    const getTime = () => {
      const date = new Date();
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Adjust format as needed
    };
    


    const [currentTime, setCurrentTime] = useState('');
 

    





    let user;

    const getUser=async()=>{
      user = (await supabase.auth.getUser()).data.user.id
      console.log(user)
    }

    useEffect( ()=>{

      getUser()


      const updateTime = () => {
        setCurrentTime(getTime());
      };
  
     
  
      updateTime();
      const interval = setInterval(updateTime, 1000); // Update time every second
  
      
  
      return () => clearInterval(interval);
     
    },[])


    

    //const user= auth.currentUser
    return(
        <div>
        <header>
           <title>Dashboard</title>
         </header>
         <main style={{backgroundImage:'url(https://images.unsplash.com/photo-1604275344754-22da9779c2ff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundPosition: '50% 70%', backgroundRepeat:'no-repeat'}} className=' flex text-neutral-100 self-center place-content-center     text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
     <Overlay/>
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>
        
     <div className="flex mt-[25%] mx-20">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4  mt-[2px] font-thin ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        <p className=' text-sm text-left ml-2  font-thin'>{currentTime}</p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  ml-10 mt-[2px] font-thin ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>

<p className=' text-sm text-left ml-2  font-thin'>Later</p>


      </div>
      
     <div className="mt-10 mx-20 xs:flex-col lg:flex  xl:flex">
      
     <p className=' text-4xl text-left  font-thin'>Good Evening Yash, <br/> You have 2 <span className="font-normal">To-Dos </span> left for <br/> the day</p>


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

