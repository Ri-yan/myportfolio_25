import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-scroll";
import {
  ArrowRight,
  Github as GitHub,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import ThreeScene from "./three/ThreeScene";
import { useNotification } from "../hooks/useNotification";
import { selectHeroData } from "../store/slices/staticDataSlice";

const Hero = () => {
  const heroData: any = useSelector(selectHeroData);
  const { notification } = useNotification();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (notification.title) {
      // Handle notification display
      console.log("New notification:", notification);
    }
  }, [notification]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      <div className="absolute inset-0 -z-0">
        <ThreeScene />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)]" />
      </div>

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="container relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
                {heroData.title.main}
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                {heroData.title.sub}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to={heroData.buttons.primary.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium"
              >
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  {heroData.buttons.primary.text}{" "}
                  <ArrowRight size={20} className="ml-2" />
                </span>
              </Link>

              <Link
                to={heroData.buttons.secondary.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative">
                  {heroData.buttons.secondary.text}
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 flex items-center space-x-8"
            >
              {heroData.socialLinks.map((social:any, index:number) => {
                const Icon =
                  social.icon === "GitHub"
                    ? GitHub
                    : social.icon === "Linkedin"
                    ? Linkedin
                    : social.icon === "Twitter"
                    ? Twitter
                    : Mail;

                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#00F5A0] transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <div className="hidden md:block relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 rounded-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <img
                  src={heroData.images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="w-full h-[490px] object-cover rounded-b-2xl shadow-white"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-gray/50 to-transparent rounded-b-2xl"
                >
                  <p className="text-white text-lg font-medium text-center">
                    {heroData.quotes[currentIndex]}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:block pointer-events-none"

          // className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <div className="w-1 h-10 rounded-full bg-gradient-to-b from-[#00F5A0] to-transparent" />
            <span className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
