import { createClient } from "@supabase/supabase-js";


const supabaseURL =  process.env.SUPABASE_URL 
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabaseAdminKey = process.env.SERVICE_ROLE_KEY


export const supabase = createClient(supabaseURL, supabaseKey)
// export const supabaseAdmin = createClient(supabaseURL, supabaseAdminKey)