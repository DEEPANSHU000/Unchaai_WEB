import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';


const Hero = ({ onBookTrialClick }) => {
  const handleWatchDemo = () => {
  window.open(
    "https://youtu.be/mF92uCHWpio?si=s-yqqgppdvnR8HCi",
    "_blank"
  );
};
  return (
    <section className="relative bg-gradient-to-br from-cream-50 via-white to-primary-50 pt-32 pb-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white border border-primary-200 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700">
                5+ Years of Academic Excellence (Estd. 2019)
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6"
            >
              Unlock Your Potential with{' '}
              <span className="heading-gradient">
                IITians/NEET Rankers
              </span>{' '}
              as Your Personal Mentors
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We offer truly personalized 1-1 learning experiences for your academic success. 
              UnchaAi helped students from 6th to 12th Class to excel in JEE, NEET, Olympiads, NTSE, Boards and School Exams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={onBookTrialClick} className="btn-primary text-lg px-8 py-4">
                Book Free Trial Class
              </button>
              <button onClick={handleWatchDemo} className="btn-outline text-lg px-8 py-4 flex items-center justify-center gap-2">
                <FaPlay className="text-sm" />
                Watch Demo Class
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold text-white"
                    style={{ 
                      backgroundImage: `url(https://i.pravatar.cc/40?img=${i})`,
                      backgroundSize: 'cover'
                    }}
                  ></div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Trusted by 5000+ Students</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(4.9/5)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Students learning with mentors"
                className="w-full h-auto"
              />
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4"
              >
                <p className="text-3xl font-bold text-primary-500">96%</p>
                <p className="text-xs text-gray-600">Success Rate</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4"
              >
                <p className="text-3xl font-bold text-secondary-500">150+</p>
                <p className="text-xs text-gray-600">IIT/NEET Mentors</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>

    </section>

  );
};

export default Hero;
