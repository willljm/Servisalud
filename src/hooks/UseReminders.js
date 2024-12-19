import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useReminders = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders(prev => [...prev, { ...reminder, id: Date.now() }]);
  };

  const editReminder = (id, updatedReminder) => {
    setReminders(prev => 
      prev.map(rem => rem.id === id ? { ...rem, ...updatedReminder } : rem)
    );
  };

  const deleteReminder = (id) => {
    setReminders(prev => prev.filter(rem => rem.id !== id));
  };

  useEffect(() => {
    // Verificar recordatorios cada minuto
    const interval = setInterval(() => {
      reminders.forEach(reminder => {
        const now = new Date();
        const reminderTime = new Date(reminder.date + ' ' + reminder.time);
        
        if (now >= reminderTime && !reminder.notified) {
          toast.success(`¡Recordatorio: ${reminder.title}!`);
          // Marcar como notificado
          editReminder(reminder.id, { ...reminder, notified: true });
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [reminders]);

  return {
    reminders,
    addReminder,
    editReminder,
    deleteReminder
  };
};
