
import Link from "next/link"
import { SmoothScrollLink } from "./SmoothScrollLink"



export default function LandingFooter(){


    return(

        <div className="mt-[50%] sm:mt-[10%] md:text-left md:ml-96  text-neutral-700/50 -mb-5">
            
            <div
              className=' mt-[50px] mb-[50px] flex-col md:grid md:grid-cols-2 '
              >
        
            <div>
            <p className="font-bold  py-3 ">Legal</p>
            <Link scroll={true} href='/PrivacyPolicy'    className='   py-3 cursor-pointer'>Privacy Policy</Link><br/>
            <Link href='/TermsAndConditions'  className='   py-3 cursor-pointer'>Terms and Conditions</Link>
            </div>

            <div>
            <p className="font-bold  py-3 flex-col ">Links</p>
            <SmoothScrollLink to='features' >Features</SmoothScrollLink><br/>
             <SmoothScrollLink to='pricing' >Pricing</SmoothScrollLink><br/>
            {/* <SmoothScrollLink to='How-it-works'  >How it works</SmoothScrollLink><br/>

            <SmoothScrollLink to='Examples'  >Examples</SmoothScrollLink><br/> */}
            <a onClick={()=>{window.open('https://www.instagram.com/try_arii/')}}  className='  py-3 cursor-pointer'>Instagram</a><br/>
            <a onClick={()=>{window.open('https://x.com/tryariai')}}  className='   py-3 cursor-pointer'>Twitter</a> <br/>
            <a onClick={()=>{window.open('https://youtu.be/bt-DrJeAMxg')}}  className='   py-3 cursor-pointer'>Demo</a> <br/>
            <a onClick={()=>{window.open('https://x.com/yashmakesstuff')}}  className='   py-3 cursor-pointer'>Speak to the founder</a>
            
            </div>
               

                

                </div>

                <p className="font-normal  py-3 ">Made in South Africa 🇿🇦</p>


        </div>
    )
}