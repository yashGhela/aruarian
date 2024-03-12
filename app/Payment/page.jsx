'use client'
import Link from "next/link"
import Pricing from "../Components/Pricing"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { doc, setDoc, updateDoc } from "firebase/firestore"
//import { db } from "../firebaseConfig"


export default function Payment(){


  //const user= auth.currentUser

    const router =useRouter()
    //Code here works 
    /*useEffect(()=>{
      
        
      try{
        LemonSqueezy.Setup({
          eventHandler: async (event) => {

              
                 if (event.event==='Checkout.Success'){
                  await setDoc(doc(db,'Users',user,'SubscriptionDetails','sub'),{
                    data: event
                  }).then(async(snap)=>{
                    updateDoc(doc(db, 'Users', user), {
                      paid: true,
                     
                    }).then((snap)=>{
                
                      LemonSqueezy.Url.Close()
                      router.push('/Dashboard')
                    })
          
                  })
                 }
          }
        })
      }catch(error){
        console.log(error)
      
      }
      }
        
  ,[])*/



   

  

    return(
        <main className=' flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
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

