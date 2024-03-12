
'use client'
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { auth } from "../firebaseConfig";


export default function LogOut(){
    //const user= auth.currentUser

    const router=useRouter()

    /*const logOut=()=>{
        signOut(auth).then(()=>{
          deleteCookie('useraidt')
          router.push('/')
          
        })
      }*/
      

    return(

      <button
      onClick={()=>{logOut()}}
      class="fixed bottom-4 right-4 bg-white border border-gray-300 text-gray-400 px-4 py-2 rounded-full shadow-lg"
  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>


          
      </button>

    )
}