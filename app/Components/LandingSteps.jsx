'use client'

import { useRouter } from "next/navigation"

export default function LandingSteps(){

    const router = useRouter()
    return(
        <div className="mt-[10%] flex-col">
            <p className="text-gray-400 text-2xl font-bold">How does it work?</p>

            <div className="mt-20 p-10  md:mx-[8%]  md:flex rounded-xl ">
                <img className="h-96 w-96 opacity-75 md:h-72 md:w-72 md:mt-20   rounded-xl" src="https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=6c09b952hmuc687bsqmlkfazvm1qtq5475y5d182gwry2gcv&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                <div className="md:ml-20 mt-20 text-left">
                <p className="text-3xl text-blue-300  font-bold"> Step 1</p>
                <p className='font-normal text-gray-500 mt-10 p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis orci nunc. Aliquam eget mauris id ante viverra ultricies. Curabitur maximus lorem mi, auctor posuere ligula faucibus vel. Pellentesque</p>
                </div>

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

            <button onClick={()=>{router.push('/auth')}} className={`font-bold w-[40%] md:w-[25%]  text-xl rounded-xl bg-blue-300 hover:bg-blue-400 mt-20  md:h-14 p-2 mr-1`}>Start Now</button>
        </div>
    )
}