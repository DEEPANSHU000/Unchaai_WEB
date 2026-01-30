import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQAccordion from '../common/FAQAccordion';
import faqData from '../../data/faqs';

const FAQSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            Answer you need to know
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked <span className="heading-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Below are some frequently asked questions by parents and students about Unchaai's learning and mentorship programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <FAQAccordion faqs={faqData} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
