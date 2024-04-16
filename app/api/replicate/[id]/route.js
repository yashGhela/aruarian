import { NextResponse } from "next/server";
import {  createClient as createAdminClient  } from "@supabase/supabase-js";

export  async function GET(req, res) {

    // console.log(req.url)

    const url = req.url

    console.log(url)

// Using string manipulation
    const id = url.split("replicate/")[1];

    // console.log(id)

    const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;


  const supabase = createAdminClient(supabaseURL, supabaseKey)


    const response = await fetch(
      "https://api.replicate.com/v1/predictions/" + id,
      {
        headers: {
          Authorization: `Token ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );



            let text = response.output;
            const jsonStartIndex = text.indexOf('{');
            const jsonEndIndex = text.lastIndexOf('}') + 1;
            let jsonPart = text.slice(jsonStartIndex, jsonEndIndex).trim();

            if (jsonPart && jsonPart.startsWith('{') && jsonPart.endsWith('}')) {
                try {
                  
                    const jsonObject = JSON.parse(jsonPart);
                    jsonresponse = jsonObject;
                    console.log(jsonresponse);
                    console.log(jsonresponse.action)
                     //INSERT
                    if (jsonresponse.function==='insert' || jsonresponse.action==='insert'){
                        const {data, error} =  await supabase.from('To-Dos').insert({
                            content: jsonresponse.content, 
                            UID: body.userid,
                            due_date: jsonresponse.due_date,
                            board: jsonresponse.board
                        })
        
                        if (error){
                            console.log(error)
                            res.statusCode=500
                            return NextResponse.json({error:error})
                        }else{
                            console.log('Successfully uploaded to db!')
                            res.statusCode=201

                            return NextResponse.json( {status:201, message:jsonresponse.responseMessage})
                        }
                      }
                    }catch(error){
                      console.log('an error occurred')
                    }
                  }

    if (response.status !== 200) {
      let error = await response.json();
      res.statusCode = 500;
      console.log(error.detail)
      return NextResponse.json({error:error.detail}, {status:500})
    
    }
  
    // const prediction = await response.json();
    // console.log(prediction)
    // return NextResponse.json(prediction, {status:200})
  }