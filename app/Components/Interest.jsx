import { motion } from "framer-motion"

export default function Interest(){
    return(
        <motion.div
        initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: false  }} 
        className="my-[20%] mx-40  flex-col text-8xl italic">

            What if you never had to schedule again? <br/><br/>
            Aruarian is the first companion built for task management and productivity <br/>
            <br/>
            Tell it your goals for the week, let it break them down into <br/>
            tasks and schedule it over your week 
            <br/><br/>
   
         

        </motion.div>
    )
}