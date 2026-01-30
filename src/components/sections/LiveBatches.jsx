import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';
import { liveBatchesFeatures } from '../../data/content';

const LiveBatches = ({ onBookTrialClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                Live Batches
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                Live Batches for{' '}
                <span className="heading-gradient">NEET & JEE</span>{' '}
                Aspirants
              </h2>
            </div>

            <ul className="space-y-4 mb-8">
              {liveBatchesFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              onClick={onBookTrialClick}
              className="btn-primary"
            >
              Enroll Now
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="Live online classes"
                className="w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Starting From</p>
                <p className="text-2xl font-bold text-primary-500">₹999/month</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveBatches;
