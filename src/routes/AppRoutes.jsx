import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignUp } from '../pages/SignUp';
import { Login } from '../pages/Login';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Profile } from '../pages/Profile';
import { Scheduling } from '../pages/Scheduling';
import { BarberDashboard } from '../pages/BarberDashboard';
import { AdminDashboard } from '../pages/AdminDashboard';
import { AdminServices } from '../pages/AdminServices';
import { AdminBarbers } from '../pages/AdminBarbers';
import { AdminHours } from '../pages/AdminHours';
import { AdminHolidays } from '../pages/AdminHolidays';
import { AdminReports } from '../pages/AdminReports';
import { Servicos } from '../pages/Servicos';
import { Precos } from '../pages/Precos';
import { Galeria } from '../pages/Galeria';
import { Sobre } from '../pages/Sobre';
import { Equipe } from '../pages/Equipe';
import { Contato } from '../pages/Contato';

export const AppRoutes = () => {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<ForgotPassword />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/agendamento" element={<Scheduling />} />
          <Route path="/painel" element={<BarberDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/servicos" element={<AdminServices />} />
          <Route path="/admin/barbeiros" element={<AdminBarbers />} />
          <Route path="/admin/horarios" element={<AdminHours />} />
          <Route path="/admin/feriados" element={<AdminHolidays />} />
          <Route path="/admin/relatorios" element={<AdminReports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
