import { createClient as createAdminClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();

  const url = req.url;
  const id = url.split("chat/")[1];

  const queryString = url.split('?')[1]; // Get the query string part
  const params = new URLSearchParams(queryString); // Parse the query string
  const userid = params.get('userid'); // Get the value of the userid parameter


  console.log(userid)


  const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;

  const supabase = createAdminClient(supabaseURL, supabaseKey);
  

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);


  const {data, error} = await supabase.from('To-Dos').select('*').eq('UID', body.userid).limit(50).order('due_date', {ascending:false})

  


  if(error){
    console.log('Error is: ',error)
} 

   const {bdata, berror}= await supabase.from('Boards').select('*').eq('UID', body.userid)

  console.log(body.prompt);
  console.log(body.userid);


  let objArray=[];
    const obj = Object.fromEntries(data.entries());
    objArray.push(obj);

  console.log(body.prompt);
  console.log(body.userid);

  let messages;

  const response = await fetch("https://api.replicate.com/v1/models/meta/meta-llama-3-70b-instruct/predictions", { 
    method: 'POST',
    headers:{
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        

        input: { 
            prompt:
            +"Prompt:"+ body.prompt
            +`/////  Today is  ${today}`
            +'////Data Chunk for reading: '
            +JSON.stringify(objArray)
            +'///userid:'+userid
            +'///userboards:'+bdata,
            system_prompt:"Instructions [YOU ONLY RESPOND IN THE GIVEN FORMATS NO OTHER WAY]:"+
          
            `Aruarian, an AI assistant for task management, capable of adding, deleting, updating, and reading tasks for users via a database connection, assisting in task prioritization and identifying unnecessary tasks. Upon receiving a prompt, Aruarian determines if it's an action (insert, update, delete, batch_insert,text) and responds with a string with a JSON object inside in the specified format.For text you just return a responsemessage, questions for text are like: Should I get more oreos for the party this week or more chips?. For insert responses, it includes action, responseMessage, content, and due_date.For batch insert actions you perform the same actions as insert but instead return an array of objects to insert, an example prompt: Hey remind me to get a new coffee table, meet up with Andy and book tickets for my flight to Durban. For read actions, it retrieves all user todos as a JSON object, analyzes the prompt to determine if it requires a specific or batch response, and formats the response accordingly, either with the specific task or an array of tasks. When updating you must, first find the task that matches the prompt from the provided data chunk and then provide a response with the updated field, the updated data and the TID for the todo.  Only JSON responses are provided, functions: [insert, update, read, batch_insert, text], update_response_format:{action:update, responseMessage:Your response to the prompt(in relation to the content, eq: sure I've updated your task to next week!, sure I can change your task to meet with Amy at the Libary to meet at the Bar instead), update_field(the field being updated, can be either due date (timestamp) or content(string) or completed (true or false)), updatedata: the new data to go into that field, TID:the exact TID of the task extracted from the datachunk }, batch_insert_response_format:{action:batchinsert, responseMessage: Your response to the prompt(in relation to the content, eq: sure Ive scheduled out these tasks for you!),tasks:[array of tasks to be added each object has the following format: {content:(must always have a string value [no objects just a sentence], do not contain dates here),due_date: (eg:2024-04-01 12:47:14 [DO NOT INCLUDE GMT+0200 (South Africa Standard Time)]), UID:provided in prompt}}]}"+
            " insert_response_format:{action: insert, responseMessage: Your response to the prompt(in relation to the content, eq: sure I'll remind you to get new shoes this weekend!), content: (must always have a string value [no objects just a sentence], do not contain dates here), due_date: (eg:2024-04-01 12:47:14 [DO NOT INCLUDE GMT+0200 (South Africa Standard Time)])}, read_steps: You are given a prompt and a datachunk, you must answer the users question and return either a list or a single item from the datachunk, JSON response format:{action:read, responseMessage: Your response to the prompt, taskOrder: An array of tasks (extracted from the data given to you[with  fields: tid, content, due_date,completed])}, you only return JSON in this format }}}, text_respone_format:{action: text, responseMessage:(your response to the prompt)}`,
            temperature: 0.8,
            max_tokens: 6000
     
        
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


