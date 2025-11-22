import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://oblqhslqqupssgxjlfbp.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ibHFoc2xxcXVwc3NneGpsZmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NTM4NTksImV4cCI6MjA1NDEyOTg1OX0.nZC41zJ3xXxcUivdWWTCoEZGRPZ17ufEp7VqmMKxciU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
