import { useForm } from 'react-hook-form';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Login realizado com sucesso!');
      navigate('/');
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1920&auto=format&fit=crop')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-6 bg-[#161616]/25 backdrop-blur-sm border border-white/10 shadow-2xl rounded-2xl text-white">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2 w-16 h-16 rounded-full overflow-hidden border border-neutral-700 bg-[#222] flex items-center justify-center shadow-md">
            <img src="/logo/download.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <img src="/Img/escritalogo.png" alt="Barbershop" className="w-[85%] h-auto object-contain my-3" />
          <h2 className="mt-2 text-lg font-bold text-gray-100">Entrar na Conta</h2>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-neutral-300">E-mail</label>
            <input 
              {...register('email')} 
              type="email"
              placeholder="seu@email.com" 
              className="w-full p-3 bg-[#222]/40 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition" 
              required 
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-neutral-300">Senha</label>
            <input 
              {...register('password')} 
              type="password" 
              placeholder="Sua senha" 
              className="w-full p-3 bg-[#222]/40 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition" 
              required 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <Link to="/recuperar-senha" className="text-neutral-400 hover:text-amber-400 transition">Esqueceu a senha?</Link>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 text-white bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg hover:from-amber-500 hover:to-amber-600 transition duration-200 font-bold uppercase tracking-wider text-sm shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-neutral-400">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="text-amber-400 font-medium hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};
