import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://ilrjtsszvyvcfgfaokoc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlscmp0c3N6dnl2Y2ZnZmFva29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MTk5MjksImV4cCI6MjA2NjE5NTkyOX0.mPPSVBUcHwkLEuGo-76YnBaa9X6wjZRnScsoCazoYaA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
