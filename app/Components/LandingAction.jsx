'use client'

import { useRouter } from "next/navigation"

export default function LandingAction(){
    const router = useRouter()
    return(
        <div className="my-[20%]">
             <p className='md:text-6xl text-3xl font-black text-gray-400'>Start Building Today</p>
             <p className='font-bold text-gray-400 text-lg mt-4 p-2 md:text-center'>No more wasting time</p>
         

             <button onClick={()=>{router.push('/auth')}} className={`font-bold w-[40%] md:w-[25%] text-white text-xl rounded-xl bg-blue-300 hover:bg-blue-400 mt-20  md:h-14 p-2 mr-1`}>Start Now</button>
        </div>
    )
}