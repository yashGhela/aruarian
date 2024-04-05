import { NextResponse } from "next/server";

export  async function DELETE (req,res){

    const body = await req.json()

    

    const lemon= process.env.LEMON_KEY

    const email=body.email
    console.log(email)



    const response1 = await fetch(
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

    
    const data = await response1.json();

   let id 
    for (let i=0; i< data.data.length; i++){
       
        if (data.data[i].attributes.user_email === email ) {
         
            id= data.data[i].attributes.first_subscription_item.id
            break;
        }
      }

      console.log(id)


      const response = await fetch(`https://api.lemonsqueezy.com/v1/subscriptions/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${lemon}`,
        },
      });

       console.log(response.status)
      if (response.status === 200) {
        console.log(data)
        const data = await response.json();
       

        return NextResponse.json({data:data, isCancelled:true});
      } else {
        const error = await response.json();
        console.log('This is the error:',error.detail)
        return NextResponse.json(
            {
                detail:error.detail
            },
            {
                status:500
            }
            );
      }

}


