import { createClient } from '@supabase/supabase-js';

const url = 'https://ukkbnehnxguvwjgwlavs.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVra2JuZWhueGd1dndqZ3dsYXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNTM0MDQsImV4cCI6MjA2OTgyOTQwNH0.8B0KLc6VcDCU2U4CMv3oDC1fEFXj8jq7G_LVh1_N9R0';

export const supabase = createClient(url, API_KEY);


