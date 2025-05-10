import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ExternalLink,
  Github as GitHub,
  Folder,
  ArrowUpRight,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectAppData, selectProjectsData } from "../store/slices/staticDataSlice";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, user authentication, and payment processing.",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project-1",
    demo: "https://project-1.example.com",
    category: "web",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team management, and analytics.",
    image:
      "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Redux", "Firebase"],
    github: "https://github.com/yourusername/project-2",
    demo: "https://project-2.example.com",
    category: "web",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather forecasting application that provides detailed weather information for any location.",
    image:
      "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourusername/project-3",
    demo: "https://project-3.example.com",
    category: "web",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Mobile App",
    description:
      "A cross-platform mobile application for social media interaction with features like posts, comments, and messaging.",
    image:
      "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/project-4",
    demo: "https://project-4.example.com",
    category: "mobile",
    featured: true,
  },
  {
    id: 5,
    title: "RESTful API Service",
    description:
      "A robust API service for data processing and integration with third-party systems.",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/project-5",
    demo: "https://project-5.example.com",
    category: "api",
    featured: false,
  },
  {
    id: 6,
    title: "UI Component Library",
    description:
      "A comprehensive collection of reusable UI components with customization options.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Storybook", "Styled Components"],
    github: "https://github.com/yourusername/project-6",
    demo: "https://project-6.example.com",
    category: "ux",
    featured: false,
  },
];

const FeaturedProject = ({
  project,
  index,
}: {
  project:any;
  index: number;
}) => {
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const projectData = useSelector(selectProjectsData);

  return (
    <motion.div
      ref={projectRef}
      style={{ y, opacity }}
      className="group relative mb-32 last:mb-0"
    >
      <div className="relative grid md:grid-cols-12 gap-8 items-center">
        <div
          className={`md:col-span-7 ${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="relative group overflow-hidden rounded-xl">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/20 to-[#00D9F5]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    <GitHub className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-5 ${
            index % 2 === 0 ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {project.technologies.map((tech:any) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5] font-medium backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex space-x-6 pt-4"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  View Code <GitHub size={18} className="ml-2" />
                </span>
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white font-medium"
              >
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  Live Demo <ExternalLink size={18} className="ml-2" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({project}:any) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5A0]/20 to-[#00D9F5]/20 text-[#00D9F5] flex items-center justify-center">
              <Folder className="w-6 h-6" />
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#00F5A0] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors">
            {project.title}
          </h4>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech:any) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 text-[#00D9F5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const projectData = useSelector(selectProjectsData);
  const appData = useSelector(selectAppData);

  const featuredProjects = projectData.items.filter((project:any) => project.featured);
  const filteredProjects =
    activeCategory === "all"
      ? projectData.items
      : projectData.items.filter((project:any) => project.category === activeCategory);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = (
        containerRef.current as HTMLElement
      ).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (containerRef.current as HTMLElement).style.setProperty(
        "--mouse-x",
        `${x}px`
      );
      (containerRef.current as HTMLElement).style.setProperty(
        "--mouse-y",
        `${y}px`
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]" />

      <div ref={containerRef} className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
            >
              {projectData.subtitleThree}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {projectData.subtitle}
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="mb-32">
            {featuredProjects.map((project:any, index:number) => (
              <FeaturedProject
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
              {projectData.subtitleTwo}
            </h3>

            <div className="flex overflow-x-auto mb-12 pb-4 justify-center space-x-4">
              {projectData.categories.map((category:any) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "text-white bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
                        : "text-gray-600 dark:text-gray-400 hover:text-[#00F5A0]"
                    }`}
                >
                  <span className="relative z-10">{category.label}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects
                  .filter((project:any) => !project.featured)
                  .map((project:any) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-20"
          >
            <a
              href={appData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 text-lg overflow-hidden rounded-full bg-transparent border-2 border-[#00F5A0] text-[#00F5A0] font-medium transition-colors hover:text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative flex items-center">
                View More on GitHub <ArrowUpRight className="ml-2 w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
