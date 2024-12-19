import { useState } from 'react';

const MedicineCard = ({ medicine }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div 
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <img 
          src={medicine.image} 
          alt={medicine.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800">{medicine.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{medicine.description}</p>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{medicine.name}</h2>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <img 
              src={medicine.image} 
              alt={medicine.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <p><span className="font-semibold">Dosis:</span> {medicine.dosage}</p>
              <p><span className="font-semibold">Presentación:</span> {medicine.presentation}</p>
              <p><span className="font-semibold">Indicaciones:</span> {medicine.indications}</p>
              <p><span className="font-semibold">Efectos secundarios:</span> {medicine.sideEffects}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineCard;
