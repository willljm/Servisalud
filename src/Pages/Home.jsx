import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const cards = [
    {
      title: "Medicamentos",
      description: "Gestiona tus medicamentos y tratamientos",
      link: "/medicamentos", 
      color: "bg-blue-500"
    },
    {
      title: "Salud",
      description: "Monitorea tu estado de salud",
      link: "/salud",
      color: "bg-red-500"
    },
    {
      title: "Asistente Virtual", 
      description: "Consulta dudas sobre tu salud",
      link: "/asistente",
      color: "bg-green-500"
    },
    {
      title: "Recordatorios",
      description: "Configura tus alertas médicas",
      link: "/recordatorios",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Bienvenido a tu Asistente de Salud</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link to={card.link} key={index}>
            <div className={`${card.color} hover:scale-105 transition-transform duration-300 rounded-lg p-6 text-white shadow-lg`}>
              <div className="flex flex-col items-center text-center">
                {card.icon}
                <h2 className="text-xl font-bold mt-4">{card.title}</h2>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
