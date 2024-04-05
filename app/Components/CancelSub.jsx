'use client'

import { useEffect, useState } from "react"
import Modal from "./Modal"
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { supabase } from "../lib/supabase"

//import { auth } from "../firebaseConfig"


export default function CancelSub(){

  
  
  const router= useRouter()

    const ls= new LemonSqueezy(process.env.LEMON_KEY)
    const [showModal,setShowModal]=useState(false)
    const [subID, setSubID]=useState('');
    const [useremail, setuseremail]=useState('')

    const [cancelled, setCancelled]=useState(false)

   
    const [subscriptions, setSubscriptions]=useState([])

    
    

    
    let user;

    const getUser=async()=>{

      let data;
      data = (await supabase.auth.getUser())

      if(data.data.user===null){
        router.push('/auth')
    }

      user= data.data.user.id
      console.log(user)

    getUserEmail()

      

      
    }


    const getUserEmail= async()=>{

      const {data, error} = await supabase.from('Users').select('*').eq('UID',user)

      if (error){
        console.log(error)
      }else{
        console.log(data[0].email)
        setuseremail(data[0].email)
        

        
      }

      
    }


    const cancelSub = async()=>{
   
        
        
          try{
            const response= await fetch('/api/cancelsub', {
              method:'DELETE', 
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: useremail
              })
            })
            let data= await response.json();
            // setSubscriptions(data)

            console.log(data)
            const isCancelled= data.isCancelled

            console.log(isCancelled)

            if (isCancelled){
              
              const {data, error}=await supabase.from('Users')
              .update({
                paid: false 
              }).eq('UID', user)

              if(error){
                console.log(error)
              }else{
                router.push('/auth')
              }

            }


          }catch(error){
            console.log(error)
          }
        
    }
    //Code here works 
    useEffect(()=>{

      getUser()
     

      }
        
  ,[])




    return(

       <div>
         <motion.button whileHover={{scale:1.05}} onClick={()=>{setShowModal(true)}} className="fixed bottom-8 right-16 text-white hover:text-red-400 px-4 py-2 rounded-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

         </motion.button>

          <Modal showModal={showModal} setShowModal={setShowModal} Header={'Cancel Subscription'} thin={true}>
            <div className="p-3">
                <h1 className="font-normal text-white">Are you sure you want to Cancel your Subscription?</h1>
                <div className="p-3 mt-10">
                <motion.button onClick={()=>{cancelSub()}} whileHover={{scale:1.05}} className="w-full p-3 bg-red-400/40 mb-3  hover:bg-red-400 text-gray-100 rounded-2xl">Yes</motion.button>
                <motion.button whileHover={{scale:1.05}} onClick={()=>{setShowModal(false)}} className=' text-white p-4 mt-5 w-full rounded-2xl bg-white/20 border font-normal  float-left  border-white/[0.06] '>No, take me back!</motion.button>
                </div>
            </div>
          </Modal>

       </div>
    )
    
}