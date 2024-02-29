import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://lwskjragatwwzbztaqef.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c2tqcmFnYXR3d3pienRhcWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMTA1MDUsImV4cCI6MjAyNDc4NjUwNX0.iaUv6mb3Wa1strL4oOvP-7R-A6xkYguEC2iqPl6wvpM';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };