import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { subjectsData, trustFactors, gettingStartedSteps } from '../../data/content';

export const TrustSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            About Mentors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Mentor you can <span className="heading-gradient">Trust!</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="card p-8 text-center"
            >
              <div className="text-5xl mb-4">{factor.icon}</div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SubjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-cream-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            What we handle
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            We Handle All the <span className="heading-gradient">Challenging Subjects</span> with Ease!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjectsData.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card p-6 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
                {subject.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {subject.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{subject.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GettingStartedSection = ({ onBookTrialClick }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            How to Get Started with E-Learning
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Getting Started is as Easy as <span className="heading-gradient">1-2-3</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting started with our e-learning programs is as easy as saying 1-2-3. When we say it, we mean it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gettingStartedSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
              </div>

              <div className="card p-8 pt-16 text-center mt-4">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connection Line */}
              {index < gettingStartedSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button onClick={onBookTrialClick} className="btn-primary text-lg px-8 py-4">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};
