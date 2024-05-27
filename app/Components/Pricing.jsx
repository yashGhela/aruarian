'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Modal from "./Modal"


export default function Pricing({landing}){

   

    const router= useRouter()


    const [openModal, setOpenModal]=useState(false)
    

   

   

    
    const benefitspro=[
        'Benefit 1',
        'Benefit 2',
        'Benefit 3',
        'Benefit 4',
        'Benefit 5'
    ]


 //https://yashmakesstuff.lemonsqueezy.com/buy/56f369c1-f57b-4f99-8aae-d91c74626c7c

    return(

        <div className={`${landing?"mt-[60%] md:mt-[60%] lg:mt-[20%] sm:mt-[150%]":"mt-10"} flex-col`} >

<p className=" text-8xl text-center font-bold">Pricing</p>
            

            <div className="lg:grid lg:grid-cols-2 md:mx-[30%] lg:mx-0 ml-2    flex-col mt-20">

               

                

            <div className="sm:w-[25rem] w-[23rem]  ml-2 md:mt-10 mt-10 lg:mt-0  lg:mx-[70%] xl:mx-[79%] bg-white/40 rounded-xl h-[25rem] shadow-2xl  border-2 border-white/[0.13] ">

                

                    <p className='font-bold text-2xl text-left text-neutral-700  p-6 '>Lifetime price</p>

                    <p className='font-bold text-2xl text-left ml-10  line-through text-neutral-600 mt-2  '>$25</p>

                    

                    <p className='font-bold text-6xl text-center text-neutral-700 mt-2 '>$10</p>
                    <p className="mt-10  px-10">All features, future updates and personal support for a lifetime. </p>
                    
                    <div className=" ml-20">
                        
                    {/* {benefitspro.map((i)=>{
                            return(
                                <span className="flex mt-7 text-neutral-600" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                        </svg>
                                        <p className='font-normal text-md text-left text-neutral-600  '>{i}</p>

                                    </span>
                            )
                        })} */}

                    


                    </div>
                   {landing?
                    <button onClick={()=>{router.push('/auth')}} className=" w-[90%] mt-10 font-bold  p-5 rounded-xl bg-white/40  ">
                   
                    Join Now
                    </button>:
                    <button onClick={()=>{window.location.href=' https://yashmakesstuff.lemonsqueezy.com/buy/56f369c1-f57b-4f99-8aae-d91c74626c7c'}} className=" w-[90%] mt-10 font-bold  p-5 rounded-2xl  bg-white/40 hover:bg-white/50 ">
                        {/* Subscribe   <a href="https://artfolio.lemonsqueezy.com/checkout/buy/c9ae10bc-5a85-4896-9730-4a4a195bd4fd?embed=1" class="lemonsqueezy-button"> Subscribe</a><script src="https://assets.lemonsqueezy.com/lemon.js" defer></script> */}
                        Purchase
                    </button>
                    }
                </div>
            </div>

        </div>
    )
}