import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Cpu, Globe, Codepen } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectAboutData } from '../store/slices/staticDataSlice';

const iconMap :any = {
  Code2: <Code2 size={24} />,
  Cpu: <Cpu size={24} />,
  Globe: <Globe size={24} />,
  Codepen: <Codepen size={24} />
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const aboutData = useSelector(selectAboutData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-navy-light">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title">{aboutData?.title}</h2>
            <p className="text-gray-600 dark:text-slate-light mt-6">{aboutData?.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {aboutData?.introTitle || "Get to know me!"}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-slate-light">
                {aboutData?.intro?.map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {aboutData?.servicesTitle}
              </h3>
              <div className="space-y-6">
                {aboutData?.services?.map((service, idx) => (
                  <div className="flex" key={idx}>
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default rounded-lg flex items-center justify-center">
                        {iconMap[service.icon] || <Code2 size={24} />}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{service.title}</h4>
                      <p className="text-gray-600 dark:text-slate-light">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
