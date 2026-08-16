import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AdminPageHeader } from '../../components/Admin/AdminPageHeader';
import { getPageContent, savePageContent } from '../../services/siteContentService';
import { uploadImage, deleteImage } from '../../services/imageUploadService';

const emptySobre = { sobre_title: '', sobre_text: '', sobre_image: '' };

export const AdminSobre = () => {
  const [sobre, setSobre] = useState(emptySobre);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getPageContent('sobre');
      if (data) setSobre((prev) => ({ ...prev, ...data }));
      setLoading(false);
    };
    load();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const oldUrl = sobre.sobre_image;
      const url = await uploadImage(file, 'sobre');
      setSobre((prev) => ({ ...prev, sobre_image: url }));
      if (oldUrl) await deleteImage(oldUrl);
      toast.success('Imagem enviada');
    } catch {
      toast.error('Erro ao enviar imagem');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await savePageContent('sobre', sobre);
      toast.success('Conteúdo da página Sobre salvo');
    } catch {
      toast.error('Erro ao salvar. Verifique se seu usuário é admin.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <AdminPageHeader title="Editando: Sobre" siteUrl="/sobre" />
        <div className="p-6 text-sm text-gray-500">Carregando...</div>
      </>
    );
  }

  return (
    <>
      <AdminPageHeader title="Editando: Sobre" siteUrl="/sobre" />
      <div className="p-6 flex flex-col gap-6 max-w-2xl">
        <div>
          <label className="block text-xs mb-1.5">Título da seção</label>
          <input type="text" value={sobre.sobre_title} onChange={(e) => setSobre({ ...sobre, sobre_title: e.target.value })}
            className="w-full border border-black rounded-md px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-xs mb-1.5">Texto / história</label>
          <textarea rows={6} value={sobre.sobre_text} onChange={(e) => setSobre({ ...sobre, sobre_text: e.target.value })}
            className="w-full border border-black rounded-md px-3 py-2 text-sm resize-none" />
        </div>
        <div>
          <label className="block text-xs mb-1.5">Imagem</label>
          {sobre.sobre_image && (
            <img src={sobre.sobre_image} alt="Sobre" className="w-full max-w-xs rounded-md border border-black mb-2" />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} disabled={uploading} className="text-sm" />
          {uploading && <p className="text-xs text-gray-500 mt-1">Enviando imagem...</p>}
        </div>

        <div className="flex justify-end">
          <button onClick={handleSave} disabled={saving}
            className="border border-black bg-black text-white rounded-md px-4 py-2 text-sm disabled:opacity-50">
            {saving ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </div>
    </>
  );
};