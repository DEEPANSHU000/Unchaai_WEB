import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            About <span className="heading-gradient">UnchaAI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Empowering students with personalized mentorship from top IITians and NEET toppers since 2019.
          </motion.p>
          
          <div className="card p-12 max-w-4xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              UnchaAI is dedicated to providing world-class personalized education through 1-1 mentorship programs. 
              We connect ambitious students with proven IIT and NEET toppers who guide them towards academic excellence.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-8">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2019, UnchaAI has helped over 5000+ students achieve their dreams of getting into top 
              engineering and medical colleges. Our unique approach combines personalized attention, proven strategies, 
              and continuous support to ensure every student reaches their full potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
