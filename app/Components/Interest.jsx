import { motion } from "framer-motion"

export default function Interest(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: false  }}

        className="mt-[55%] md:mt-[30%] mx-10 md:mx-72  flex-col text-2xl sm:text-5xl md:text-6xl italic">

            Do you ever feel like you have a thousand things to do but no time to plan it all out? 💨  <br/>
            <br/>
            Tasks start slipping through the cracks and everything goes off the rails 🤯🏃‍♂️<br/><br/>
            What if you could say goodbye to scheduling stress forever? 🤔
            <br/><br/>
            <span className="font-bold">Introducing AruarianAI 🍀</span>
   
         

        </motion.div>
    )
}