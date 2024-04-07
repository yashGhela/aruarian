'use client'
import Link from "next/link"
import Pricing from "../Components/Pricing"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { deleteCookie, getCookie } from "cookies-next"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { supabase } from "../lib/supabase"
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js"
import CancelSub from "../Components/CancelSub"
//import { db } from "../firebaseConfig"


export default function Payment(){


  //const user= auth.currentUser

    const router =useRouter()

    const [useremail, setuseremail]=useState('')
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

        verifySubscription({useremail:data[0].email})
      }

      
    }


    const verifySubscription= async({useremail})=>{
      const searchParams = new URLSearchParams(window.location.search);
        const state = searchParams.get('paid');
        
        if (state === 'Yth3pf7cAs') {
          try{
            const response= await fetch('/api/verifysubscription/'+useremail)
            let data= await response.json();
            // setSubscriptions(data)
            const ispaid= data.isPaid

            console.log(ispaid)

            if (ispaid){
              
              const {data, error}=await supabase.from('Users')
              .update({
                paid: true 
              }).eq('UID', user)

              if(error){
                console.log(error)
              }else{
                router.push('/onboarding')

                let cook = getCookie('nP')

                if (cook){
                  deleteCookie('nP')
                }
              }

            }


          }catch(error){
            console.log(error)
          }
        }
    }
    //Code here works 
    useEffect(()=>{

      getUser()
     

      }
        
  ,[])



   

  

    return(
        <main  className=' flex self-center place-content-center  text-neutral-700 bg-gradient-to-b from-slate-300 via-zinc-300 to-orange-200 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
           <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
            <header>
                <title>Payments</title>
                <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
            </header>

            <div className=' md:w-full lg:w-full w-[25rem]  mr-0 flex-col'>


            <Pricing/>

      
 
            
           <div className="mt-[5%] flex-col">
           <Link href='/PrivacyPolicy' className=' mt-4  cursor-pointer underline'>Privacy Policy</Link><br/>
           <Link href='/TermsAndConditions'  className=' mt-4  cursor-pointer underline'>Terms and Conditions</Link> 
           </div>
            </div>

        </main>
    )
}

