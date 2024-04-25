import { createClient as createAdminClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";



export async function POST(req, res) {

    const body = await req.json();

  const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;

  const supabase = createAdminClient(supabaseURL, supabaseKey);
  var currentDate = new Date();

  const {data, error} = await supabase.from('To-Dos').select('*').eq('UID', body.userid)


  if(error){
    console.log('Error is: ',error)
}

  console.log(body.prompt);
  console.log(body.userid);


  let objArray=[];
    const obj = Object.fromEntries(data.entries());
    objArray.push(obj);



  
  const response = await fetch("https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions", { 
    method: 'POST',
    headers:{
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        

        input: { 
            prompt:"Instructions:"+`You are given a prompt and a datachunk, you must answer the users question and return either a list or a single item, JSON response format:{action:read, responseMessage: Your response to the prompt, taskOrder: An array of tasks (extracted from the data given to you[with all fields, id, tid, uid, content, due_date, board,completed,module_link_id, BID, created_at])}, you only return JSON `+"////Prompt:"+ body.prompt+`  The current date is ${currentDate}`+"////datachunk:"+JSON.stringify(objArray),
          
            temperature: 0.8,
            max_tokens: 4500
     
        
        },

    })
})




if (response.status !== 201){

    let error=await response.json()
    res.statusCode = 500;

    console.log(error.detail)
   
    
    return NextResponse.json(
    {
        detail:error.detail
    },
    {
        status:500
    }
    );

}

const prediction= await response.json()
res.statusCode=201;
console.log(prediction)
return NextResponse.json(prediction, {status:201})

}