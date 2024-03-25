
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
import { motion } from "framer-motion"




  export default function Dashboard(){

    const router= useRouter()

    const getTime = () => {
      const date = new Date();
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Adjust format as needed
    };
    


    const [currentTime, setCurrentTime] = useState('');
    const [todos, setTodos]=useState([])
    const [mesSent, setMesSent]=useState(false)

    const [conversation, setConversation] = useState([]);

    const [prompt, setPrompt] = useState('')
 


    const sendPrompt= async()=>{
      const response = await fetch('api/openai',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:
         JSON.stringify(
          {prompt:prompt}
         )
        
      })

      const {response: assistantResponse}= await response.json()
      console.log(assistantResponse)

      // setConversation([...conversation, { message: prompt, isUser: true }, { message: assistantResponse, isUser: false }]);
    }
    





    let user;

    const getUser=async()=>{
      user = (await supabase.auth.getUser()).data.user.id
      console.log(user)

      getTodos()
    }
    

    const getTodos=async()=>{
      const {data, error} = supabase.from('To-Dos')
      .select()
      .eq("UID", user)

      if(data){
        setTodos(data)
      }else{
        console.log(error)
      }


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
         <main  style={{backgroundImage:'url(https://cdna.artstation.com/p/assets/images/images/018/383/728/large/g-host-lee-15-04-2019-02.jpg?1559161185)', backgroundPosition: '50% 70%', backgroundRepeat:'no-repeat'}}  className=' flex text-neutral-100 bg-fit self-center place-content-center bg-neutral-800     text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
     <Overlay />
     <div className="fixed inset-0   bg-black opacity-10"></div>

   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col'>
        
    {/* {mesSent ?

     <div> HELLLO </div>
       :
       <div id="first open ">

       <div className="flex mt-[20%] mx-20">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4  mt-[2px] font-thin ">
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

       <p className=' text-sm text-left ml-2  font-thin'>{currentTime}</p>

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  ml-10 mt-[2px] font-thin ">
 <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>

<p className=' text-sm text-left ml-2  font-thin'>Later</p>


     </div>
     
    <div className="mt-8 mx-20 xs:flex-col lg:flex  xl:flex">
     
    <p className=' text-4xl text-left  font-thin'>Good Evening Yash, <br/> You have  <span className="font-normal">{todos.length} To-Dos </span> left for <br/> the day</p>


    <div className="lg:ml-[20%] -mt-10" id="to-dos container ">

    <Container/>


    

     


    </div>


    </div>
    </div>
}
         */}

{conversation && (
        <div>
            {conversation && (
              <div className=' p-2'>
             
              <p className="mt-10 text-black text-left"> {conversation}</p>
              </div>
            )}
       
        </div>
      )}

     
     <motion.div className=" fixed flex mt-[90%] w-full bottom-8" initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}>
     <input onChange={(e)=>{setPrompt(e.target.value)}} type="text"  className=" md:ml-[22%] lg:ml-[22%] 2xl:ml-[6%] xl:ml-[12%] w-[75%] md:w-1/2 focus:outline-none p-2 rounded-lg bg-white/20 border   border-white/[0.06]" />
     <motion.button onClick={()=>{sendPrompt()}} whileHover={{scale:1.02}} className=" ml-2  w-10 focus:outline-none p-2 rounded-lg bg-white/20 border hover:bg-white/30   border-white/[0.06]" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
</ motion.button>
     </motion.div>

 
   <div className="invisible md:visible">
    
   <LogOut/>
   </div>
     
        </div>
   
        
        
        
      </main>
     </div>
    )
}

