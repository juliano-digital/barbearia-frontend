import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Camera, Calendar } from 'lucide-react';

export const Galeria = () => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Nosso Espaço & Arte
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Galeria de Fotos
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Conheça o ambiente clássico e os cortes impecáveis realizados por nossos mestres barbeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Ambiente Clássico
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Corte & Estilo
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Barba Perfeita
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Ferramentas de Elite
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517832606793-577949311050?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Estilo Impecável
            </span>
          </div>

          <div className="h-80 rounded-2xl bg-[#1b100b] border-2 border-[#5a371c] flex items-end justify-center p-6 bg-cover bg-center shadow-xl hover:border-[#d4af37] transition-all group overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="relative z-10 bg-[#1a0f08]/90 border border-[#d4af37]/50 px-5 py-2.5 rounded-xl text-[#d4af37] font-bold text-sm tracking-wider uppercase">
              Atendimento VIP
            </span>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-base border-2 border-[#5a371c] shadow-lg hover:scale-105 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Agende Seu Horário
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
