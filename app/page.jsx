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
import LandingAbout from './Components/LandingAbout'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'





export default function Home() {
  const router = useRouter()

  // useEffect(()=>{
  //   document.body.style.zoom = 1.1
  // })




  return (

    
    
  <div >
    
      <main 
      
      className=' flex  self-center place-content-center text-neutral-900 bg-gradient-to-b from-slate-200 via-red-100 to-amber-50 bg-cover text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      
    
   

     <div className=' md:w-[70rem] lg:w-[75rem] justify-center w-[25rem] mr-0 flex-col '>


      <LandingBar isLand={true}  />

      <LandingHero/>

      <LandingVideo/>

      <p className='text-8xl text-center mt-[30%] md:mt-[40%]  font-bold'>No more what?</p>


      <Section1/>

      <Section2/>

      <Section3/>

      <Element id='pricing'>
      <Pricing landing={true}/>
      </Element>

     <Element id='about'>
     <LandingAbout/>
     </Element>


      <LandingFaq/>


      <LandingAction/>


   
  
      

      
     


     </div>

     
     
     
   </main>
  </div>
  )
}
