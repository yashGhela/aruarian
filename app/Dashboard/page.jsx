
'use client'


import 'ldrs/jelly'
import { useEffect, useState } from "react"


import { DashNav } from "../Components/DashNav"
import { supabase } from "../lib/supabase"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import LogOut from "../Components/LogOut"

import Container from "../Components/container"
import Overlay from "../Components/Overlay"
import { motion } from "framer-motion"
import CancelSub from '../Components/CancelSub'

import { grid } from 'ldrs'
import Feedback from '../Components/Feedback'

// grid.register()

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));




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

    const [AIData, setAIData]=useState([])

    const [prediction, setPrediction]=useState('')
    const [error,setError]=useState('')

  
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

      let data;
      data = (await supabase.auth.getUser())

      if(data.data.user===null){
        router.push('/auth')
    }

      user= data.data.user.id
      console.log(user)


     

    

      

      
    }
    

    const sendPrompt= async()=>{

      getUser().then(async ()=>{

        console.log(user)


        const containsRead = /\/read/.test(prompt);
        const containsAdd = /\/add/.test(prompt);


        const response = await fetch('api/chat?userid='+user,{
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
  
  
        let prediction = await response.json()
  
      if (response.status !== 201) {
        setError(prediction.detail);
        return;
      }
  
      setPrediction(prediction);
      console.log(prediction.id)
      console.log(prediction.urls.get)
  
  
      while (
        prediction.status!=='succeeded' && 
        prediction.status!=='failed'
      ){
        await sleep(1000);
  
          console.log(prediction.id)
        const response = await  fetch("api/chat/" + prediction.id+'?userid='+user);
        prediction = await response.json();
  
     
        if (response.status !== 200) {
          setError(prediction.detail);
          return;
        }
  
        if(response.status===201){
          setIsLoading(false)
        }
        console.log(prediction)
        setPrediction(prediction)
      }
      

      

      // await response.json().then((snap)=>{
      //   setResponseAI(snap)

      //   console.log(snap)
      //   setIsLoading(false)

      //   if (snap.tasks){
      //     setAIData(snap.tasks)
      //   }

      // //   setTimeout(() => {
      // //     setMesSent(false);
      // // }, 5000);
      // })
    

      })

      

    }
    





    let todayStart= new Date()
    let todayEnd= new Date()
    

    const getTodos=async()=>{


      todayStart.setHours(0, 0, 0, 0);
   


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

        //remove in dev mode
  
     
        
      getUser().then(()=>{getTodos()})
      getGreeting()

      getUserBoards()

      let cook= getCookie('nP')

      if(cook){
        router.push('/Payment')
      }

      


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
         <main  


         
         className=' bg-stone-100/50 flex text-neutral-900  bg-cover bg-no-repeat self-center place-content-center  backdrop-blur-md     text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
     <Overlay boards={boards} setBoardQuery={setBoardQuery} setQueried={setQueried} />
     

   

     <div className=' md:w-[70rem] inset-1 lg:w-full w-[50rem] mr-0 flex-col'>
        
    {mesSent ?

     <div>

     

    <div className='w-[70%] mx-[10%]'>

<div className="md:mt-[5%]  2xl:ml-48  mt-[30%] bg-neutral-300/50   border  float-right   border-white/[0.06] p-6  w-self h-self  backdrop-blur-sm text-left   text-lg rounded-[40px] ">

   {prompt}

  </div>


        <div className="md:mt-[14%] sm:ml-[20%] mt-[30%] -mr-10 w-[350px] sm:w-[450px] h-self  backdrop-blur-sm  float-left    rounded-[20px] bg-neutral-300/50    border p-3  border-white/[0.06]">

        {prediction && (
        <div>
            <div className=' p-2'>
             
             <p className=" text-xl text-left mb-4"> {prediction.status!==201?<div className='flex'>
              <p>{prediction.status}</p>
              {/* <l-grid
              size="30"
              speed="1.5"
              className='ml-5' 
              color="black" 
            ></l-grid> */}
             </div>:prediction.message}</p>

             {prediction.tasks&&<Container todos={prediction.tasks} isRes={true}/>}
             </div>


             { <button onClick={()=>{setMesSent(false); setPrompt('')}} className='  p-4 mt-5 w-full rounded-2xl bg-white/40 border font-bold  float-left  border-white/[0.06] '> Thanks!</button>
      }
       
        </div>
      )}

        </div>

      </div>

        
        
        

     


      </div>
     
       :
       <div>
     {isQueried ?
     <div > 

     </div>:
     
     <div className="    mt-[10%]  " id="first open ">

     {/* <div className="flex mt-[10%] mx-20">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  mt-[2px] font-thin ">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

     <p className=' text-sm text-left ml-2  font-normal'>{currentTime}</p>

     {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  ml-10 mt-[2px] font-thin ">
<path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
</svg>

<p className=' text-sm text-left ml-2  font-thin'>Later</p>


   </div> */}
   
  <div className="sm:mt-2  mt-20 ">
   
  <p className=' text-4xl   font-normal'>{greeting}, You have  <span className="font-bold">{todos.length} To-Dos </span> left for <br/> the day</p>


  <div className=" 2xl:mx-[25%] lg:mx-64 md:mx-24  xl:mx-[10%] sm:mx-5 mt-10" id="to-dos container ">

  <Container  setTodos={setTodos} boards={boards} todos={todos}  />


  

   


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

      {/* All dis code is for the bottom section */}
     <motion.div className=" md:ml-48 lg:ml-64  xl:ml-72 2xl:ml-[24%] fixed flex-col mt-[90%] w-full bottom-8" initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}>
    <div className="flex md:visible invisible mb-2 md:ml-0  xl:ml-0">
    <motion.button onClick={()=>{setPrompt(' What work do I have for today?'); }} whileHover={{scale:1.03}} className='  w-1/6 focus:outline-none p-2 rounded-lg  bg-neutral-200/50   hover:bg-neutral-200/70 border border-white/[0.06]  backdrop-blur-sm   "'>What work do I have for today? </motion.button>
    <motion.button onClick={()=>{setPrompt(' What tasks are overdue?'); }} whileHover={{scale:1.03}} className=' ml-2  w-1/6 focus:outline-none p-2 rounded-lg bg-neutral-200/50   hover:bg-neutral-200/70 border border-white/[0.06]  backdrop-blur-sm   "'>What tasks are overdue? </motion.button>
    <motion.button onClick={()=>{setPrompt(' Whats up for tomorrow?');}} whileHover={{scale:1.03}} className='ml-2  w-1/6 focus:outline-none p-2 rounded-lg bg-neutral-200/50   hover:bg-neutral-200/70 border border-white/[0.06]  backdrop-blur-sm   "'>Whats up for tomorrow? </motion.button>


    </div>
    <div className="flex">
   
       <textarea cols={1} rows={1} value={prompt}   onChange={(e)=>{setPrompt(e.target.value)}} type="text"  className="  md:w-1/2 w-[80%] focus:outline-none p-2 pl-5 pr-5 rounded-2xl bg-neutral-200/50 border  backdrop-blur-sm    border-white/[0.06]" />
     <motion.button onClick={()=>{sendPrompt(); setMesSent(true); setIsLoading(true)}} whileHover={{scale:1.02}} className=" ml-2  w-10 focus:outline-none p-2 rounded-2xl bg-neutral-200/50 border  hover:bg-neutral-200/40  text-black/50  border-white/[0.06]" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg> </motion.button>
     
    </div>
    {/* <p className='italic  text-neutral-700'>Aruarian is in early development and bugs may occur </p> */}
     </motion.div>

 
   <div className="invisible md:visible">
    
   <LogOut/>
   <CancelSub/>
   <Feedback/>
   </div>
     
        </div>
   
        
        
        
      </main>
     </div>
    )
}

