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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-primary-950 overflow-hidden pt-8">

      {/* ── decorative blobs ── */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-600 rounded-full blur-[160px] opacity-15 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[140px] opacity-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* ── subtle grid ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left ── */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Live badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              5+ Years of Academic Excellence — Est. 2019
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Unlock Your Potential with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-orange-400 to-primary-300">
                IITians & NEET Rankers
              </span>{' '}
              as Your Personal Mentors
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed">
              Truly personalized 1-on-1 learning for Classes 6–12. Ace JEE, NEET, Olympiads, NTSE, Boards — guided by the toppers who've been there.
            </motion.p>

            {/* Bullet points */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['Free Trial Class', 'IITian/NEET Mentors', '1-on-1 Sessions', 'Flexible Timings'].map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <FaCheckCircle className="text-green-400 text-xs shrink-0" />
                  {pt}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={onBookTrialClick}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-orange-500 hover:from-primary-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-primary-500/30 text-base transition-all"
              >
                Book Free Trial Class
                <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={handleWatchDemo}
                className="flex items-center justify-center gap-3 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm text-base transition-all"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPlay className="text-xs ml-0.5" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 pt-6 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-gray-900 bg-gray-600"
                    style={{ backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})`, backgroundSize: 'cover' }} />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-sm">10,000+ Students Mentored</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="text-yellow-400 text-xs" />)}
                  <span className="text-white/60 text-xs ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right — Visual stack ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Students learning with mentors"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>

            {/* Floating card — top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl">🏆</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">96%</p>
                <p className="text-xs text-gray-500">Success Rate</p>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">👨‍🏫</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-xs text-gray-500">IIT/NEET Mentors</p>
              </div>
            </motion.div>

            {/* Floating card — mid right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-gradient-to-br from-primary-500 to-orange-500 text-white rounded-2xl shadow-2xl p-4"
            >
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-xs text-white/80">Students</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scrolling brand logos / trust row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Our Mentors Are From</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['IIT Delhi', 'IIT Bombay', 'IIT Roorkee', 'IIT BHU', 'AIIMS Delhi', 'NIT Trichy'].map((inst, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                <span className="text-white/60 text-sm font-semibold">{inst}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
