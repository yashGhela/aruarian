'use client'
import LandingBar from './Components/LandingBar'
import LandingHero from './Components/LandingHero'

import LandingSteps from './Components/LandingSteps'
import LandingFeatures from './Components/LandingFeatures'
import LandingVideo from './Components/LandingVideo'
import Modal from './Components/Modal'

import Interest from './Components/Interest'
import LandingAction from './Components/LandingAction'
import LandingFooter from './Components/LandingFooter'
import LandingFaq from './Components/LandingFaq'
import Pricing from './Components/Pricing'
import SEO from './Components/SEO'
import LandingDemo from './Components/LandingDemo'
import { Element } from 'react-scroll'
import LandingExamples from './Components/LandingExamples'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'





export default function Home() {
  const router = useRouter()

  




  return (

    
    
  <div >
    
      <main 
      
      className=' flex self-center place-content-center text-neutral-700 bg-gradient-to-b from-slate-300 via-zinc-300 to-orange-200 bg-cover text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      
    
   

     <div className=' md:w-[70rem] lg:w-full justify-center w-[25rem] mr-0 flex-col '>


      <LandingBar isLand={true}/>

      <LandingHero/>

      <LandingFeatures/>
  
      

      
     


     </div>

     
     
     
   </main>
  </div>
  )
}
