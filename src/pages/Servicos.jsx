import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, CheckCircle } from 'lucide-react';

export const Servicos = () => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Excelência & Tradição
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Nossos Serviços
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Técnicas tradicionais aliadas às tendências modernas de barbearia para garantir o seu visual perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 hover:border-[#d4af37] transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5d78e] via-[#d4af37] to-[#9c752b] flex items-center justify-center text-[#1a0f08] mb-6 shadow-md">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Fade & Corte</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Corte degradê preciso, social ou moderno, executado com rigor técnico, lavagem capilar e finalização com pomada premium.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-400">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Lavagem inclusa</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Acabamento na navalha</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Finalização modeladora</li>
              </ul>
            </div>
            <Link
              to="/agendamento"
              className="block w-full py-3 text-center rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-xs border border-[#5a371c] hover:opacity-90 transition-all shadow-md"
            >
              Agendar Serviço
            </Link>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 hover:border-[#d4af37] transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5d78e] via-[#d4af37] to-[#9c752b] flex items-center justify-center text-[#1a0f08] mb-6 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Barba Clássica</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Modelagem completa da barba com ritual de toalha quente, navalha afiada, óleos hidratantes e loção pós-barba calmante.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-400">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Toalha quente relaxante</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Navalha tradicional</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Hidratação com óleos especiais</li>
              </ul>
            </div>
            <Link
              to="/agendamento"
              className="block w-full py-3 text-center rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-xs border border-[#5a371c] hover:opacity-90 transition-all shadow-md"
            >
              Agendar Serviço
            </Link>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 hover:border-[#d4af37] transition-all shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f5d78e] via-[#d4af37] to-[#9c752b] flex items-center justify-center text-[#1a0f08] mb-6 shadow-md">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>Combo Navalha</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                O pacote supremo: cabelo e barba com atendimento VIP, toalha quente, bebidas de cortesia e máximo cuidado com seu visual.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-400">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Cabelo + Barba completa</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Atendimento VIP prioritário</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#d4af37]" /> Bebida de cortesia</li>
              </ul>
            </div>
            <Link
              to="/agendamento"
              className="block w-full py-3 text-center rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-xs border border-[#5a371c] hover:opacity-90 transition-all shadow-md"
            >
              Agendar Serviço
            </Link>
          </div>
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
