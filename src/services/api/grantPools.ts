
import { supabase } from "@/integrations/supabase/client";

export interface GrantPoolsEntry {
  id?: string;
  user_id?: string;
  title: string;
  description: string;
  amount: number;
  raised?: number;
  deadline?: string;
  category?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface GrantPoolsCreateEntry {
  title: string;
  description: string;
  amount: number;
  raised?: number;
  deadline?: string;
  category?: string;
  tags?: string[];
  user_id: string;
}

export const GrantPoolsAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("grant_pools")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("grant_pools")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: GrantPoolsCreateEntry) {
    const { data, error } = await supabase
      .from("grant_pools")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: Partial<GrantPoolsEntry>) {
    const { data, error } = await supabase
      .from("grant_pools")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("grant_pools")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
