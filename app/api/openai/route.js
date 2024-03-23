
import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST (req, res){

    const body = await req.json()


    const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY});

    // console.log(openai)

    const assistantID = process.env.NEXT_PUBLIC_ASSISTANT_ID

    const run = await openai.beta.threads.createAndRun({
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

    console.log(run)

    const response= JSON.stringify(run)

    res.statusCode=201

    return NextResponse.json(response, {status:201})
}