        import React, { useState } from 'react';

const Assistant = () => {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState('');

  const enviarPregunta = async () => {
    // Integración con OpenAI
    // Aquí iría la lógica de la API
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4 h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          {mensajes.map((msg, i) => (
            <div key={i} className={`p-3 rounded-lg mb-2 ${
              msg.tipo === 'usuario' ? 'bg-purple-100 ml-auto' : 'bg-gray-100'
            }`}>
              {msg.texto}
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 rounded-lg border"
            placeholder="Escribe tu pregunta..."
          />
          <button 
            onClick={enviarPregunta}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
