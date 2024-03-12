
export default function EditCard({showCard, setShowCard, children, height, Header}){

    return(

        <dialog

        open={showCard}
        
        className={`${height} bg-white border-gray-300 rounded-xl p-5 md:w-[20%] shadow-xl ml-[4%] sm:w-1/2   z-50  fixed inset-1 `}>

            <div className='flex  '>
            <p className='text-gray-400 font-normal text-md p-2'>{Header}</p>
            <button onClick={()=>{setShowCard(false)}} className={`rounded-md text-gray-400 md:ml-[60%] ml-[30%]    p-2`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            </div>


           

            <div className="mt-5">{children}</div>



        </dialog>

    )
}