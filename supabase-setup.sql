-- Habilitar Row Level Security en la tabla contact_submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir inserciones públicas (para el formulario de contacto)
CREATE POLICY "Allow public insert on contact_submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Crear política para permitir que usuarios autenticados vean sus propios datos
CREATE POLICY "Users can view own submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- Si quieres que solo los administradores puedan ver todos los datos:
-- CREATE POLICY "Admins can view all submissions" 
-- ON public.contact_submissions 
-- FOR SELECT 
-- TO authenticated 
-- USING (
--   EXISTS (
--     SELECT 1 FROM auth.users 
--     WHERE auth.users.id = auth.uid() 
--     AND auth.users.email IN ('admin@sonidooutflow.com')
--   )
-- );

-- Verificar que RLS está habilitado
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_submissions';
