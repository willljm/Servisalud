// src/layouts/MainLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;