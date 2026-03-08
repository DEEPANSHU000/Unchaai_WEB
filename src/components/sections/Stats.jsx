import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaAward, FaBook, FaClock } from 'react-icons/fa';
import AnimatedCounter from '../common/AnimatedCounter';
import { statisticsData } from '../../data/content';

const iconMap = {
  users: FaUsers,
  award: FaAward,
  book: FaBook,
  clock: FaClock
};

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-500 to-primary-600 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {statisticsData.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`text-center text-white py-8 px-4 ${index < statisticsData.length - 1 ? 'lg:border-r border-white/20' : ''}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Icon className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {inView && (
                    <AnimatedCounter end={stat.number} duration={2} suffix={stat.suffix} />
                  )}
                </h3>
                <p className="text-white/80 font-medium text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
