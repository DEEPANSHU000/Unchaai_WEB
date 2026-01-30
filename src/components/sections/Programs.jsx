import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';
import { jeeFeatures, neetFeatures } from '../../data/content';

const Programs = ({ onBookTrialClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-cream-50 to-white">
      <div className="container-custom">
        {/* JEE Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="JEE Preparation"
                  className="w-full h-auto"
                />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary-500">IIT</p>
                  <p className="text-xs text-gray-600">Dream</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                  IIT JEE & Engineering Entrance Exams
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Proven Mentorship & Tutoring for Your{' '}
                  <span className="heading-gradient">IIT Dream</span>
                </h2>
              </div>

              <ul className="space-y-3 mb-8">
                {jeeFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
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
                Start JEE Preparation
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* NEET Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
                  NEET & Medical Entrance Exams
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Proven Mentorship & Tutoring for Your{' '}
                  <span className="heading-gradient">Medical Dream</span>
                </h2>
              </div>

              <ul className="space-y-3 mb-8">
                {neetFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
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
                Start NEET Preparation
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  alt="NEET Preparation"
                  className="w-full h-auto"
                />
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-500">NEET</p>
                  <p className="text-xs text-gray-600">Success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
