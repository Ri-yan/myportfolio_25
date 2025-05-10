import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Globe2, Layers, Code2, LineChart, Megaphone } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectServicesData } from '../store/slices/staticDataSlice';

const iconMap:any = {
  Palette,
  Globe2,
  Layers,
  Code2,
  LineChart,
  Megaphone
};

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });
  const servicesData:any = useSelector(selectServicesData);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5A0]/5 to-transparent dark:from-transparent dark:via-[#00F5A0]/2 dark:to-transparent" />

      <div ref={containerRef} className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Services
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">
                {"< I />"} Provide
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              {servicesData?.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData?.items?.map((service:any, index:number) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 p-8 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-[#00F5A0] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {service.description}
                      </p>

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00F5A0]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
