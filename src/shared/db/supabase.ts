/**
 * SHARED DB LAYER - SUPABASE CLIENT & HYBRID MOCK CLIENT
 * Connects seamlessly to Supabase when environment keys are provided,
 * or effortlessly falls back to the in-memory/LocalStorage MockDb for local team development.
 */

export interface DbResponse<T> {
  data: T | null;
  error: string | null;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("your-project")
  );
};

export const getDbStatus = () => {
  return {
    isConfigured: isSupabaseConfigured(),
    mode: isSupabaseConfigured() ? "Cloud Supabase" : "Integrated Mock Data Layer",
    url: supabaseUrl || "local-memory",
  };
};
