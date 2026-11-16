import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Reto 1: comprueba la conexión y muestra el resultado en la consola del navegador
export const comprobarConexion = async () => {
  const { count, error } = await supabase
    .from('clients')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error de conexión con Supabase:', error.message);
    return;
  }

  console.log('Conexión correcta');
  console.log('Datos de la conexión:', {
    url: supabaseUrl,
    tabla: 'clients',
    clientes: count,
  });
};
