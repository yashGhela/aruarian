import { NextResponse } from "next/server";

export  async function GET(req, res) {

    // console.log(req.url)

    const url = req.url

// Using string manipulation
    const id = url.split("replicate/")[1];

    // console.log(id)

    const supabaseURL = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SERVICE_ROLE_KEY;
  const apiKey = process.env.REPLICATE_KEY;


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
      console.log(error.detail)
      return NextResponse.json({error:error.detail}, {status:500})
    
    }
  
    const prediction = await response.json();
    console.log(prediction)
    return NextResponse.json(prediction, {status:200})
  }