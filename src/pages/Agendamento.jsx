import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Calendar, Clock, User, Phone, FileText, Send } from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';

/**
 * Página de agendamento para a barbearia - Estilo Pirata! 🏴‍☠️
 * Utiliza Tailwind CSS para estilização temática.
 * Campos: nome, telefone, descrição, data e horário.
 */
const Agendamento = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    descricao: '',
    data: '',
    horario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.rpc('criar_agendamento', {
      p_nome: form.nome,
      p_telefone: form.telefone,
      p_descricao: form.descricao,
      p_data: form.data,
      p_horario: form.horario,
    });

    setLoading(false);

    if (error) {
      if (error.message.includes('HORARIO_INDISPONIVEL')) {
        toast.error('Esse horário está muito próximo de outro agendamento. É preciso um intervalo de 30 minutos, capitão.');
      } else {
        toast.error('Erro ao criar agendamento: ' + error.message);
      }
      return;
    }

    toast.success('Agendamento realizado com sucesso!');
    navigate('/');
  };

      return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab] relative overflow-hidden">
      <Navbar />

      {/* Grade dourada sutil de fundo */}
      <div className="absolute inset-0 opacity-8 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <main className="relative z-10 pt-10 pb-20 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Cabeçalho temático pirata */}
          <div className="text-center mb-12">
            <span
              className="text-xs md:text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Tradição & Estilo Clássico
            </span>
            <h1
              className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}
            >
              Agende Seu Horário
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
              Cadastre-se na nossa barbearia e garanta seu lugar entre os mestres
              do estilo. Uma navinha com cara de pirata é a sua recompensa! 🏴‍☠️
            </p>
          </div>

          {/* Painel de madeira do formulário */}
          <div className="relative bg-[#1b100b] border-2 border-[#5a371c] rounded-[1.5rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
            {/* Parafusos metálicos decorativos nos cantos */}
            <div className="absolute -top-1.5 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#f5d78e] via-[#c5a059] to-[#6b4e1e] border border-[#3a220d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center text-[9px] font-bold text-[#3a220d]">
              ✚
            </div>
            <div className="absolute -bottom-1.5 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#f5d78e] via-[#c5a059] to-[#6b4e1e] border border-[#3a220d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center text-[9px] font-bold text-[#3a220d]">
              ✚
            </div>
            <div className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#f5d78e] via-[#c5a059] to-[#6b4e1e] border border-[#3a220d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center text-[9px] font-bold text-[#3a220d]">
              ✚
            </div>
            <div className="absolute -bottom-1.5 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#f5d78e] via-[#c5a059] to-[#6b4e1e] border border-[#3a220d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center text-[9px] font-bold text-[#3a220d]">
              ✚
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  <User className="w-4 h-4 text-[#d4af37]" /> Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome, capitão"
                  className="w-full px-4 py-3 bg-[#22130c] border-2 border-[#5a371c] rounded-xl text-[#f3e5ab] placeholder-[#a67c52] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 transition-all"
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="telefone"
                  className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" /> Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 bg-[#22130c] border-2 border-[#5a371c] rounded-xl text-[#f3e5ab] placeholder-[#a67c52] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 transition-all"
                />
              </div>
                                    {/* Descrição */}
              <div>
                <label
                  htmlFor="descricao"
                  className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  <FileText className="w-4 h-4 text-[#d4af37]" /> Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Conte-nos qual serviço deseja..."
                  className="w-full px-4 py-3 bg-[#22130c] border-2 border-[#5a371c] rounded-xl text-[#f3e5ab] placeholder-[#a67c52] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 transition-all resize-none"
                />
              </div>

              {/* Data */}
              <div>
                <label
                  htmlFor="data"
                  className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" /> Data
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={form.data}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#22130c] border-2 border-[#5a371c] rounded-xl text-[#f3e5ab] placeholder-[#a67c52] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 transition-all"
                />
              </div>

              {/* Horário */}
              <div>
                <label
                  htmlFor="horario"
                  className="flex items-center gap-2 text-sm font-semibold text-[#d4af37] mb-2"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  <Clock className="w-4 h-4 text-[#d4af37]" /> Horário
                </label>
                <input
                  type="time"
                  id="horario"
                  name="horario"
                  value={form.horario}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#22130c] border-2 border-[#5a371c] rounded-xl text-[#f3e5ab] placeholder-[#a67c52] focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 transition-all"
                />
              </div>

              {/* Botão de envio - estilo dourado pirata */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-base border-2 border-[#5a371c] shadow-[0_6px_20px_rgba(212,175,55,0.3)] hover:from-[#ffe8a3] hover:to-[#b5882e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5 text-[#1a0f08]" />
                {loading ? 'Agendando...' : 'Agendar'}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Rodapé estilo pirata */}
      <footer className="relative z-10 py-12 px-6 bg-[#0a0503] border-t-4 border-[#5a371c] text-center text-gray-400 mt-auto">
        <div className="container mx-auto max-w-4xl">
          <span
            className="text-base font-bold tracking-widest text-[#d4af37] uppercase block mb-2"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Barbershop Corte & Estilo
          </span>
          <p className="mb-2 text-sm">Endereço: Rua da Barbearia, 123 - Centro</p>
          <p className="mb-6 text-sm">Telefone / WhatsApp: (11) 99999-9999</p>
          <div className="flex gap-6 justify-center mb-8 text-sm text-[#f3e5ab]">
            <span>Instagram: @corteestilo</span>
            <span>Segunda a Sábado: 09h às 20h</span>
          </div>
          <p className="text-xs text-gray-600">
            © 2026 Barbershop Corte & Estilo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Agendamento;