import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Home as HomeIcon, Info, Scissors, DollarSign, Users, Image, Phone, LogOut } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/home', label: 'Home', icon: HomeIcon },
  { to: '/admin/sobre', label: 'Sobre', icon: Info },
  { to: '/admin/servicos', label: 'Serviços', icon: Scissors },
  { to: '/admin/precos', label: 'Preços', icon: DollarSign },
  { to: '/admin/equipe', label: 'Equipe', icon: Users },
  { to: '/admin/galeria', label: 'Galeria', icon: Image },
  { to: '/admin/contato', label: 'Contato', icon: Phone },
];

export const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-white text-black">
      <aside className="w-56 flex-shrink-0 bg-black text-white flex flex-col">
        <div className="px-5 py-5 text-base font-semibold border-b border-white/20 flex items-center gap-2">
          <LayoutDashboard size={18} />
          Admin
        </div>
        <nav className="flex-1 py-3 flex flex-col gap-0.5">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-5 py-2.5 text-sm transition-colors ${
                  isActive ? 'bg-white text-black font-medium' : 'text-white hover:bg-white/10'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-5 py-4 text-sm text-white border-t border-white/20 hover:bg-white/10 transition-colors"
        >
          <LogOut size={15} />
          Sair
        </button>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <Outlet />
      </div>
    </div>
  );
};