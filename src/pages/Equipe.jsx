import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Users, Calendar } from 'lucide-react';

export const Equipe = () => {
  const barbers = [
    { name: 'Carlos Master', role: 'Especialista em Fade & Visagismo', exp: '10 anos de experiência' },
    { name: 'Marcos Blade', role: 'Mestre da Barba & Navalha', exp: '8 anos de experiência' },
    { name: 'João Vintage', role: 'Especialista em Cortes Clássicos', exp: '12 anos de experiência' },
    { name: 'Lucas Style', role: 'Estilista & Tendências Modernas', exp: '6 anos de experiência' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Profissionais de Elite
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Nossa Equipe
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Mestres na arte da tesoura, navalha e atendimento de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {barbers.map((barber, i) => (
            <div key={i} className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-6 text-center hover:border-[#d4af37] transition-all shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-24 h-24 bg-[#2b170e] rounded-full mx-auto mb-6 border-2 border-[#d4af37] flex items-center justify-center text-3xl font-bold text-[#d4af37] shadow-inner" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                  {barber.name.charAt(0)}
                </div>
                <h3 className="font-bold text-xl text-[#f3e5ab] mb-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>{barber.name}</h3>
                <p className="text-sm text-[#d4af37] font-medium mb-1">{barber.role}</p>
                <p className="text-xs text-gray-400 mb-6">{barber.exp}</p>
              </div>
              <Link
                to="/agendamento"
                className="block w-full py-2.5 rounded-lg bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] hover:opacity-90 transition-all font-black text-xs uppercase tracking-wider border border-[#5a371c] shadow-md"
              >
                Agendar com {barber.name.split(' ')[0]}
              </Link>
            </div>
          ))}
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
