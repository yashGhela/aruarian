
export default function LandingDemo(){



    return(
        <div className='bg-gradient-to-r from-blue-300 to-blue-700 rounded-xl w-full my-20 px-10 h-full p-5'>
        <iframe src={'https://artfolio.space/leodavinci'} className='w-full  h-[50rem] border-[0.4rem] border-gray-300 rounded-xl' ></iframe>

        <button  onClick={()=>{window.open((`https://artfolio.space/leodavinci`))}} className="border border-gray-400 bg-gray-100 mt-4 hover:bg-gray-300 p-3 rounded-lg "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg></button>
        </div>
     
    )

}