import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications(prev => [...prev, notification]);
    toast.info(notification.message);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return {
    notifications,
    addNotification,
    removeNotification
  };
};
