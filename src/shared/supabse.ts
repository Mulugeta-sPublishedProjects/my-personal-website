import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "https://fisvimgyzujfdndsqeoq.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpc3ZpbWd5enVqZmRuZHNxZW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2Njc5ODEsImV4cCI6MjA0NzI0Mzk4MX0.v7kwBPCsOSpYPfWWr5_HBMXrP7SCWlz5v8yDUMmc3Is",
);

export default supabase;
