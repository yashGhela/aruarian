import { createClient as createAdminClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";



export async function POST(req, res) {

    const body = await req.json();

  const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;

  const supabase = createAdminClient(supabaseURL, supabaseKey);
  var currentDate = new Date();

  const {data, error} = await supabase.from('To-Dos').select('*').eq('UID', body.userid).limit(5)


  if(error){
    console.log('Error is: ',error)
}

  console.log(body.prompt);
  console.log(body.userid);


  let objArray=[];
    const obj = Object.fromEntries(data.entries());
    objArray.push(obj);



  
  const response = await fetch("https://api.replicate.com/v1/predictions", { 
    method: 'POST',
    headers:{
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        version: "eeb928567781f4e90d2aba57a51baef235de53f907c214a4ab42adabf5bb9736",

        input: { 
            prompt: body.prompt+`  The current date is ${currentDate}`+' ,data chunk: '+JSON.stringify(objArray),
            system_prompt:  `Aruarian, an AI assistant for task management, capable of adding, deleting, updating, and reading tasks for users via a database connection, assisting in task prioritization and identifying unnecessary tasks. Upon receiving a prompt, Aruarian determines if it's an action (insert, update, delete) and responds with a string with a JSON object inside in the specified format. For insert responses, it includes action, responseMessage, content, and due_date. For read actions, it retrieves all user todos as a JSON object, analyzes the prompt to determine if it requires a specific or batch response, and formats the response accordingly, either with the specific task or an array of tasks. Only JSON responses are provided, functions: [insert, update, read], insert_response_format:{action: insert, responseMessage: Your response to the prompt, content: (must always have a string value [no objects just a sentence], do not contain dates here), due_date: (eg:2024-04-01 12:47:14 [DO NOT INCLUDE GMT+0200 (South Africa Standard Time)])}, read_steps: {step_1: Read through the data received, step_2: Analyze the prompt to determine specific or batch response, step_3_specific: {action: read, responseMessage: Your response to the prompt, taskOrder: the specific task they were asking for (extracted from the data given to you)}, step_3_batch: {action: read, responseMessage: Your response to the prompt, taskOrder: An array of tasks (extracted from the data given to you)}}}`,
            temperature: 0.3
     
        
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