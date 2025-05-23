
import { supabase } from "@/integrations/supabase/client";

export interface ReplicationMapEntry {
  id?: string;
  user_id?: string;
  original_experiment_id?: string;
  title: string;
  description: string;
  results?: string;
  status?: string;
  location?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export const ReplicationMapAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("replication_map")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("replication_map")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: ReplicationMapEntry) {
    const { data, error } = await supabase
      .from("replication_map")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: ReplicationMapEntry) {
    const { data, error } = await supabase
      .from("replication_map")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("replication_map")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
