
import { supabase } from "@/integrations/supabase/client";

export interface TheoryForgeEntry {
  id?: string;
  user_id?: string;
  title: string;
  content: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface TheoryForgeCreateEntry {
  title: string;
  content: string;
  tags?: string[];
  user_id: string;
}

export const TheoryForgeAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("theory_forge")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("theory_forge")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: TheoryForgeCreateEntry) {
    const { data, error } = await supabase
      .from("theory_forge")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: Partial<TheoryForgeEntry>) {
    const { data, error } = await supabase
      .from("theory_forge")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("theory_forge")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
