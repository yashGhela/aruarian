import { NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";

export async function GET(req, res) {

  const url = req.url;
  const id = url.split("read/")[1];

  console.log('Getting request now')

//   const queryString = url.split('?')[1]; // Get the query string part
//   const params = new URLSearchParams(queryString); // Parse the query string
//   const userid = params.get('userid'); // Get the value of the userid parameter


//   console.log(userid)

  const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;

  const supabase = createAdminClient(supabaseURL, supabaseKey);

  const response = await fetch(
    "https://api.replicate.com/v1/predictions/" + id,
    {
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    let error = await response.json();
    res.statusCode = 500;
    console.log(error.detail);
    return NextResponse.json({ error: error.detail }, { status: 500 });
  }

  const prediction = await response.json();
  console.log(prediction);

    while (
      prediction.status!=='succeeded' && 
      prediction.status!=='failed'
    ){
     
  
        

   
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      return NextResponse.json(prediction, {status:200})
    }

    if (prediction.status==='succeeded'){
      console.log('Task succeeded')
      const text= prediction.output;
        console.log(text)

        const jsonString = text.join('').trim();
        let jsonObject;
        try {
          jsonObject = JSON.parse(jsonString);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          // Handle the error accordingly
        }
        
        console.log(jsonObject);



      if (jsonObject.action === 'read') {
        console.log(response.responseMessage)
        console.log(response.taskOrder)


        console.log('Successfully read the db!')
        res.statusCode=201

        return NextResponse.json( {status:201, message:response.responseMessage, tasks:response.taskOrder})


    }

  }



    
}