// Coincide con las columnas de la tabla "clients" de Supabase
export interface Client {
  id?: number;
  name: string;
  email: string;
  phone?: string;
}
