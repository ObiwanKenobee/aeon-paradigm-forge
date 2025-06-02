
import { supabase } from "@/integrations/supabase/client";

export interface ParadigmCouncilEntry {
  id?: string;
  user_id?: string;
  title: string;
  proposal: string;
  status?: string;
  votes?: number;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ParadigmCouncilCreateEntry {
  title: string;
  proposal: string;
  status?: string;
  votes?: number;
  tags?: string[];
  user_id: string;
}

export const ParadigmCouncilAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from("paradigm_council")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from("paradigm_council")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(entry: ParadigmCouncilCreateEntry) {
    const { data, error } = await supabase
      .from("paradigm_council")
      .insert(entry)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, entry: Partial<ParadigmCouncilEntry>) {
    const { data, error } = await supabase
      .from("paradigm_council")
      .update(entry)
      .eq("id", id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from("paradigm_council")
      .delete()
      .eq("id", id);
    
    if (error) throw error;
    return true;
  }
};
