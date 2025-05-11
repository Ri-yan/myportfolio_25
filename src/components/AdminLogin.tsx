import  { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../firebase/config";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage on mount
    const user = localStorage.getItem("adminUser");
    const token = localStorage.getItem("adminToken");

    if (user && token) {
      // Already logged in
      debugger;
      navigate("/"); // change this route as needed
    }

    // Firebase Auth auto-login handling
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        debugger;
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const login = async () => {
    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration: await navigator.serviceWorker.ready,
      });

      await setDoc(doc(db, "adminTokens", userCred.user.uid), {
        token,
        email: userCred.user.email,
      });

      // Save to localStorage
      localStorage.setItem("adminUser", JSON.stringify(userCred.user));
      localStorage.setItem("adminToken", token);

      alert("Admin logged in and token saved.");
      navigate("/");
    } catch (err: any) {
      debugger;
      console.error("Login failed:", err.message);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Admin Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            onClick={login}
            disabled={loading}
            className={`w-full py-2 font-semibold rounded-lg transition duration-300 ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
