import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        className="p-2 hover:bg-gray-100 rounded-full relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineBell size={24} />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Notificaciones</h3>
            {notifications.length === 0 ? (
              <p className="text-gray-500">No hay notificaciones nuevas</p>
            ) : (
              <div className="space-y-2">
                {notifications.map((notif, index) => (
                  <div key={index} className="p-2 hover:bg-gray-50 rounded">
                    {notif.message}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
