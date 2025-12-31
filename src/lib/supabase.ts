import { createClient } from '@supabase/supabase-js';

// Augment ImportMeta to include env property to resolve TypeScript errors
// when vite/client types are not available in the environment.
declare global {
  interface ImportMeta {
    env: {
      [key: string]: string | undefined;
      VITE_SUPABASE_URL?: string;
      VITE_SUPABASE_ANON_KEY?: string;
    };
  }
}

// Access environment variables directly so Vite can statically replace them.
// Do not use (import.meta as any).env as it breaks production builds.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Check .env file.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');