import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectAppData } from '../store/slices/staticDataSlice';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const appData  = useSelector(selectAppData);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center  dark:bg-navy-default z-50">
      <div className="w-64 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-teal-500 dark:text-teal-default mb-8 font-bold"
        >
          {appData?.logoText}
        </motion.div>
        
        <div className="w-full h-1  dark:bg-navy-light rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-teal-500 dark:bg-teal-default"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <div className="mt-2 text-gray-600 dark:text-slate-light">
          Know about me... {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;