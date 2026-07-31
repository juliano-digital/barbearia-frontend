import { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';

export const Scheduling = () => {
  const [barber, setBarber] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSchedule = async (e) => {
    e.preventDefault();

    try {
      // 1. Consultar banco para verificar disponibilidade
      const { data: existingAppointments, error: queryError } = await supabase
        .from('appointments')
        .select('*')
        .eq('date', date)
        .eq('time', time)
        .eq('barber', barber);

      if (queryError) throw queryError;

      if (existingAppointments && existingAppointments.length > 0) {
        toast.error('Horário indisponível. Escolha outro horário.');
        return;
      }

      // 2. Salvar agendamento
      const { error: insertError } = await supabase
        .from('appointments')
        .insert([{ barber, service, date, time }]);

      if (insertError) throw insertError;

      toast.success('Agendamento confirmado!');
    } catch (error) {
      console.error('Erro ao agendar:', error);
      toast.error('Erro ao processar agendamento.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agendamento</h1>
      <form onSubmit={handleSchedule} className="flex flex-col gap-4">
        <input type="text" placeholder="Barbeiro" value={barber} onChange={(e) => setBarber(e.target.value)} className="border p-2" required />
        <input type="text" placeholder="Serviço" value={service} onChange={(e) => setService(e.target.value)} className="border p-2" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2" required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Confirmar Agendamento</button>
      </form>
    </div>
  );
};
