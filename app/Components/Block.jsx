'use client'

import { motion } from "framer-motion"

export default function Block({i, setData, setShowModal}){


    return(
        <motion.div onClick={()=>{setData(i); setShowModal(true)}} whileHover={{scale:1.05}} className=" p-5 w-full bg-gray-100 border-2 shadow-md border-gray-200 rounded-lg text-left text-md my-4 cursor-pointer">
                            <p>{i.name}</p>
                            <p className="text-sm mt-2 text-gray-400 line-clamp-2 text-left">{i.desc}</p>

                            <p  className={`text-sm rounded-md mt-2 ${i.Status?'text-lime-600 ':'text-red-300 '}  line-clamp-2 text-left`}>{i.Status?'Complete': 'Incomplete'}</p>
                        </motion.div >
    )
}