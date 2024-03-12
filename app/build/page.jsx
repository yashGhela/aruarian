'use client'

//import { auth } from "../firebaseConfig"

import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SEO from "../Components/SEO"

export default function Build(){
    
    const router=useRouter()
    const user= getCookie('useraidt')
    const fst= getCookie('fst')


    //const user= auth.currentUser

    return(
        <main className={`flex self-center place-content-center  bg-white text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full  overflow-hidden`}>
            <SEO 
            title={'Build a Portfolio in 5 minutes | Artfolio'}
            description={'Build a stunning, clean portfolio in 5 minutes and supercharge your career to the next level. Built with Analytics tools, SEO optomization, and tons of customization '}
            keywords={'Porfolio, art, art portfolios, how to build a portfolio, artfolio, nitron, Artfolio, quick, portfolios'}
               
                />

                
            <div className=' md:w-[70rem] lg:w-[80rem] w-[25rem] mr-0 flex-col'>

            
      
            </div>
        </main>
    )
}