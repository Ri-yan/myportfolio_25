import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";
import MouseContextProvider from "./context/mouse-context";
import DotRing from "./components/DotRing";
import router from "./routes/routerconfig";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration:any) => {
          //console.log("Service Worker registered:", registration);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return () => document.removeEventListener("contextmenu", handleContextmenu);
  }, []);

  if (loading) return <Loader />;

  return (
    <MouseContextProvider>
      <DotRing />
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </MouseContextProvider>
  );
}

export default App;
