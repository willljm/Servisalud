import React from 'react';
import SidebarLink from './SidebarLink';
import { Link } from 'react-router-dom';
import { 
  AiOutlineHome,
  AiOutlineMedicineBox,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineUser
} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-64 shadow-lg fixed">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-purple-600">VitalSave</h1>
      </div>
      <nav>
        <SidebarLink to="/" icon={<AiOutlineHome size={20} />} text="Inicio" />
        <SidebarLink to="/medicamentos" icon={<AiOutlineMedicineBox size={20} />} text="Medicamentos" />
        <SidebarLink to="/signos-vitales" icon={<AiOutlineHeart size={20} />} text="Signos Vitales" />
        <SidebarLink to="/asistente" icon={<AiOutlineMessage size={20} />} text="Asistente" />
        <SidebarLink to="/recordatorios" icon={<AiOutlineBell size={20} />} text="Recordatorios" />
        <SidebarLink to="/perfil" icon={<AiOutlineUser size={20} />} text="Perfil" />
      </nav>
    </div>
  );
};

export default Sidebar;