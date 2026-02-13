import { supabase } from "./supabase.js";

const { data, error } = await supabase.auth.getSession();
console.log("Conectado a Supabase ✅", data, error);
