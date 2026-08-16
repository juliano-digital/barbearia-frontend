import { supabase } from './supabaseClient';

export const getPageContent = async (page) => {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('page', page)
    .single();

  if (error) {
    if (error.code !== 'PGRST116') { // PGRST116 = nenhuma linha encontrada, ok ignorar
      console.error(`[siteContentService] Erro ao buscar conteúdo de "${page}":`, error.message);
    }
    return null;
  }

  return data?.content ?? null;
};

export const savePageContent = async (page, content) => {
  const { data, error } = await supabase
    .from('site_content')
    .upsert(
      { page, content, updated_at: new Date().toISOString() },
      { onConflict: 'page' }
    )
    .select()
    .single();

  if (error) {
    console.error(`[siteContentService] Erro ao salvar conteúdo de "${page}":`, error.message);
    throw error;
  }

  return data;
};