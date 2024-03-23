
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST (req, res){

    const body = await req.json()


    const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY});

    // console.log(openai)
    let messages;
    let response;

    const assistantID = process.env.NEXT_PUBLIC_ASSISTANT_ID

    let run = await openai.beta.threads.createAndRun({
        assistant_id: assistantID,
        thread:{
            messages:[
                {role:'user', content: body.prompt}
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
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            } 
        }
        }



    res.statusCode=201

    return NextResponse.json(JSON.stringify(response), {status:201})
}