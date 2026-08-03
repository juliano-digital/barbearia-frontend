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
  console.log("AppRoutes rendering");
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/recuperar-senha" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/agendamento" element={<Scheduling />} />
        <Route path="/barber" element={<BarberDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/barbers" element={<AdminBarbers />} />
        <Route path="/admin/hours" element={<AdminHours />} />
        <Route path="/admin/holidays" element={<AdminHolidays />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
