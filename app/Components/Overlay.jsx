import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'
import InputEmoji from "react-input-emoji";
import EmojiPicker from 'emoji-picker-react';
import { supabase } from '../lib/supabase';
import { BlockPicker } from 'react-color';

function Overlay({boards,   setBoardtype, setTodos}) {

  


  

  


   const [showModal, setShowModal]=useState(false)

   

   
      


   const [icon, setIcon]=useState('')
   const [emojiopen, setEmojiOpen]=useState(false)
   const [colorOpen, setColorOpen]=useState(false)
   const [color, setColor]=useState('')
   const [boardname, setboardname]=useState('')

   let user;

   const getUser=async()=>{
     user = (await supabase.auth.getUser()).data.user.id
     console.log(user)

     
   }

   let todayStart= new Date()
    let todayEnd= new Date()



    const getOverdue=async()=>{
      await getUser().then(async ()=>{

        todayStart.setHours(0, 0, 0, 0);
 


        todayEnd.setHours(23, 59, 59, 999); 
      
        
        const {data, error} = await supabase.from('To-Dos')
        .select('*')
        .eq("UID", user)
        .eq('completed', false)
        .or(`due_date.lt.${todayStart.toISOString()},due_date.gt.${todayEnd.toISOString()}`);
       

    
    
        if(error){
          console.log(error)
        }else{
          setTodos(data)
          setBoardtype('Overdue')
          console.log(data)
          
          
        }

      })

    }


    const getToday=async()=>{
      await getUser().then(async ()=>{

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

      })
      }
    

   
   const getQueryTodos=async({board})=>{


    await getUser().then(async ()=>{


    todayStart.setHours(0, 0, 0, 0);
 


    todayEnd.setHours(23, 59, 59, 999); 
  
    
    const {data, error} = await supabase.from('To-Dos')
    .select('*')
    .eq("UID", user)
    .eq('completed', false)
    .eq('board',board)


    if(error){
      console.log(error)
    }else{
      setTodos(data)
      setBoardtype(board)
      console.log(data)
      
      
    }
  })


  }

   const addBoard= async()=>{

    await getUser().then(async ()=>{

      const {data, error}= await supabase.from('Boards').insert({
        icon:icon,
        UID: user,
        name: boardname,

      })
  
      
  
      if (error){
        console.log(error)
      }else{
       
          setShowModal(false)
         
       
       
      }
      
    })

    
  
   }





  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false  }}
    className=' bg-neutral-300   h-self w-self'>
        <motion.div whileHover={{scale:1.05}}  onClick={()=>{getQueryTodos({board:'General'})}}   className={`flex z-20 fixed cursor-pointer hover:shadow-inner  top-8 left-8 rounded-full p-1 `}>

        <svg
  className='w-8 h-10 text-white/40 hidden  sm:visible'
  viewBox="0 0 57 79"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M38.6063 78.6846C38.47 78.6479 38.3182 78.5294 37.8385 78.0852C34.7207 75.1982 29.9288 71.8181 27.8602 67.3161C23.2535 57.2909 24.3923 44.7576 27.7379 32.259C27.8081 31.9965 27.8632 31.7793 27.8602 31.7763C27.8414 31.7574 27.2207 32.5246 26.8899 32.9757C25.4688 34.9138 24.4164 36.9362 22.4551 41.4988C21.0991 44.6532 20.5566 45.8128 19.8353 47.0986C17.7021 50.9014 15.3812 52.3754 12.2416 51.9218C7.2128 51.1952 4.90524 48.2874 5.66926 43.6401C5.84322 42.5816 6.30814 41.0674 6.69358 40.3038C6.74617 40.1996 6.74117 40.1957 6.62453 40.249C2.18842 42.2779 -1.88253 35.4663 0.92467 30.7112C3.41847 26.4873 10.1474 25.4147 19.8538 27.6935C22.4239 28.297 25.464 29.2261 27.9147 30.1572C28.032 30.2017 28.0352 30.2051 27.795 30.0288C26.1329 28.8084 24.1091 27.7604 21.6105 26.8262C20.3024 26.3371 19.3699 26.0324 16.2643 25.0793C14.3847 24.5025 13.2766 24.133 12.2883 23.7534C7.22102 21.8067 5.08251 19.3759 4.49459 14.8941C3.91328 10.4613 6.15524 8.06394 10.9463 7.99538C12.1708 7.97786 13.6057 8.12336 14.7077 8.37678C14.8886 8.41839 14.8823 8.43467 14.7623 8.23608C11.6968 3.16359 18.679 -2.21273 24.2381 0.939615C29.7858 4.08548 31.613 14.9376 29.0194 29.3389C28.9806 29.5548 28.9515 29.7341 28.9548 29.7375C28.9634 29.7461 29.2265 29.0817 29.3378 28.7703C29.8936 27.2158 30.2907 25.3424 30.5203 23.1916C30.7066 21.4458 30.7792 20.0254 30.8666 16.4225C30.9711 12.1088 31.1061 10.3723 31.4793 8.54044C32.2361 4.82477 33.9598 2.77389 36.9453 2.03758C42.0798 0.771146 45.4969 2.51233 46.7639 7.04011C47.1156 8.29724 47.3097 9.96663 47.2546 11.2608L47.2435 11.5229L47.4196 11.3542C51.2929 7.64377 58.0158 13.1079 56.8705 19.0357C55.846 24.3398 49.1969 28.1275 38.1287 29.7133C35.7228 30.0579 32.8811 30.3065 30.4439 30.3855C30.0931 30.3968 30.0765 30.3867 30.6341 30.5017C32.5746 30.902 34.7994 31.0195 37.7272 30.8762C38.7468 30.8263 39.5053 30.7736 41.5732 30.6092C44.8878 30.3457 46.4977 30.2751 47.8774 30.3329C52.9011 30.5432 55.1988 32.3211 56.0745 36.6761C56.8426 40.4955 55.2627 43.1963 51.4781 44.5337C50.4081 44.9118 48.6855 45.2523 47.8396 45.2529C47.708 45.2531 47.7104 45.26 47.8947 45.4087C51.4626 48.2881 48.0261 54.5709 42.6931 54.9184C36.3725 55.3303 30.952 46.5367 28.836 32.4378C28.8102 32.2659 28.7866 32.1278 28.7866 32.1278C28.7787 32.136 28.5218 33.1178 28.4024 33.5963C28.0172 35.1394 27.7035 37.5113 27.4441 39C25.407 50.6923 27.1248 60.6218 32.4532 69.6698C34.2418 72.7069 36.6459 75.7345 38.7213 77.5631C39.173 77.9611 39.2224 78.0312 39.2028 78.2468C39.1767 78.5351 38.8758 78.7564 38.6079 78.6843L38.6063 78.6846Z"
    fill="currentcolor"
  ></path>
