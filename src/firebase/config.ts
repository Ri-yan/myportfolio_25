import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getAnalytics, isSupported as analyticsIsSupported } from 'firebase/analytics';
import {
  getAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app: any = import.meta.env.VITE_FIREBASE_STAUS === 'ON' ? initializeApp(firebaseConfig) : null
export const messaging: any = import.meta.env.VITE_FIREBASE_STAUS === 'ON' ? getMessaging(app) : null;
export const auth: any = import.meta.env.VITE_FIREBASE_STAUS === 'ON' ? getAuth(app) : null;
export const db: any = import.meta.env.VITE_FIREBASE_STAUS === 'ON' ? getFirestore(app) : null;
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted' && import.meta.env.VITE_FIREBASE_STAUS === 'ON') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      });
      return token;
    }
  } catch (error) {
    console.error('Notification permission error:', error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    if (import.meta.env.VITE_FIREBASE_STAUS === 'ON') {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    }

  });

  let analytics: any = null;

  if (app && await analyticsIsSupported()) {
    analytics = getAnalytics(app);
  }
  
  export { analytics };

export default app;