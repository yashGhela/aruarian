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
import Interest1 from './Components/Interest1'






export default function Home() {



  const router = useRouter()

  // useEffect(()=>{
  //   document.body.style.zoom = 1.1
  // })




  return (

    
    
  <div >

    <SEO/>
    
      <main
       
      
      className=' flex px-0  self-center place-content-center text-neutral-900  bg-stone-300/50 bg-cover text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      
     <head>
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8HTEWKHSM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-D8HTEWKHSM');
</script>
     </head>
   

     <div className=' md:w-[70rem] lg:w-full justify-center w-[25rem] mr-0 flex-col '>


      <LandingBar isLand={true}  />

      <LandingHero/>
      <LandingVideo/>

      {/* <LandingVideo/> */}

      <Interest/>
    


      <p className=" text-7xl mt-[25%] font-bold">How it works </p>

     <Element id='How-it-works'>
        <Section1/>
    
     </Element>
    

      <Section2/>

      <Section3/>

      {/* <LandingFeatures/> */}

      <Element id='pricing'>
      <Pricing landing={true}/>
      </Element>

     {/* <Element id='about'>
     <LandingAbout/>
     </Element> */}


      <LandingFaq/>


      <LandingAction/>

      <LandingFooter/>


   
  
      

      
     


     </div>

     
     
     
   </main>
  </div>
  )
}
