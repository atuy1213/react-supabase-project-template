import { createClient } from '@supabase/supabase-js'


const useSupabase = () => {
    
    const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL? process.env.REACT_APP_SUPABASE_URL: ''; 
    const supabaseAnonKey: string = process.env.REACT_APP_SUPABASE_ANON_KEY? process.env.REACT_APP_SUPABASE_ANON_KEY: '';    
    
    return createClient(supabaseUrl, supabaseAnonKey)
}

export default useSupabase;