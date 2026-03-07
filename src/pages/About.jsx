import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy, FaLightbulb, FaHandshake } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.span variants={fadeUp} className="inline-block bg-primary-50 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-primary-100 uppercase tracking-widest">
                Our Story
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Redefining <span className="text-primary-600">Education</span> Through Mentorship.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2019, UnchaAI began with a simple belief: the best way to ace an exam is to be guided by someone who has already conquered it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary py-4 px-8 text-lg rounded-full shadow-xl shadow-primary-500/30 hover:-translate-y-1">
                  Get in Touch
                </Link>
                <Link to="/courses" className="bg-white border-2 border-gray-200 text-gray-700 py-4 px-8 text-lg rounded-full font-bold hover:border-primary-500 hover:text-primary-600 transition-all hover:-translate-y-1">
                  Explore Courses
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image / Stats */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 text-2xl mb-4"><FaUsers /></div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">5,000+</h3>
                    <p className="text-gray-500 font-medium">Students Mentored</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-orange-600 p-6 rounded-3xl shadow-xl text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl mb-4"><FaTrophy /></div>
                    <h3 className="text-3xl font-bold mb-1">98%</h3>
                    <p className="text-white/80 font-medium">Success Rate</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-6 rounded-3xl shadow-xl text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white text-2xl mb-4"><FaChalkboardTeacher /></div>
                    <h3 className="text-3xl font-bold mb-1">100+</h3>
                    <p className="text-gray-400 font-medium">IITian Mentors</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-4"><FaGraduationCap /></div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">5+</h3>
                    <p className="text-gray-500 font-medium">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 text-3xl mb-6"><FaLightbulb /></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize access to elite education. We want to ensure that every ambitious student, regardless of their location, can receive personalized, 1-on-1 guidance from the very best minds in the country.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6"><FaHandshake /></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To build the world's most effective personalized learning ecosystem, where technology seamlessly connects learners with expert mentors, fostering an environment of continuous growth and stellar academic success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Core <span className="text-primary-600">Values</span></h2>
            <p className="text-lg text-gray-600">The principles that drive everything we do at UnchaAI.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Excellence First", desc: "We don't compromise on quality. From our mentors to our study materials, we deliver only the absolute best." },
              { title: "Personalized Care", desc: "Every student is unique. We tailor our approach, study plans, and teaching methods to fit individual learning speeds." },
              { title: "Result Oriented", desc: "We are obsessed with outcomes. We use data-driven strategies and rigorous testing to ensure continuous improvement." }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-primary-50 hover:border-primary-200 transition-colors text-center group cursor-default">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 text-2xl font-black text-gray-300 group-hover:text-primary-500 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
