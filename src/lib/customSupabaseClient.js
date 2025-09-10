import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pvrbsqqznsvdnwqwtzot.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2cmJzcXF6bnN2ZG53cXd0em90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzUyMjksImV4cCI6MjA3MjUxMTIyOX0.E51IFdcxgSKV98B5psw1XqlaY8j-a4QImWalUSEgRV0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);