
import { supabase } from "@/integrations/supabase/client";

export interface ExperimentalCommonsEntry {
  id?: string;
  user_id?: string;
  title: string;
  description: string;
  methodology?: string;
  results?: string;
  status?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ExperimentalCommonsCreateEntry {
  title: string;
  description: string;
  methodology?: string;
  results?: string;
  status?: string;
  tags?: string[];
  user_id: string;
}

export const ExperimentalCommonsAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("experimental_commons")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("experimental_commons")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: ExperimentalCommonsCreateEntry) {
    const { data, error } = await supabase
      .from("experimental_commons")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: Partial<ExperimentalCommonsEntry>) {
    const { data, error } = await supabase
      .from("experimental_commons")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("experimental_commons")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
