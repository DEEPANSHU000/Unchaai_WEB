import { motion } from 'framer-motion';
import { FaPlay, FaStar, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const Hero = ({ onBookTrialClick }) => {
  const handleWatchDemo = () => {
    window.open('https://youtu.be/mF92uCHWpio?si=s-yqqgppdvnR8HCi', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8" style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fff1e6 100%)' }}>

      {/* ── Decorative blobs ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-300 rounded-full blur-[140px] opacity-25 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-200 rounded-full blur-[120px] opacity-30 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-orange-200 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left ── */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Live badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 text-sm font-bold px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              5+ Years of Academic Excellence — Est. 2019
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Unlock Your Potential with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-primary-600">
                IITians & NEET Rankers
              </span>{' '}
              as Your Personal Mentors
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-gray-500 text-lg md:text-xl mb-8 leading-relaxed">
              Truly personalized 1-on-1 learning for Classes 6–12. Ace JEE, NEET, Olympiads, NTSE, and Boards — guided by the toppers who've been there.
            </motion.p>

            {/* Benefit pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
              {['Free Trial Class', 'IITian/NEET Mentors', '1-on-1 Sessions', 'Flexible Timings'].map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                  <FaCheckCircle className="text-orange-500 text-xs shrink-0" />
                  {pt}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(249,115,22,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onBookTrialClick}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-primary-500 hover:from-orange-600 hover:to-primary-600 text-white font-bold px-8 py-4 rounded-full shadow-xl text-base transition-all"
              >
                Book Free Trial Class
                <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWatchDemo}
                className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-orange-300 text-gray-800 font-bold px-8 py-4 rounded-full text-base transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaPlay className="text-xs text-orange-500 ml-0.5" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 pt-6 border-t border-gray-200">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-300"
                    style={{ backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})`, backgroundSize: 'cover' }} />
                ))}
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">10,000+ Students Mentored</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="text-yellow-400 text-xs" />)}
                  <span className="text-gray-500 text-xs ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Students learning with mentors"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
            </div>

            {/* Floating — top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-orange-100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🏆</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">96%</p>
                <p className="text-xs text-gray-500">Success Rate</p>
              </div>
            </motion.div>

            {/* Floating — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-orange-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">👨‍🏫</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-xs text-gray-500">IIT/NEET Mentors</p>
              </div>
            </motion.div>

            {/* Floating — mid right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gradient-to-br from-orange-500 to-primary-600 text-white rounded-2xl shadow-2xl p-4"
            >
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-xs text-white/80">Students</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Institution trust row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-gray-200"
        >
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Our Mentors Are From</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {['IIT Delhi', 'IIT Bombay', 'IIT Roorkee', 'IIT BHU', 'AIIMS Delhi', 'NIT Trichy'].map((inst, i) => (
              <div key={i} className="bg-white border border-orange-100 shadow-sm px-5 py-2 rounded-full">
                <span className="text-gray-600 text-sm font-semibold">{inst}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
