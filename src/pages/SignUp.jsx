import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

export const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem!');
      return;
    }

    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      toast.error(authError.message);
      setLoading(false);
      return;
    }

    const userId = authData?.user?.id;

    if (userId) {
      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: userId,
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
          }
        ]);

      if (profileError) {
        toast.error('Erro ao salvar dados do usuário: ' + profileError.message);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    toast.success('Cadastro realizado com sucesso!');
    navigate('/');
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
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-4">
          <div className="mb-1.5 w-14 h-14 rounded-full overflow-hidden border border-neutral-700 bg-[#222] flex items-center justify-center shadow-md">
            <img src="/logo/download.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <img src="/Img/escritalogo.png" alt="Barbershop" className="h-24 w-auto object-contain my-2" />
          <h2 className="mt-1 text-lg font-bold text-gray-100">Crie sua Conta de Acesso</h2>
          <p className="text-xs text-neutral-400 mt-0.5">Preencha seus dados para se cadastrar</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          
          {/* Nome Completo */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </span>
            <input 
              {...register('nome')} 
              type="text"
              placeholder="Nome Completo" 
              className="w-full pl-10 pr-4 py-2 bg-[#222] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition"
              required 
            />
          </div>

          {/* E-mail */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </span>
            <input 
              {...register('email')} 
              type="email"
              placeholder="E-mail" 
              className="w-full pl-10 pr-4 py-2 bg-[#222] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition"
              required 
            />
          </div>

          {/* Telefone */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </span>
            <input 
              {...register('telefone')} 
              type="text"
              placeholder="Telefone (WhatsApp)" 
              className="w-full pl-10 pr-4 py-2 bg-[#222] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition"
              required 
            />
          </div>

          {/* Criar Senha */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </span>
            <input 
              {...register('password')} 
              type="password" 
              placeholder="Criar Senha" 
              className="w-full pl-10 pr-4 py-2 bg-[#222] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition"
              required 
            />
          </div>

          {/* Confirmar Senha */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </span>
            <input 
              {...register('confirmPassword')} 
              type="password" 
              placeholder="Confirmar Senha" 
              className="w-full pl-10 pr-4 py-2 bg-[#222] border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition"
              required 
            />
          </div>

          {/* Botão Cadastrar */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2.5 mt-1 text-white bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg hover:from-amber-500 hover:to-amber-600 transition duration-200 font-bold uppercase tracking-wider text-sm shadow-lg disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        {/* Links inferiores */}
        <div className="mt-4 text-center space-y-2">
          <Link to="/recuperar-senha" className="block text-xs text-neutral-400 hover:text-amber-400 transition">
            Esqueceu sua senha?
          </Link>
          <p className="text-xs text-neutral-400">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-amber-400 font-medium hover:underline">
              Faça login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};
