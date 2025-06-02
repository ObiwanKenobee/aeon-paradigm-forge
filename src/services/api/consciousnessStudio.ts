
import { supabase } from "@/integrations/supabase/client";

export interface ConsciousnessStudioEntry {
  id?: string;
  user_id?: string;
  title: string;
  content: string;
  meditation_type?: string;
  duration?: number;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ConsciousnessStudioCreateEntry {
  title: string;
  content: string;
  meditation_type?: string;
  duration?: number;
  tags?: string[];
  user_id: string;
}

export const ConsciousnessStudioAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("consciousness_studio")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("consciousness_studio")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: ConsciousnessStudioCreateEntry) {
    const { data, error } = await supabase
      .from("consciousness_studio")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: Partial<ConsciousnessStudioEntry>) {
    const { data, error } = await supabase
      .from("consciousness_studio")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("consciousness_studio")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
