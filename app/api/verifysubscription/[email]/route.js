import { NextResponse } from "next/server";

export async function GET (req, res){


    const url = req.url

 

    // const supabaseURL= process.env.SUPABASE_URL
    // const supabaseKey = process.env.SERVICE_ROLE_KEY

    const lemon= process.env.LEMON_KEY

    // const ls= new LemonSqueezy(process.env.LEMON_KEY)


    const email = url.split("verifysubscription/")[1];




    try{
        
        const response = await fetch(
            'https://api.lemonsqueezy.com/v1/subscriptions',
            {
              headers: {
                Accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                Authorization: `Bearer ${lemon}`,
              },
            }
          );
    
        // const subscription=await ls.getSubscriptions();
    
        // const subs= subscription.data
    
        
        const data = await response.json();
    
    


        

        

        let isPaid = false;
        for (let i=0; i< data.data.length; i++){
       
            if (data.data[i].attributes.user_email === email ) {
             
                isPaid = true;
                break;
            }
          }



        if (response.status !== 200) {
            let error = await response.json();
            res.statusCode = 500;
            console.log(error.detail)
            return NextResponse.json({error:error.detail}, {status:500})
          
          }

          if (isPaid) {
            return NextResponse.json({ status: 200, isPaid: true});
        } else {
            return NextResponse.json({ status: 200, isPaid: false});
        }
        
         
        //   return NextResponse.json(data, {status:200})
    }catch (error){
        console.log(error)
    }
    

}