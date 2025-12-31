import { createClient } from '@supabase/supabase-js';

// Access environment variables securely.
// Casting import.meta to any to avoid type errors when vite/client types are missing.
const env = (import.meta as any).env;

const supabaseUrl = env?.VITE_SUPABASE_URL;
const supabaseAnonKey = env?.VITE_SUPABASE_ANON_KEY;

// Fallback values to prevent application crash if keys are missing.
// The app will load, but Auth calls will fail gracefully (network error or 404) instead of crashing the white screen.
const validUrl = supabaseUrl && supabaseUrl.startsWith('http') 
    ? supabaseUrl 
    : 'https://placeholder.supabase.co';

const validKey = supabaseAnonKey || 'placeholder-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Supabase keys are missing in .env. Authentication features will not work.");
}

export const supabase = createClient(validUrl, validKey);