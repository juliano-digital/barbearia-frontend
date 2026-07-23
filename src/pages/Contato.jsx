import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contato = () => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#f3e5ab]">
      <Navbar />

      <main className="py-16 px-6 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] text-[#d4af37] uppercase mb-3 block" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#f9e7b2] via-[#d4af37] to-[#9c752b] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ fontFamily: "'Cinzel Decorative', 'Pirata One', serif" }}>
            Contato & Localização
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg">
            Estamos prontos para atendê-lo. Visite nossa barbearia ou entre em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Informações
              </h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#f3e5ab] mb-0.5">Endereço</strong>
                    <span className="text-sm text-gray-400">Rua da Barbearia, 123 - Centro, São Paulo - SP</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#f3e5ab] mb-0.5">Telefone / WhatsApp</strong>
                    <span className="text-sm text-gray-400">(11) 99999-9999</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[#f3e5ab] mb-0.5">Instagram</strong>
                    <span className="text-sm text-gray-400">@corteestilo</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b170e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#f3e5ab] mb-0.5">Horário de Funcionamento</strong>
                    <span className="text-sm text-gray-400">Segunda a Sábado: 09h às 20h</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1b100b] border-2 border-[#5a371c] rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#d4af37]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                Envie uma Mensagem
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">Seu Nome</label>
                  <input type="text" required placeholder="Digite seu nome" className="w-full px-4 py-2.5 rounded-xl bg-[#120a06] border border-[#5a371c] text-[#f3e5ab] focus:border-[#d4af37] outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">Seu E-mail / WhatsApp</label>
                  <input type="text" required placeholder="Digite seu contato" className="w-full px-4 py-2.5 rounded-xl bg-[#120a06] border border-[#5a371c] text-[#f3e5ab] focus:border-[#d4af37] outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">Mensagem</label>
                  <textarea rows="4" required placeholder="Escreva sua dúvida ou sugestão" className="w-full px-4 py-2.5 rounded-xl bg-[#120a06] border border-[#5a371c] text-[#f3e5ab] focus:border-[#d4af37] outline-none text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-b from-[#f5d78e] via-[#d4af37] to-[#9c752b] text-[#1a0f08] font-black uppercase tracking-wider text-xs border border-[#5a371c] shadow-md hover:opacity-90 transition-all">
                  Enviar Mensagem
                </button>
              </form>
            </div>
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
