import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Tag, Calendar } from 'lucide-react';

export const Precos = () => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Investimento em Você
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Tabela de Preços
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Valores justos e transparentes para serviços de excelência na barbearia tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Corte Cabelo (Degradê / Social)</h3>
              <p className="text-xs text-gray-400">Inclui lavagem e finalização profissional</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 50,00</span>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Barba Completa</h3>
              <p className="text-xs text-gray-400">Toalha quente e navalha tradicional</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 45,00</span>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Combo (Cabelo + Barba)</h3>
              <p className="text-xs text-gray-400">O pacote mais escolhido pelos clientes</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 85,00</span>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Pézinho / Acabamento</h3>
              <p className="text-xs text-gray-400">Manutenção rápida de contornos</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 25,00</span>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Sobrancelha na Navalha</h3>
              <p className="text-xs text-gray-400">Alinhamento e design</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 20,00</span>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] p-6 rounded-2xl hover:border-[#d4af37] transition-all shadow-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-[#f3e5ab] mb-1">Hidratação / Pigmentação</h3>
              <p className="text-xs text-gray-400">Tratamento capilar ou barba</p>
            </div>
            <span className="text-2xl font-black text-[#d4af37]">R$ 40,00</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-base border-2 border-[#5a371c] shadow-lg hover:scale-105 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Agendar Horário Agora
          </Link>
        </div>
      </main>

      <footer className="py-12 px-6 bg-[#0a0503] border-t-4 border-[#5a371c] text-center text-gray-400">
        <div className="container mx-auto max-w-4xl">
          <span className="text-base font-bold tracking-widest text-[#d4af37] uppercase block mb-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Barbershop Corte & Estilo
          </span>
          <p className="text-xs text-gray-600">© 2026 Barbershop Corte & Estilo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
