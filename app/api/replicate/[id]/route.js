import { NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";

export async function GET(req, res) {

  const url = req.url;
  const id = url.split("replicate/")[1];

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

  try {
    const jsonObject = JSON.parse(prediction.output);
    console.log(jsonObject);

    if (jsonObject.action === 'insert') {
      const { data, error } = await supabase.from('To-Dos').insert({
        content: jsonObject.content,
        UID: body.userid,
        due_date: jsonObject.due_date,
        board: jsonObject.board
      });

      if (error) {
        console.log(error);
        res.statusCode = 500;
        return NextResponse.json({ error: error });
      } else {
        console.log('Successfully uploaded to db!');
        res.statusCode = 201;
        return NextResponse.json({ status: 201, message: jsonObject.responseMessage, prediction: prediction });
      }
    }
  } catch (error) {
    console.log('An error occurred:', error);
    res.statusCode = 500;
        return NextResponse.json({ error: error });
  }
}
