
import {  createClient as createAdminClient  } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST (req, res){

    const body = await req.json()

    const supabaseURL= process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY


    const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY});
    
    const supabase = createAdminClient(supabaseURL, supabaseKey)
    var currentDate = new Date();


    console.log(body.prompt)

    console.log(body.userid)

    // console.log(openai)
    let messages;
    let response;

    const assistantID = process.env.NEXT_PUBLIC_ASSISTANT_ID

    let run = await openai.beta.threads.createAndRun({
        assistant_id: assistantID,
        thread:{
            messages:[
                {role:'user', content: body.prompt+` todays date is ${currentDate}`}
            ]
        }
    })

    if (run.status==='failed'){
        console.log(run.last_error)
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

                    if (response.function==='insert' || response.action==='insert'){
                        const {data, error} =  await supabase.from('To-Dos').insert({
                            content: response.content, 
                            UID: body.userid,
                            due_date: response.due_date,
                            board: response.board
                        })
        
                        if (error){
                            console.log(error)
                            res.statusCode=500
                            return NextResponse.json({error:error})
                        }else{
                            console.log('Successfully uploaded to db!')
                            res.statusCode=201

                            return NextResponse.json( {status:201, message:`Successfully added task to ${response.board}`})
                        }
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            } 


            
        }
        }



    
}



//else if (response.function==='readspecific' || response.action==='readspecific'){
//     const {data, error}= await supabase.from('To-Dos').select('*').eq('content',response.content).eq('UID', body.userid).eq('board',response.board)

//     if (error){
//         console.log(error)
//     }else{
//         console.log('Your to-do '+ data)
//         res.statusCode=201

//           return NextResponse.json(JSON.stringify("Successfully uploaded to db"), {status:201})
//     }

// }