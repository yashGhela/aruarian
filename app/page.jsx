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





export default function Home() {
  




  return (

    
    
  <div >
    
      <main className=' flex self-center place-content-center text-white  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden '>
      
    
   

     <div className=' md:w-[70rem] lg:w-full justify-center w-[25rem] mr-0 flex-col '>

      <p className='text-black text-xl font-light'>Welcome to Yash's next template!</p>

      <Link href='/auth' className=' p-2 rounded-2xl bg-black font-normal text-center mt-20 hover:shadow-md'>Auth </Link>
      

      
     


     </div>

     
     
     
   </main>
  </div>
  )
}
