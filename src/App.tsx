import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeContext";
import MouseContextProvider, { MouseContext } from "./context/mouse-context";
import DotRing from "./components/DotRing";

import AdminLogin from "./components/AdminLogin";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
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

  const { cursorType, cursorChangeHandler }: any = useContext(MouseContext);

  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return () => document.removeEventListener("contextmenu", handleContextmenu);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <MouseContextProvider>
        <DotRing />
        <ThemeProvider>
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-white dark:bg-[#0A192F] text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  <Navbar />
                  <main>
                    <Hero />
                    <About />
                    <Services />
                    <Skills />
                    <Projects />
                    <Testimonials />
                    <Contact />
                  </main>
                  <Footer />
                  <div
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  ></div>
                </div>
              }
            />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </ThemeProvider>
      </MouseContextProvider>
    </Router>
  );
}

export default App;
