import { createBrowserRouter } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BlogRoutes from "./BlogRoutes";
import AdminLogin from "../components/AdminLogin";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
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
        </div>
      ),
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/blog/*",
      element: <BlogRoutes />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
    },
  }
);

export default router;
