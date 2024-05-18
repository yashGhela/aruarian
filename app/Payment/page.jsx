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
    const [IsLoading,setIsLoading]=useState(false)

    
    

    
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
            setIsLoading(true)
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
                router.push('/Dashboard')

                let cook = getCookie('nP')

                if (cook){
                  deleteCookie('nP')
                }
              }

            }


          }catch(error){
            console.log(error)
          }
        }else{
          return null
        }
    }
  
    useEffect(()=>{

      getUser()
     

      }
        
  ,[])

    //remove in dev mode
  


   

  

    return(


        <main  className=' flex self-center place-content-center  text-neutral-700 bg-gradient-to-b from-orange-300 to-neutral-400 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>

          {IsLoading&&<div className="fixed inset-0   bg-black opacity-40"> <div className="mt-[25%]">
                    <p className='text-3xl mt-20  font-normal text-black '>Loading</p>
                <div role="status" className="align-items-center ml-[49%] fixed inset-1 mt-[25%]">
                <svg aria-hidden="true" class="w-8 h-8 mr-2  animate-spin dark:text-white fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div></div>}
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

