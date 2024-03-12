'use client'

export default function Step3({setStep3, setStep4}){

  return(

    <div 
       
        className=" mt-[10%] w-full md:w-[70%] h-[700px]  md:ml-[220px] rounded-xl overflow-auto">
            <p className="text-2xl font-bold py-3 text-gray-300">Add your first 3 works</p>

           

                <button onClick={()=>{setStep3(false); setStep4(true)}} className="p-4 bg-pink-400 my-8 hover:bg-pink-600 rounded-xl w-[96%] text-white font-bold">Next</button>

    </div>
  )
}