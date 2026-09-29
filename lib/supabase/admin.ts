import {createClient} from '@supabase/supabase-js';
export function admin(){const u=process.env.NEXT_PUBLIC_SUPABASE_URL,k=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!u||!k)throw new Error('Supabase admin não configurado');return createClient(u,k,{auth:{persistSession:false,autoRefreshToken:false}})}
