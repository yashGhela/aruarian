
'use client'


import 'ldrs/jelly'
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

  


    const [currentTime, setCurrentTime] = useState('');
    const [greeting, setGreeting]=useState('')
    const [todos, setTodos]=useState([])
    const [mesSent, setMesSent]=useState(false)

    const [boards, setBoards]=useState([])

    const [conversation, setConversation] = useState([]);

    const [prompt, setPrompt] = useState('')

    const [responseAI, setResponseAI]=useState([])

    const [IsLoading, setIsLoading]=useState(false)

    const [isQueried, setQueried]=useState(false)

    const [boardquery, setBoardQuery]=useState('')
 
  


    const getGreeting=()=>{
      const currentTime = parseInt(getTime().split(':')[0]);
      if (currentTime >= 2 && currentTime < 12) {
        setGreeting("Good morning") ;
    } else if (currentTime >= 12 && currentTime < 18) {
        setGreeting("Good afternoon");
    } else {
        setGreeting("Good evening") ;
    }
    }


    const getTime = () => {
      const date = new Date();
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // Adjust format as needed

      
    };

    let user;

    const getUser=async()=>{
      user = (await supabase.auth.getUser()).data.user.id
      console.log(user)

      
    }
    

    const sendPrompt= async()=>{

      getUser().then(async ()=>{

        console.log(user)

      
      const response = await fetch('api/openai',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:
         JSON.stringify(
          {prompt:prompt,
          userid: user}
         )
        
      })

      await response.json().then((snap)=>{
        setResponseAI(snap)

        console.log(snap)
        setIsLoading(false)

      //   setTimeout(() => {
      //     setMesSent(false);
      // }, 5000);
      })
    

      })

      

      // setConversation([...conversation, { message: prompt, isUser: true }, { message: assistantResponse, isUser: false }]);
    }
    





  
    

    const getTodos=async()=>{

      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0); // Set time to the start of the day

      const todayEnd = new Date();
      todayEnd.setHours(23, 59, 59, 999); 
      
      const {data, error} = await supabase.from('To-Dos')
      .select('*')
      .eq("UID", user)
      .eq('completed', false)
      .gte('due_date', todayStart.toISOString())
      .lt('due_date', todayEnd.toISOString());

      if(error){
        console.log(error)
      }else{
        setTodos(data)
        console.log(data)
        
        
      }


    }

          
        const getUserBoards=async()=>{

          await getUser().then(async ()=>{

          const {data, error}= await supabase.from('Boards').select('*').eq('UID',user)


          if (error){
            console.log(error)
          }else{
            setBoards(data)
          
          }

        })


        }

    useEffect( ()=>{

      getUser().then(()=>{getTodos()})
      getGreeting()

      getUserBoards()

      


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
         <main    className=' flex text-neutral-900 bg-cover self-center place-content-center bg-gradient-to-b from-red-50 via-orange-200 to-indigo-200     text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
     <Overlay boards={boards} setBoardQuery={setBoardQuery} setQueried={setQueried} />
     <div className="fixed inset-0   bg-black opacity-10"></div>

   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[50rem] mr-0 flex-col'>
        
    {mesSent ?

     <div className="md:mt-[20%] md:ml-[40%] mt-[90%] ml-10 w-[350px] h-self  backdrop-blur-sm    rounded-[40px] bg-white/20 border p-3  border-white/[0.06]">

       {IsLoading ?

        <div>
        <div role="status" className="align-items-center ml-[45%] ">
                <svg aria-hidden="true" class="w-8 h-8  animate-spin dark:text-white fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>

       :
      <div>

    <p className="text-center text-md font-normal mt-2 p-5 text-white">{responseAI.message}</p>

    <button onClick={()=>{setMesSent(false)}} className=' text-white p-4 mt-14 w-full rounded-2xl bg-white/20 border font-bold  float-left  border-white/[0.06] '> Thanks!</button>
        
      </div>
       

       
      }


      
       </div>
       :
       <div>
     {isQueried ?
     <div > 

     </div>:
     
     <div className=" md:ml-40  lg:ml-40 2xl:ml-0" id="first open ">

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
   
  <p className=' text-4xl text-left  font-thin'>{greeting} Yash, <br/> You have  <span className="font-normal">{todos.length} To-Dos </span> left for <br/> the day</p>


  <div className="lg:ml-[20%] -mt-10" id="to-dos container ">

  <Container boards={boards} todos={todos}/>


  

   


  </div>


  </div>
  </div>}
  </div>
}

        

{/* {conversation && (
        <div>
            {conversation && (
              <div className=' p-2'>
             
              <p className="mt-10 text-black text-left"> {conversation}</p>
              </div>
            )}
       
        </div>
      )} */}

     
     <motion.div className=" fixed flex mt-[90%] w-full bottom-8" initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}>
     <input onChange={(e)=>{setPrompt(e.target.value)}} type="text"  className=" md:ml-[22%] lg:ml-[22%] 2xl:ml-[6%] xl:ml-[12%] ml-5 w-[75%] md:w-1/2 focus:outline-none p-2 rounded-lg bg-white/20 border  backdrop-blur-sm   border-white/[0.06]" />
     <motion.button onClick={()=>{sendPrompt(); setMesSent(true); setIsLoading(true)}} whileHover={{scale:1.02}} className=" ml-2  w-10 focus:outline-none p-2 rounded-lg bg-white/20 border hover:bg-white/30   border-white/[0.06]" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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

