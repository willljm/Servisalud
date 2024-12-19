// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Medicines from './Pages/Medicines';
import Health from './Pages/Health';
import Assistant from './Pages/Assistant';
import Reminders from './Pages/Reminders';
import MainLayout from './Layouts/MainLayout';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicamentos" element={<Medicines />} />
          <Route path="/salud" element={<Health />} />
          <Route path="/asistente" element={<Assistant />} />
          <Route path="/recordatorios" element={<Reminders />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;