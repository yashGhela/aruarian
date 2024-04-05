import { NextResponse } from "next/server";

export default async function DELETE (req,res){

    const body = await req.json()

    const supabaseURL= process.env.SUPABASE_URL
    const supabaseKey = process.env.SERVICE_ROLE_KEY

    const lemon= process.env.LEMON_KEY
}