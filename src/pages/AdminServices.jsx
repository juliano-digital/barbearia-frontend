import React, { useState } from 'react';

export const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddService = (e) => {
    e.preventDefault();
    if (name && price && duration) {
      setServices([...services, { id: Date.now(), name, price, duration }]);
      setName('');
      setPrice('');
      setDuration('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cadastrar Serviços</h1>
      
      <form onSubmit={handleAddService} className="bg-white p-4 shadow rounded mb-6 flex flex-col gap-4">
        <input type="text" placeholder="Nome do Serviço" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
        <input type="number" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded" required />
        <input type="number" placeholder="Duração (minutos)" value={duration} onChange={(e) => setDuration(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Adicionar Serviço</button>
      </form>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Serviços Cadastrados</h2>
        {services.length === 0 ? <p>Nenhum serviço cadastrado.</p> : (
            <ul>
                {services.map(s => <li key={s.id} className="border-b p-2">{s.name} - R$ {s.price} - {s.duration} min</li>)}
            </ul>
        )}
      </div>
    </div>
  );
};
