import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Scissors, Tag, Image, Mail } from 'lucide-react';

export const BottomNavBar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Início', icon: Home },
    { to: '/servicos', label: 'Serviços', icon: Scissors },
    { to: '/precos', label: 'Preços', icon: Tag },
    { to: '/galeria', label: 'Galeria', icon: Image },
    { to: '/contato', label: 'Contato', icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1a0f08] border-t-2 border-[#5a371c] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? 'text-[#d4af37]' : 'text-gray-500 hover:text-[#d4af37]'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
