import { supabase } from '../config/supabase';
import { Client } from '../interfaces/Client';

const TABLE = 'clients';

export const ClientsService = {
  async getAll(): Promise<Client[]> {
    const { data, error } = await supabase.from(TABLE).select('*').order('id');
    if (error) throw error;
    return data ?? [];
  },

  async getById(id: number): Promise<Client | null> {
    const { data, error } = await supabase.from(TABLE).select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  },

  async create(client: Client): Promise<void> {
    const { error } = await supabase.from(TABLE).insert(client);
    if (error) throw error;
  },

  async update(id: number, client: Partial<Client>): Promise<void> {
    const { error } = await supabase.from(TABLE).update(client).eq('id', id);
    if (error) throw error;
  },

  async remove(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE).delete().eq('id', id);
    if (error) throw error;
  },
};
