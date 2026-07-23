import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Barbeiros', path: '/admin/barbeiros' },
    { title: 'Serviços', path: '/admin/servicos' },
    { title: 'Horário de Funcionamento', path: '/admin/horarios' },
    { title: 'Dias da Semana', path: '/admin/dias-semana' },
    { title: 'Feriados', path: '/admin/feriados' },
    { title: 'Relatórios', path: '/admin/relatorios' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => navigate(item.path)}
            className="p-4 bg-white shadow rounded hover:bg-gray-50 text-left transition-colors"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};
