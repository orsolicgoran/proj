import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ixeeylmgepozzcyciztv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZWV5bG1nZXBvenpjeWNpenR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMzMzNjMsImV4cCI6MjA0NTcwOTM2M30._FhOWJjm0Sd1GWVDees5WogAToGbnGx1kgW7Cg2NagM'
export const supabase = createClient(supabaseUrl, supabaseKey)
