'use client';

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';



import { setCookie } from 'cookies-next';


export default function Auth() {
    

    const nextYear = new Date();
    const router =useRouter()

    nextYear.setFullYear(nextYear.getFullYear() + 1);//next years date for cookies

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [checked, setChecked]= useState(false)


  
    const login = async()=>{ 
       const {data1,error}=await supabase.auth.signInWithPassword({
      email:email,
      password:password
      })
      
      if(error){
        console.log(error)
      }else{
        


        router.push('/Dashboard')
  


      // const {data, error} = await supabase.from('Users').select('*').eq('email',email)

      // console.log(data[0].paid)

      // if (error){
      //   console.log(error)
      // }else{
      //   if (data[0].paid){
      //     router.push('/Dashboard')
       
      //     console.log(data)
      //   }else{
      //     setCookie('nP',true)
      //     router.push('/Payment')
      //   }
        

        
      // }

      
    
      }
      
     }

     const signup = async()=>{
      const {data, error} = await supabase.auth.signUp({
        email:email,
        password:password,

      })

      if (error){
        console.log(error)

      }

      if(data){
        console.log(data)
        const {error}=await supabase.
        from('Users')
        .insert({
          email:email,
          UID:data.user.id,
          username:email,
        })

        if (error){
          console.log(error)
        }else{
          // router.push('/Payment')
          router.push('/onboarding')
        
        }
      }
      
     }


     useEffect(()=>{


      const searchParams = new URLSearchParams(window.location.search);
      const state = searchParams.get('state');
      
      if (state === 'Login') {
        setChecked(true);
      }

    },[])
  




 





    
 

    


  return (
 
    <>
 
 <div
 
 
 className='mt-52 xl:mx-[35%] xl:w-[30%] md:w-[50%] fixed left-0  w-full'>

 
          

            <>

            <p className="mt-10 text-left font-normal  text-3xl md:text-2xl sm:text-xl  ml-10">{checked? "Log into Aruarian" : "Join Aruarian" }</p>
           


            <div className='mt-2   mr-20  h-[380px]  w-full p-10 rounded-xl '>
             {/* <button onClick={()=>{signupG()}} className='w-full p-4 rounded-lg  font-bold bg-rose-400 hover:bg-rose-500'>Sign In with Google</button> */}
             
 
            
             <div className='flex gap-2'>
             <input  onChange={(e)=>{setEmail(e.target.value)}}  className='p-2 w-full rounded-lg bg-white/40 border  backdrop-blur-sm   border-white/[0.06] font-normal focus:outline-none ' type="email" placeholder='leodavinci@email.com'/>
             <input onChange={(e)=>{setPassword(e.target.value)}} className='p-2 w-full rounded-lg bg-white/40 border  backdrop-blur-sm   border-white/[0.06]  font-normal focus:outline-none ' type="password" placeholder='******'/>
             
             </div>
             {checked?<motion.button whileTap={{scale:1.01}} id='login' onClick={()=>{login()}} className='w-full p-4  font-bold  bg-white/40 rounded-2xl mt-3     hover:bg-white/50 '>Log In </motion.button>:
             <motion.button whileTap={{scale:1.01}} onClick={()=>{signup()}}className='w-full p-4 font-bold bg-white/40 rounded-2xl mt-3    hover:bg-white/50  '>Sign Up </motion.button>}
             <p  className='text-neutral-700 mt-4 text-xs  cursor-pointer'>By signing up you agree to our <Link href='/TermsAndConditions'  className='text-neutral-700 mt-4   cursor-pointer underline'>Terms and Conditions</Link> and our <Link href='/PrivacyPolicy' className='text-neutral-700 mt-4  cursor-pointer underline'>Privacy Policy</Link> </p>
             
             
 
         </div>

         <button className="p-2 text-sm text-neutral-700 mt-10  font-normal mx-[40%] rounded-xl" onClick={()=>{if (checked){setChecked(false)}else{setChecked(true)}}}>{checked? "or Sign Up" : "or Login" }</button>
 
         </>
            
            
 
         
         </div></>
   
   
  )
}