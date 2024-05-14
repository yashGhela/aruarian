'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function LandingSteps(){

    const router = useRouter()
    return(
        <div className="mt-[10%] flex-col">
               <p className=" text-7xl mt-20 font-bold">Built for actionless organization </p>

            <div className="w-1/2 bg-white/40 rounded-[40px] h-1/2">


                <img src="" alt="" />

                <p>Chat Naturally with AI</p>

            </div>

            <div className="mt-20 p-10  md:mx-[8%]  md:flex rounded-xl ">
                
                <div className="md:mr-20 mt-20 text-left">
                <p className="text-3xl text-blue-300  font-bold"> Step 2</p>
                <p className='font-normal text-gray-500 mt-10 p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci nunc. Aliquam eget mauris id ante viverra ultricies. Curabitur maximus lorem mi, auctor posuere ligula faucibus vel. Pellentesque</p>
                </div>
                <img className="h-96 w-96 md:h-72 md:w-72 md:mt-20 opacity-75  rounded-xl" src="https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=6c09b952hmuc687bsqmlkfazvm1qtq5475y5d182gwry2gcv&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />

            </div>

            <div className="mt-20 p-10  md:mx-[8%]  md:flex rounded-xl ">
                <img className="h-96 w-96 md:h-72 md:w-72 md:mt-20  opacity-75  rounded-xl" src="https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=6c09b952hmuc687bsqmlkfazvm1qtq5475y5d182gwry2gcv&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                <div className="md:ml-20 mt-20 text-left">
                <p className="text-3xl text-blue-300  font-bold"> Step 3</p>
                <p className='font-normal text-gray-500 mt-10 p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci nunc. Aliquam eget mauris id ante viverra ultricies. Curabitur maximus lorem mi, auctor posuere ligula faucibus vel. Pellentesque</p>
                </div>

            </div>

            <motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className='  p-4 mt-20 w-[80%] mx-10 md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4 xl:mx-[38%] rounded-2xl bg-gray-300/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>

        </div>
    )
}