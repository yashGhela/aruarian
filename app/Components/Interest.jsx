import { motion } from "framer-motion"

export default function Interest(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: false  }} 
        className="mt-[55%] mx-10 md:mx-72  flex-col text-2xl sm:text-5xl md:text-6xl italic">

            You know how it goes 💨<br/><br/>
            You have thousands of things to do and no time to plan it all out 🤯 <br/>
            <br/>
            So start forgetting things you're supposed to do and every thing goes off the rails 🏃‍♂️<br/><br/>
            But what if you didnt have to schedule ever again? 🤔
            <br/><br/>
            <span className="font-bold">Introducing AruarianAI 🍀</span>
   
         

        </motion.div>
    )
}