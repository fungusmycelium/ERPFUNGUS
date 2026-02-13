import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ubyfgmzgjdxzsspmiojl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVieWZnbXpnamR4enNzcG1pb2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzMzODQsImV4cCI6MjA4NjUwOTM4NH0.41ha_FNstz8Otd15NjLfBMSkgbnqa9CEllY_-xC4UDc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
