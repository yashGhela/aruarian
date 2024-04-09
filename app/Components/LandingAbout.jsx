import React from 'react'

function LandingAbout() {
  return (
    <div className='w-1/2 mt-40 ml-[25%]'>

<p className=" text-left   p-10"> 
     

     Hey, Yash here. <br/>

     I'm the founder of AruarianAI. <br/>

     I created AruarianAI because I hated every other productivity app,

     They were all too manual and felt like I could've just used a pen and paper and gotten the same effect. <br/>

     Anyways, as I got more into AI I realized that I could use AI to automate my task management, and just like that AruarianAI was born. <br/>

     Aruarian can add new todos for you, create lists for you and find you specific information on the fly<br/> <br/>

     It's not perfect yet and it's still very early days, but I figure there are other people out there tired of 'productivity' apps that charge you through the ass and give you basically nothing in return <br/>

     If you want to give me any feedback you can hit me up  <span className="underline cursor-pointer" onClick={()=>{window.open('https://twitter.com/yashmakesstuff')}}>here</span>. <br/>

      ✌️

  </p>

  <img className="rounded-3xl ml-2" src="https://umgfpsbrmtrjeeyygfyc.supabase.co/storage/v1/object/public/LandingPageBucket/20240217_175352.jpg" alt="" />

    </div>
  )
}

export default LandingAbout