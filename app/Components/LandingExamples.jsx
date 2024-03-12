'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LandingExamples(){


    const router = useRouter()


    return(

        <div>

            <p className="text-blue-400 text-2xl font-normal mx-10">Check out how the Master's use it</p>
            <div className="mt-[10%] px-36 flex-col md:grid md:grid-cols-2 gap-5">

            <motion.div onClick={()=>{router.push(`/Discover/picasso`)}} whileHover={{scale:1.05}}  className="p-6 rounded-lg  cursor-pointer bg-gray-300 text-left flex font-bold text-xl text-gray-500 w-full">
                <div>
                <p>Pablo Picasso's Portfolio</p>

                <p className="text-sm font-normal text-gray-400 ">Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France</p>
                </div>

                <img className="w-20 h-20 rounded-full m-3" src='https://cdn.britannica.com/63/59963-050-C03F29B9/Pablo-Picasso.jpg' alt="" />

            </motion.div>

            <motion.div onClick={()=>{router.push(`/Discover/monet`)}} whileHover={{scale:1.05}}  className="p-6 rounded-lg  cursor-pointer bg-gray-300 text-left flex font-bold text-xl text-gray-500 w-full">
                <div>
                <p>Claude Monet's Portfolio</p>

                <p className="text-sm font-normal text-gray-400 ">Oscar-Claude Monet was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it</p>
                </div>

                <img className="w-20 h-20 rounded-full m-3" src='https://uploads0.wikiart.org/00115/images/claude-monet/440px-claude-monet-1899-nadar-crop.jpg!Portrait.jpg' alt="" />

            </motion.div>
            

            <motion.div onClick={()=>{router.push(`/Discover/salvadordali`)}} whileHover={{scale:1.05}}  className="p-6 rounded-lg cursor-pointer bg-gray-300 text-left flex font-bold text-xl text-gray-500 w-full">
                <div>
                <p>Salvador Dali's Portfolio</p>

                <p className="text-sm font-normal text-gray-400 ">Salvador Domingo Felipe Jacinto Dalí i Domènech, Marquess of Dalí of Púbol gcYC, known as Salvador Dalí, was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work</p>
                </div>

                <img className="w-20 h-20 rounded-full m-3" src='https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg' alt="" />

            </motion.div>

            <motion.div onClick={()=>{router.push(`/Discover/vangogh`)}} whileHover={{scale:1.05}}  className="p-6 rounded-lg cursor-pointer bg-gray-300 text-left flex font-bold text-xl text-gray-500 w-full">
                <div>
                <p>Vincent Van Gogh's Portfolio</p>

                <p className="text-sm font-normal text-gray-400 ">Vincent Van Gogh is undoubtedly one of the most famous and celebrated artists in history, known for his unique style, bold use of color, and emotive brushstrokes. Born in the Netherlands in 1853, Van Gogh's life was plagued by personal struggles, including mental illness and poverty. Despite these challenges, he produced some of the most iconic and recognizable works of art in history.</p>
                </div>

                <img className="w-20 h-20 rounded-full m-3" src='https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg' alt="" />

            </motion.div>

            
        </div>
        </div>
    )
}