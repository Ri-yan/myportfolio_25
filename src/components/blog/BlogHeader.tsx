import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface BlogHeaderProps {
  onSearch: (query: string) => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { darkMode } = useTheme();

  const [showExtras, setShowExtras] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) return; // only mobile/tablet
  
      const atTop = window.scrollY === 0;
      setShowExtras(atTop);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        darkMode
          ? "bg-[#0A192F]/80 shadow-lg backdrop-blur-lg"
          : "bg-white/80 shadow-lg backdrop-blur-lg"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="relative group cursor-pointer">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:text-transparent transition-all duration-300">
              {"< MyBlogs />"}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        {/* Extras: categories, search, know more */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showExtras ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-auto mt-4 md:mt-0`}
        >
          {/* Categories */}
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {["technology", "design", "development", "business"].map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group"
              >
                <Link
                  to={`/blog/categories/${cat}`}
                  className="capitalize text-gray-600 dark:text-gray-300 group-hover:text-[#00F5A0] transition-colors"
                >
                  {cat}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </nav>

          {/* Search */}
          <motion.form
            onSubmit={handleSearch}
            className="relative w-full md:w-64"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-dark-light text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00F5A0] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-[#00F5A0]"
            >
              <Search size={18} />
            </button>
          </motion.form>

          {/* Know More */}
          <motion.div
            key={45}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 6 * 0.1 }}
            className="relative group"
          >
            <Link
              to={`/`}
              className="capitalize font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:text-transparent transition-all duration-300"
            >
              Know More
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all duration-300 group-hover:w-full" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default BlogHeader;
