// Global Supabase Credentials & Settings
const SUPABASE_URL = "https://wdchtaltpmxfvknjyour.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkY2h0YWx0cG14ZnZrbmp5b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5OTAyOTgsImV4cCI6MjEwMzU2NjI5OH0.VBU2BUYvTMK799803kDG3qmqiucBtGkNiFAifl9hUA4";

// Global Supabase Client Instance
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Master Admin Mobile Number
const ADMIN_PHONE = "7983678835";
