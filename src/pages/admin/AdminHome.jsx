import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AdminPageHeader } from '../../components/Admin/AdminPageHeader';
import { getPageContent, savePageContent } from '../../services/siteContentService';

const emptyHome = { hero_badge: '', hero_title: '', hero_subtitle: '' };
const emptySite = { brand: '', address: '', phone: '', instagram: '', working_hours: '', copyright: '' };

export const AdminHome = () => {
  const [home, setHome] = useState(emptyHome);
  const [site, setSite] = useState(emptySite);
  const [loading, setLoading] = useState(true);
  const [savingHome, setSavingHome] = useState(false);
  const [savingSite, setSavingSite] = useState(false);

  useEffect(() => {
    const load = async () => {
      const [homeData, siteData] = await Promise.all([getPageContent('home'), getPageContent('site')]);
      if (homeData) setHome((prev) => ({ ...prev, ...homeData }));
      if (siteData) setSite((prev) => ({ ...prev, ...siteData }));
      setLoading(false);
    };
    load();
  }, []);

  const handleSaveHome = async () => {
    setSavingHome(true);
    try {
      await savePageContent('home', home);
      toast.success('Conteúdo da Home salvo');
    } catch {
      toast.error('Erro ao salvar. Verifique se seu usuário é admin.');
    } finally {
      setSavingHome(false);
    }
  };

  const handleSaveSite = async () => {
    setSavingSite(true);
    try {
      await savePageContent('site', site);
      toast.success('Informações do site salvas');
    } catch {
      toast.error('Erro ao salvar. Verifique se seu usuário é admin.');
    } finally {
      setSavingSite(false);
    }
  };

  if (loading) {
    return (
      <>
        <AdminPageHeader title="Editando: Home" siteUrl="/" />
        <div className="p-6 text-sm text-gray-500">Carregando...</div>
      </>
    );
  }

  return (
    <>
      <AdminPageHeader title="Editando: Home" siteUrl="/" />
      <div className="p-6 flex flex-col gap-10 max-w-2xl">
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Seção hero (topo da página)</h2>

          <div>
            <label className="block text-xs mb-1.5">Selo / badge</label>
            <input type="text" value={home.hero_badge} onChange={(e) => setHome({ ...home, hero_badge: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs mb-1.5">Título principal</label>
            <input type="text" value={home.hero_title} onChange={(e) => setHome({ ...home, hero_title: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs mb-1.5">Subtítulo</label>
            <textarea rows={2} value={home.hero_subtitle} onChange={(e) => setHome({ ...home, hero_subtitle: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm resize-none" />
          </div>

          <div className="flex justify-end">
            <button onClick={handleSaveHome} disabled={savingHome}
              className="border border-black bg-black text-white rounded-md px-4 py-2 text-sm disabled:opacity-50">
              {savingHome ? 'Salvando...' : 'Salvar seção hero'}
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-black pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Informações do site (rodapé, contato)</h2>

          <div>
            <label className="block text-xs mb-1.5">Nome da marca</label>
            <input type="text" value={site.brand} onChange={(e) => setSite({ ...site, brand: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs mb-1.5">Endereço</label>
            <input type="text" value={site.address} onChange={(e) => setSite({ ...site, address: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs mb-1.5">Telefone / WhatsApp</label>
              <input type="text" value={site.phone} onChange={(e) => setSite({ ...site, phone: e.target.value })}
                className="w-full border border-black rounded-md px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs mb-1.5">Instagram</label>
              <input type="text" value={site.instagram} onChange={(e) => setSite({ ...site, instagram: e.target.value })}
                className="w-full border border-black rounded-md px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1.5">Horário de funcionamento</label>
            <input type="text" value={site.working_hours} onChange={(e) => setSite({ ...site, working_hours: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs mb-1.5">Texto de copyright</label>
            <input type="text" value={site.copyright} onChange={(e) => setSite({ ...site, copyright: e.target.value })}
              className="w-full border border-black rounded-md px-3 py-2 text-sm" />
          </div>

          <div className="flex justify-end">
            <button onClick={handleSaveSite} disabled={savingSite}
              className="border border-black bg-black text-white rounded-md px-4 py-2 text-sm disabled:opacity-50">
              {savingSite ? 'Salvando...' : 'Salvar informações do site'}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};