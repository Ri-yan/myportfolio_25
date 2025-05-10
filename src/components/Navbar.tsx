import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLinksData } from "../store/slices/staticDataSlice";
const navLinks = [
  { name: "Home", to: "hero", offset: 0 },
  { name: "About", to: "about", offset: -80 },
  { name: "Skills", to: "skills", offset: -80 },
  { name: "Services", to: "services", offset: -80 },
  { name: "Projects", to: "projects", offset: -80 },
  { name: "Contact", to: "contact", offset: -80 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const linksData = useSelector(selectLinksData);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-4 bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-wrap items-center justify-between w-full">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="relative group cursor-pointer"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
                {"< Riyan />"}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className="relative group cursor-pointer"
                  >
                    <span className="text-gray-600 dark:text-gray-300 transition-colors group-hover:text-[#00F5A0]">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all duration-300 group-hover:w-full" />
                  </ScrollLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: darkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-[#00F5A0]" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </motion.div>
              </button>

              <a
                href={linksData.resume}
                className="group relative px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  Resume <Download className="ml-2 w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-[#00F5A0]" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </motion.div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#00F5A0] transition-colors"
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="px-4 pt-4"
                >
                  <a
                    href={linksData.resume}
                    className="group relative inline-flex items-center px-6 py-2.5 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative flex items-center">
                      Resume <Download className="ml-2 w-4 h-4" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