</svg>

  
      
    
      </motion.div>



    <div className='fixed  top-40 z-20 left-8 '>
    <motion.button onClick={()=>{setShowModal(true)}} className='invisible bg-white/50 flex md:visible border-white/30 border-2  p-2 rounded-[20px] text-black/50 ' whileHover={{scale:1.02}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6  mt-[1px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
 </svg>
 {/* <p className='text-md  font-light invisible 2xl:visible  ml-4 mt-[2px]   text-left '>Add Board</p> */}
</motion.button>


<motion.button onClick={()=>{getToday()}} whileHover={{scale:1.02, rotate:1}} className='invisible  flex md:visible   mt-10 ml-1  p-2 rounded-[20px] text-black/50 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7  mt-[1px]">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>


        </motion.button>

<motion.button onClick={()=>{getOverdue()}} whileHover={{scale:1.02, rotate:1}} className='invisible  flex md:visible   mt-2 ml-1  p-2 rounded-[20px] text-black/50 '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7  mt-[1px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </motion.button>


        

 <div className='mt-20 invisible  md:visible'>
 {boards.map((i)=>{
      return(
        <motion.button onClick={()=>{getQueryTodos({board:i.name})}} whileHover={{scale:1.02, rotate:1}} className='flex mt-5 rounded-lg  w-full p-1  '>
          <img src={i.icon} className=' w-6 h-6 ml-2 ' />
          {/* <p className='text-md  font-light  invisible lg:visible  ml-4   text-left '>{i.name}</p> */}
  
        </motion.button>
      )
    })}
 </div>
    </div>

<Modal setShowModal={setShowModal} showModal={showModal} height={'h-self'} thin={true} Header={'Add a new board'}>

<div className='flex-col'>
  

<motion.button onClick={()=>{if(emojiopen){setEmojiOpen(false)}else{setEmojiOpen(true)}}} className=' text-white p-2 rounded-lg bg-white/20 border  float-left  border-white/[0.06] ' whileHover={{scale:1.02}}>{icon===''?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
:<img src={icon}/>}
</motion.button><br/><br/>

<EmojiPicker
style={{
  marginTop: '2.5rem', // Adjust the value as needed
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  border: '1px solid #fff',
  color: '#fff',
  top:'5px'
  

}} className=' mt-2  EmojiPickerReact ' reactions={false} open={emojiopen} onEmojiClick={(e)=>{setEmojiOpen(false); setIcon(e.imageUrl); console.log(icon)}} />

{/* <p className='text-md text-neutral-200  p-2 mt-2  text-left '>Color</p>

<motion.button onClick={()=>{if(colorOpen){setColorOpen(false)}else{setColorOpen(true)}}} className=' text-white p-2 rounded-lg bg-white/20 border  float-left  border-white/[0.06] ' whileHover={{scale:1.02}}>{color===''?"Choose a color":`${color}`}
</motion.button><br/><br/>

<BlockPicker /> */}



<input onChange={(e)=>{setboardname(e.target.value)}}  type="text" placeholder='Work'  className="  w-full  mt-5 focus:outline-none p-2 rounded-lg bg-white/20 border placeholder:text-white/50 text-white  border-white/[0.06]" />

</div>
<motion.button onClick={()=>{addBoard()}} className=' text-white p-4 mt-5 w-full rounded-2xl bg-white/20 border font-bold  float-left  border-white/[0.06] ' whileHover={{scale:1.02}}>Add board
</motion.button>
   

</Modal>


 {/* Purchase section */}

{/* <div className="sm:w-[15rem]   md:mt-10 mt-10 lg:mt-0  fixed left-8 bottom-8 bg-white/40 rounded-xl h-[15rem] shadow-2xl  border-2 border-white/[0.13] ">

                

<p className='font-bold text-lg text-left text-neutral-700  p-6 '>Become a member</p>





<p className='font-bold text-6xl text-center text-neutral-700 mt-2 '>$10</p>




<button onClick={()=>{window.location.href=' https://yashmakesstuff.lemonsqueezy.com/buy/56f369c1-f57b-4f99-8aae-d91c74626c7c'}} className=" w-[90%] mt-4 font-bold  p-5 rounded-2xl  bg-white/40 hover:bg-white/50 ">
   
    Purchase
</button>

</div> */}



      {/* <div className='fixed flex bottom-8 z-50 left-8 invisible md:visible '>

      <motion.svg whileHover={{scale:1.05, rotate:3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</motion.svg>


<motion.svg whileHover={{scale:1.05, rotate:3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 ml-2 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</motion.svg>


</div> */}



    </motion.div>
  )
}

export default Overlay