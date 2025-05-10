import { useState, useEffect } from 'react';
import { requestNotificationPermission, onMessageListener } from '../firebase/config';

export const useNotification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    const initializeNotifications = async () => {
      try {
        const token = await requestNotificationPermission();
        if (token) {
          setTokenFound(true);
        }
      } catch (error) {
        console.error('Error getting notification token:', error);
      }
    };

    initializeNotifications();
  }, []);

  useEffect(() => {
    const unsubscribe = onMessageListener().then((payload: any) => {
      setNotification({
        title: payload?.notification?.title || '',
        body: payload?.notification?.body || ''
      });
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return { notification, isTokenFound };
};