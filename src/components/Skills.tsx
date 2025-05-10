import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import { selectSkillsData } from "../store/slices/staticDataSlice";

const SkillBar = ({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true });

  return (
    <motion.div
      ref={skillRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6 last:mb-0"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {name}
        </span>
        <span className="text-[#00F5A0] dark:text-[#00F5A0]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200/50 dark:bg-navy-light/50 backdrop-blur-sm rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = useSelector(selectSkillsData);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden bg-gray-50/50 dark:bg-navy-light/20 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,245,160,0.05),transparent_50%)]" />

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
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    'My <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] ml-2">Expertise</span>',
                }}
              ></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              {skillsData.subtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-2xl  dark:bg-navy-default/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 hover:border-white/20 dark:hover:border-white/10 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F5A0]/5 to-[#00D9F5]/5 dark:from-[#00F5A0]/10 dark:to-[#00D9F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
                      {category.category}
                    </h3>

                    <div>
                      {category.items.map((skill, index) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
