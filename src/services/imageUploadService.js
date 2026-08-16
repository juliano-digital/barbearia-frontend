import { supabase } from './supabaseClient';

const BUCKET = 'site-images';

export async function uploadImage(file, folder = 'geral') {
  if (!file) return null;
  const ext = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
  return data.publicUrl;
}

export async function deleteImage(url) {
  if (!url) return;
  try {
    const path = url.split(`/${BUCKET}/`)[1];
    if (!path) return;
    await supabase.storage.from(BUCKET).remove([path]);
  } catch {
    // se falhar ao apagar o arquivo antigo, não trava o fluxo
  }
}