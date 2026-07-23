import { useForm } from 'react-hook-form';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('E-mail de recuperação enviado!');
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
          <h2 className="mt-2 text-lg font-bold text-gray-100">Recuperar Senha</h2>
          <p className="text-xs text-neutral-400 mt-0.5">Informe seu e-mail para receber as instruções</p>
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

          <button 
            type="submit" 
            className="w-full py-3 text-white bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg hover:from-amber-500 hover:to-amber-600 transition duration-200 font-bold uppercase tracking-wider text-sm shadow-lg cursor-pointer"
          >
            Enviar
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-neutral-400">
          Lembrou a senha?{' '}
          <Link to="/login" className="text-amber-400 font-medium hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};
