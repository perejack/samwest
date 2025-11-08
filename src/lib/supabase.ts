import { createClient } from "@supabase/supabase-js";

// Client-side Supabase (use anon key ONLY)
const supabaseUrl = "https://sllrvkmzqmbatdnqeqsd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbHJ2a216cW1iYXRkbnFlcXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1OTM5OTgsImV4cCI6MjA3ODE2OTk5OH0.k3TIgObUfoyWu_dHQ2VM01yn0c12o5ScAgu8aoiS5es";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  category?: string | null;
  image_url?: string | null;
  featured?: boolean | null;
  created_at?: string;
};
