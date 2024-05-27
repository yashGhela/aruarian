import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function Section3() {
  
  let router = useRouter()
  return (
    <motion.div
    initial={{ scale:0.8 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: false  }}>
        <div 
        style={{backgroundImage:'url(https://images.unsplash.com/photo-1698942942933-cc71dbf64de2?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
        className=' md:mx-[25%] p-5 h-screen md:flex mt-32 w-full md:w-1/2 bg-cover rounded-[40px] backdrop-blur-lg'>

       <div className='text-center w-full  md:ml-10 mt-[15%]'>

              
    <p className='md:text-7xl text-5xl text-white/80 font-bold'>Instant information</p>




 <div className='px-10 sm:px-0s'>

 <p className='font-light text-left mt-10'>Me</p>
<motion.p initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: false  }} 
transition={{delay:0.3}}

className='w-full mt-10 h-full overflow-y-auto   shadow-2xl backdrop-blur-sm  md:w-1/2 text-left    rounded-[40px]  bg-white/40 border   border-white/[0.06] p-10'>
Hey Ari, what time did I need to be at John's house?
</motion.p>


<span className='font-light text-right'>

<svg
className='w-6 h-8 mt-5 float-right text-black/20'
viewBox="0 0 57 79"
fill="none"
xmlns="http://www.w3.org/2000/svg"
preserveAspectRatio="none"
>
<path
d="M38.6063 78.6846C38.47 78.6479 38.3182 78.5294 37.8385 78.0852C34.7207 75.1982 29.9288 71.8181 27.8602 67.3161C23.2535 57.2909 24.3923 44.7576 27.7379 32.259C27.8081 31.9965 27.8632 31.7793 27.8602 31.7763C27.8414 31.7574 27.2207 32.5246 26.8899 32.9757C25.4688 34.9138 24.4164 36.9362 22.4551 41.4988C21.0991 44.6532 20.5566 45.8128 19.8353 47.0986C17.7021 50.9014 15.3812 52.3754 12.2416 51.9218C7.2128 51.1952 4.90524 48.2874 5.66926 43.6401C5.84322 42.5816 6.30814 41.0674 6.69358 40.3038C6.74617 40.1996 6.74117 40.1957 6.62453 40.249C2.18842 42.2779 -1.88253 35.4663 0.92467 30.7112C3.41847 26.4873 10.1474 25.4147 19.8538 27.6935C22.4239 28.297 25.464 29.2261 27.9147 30.1572C28.032 30.2017 28.0352 30.2051 27.795 30.0288C26.1329 28.8084 24.1091 27.7604 21.6105 26.8262C20.3024 26.3371 19.3699 26.0324 16.2643 25.0793C14.3847 24.5025 13.2766 24.133 12.2883 23.7534C7.22102 21.8067 5.08251 19.3759 4.49459 14.8941C3.91328 10.4613 6.15524 8.06394 10.9463 7.99538C12.1708 7.97786 13.6057 8.12336 14.7077 8.37678C14.8886 8.41839 14.8823 8.43467 14.7623 8.23608C11.6968 3.16359 18.679 -2.21273 24.2381 0.939615C29.7858 4.08548 31.613 14.9376 29.0194 29.3389C28.9806 29.5548 28.9515 29.7341 28.9548 29.7375C28.9634 29.7461 29.2265 29.0817 29.3378 28.7703C29.8936 27.2158 30.2907 25.3424 30.5203 23.1916C30.7066 21.4458 30.7792 20.0254 30.8666 16.4225C30.9711 12.1088 31.1061 10.3723 31.4793 8.54044C32.2361 4.82477 33.9598 2.77389 36.9453 2.03758C42.0798 0.771146 45.4969 2.51233 46.7639 7.04011C47.1156 8.29724 47.3097 9.96663 47.2546 11.2608L47.2435 11.5229L47.4196 11.3542C51.2929 7.64377 58.0158 13.1079 56.8705 19.0357C55.846 24.3398 49.1969 28.1275 38.1287 29.7133C35.7228 30.0579 32.8811 30.3065 30.4439 30.3855C30.0931 30.3968 30.0765 30.3867 30.6341 30.5017C32.5746 30.902 34.7994 31.0195 37.7272 30.8762C38.7468 30.8263 39.5053 30.7736 41.5732 30.6092C44.8878 30.3457 46.4977 30.2751 47.8774 30.3329C52.9011 30.5432 55.1988 32.3211 56.0745 36.6761C56.8426 40.4955 55.2627 43.1963 51.4781 44.5337C50.4081 44.9118 48.6855 45.2523 47.8396 45.2529C47.708 45.2531 47.7104 45.26 47.8947 45.4087C51.4626 48.2881 48.0261 54.5709 42.6931 54.9184C36.3725 55.3303 30.952 46.5367 28.836 32.4378C28.8102 32.2659 28.7866 32.1278 28.7866 32.1278C28.7787 32.136 28.5218 33.1178 28.4024 33.5963C28.0172 35.1394 27.7035 37.5113 27.4441 39C25.407 50.6923 27.1248 60.6218 32.4532 69.6698C34.2418 72.7069 36.6459 75.7345 38.7213 77.5631C39.173 77.9611 39.2224 78.0312 39.2028 78.2468C39.1767 78.5351 38.8758 78.7564 38.6079 78.6843L38.6063 78.6846Z"
fill="currentcolor"
></path>
</svg>

    
    </span>
<motion.span
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: false  }}
transition={{delay:0.7}}

className='w-full h-full overflow-y-auto ml-20 backdrop-blur-sm  shadow-inner  md:w-1/2 text-left  float-right mt-5 mb-20 md:mb-0   rounded-[40px]  bg-white/40 border    border-white/[0.06] p-5'>
    
    <p className='p-5'>You need to be at John's house at around 16:00, remember to finish getting everything for the party! </p>

                  
</motion.span> 






</div> 
</div>

</div>
<motion.button whileHover={{scale:1.05}} onClick={()=>{router.push('/auth')}} className=' float-left p-4 mt-20 w-[80%] mx-10 md:w-1/2 md:mx-[25%] lg:mx-[38%] lg:w-1/4 xl:mx-[38%] rounded-2xl bg-white/40 border font-bold   border-white/[0.06] '>Join Now</motion.button>

    </motion.div>
  )
}

export default Section3