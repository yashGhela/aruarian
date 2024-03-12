'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { motion } from "framer-motion"


export default function Pricing({landing}){

   

    const router= useRouter()
    

    const handleFree=async()=>{
        //Make user free
    }


   

    const benefits=[
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
        'Benefit 4'
    ]

    const benefitspro=[
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
        'Benefit 4',
        'Benefit 5'
    ]


 

    return(

        <div className="mt-[3%] flex-col" >

        
           

            <p className="text-black text-2xl font-normal">Pricing</p>

            <div className="lg:grid lg:grid-cols-2 md:mx-[30%] lg:mx-0    flex-col mt-20">

                <div className=" border sm:w-[25rem] w-[23rem] ml-2 lg:ml-[15%] xl:ml-[45%] rounded-xl h-[35rem] shadow-2xl ">

                    <p className='font-normal text-xl text-left text-neutral-800 mt-4 p-6 '>Starter</p>

                    <p className='font-bold text-6xl text-center text-neutral-800 mt-4 p-6 '>Free</p>
                    <div className="mt-10 ml-20">
                        {benefits.map((i)=>{
                            return(
                                <span className="flex mt-7 text-neutral-800" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                        </svg>
                                        <p className='font-normal text-md text-left text-neutral-800  '>{i}</p>

                                    </span>
                            )
                        })}

                    


                    </div>
                    {landing?
                    <button onClick={()=>{router.push('/auth')}} className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-neutral-800 hover:bg-neutral-800 ">
                   
                    Start Now!
                    </button>:

                    <motion.button whileHover={{scale:1.02}} onClick={()=>{handleFree()}} className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-neutral-800 hover:bg-neutral-900 ">
                                    
                    Start Now!
                    </motion.button>
                    
                    }
                </div>

                

                <div className="sm:w-[25rem] w-[23rem] ml-2 md:mt-10 mt-10 lg:mt-0  lg:ml-14 xl:ml-20 bg-white rounded-xl h-[42rem] shadow-2xl  border-2 border-blue-300 ">

                <p className='font-bold text-sm mt-3  text-gray-100  py-2 w-20 text-center bg-blue-300 ml-[40%] rounded-md   '>Popular</p>

                

                    <p className='font-normal text-2xl text-left text-neutral-800  p-6 '>Pro</p>

                    <p className='font-bold text-6xl text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mt-4 p-6 '>$125<span className='font-normal text-transparent text-xl bg-clip-text md:text-[30px] bg-gradient-to-r from-blue-400 to-cyan-400 mt-2'>/year</span></p>
                    <div className="mt-10 ml-20">
                        {benefitspro.map((i)=>{
                            return(
                                <span className="flex mt-7 text-blue-400" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                        </svg>
                                        <p className='font-normal text-md text-left text-neutral-800  '>{i}</p>

                                    </span>
                            )
                        })}

                    


                    </div>
                   {landing?
                    <button onClick={()=>{router.push('/auth')}} className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-blue-300 hover:bg-blue-400 ">
                   
                    Start Now!
                    </button>:
                    <button  className=" w-[90%] mt-10 font-bold text-white p-5 rounded-xl bg-blue-300 hover:bg-blue-400 ">
                   {/*Your link here: <a href="https://artfolio.lemonsqueezy.com/checkout/buy/c9ae10bc-5a85-4896-9730-4a4a195bd4fd?embed=1" class="lemonsqueezy-button">Buy Artfolio Subscription</a><script src="https://assets.lemonsqueezy.com/lemon.js" defer></script> */}
                    </button>
                    }
                </div>
            </div>

        </div>
    )
}