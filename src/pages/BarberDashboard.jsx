import React from 'react';

export const BarberDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Barbeiro</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Agenda do dia</h2>
        </section>
        
        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Agenda da semana</h2>
        </section>

        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Clientes</h2>
        </section>

        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Cancelar horário</h2>
        </section>

        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Bloquear horário</h2>
        </section>

        <section className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">Adicionar folga</h2>
        </section>
      </div>
    </div>
  );
};
