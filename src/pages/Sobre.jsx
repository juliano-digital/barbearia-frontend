import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Award, Clock, Users, Calendar } from 'lucide-react';

export const Sobre = () => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Nossa História & Missão
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Sobre Nós
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Resgatando a verdadeira essência da barbearia clássica com sofisticação e atendimento de excelência.
          </p>
        </div>

        <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Tradição que passa de geração em geração
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
            Fundada com a paixão pela barbearia tradicional e o compromisso inegociável com a excelência, a <strong className="text-[#d4af37]">Corte & Estilo</strong> oferece muito mais do que um simples corte de cabelo. Criamos um refúgio para homens que valorizam o cuidado pessoal em um ambiente acolhedor, com boa música, navalha afiada e conversa de qualidade.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
            Nossos profissionais combinam técnicas clássicas de navalha e toalha quente com as tendências mais modernas de visagismo e visuais contemporâneos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#5a371c]">
            <div className="text-center p-4">
              <Award className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1 text-[#f3e5ab]">Qualidade Premium</h4>
              <p className="text-xs text-gray-400">Produtos de altíssima qualidade</p>
            </div>
            <div className="text-center p-4">
              <Users className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1 text-[#f3e5ab]">Equipe Especializada</h4>
              <p className="text-xs text-gray-400">Barbeiros mestres na arte</p>
            </div>
            <div className="text-center p-4">
              <Clock className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-1 text-[#f3e5ab]">Tradição & Estilo</h4>
              <p className="text-xs text-gray-400">Ambiente clássico exclusivo</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/agendamento"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-base border-2 border-[#5a371c] shadow-lg hover:scale-105 transition-all"
          >
            <Calendar className="w-5 h-5" />
            Experimente Nossos Serviços
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
