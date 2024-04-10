
import {  createClient as createAdminClient  } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST (req, res){


    const body = await req.json()
    const headers = req.headers;

    const supabaseURL= process.env.SUPABASE_URL
    const supabaseKey = process.env.SERVICE_ROLE_KEY


    const openai = new OpenAI({apiKey: process.env.OPENAI_KEY});
    
    const supabase = createAdminClient(supabaseURL, supabaseKey)
    var currentDate = new Date();


    console.log(body.prompt)

    console.log(body.userid)


    
    let messages;
    let response;

    
    const assistantID = process.env.ASSISTANT_ID

    


    
    const {data, error} = await supabase.from('To-Dos').select('*').eq('UID', body.userid)


    if(error){
        console.log('Error is: ',error)
    }

    let objArray=[];
    const obj = Object.fromEntries(data.entries());
    objArray.push(obj);


    let run = await openai.beta.threads.createAndRun({
        assistant_id: assistantID,
        thread:{
            messages:[
                {role:'user', content: body.prompt+` todays date is ${currentDate}, action is read  `+'userdata: '+JSON.stringify(objArray)}
            ]
        }
    })

    if (run.status==='failed'){
        console.log('Run error: '+run.last_error)
        res.statusCode = 500;

        return NextResponse.json(
            {
                status:500
            }
        )
    }

    while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        run = await openai.beta.threads.runs.retrieve(
          run.thread_id,
          run.id,
          
        );
        console.log(run.status)
        
      }



        if (run.status === 'completed') {
         messages = await openai.beta.threads.messages.list(
            run.thread_id
        );

        for (const message of messages.data.reverse()) {
            


            let text = message.content[0].text.value;
            const jsonStartIndex = text.indexOf('{');
            const jsonEndIndex = text.lastIndexOf('}') + 1;
            let jsonPart = text.slice(jsonStartIndex, jsonEndIndex).trim();

            if (jsonPart && jsonPart.startsWith('{') && jsonPart.endsWith('}')) {
                try {
                  
                    const jsonObject = JSON.parse(jsonPart);
                    response = jsonObject;
                    console.log(response);
                    console.log(response.action)
                 
                    

                       
                       console.log(response.responseMessage)
                       console.log(response.taskOrder)


                       console.log('Successfully read the db!')
                        res.statusCode=201

                        return NextResponse.json( {status:201, message:response.responseMessage, tasks:response.taskOrder})


                      
                        
                    
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    res.statusCode=500
                    return NextResponse.json({error:error,status:500})
                }
            } 


            
        }
         }

}