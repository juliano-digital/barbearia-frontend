import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignUp } from '../pages/SignUp';
import { Login } from '../pages/Login';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Profile } from '../pages/Profile';
import Agendamento from '../pages/Agendamento';
import { BarberDashboard } from '../pages/BarberDashboard';
import { Servicos } from '../pages/Servicos';
import { Precos } from '../pages/Precos';
import { Galeria } from '../pages/Galeria';
import { Sobre } from '../pages/Sobre';
import { Equipe } from '../pages/Equipe';
import { Contato } from '../pages/Contato';
import { PrivateRoute } from './PrivateRoute';
import { AdminRoute } from './AdminRoute';
import { AdminLayout } from '../components/Admin/AdminLayout';
import { AdminDashboard } from '../pages/Admin/AdminDashboard';
import { AdminHome } from '../pages/Admin/AdminHome';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/recuperar-senha" element={<ForgotPassword />} />

        {/* Rotas Protegidas — exige login */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/barber" element={<BarberDashboard />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

        {/* Painel de administração — só usuário com role admin */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="home" element={<AdminHome />} />
            {/* as próximas seções (sobre, servicos, precos, equipe, galeria, contato) entram aqui */}
          </Route>
        </Route>

        {/* Rota Curinga */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};