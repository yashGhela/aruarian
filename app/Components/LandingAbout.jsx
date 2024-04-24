import React from 'react'

function LandingAbout() {
  return (
    <div className='w-1/2 mt-40 ml-[25%]'>
      
      <p className='text-xl  font-bold'>Why we built it</p>
    <p className='text-md text-neutral-600 mt-2 font-semibold'>The reason for Aruarian</p>



<p className=" text-left   lg:p-10"> 
     

     Hey, Yash here. <br/>

     I'm the founder of AruarianAI. <br/><br/>

     I created AruarianAI because I hated every other productivity app, 

     They were all too manual and felt like I could've just used a pen and paper and gotten the same effect. <br/>

     When I got more into AI I realized that I could use it to automate my task management, and just like that AruarianAI was born. <br/>

     Aruarian can add new todos for you, create lists for you and find you specific information on the fly<br/> <br/>

     It's not perfect yet and it's still very early days, but I felt there must be other people out there tired of 'productivity' apps that charge you through the ass and give you basically nothing in return, after showing Aruarian to a few friends <br/><br/>

     If you want to speak to me about the project you can message me  <span className="underline cursor-pointer" onClick={()=>{window.open('https://twitter.com/yashmakesstuff')}}>here</span>. <br/><br/>

     Aruarian is currently open for beta <br/> <br/>

      ✌️

  </p>

  
    </div>
  )
}

export default LandingAbout