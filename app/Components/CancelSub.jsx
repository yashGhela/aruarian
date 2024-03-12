'use client'

import { useEffect, useState } from "react"
import Modal from "./Modal"
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"

//import { auth } from "../firebaseConfig"


export default function CancelSub(){

  
  const user= getCookie('useraidt')
  const router= useRouter()

    const ls= new LemonSqueezy(process.env.LEMON_KEY)
    const [showModal,setShowModal]=useState(false)
    const [subID, setSubID]=useState('');
    const [useremail, setuseremail]=useState('')

     //const user= auth.currentUser

    /*
      const getSubID=async()=>{
    await getDoc(doc(db,'Users',user)).then((snap)=>{
      setuseremail(snap.data().email)
      
    }).then(async (snap)=>{
      const subscription=await ls.getSubscriptions();
      setArray(subscription.data)
      
      for (let i=0; i< array.length; i++){
        if(array[i].attributes.user_email===useremail){
          setSubID(array[i].id)
          
        }
      }
     
    })
  }

     const cancelSub=async ()=>{
     const cancel = ls.cancelSubscription({id:subID})
     console.log(cancel)
     await updateDoc(doc(db,'Users',user),{
      approved:false,
      CON:format(new Date(), 'yyyy/MM/dd'),

     }).then((snap)=>{
      logOut()
     })

      
  }
  
  
  */
    
    useEffect(()=>
    {
        console.log(ls)

        //getSubID()

    },[])


    return(

       <div>
         <button onClick={()=>{setShowModal(true)}} className="w-72 p-3 border border-red-400 hover:bg-red-400 text-red-400 hover:text-gray-100 rounded-xl">Cancel Subscription</button>

          <Modal showModal={showModal} setShowModal={setShowModal} Header={'Cancel Subscription'} thin={true}>
            <div>
                <h1 className="font-bold text-gray-500">Are you sure you want to Cancel your Subscription?</h1>
                <div className="p-3 mt-10">
                <button className="w-full p-3 mb-3 border border-red-400 hover:bg-red-400 text-red-400 hover:text-gray-100 rounded-xl">Yes</button>
                <button onClick={()=>{setShowModal(false)}} className="w-full p-3 border border-gray-400 hover:bg-gray-400 text-gray-400 hover:text-gray-100 rounded-xl">No, take me back!</button>
                </div>
            </div>
          </Modal>

       </div>
    )
    
}