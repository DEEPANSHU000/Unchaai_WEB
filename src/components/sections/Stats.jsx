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
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center text-white"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">
                  {inView && (
                    <AnimatedCounter
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </h3>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
