import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
      } else {
        setUser(user);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Logout realizado!');
    navigate('/login');
  };

  if (!user) return <div>Carregando...</div>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='mb-4 text-2xl font-bold'>Perfil</h2>
      <p className='mb-4'>E-mail: {user.email}</p>
      <button onClick={handleLogout} className='p-2 text-white bg-red-500 rounded'>Sair</button>
    </div>
  );
};
