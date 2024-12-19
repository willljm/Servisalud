// src/components/Sidebar/SidebarLink.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarLink = ({ to, icon, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors ${
        isActive ? 'bg-purple-50 text-purple-600' : ''
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default SidebarLink;