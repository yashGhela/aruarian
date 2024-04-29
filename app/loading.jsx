'use client'
import Loading from 'react-loading-components';
import 'ldrs/ring'

import { grid } from 'ldrs'

grid.register()

// Default values shown



export default function loading(){
    return(
        <div>
        <header>
           <title>PrivacyPolicy</title>
         </header>
         <main
          //style={{backgroundImage:'url(https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'}}
          className=' flex self-center place-content-center bg-cover  bg-gradient-to-b from-slate-300 via-red-100 to-zinc-200 text-center p-5 max-w-full min-w-screen  min-h-screen max-h-full overflow-hidden'>
     
   

     <div className=' md:w-[70rem] lg:w-[80rem] w-[40rem] mr-0 flex-col '>
        <div className="mt-[25%]">
        <l-grid
  size="60"
  speed="1.5" 
  color="black" 
></l-grid>
                 
            </div>
        </div>
         
        
   
        
        
        
      </main>
     </div>
     
    )
}