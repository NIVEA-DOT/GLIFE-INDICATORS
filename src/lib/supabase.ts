import { createClient } from '@supabase/supabase-js';

// Vercel 환경 변수에서 가져옵니다.
// Cast import.meta to any to bypass "Property 'env' does not exist on type 'ImportMeta'"
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Check .env file.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');