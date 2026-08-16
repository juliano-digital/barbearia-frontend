import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export const AdminRoute = () => {
  const [status, setStatus] = useState('checking'); // checking | allowed | denied

  useEffect(() => {
    let active = true;

    const checkAdmin = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session;

      if (!session) {
        if (active) setStatus('denied');
        return;
      }

      const { data: userRow, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (error || !userRow || userRow.role !== 'admin') {
        if (active) setStatus('denied');
        return;
      }

      if (active) setStatus('allowed');
    };

    checkAdmin();
    const { data: listener } = supabase.auth.onAuthStateChange(() => checkAdmin());
    return () => {
      active = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  if (status === 'checking') {
    return <div className="flex items-center justify-center min-h-screen bg-white text-black text-sm">Verificando permissão...</div>;
  }

  return status === 'allowed' ? <Outlet /> : <Navigate to="/login" replace />;
};