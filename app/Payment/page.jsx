'use client'
import Link from "next/link"
import Pricing from "../Components/Pricing"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { supabase } from "../lib/supabase"
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js"
//import { db } from "../firebaseConfig"


export default function Payment(){


  //const user= auth.currentUser

    const router =useRouter()

    
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
    //Code here works 
    useEffect(()=>{

      getUser()
      
        
      try{
        LemonSqueezy.Setup({
          eventHandler: async (event) => {

              
                 if (event.event==='Checkout.Success'){

                  const {data, error}= await supabase.from('Subscriptions').insert({
                    data: event,
                    UID: user

                  })

                  if (error){
                    console.log(error)
                  }else{
                    await supabase.from('Users').update({
                      paid:true
                    }).then((snap)=>{
                      LemonSqueezy.Url.Close()
                      router.push('/onboarding')
                    })
                  }



                  // await setDoc(doc(db,'Users',user,'SubscriptionDetails','sub'),{
                  //   data: event
                  // }).then(async(snap)=>{
                  //   updateDoc(doc(db, 'Users', user), {
                  //     paid: true,
                     
                  //   }).then((snap)=>{
                
                  //     LemonSqueezy.Url.Close()
                  //     router.push('/Dashboard')
                  //   })
          
                  // })
                 }
          }
        })
      }catch(error){
        console.log(error)
      
      }
      }
        
  ,[])



   

  

    return(
        <main style={{backgroundImage:'url(https://images.unsplash.com/photo-1711619034500-8f562ce7bf4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundRepeat:'no-repeat'}}  className=' flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
           <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
            <header>
                <title>Payments</title>
                <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
            </header>

            <div className=' md:w-full lg:w-full w-[25rem]  mr-0 flex-col'>


            <Pricing/>

            
           <div className="mt-[5%] flex-col">
           <Link href='/PrivacyPolicy' className='text-neutral-300 mt-4  cursor-pointer underline'>Privacy Policy</Link><br/>
           <Link href='/TermsAndConditions'  className='text-neutral-300 mt-4  cursor-pointer underline'>Terms and Conditions</Link> 
           </div>
            </div>

        </main>
    )
}

