'use client';

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
// import { supabase } from '../lib/supabase';
/*

import {browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import  { auth,db,provider } from '../firebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { setCookie } from 'cookies-next';*/


export default function Auth() {
    

    const nextYear = new Date();
    const router =useRouter()

    nextYear.setFullYear(nextYear.getFullYear() + 1);//next years date for cookies

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [checked, setChecked]= useState(false)


    //supabase

    // const login = async()=>{ 
    //   await supabase.auth.signInWithPassword({
    //    email:email,
    //    password:password
    //   }).then(()=>{
    //    router.push('/Dashboard')
    //   })
    // }




 





    //Firebase

   


    
    /*const signInG = async () => {
      setPersistence(auth, browserLocalPersistence).then(async () => {
        await signInWithPopup(auth, provider).then(async (r) => {
          const ref = doc(db, 'Users', r.user.uid);
    
          var ud = r.user;
          
    
          await getDoc(ref).then(async (snap) => {
            if (snap.exists()) {
              router.push('/Dashboard');
              setCookie('useraidt', ud.uid, {expires: nextYear})
              setCookie('folio', snap.data().folio, {expires: nextYear})
            } else if (!snap.exists()) {
              await setDoc(ref, {
                email: ud.email,
                username: r.user.displayName,
                paid: false,
              }).then((snap) => {
                setCookie('fst', 'tsf', { expires: nextYear, path: '/' });
                setCookie('useraidt', ud.uid, {expires: nextYear})
                
                router.push('/build');
              });
            }
          });
        });
      });
    };
    
    const signUpEp = async () => {
      setPersistence(auth, browserLocalPersistence).then(async () => {
        await createUserWithEmailAndPassword(auth, email, password).then(async (r) => {
          const ref = doc(db, 'Users', r.user.uid);
    
          var ud = r.user;
    
          await setDoc(ref, {
            email: ud.email,
            username: ud.email,
            paid: false,
          }).then((snap) => {
            setCookie('fst', 'tsf', { expires: nextYear, path: '/' });
             setCookie('useraidt', ud.uid, {expires: nextYear})
            router.push('/build');
          });
        })
      })
    }

      const signInEp=async()=>{
        setPersistence(auth, browserLocalPersistence).then(async () => {
          await signInWithEmailAndPassword(auth, email, password).then(async (r) => {
            const ref = doc(db, 'Users', r.user.uid);
  
            var ud = r.user;
  
            await getDoc(ref).then((snap) => {
              if (snap.exists()) {
                router.push('/Dashboard');
                setCookie('fst', 'tsf', { expires: nextYear, path: '/' });
              setCookie('useraidt', ud.uid, {expires: nextYear})
              setCookie('folio', snap.data().folio, {expires: nextYear})
              }
            });
          });
        })

      }

     
     useEffect(()=>{


        const searchParams = new URLSearchParams(window.location.search);
        const state = searchParams.get('state');
        
        if (state === 'Login') {
          setChecked(true);
        }

      },[])*/
    
    
    
 

    


  return (
 
    <>
 
 <div  className='mt-52 xl:mx-40 xl:w-[30%] md:w-[50%] fixed left-0 w-full'>

 
          

            <>

            <p className="mt-10 text-left font-bold text-zinc-500 text-3xl md:text-2xl sm:text-xl  ml-10">{checked? "Log back into BlockPad" : "Join BlockPad Now!" }</p>
           


            <div className='mt-5   mr-20  h-[380px]  w-full p-10 rounded-xl '>
             <button onClick={()=>{signupG()}} className='w-full p-4 rounded-lg text-white font-bold bg-rose-400 hover:bg-rose-500'>Sign In with Google</button>
             <hr className='mt-2' /> 
 
            
             <div className='flex gap-2'>
             <input  onChange={(e)=>{setEmail(e.target.value)}}  className='p-2 w-full bg-neutral-50 border border-gray-300 rounded-lg mt-2 text-gray-900 font-normal focus:outline-none ' type="email" placeholder='leodavinci@email.com'/>
             <input onChange={(e)=>{setPassword(e.target.value)}} className='p-2 w-full bg-neutral-50 border border-gray-300 rounded-lg mt-2 text-gray-900 font-normal focus:outline-none ' type="password" placeholder='******'/>
             
             </div>
             {checked?<button id='login' onClick={()=>{login()}} className='w-full p-4 font-normal text-zinc-500 rounded-lg mt-3  border-zinc-500  border hover:bg-zinc-200 '>Log In </button>:
             <button onClick={()=>{signup()}} className='w-full p-4 font-normal text-zinc-500 rounded-lg mt-3  border-zinc-500  border hover:bg-zinc-200 '>Sign Up </button>}
             <p  className='text-gray-500 mt-4 text-xs  cursor-pointer'>By signing up you agree to our <Link href='/TermsAndConditions'  className='text-gray-500 mt-4  cursor-pointer underline'>Terms and Conditions</Link> and our <Link href='/PrivacyPolicy' className='text-gray-500 mt-4  cursor-pointer underline'>Privacy Policy</Link> </p>
             
             
 
         </div>

         <button className="p-2 text-sm text-zinc-400 mt-10  font-normal mx-[40%] rounded-xl" onClick={()=>{if (checked){setChecked(false)}else{setChecked(true)}}}>{checked? "or Sign Up" : "or Login" }</button>
 
         </>
            
            
 
         
         </div></>
   
   
  )
}