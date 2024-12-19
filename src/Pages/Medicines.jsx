import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Medicines() {
  const [medicines] = useState([
    {
      name: "Paracetamol",
      dose: "500mg",
      frequency: "Cada 8 horas",
      description: "Para dolor y fiebre"
    },
    // Añade más medicamentos aquí
  ]);

  const showMedicineDetails = (medicine) => {
    Swal.fire({
      title: medicine.name,
      html: `
        <div class="text-left">
          <p><strong>Dosis:</strong> ${medicine.dose}</p>
          <p><strong>Frecuencia:</strong> ${medicine.frequency}</p>
          <p><strong>Descripción:</strong> ${medicine.description}</p>
        </div>
      `,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar'
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Mis Medicamentos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((medicine, index) => (
          <div 
            key={index}
            onClick={() => showMedicineDetails(medicine)}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-blue-600">{medicine.name}</h2>
            <p className="text-gray-600">{medicine.dose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;
