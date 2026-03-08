import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy,
  FaLightbulb, FaHandshake, FaRocket, FaHeart, FaStar, FaCheckCircle
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } }
};

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[140px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px] opacity-15 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-xl">
              <motion.span variants={fadeUp} className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
                Our Story
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Redefining{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400">
                  Education
                </span>{' '}
                Through Mentorship
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
                Founded in 2019, UnchaAI began with a simple belief — the best way to ace an exam is to be guided by someone who has already conquered it.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-1 text-base">
                  Get in Touch
                </Link>
                <Link to="/mentors" className="bg-white/10 border border-white/25 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 text-base">
                  Meet Our Mentors
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5 pt-10">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-7 rounded-3xl text-white">
                    <FaUsers className="text-primary-400 text-3xl mb-4" />
                    <div className="text-4xl font-bold mb-1">10K+</div>
                    <div className="text-white/60 font-medium text-sm">Students Mentored</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-500 to-orange-500 p-7 rounded-3xl text-white shadow-xl">
                    <FaTrophy className="text-white text-3xl mb-4" />
                    <div className="text-4xl font-bold mb-1">98%</div>
                    <div className="text-white/80 font-medium text-sm">Success Rate</div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-7 rounded-3xl text-white">
                    <FaChalkboardTeacher className="text-orange-400 text-3xl mb-4" />
                    <div className="text-4xl font-bold mb-1">500+</div>
                    <div className="text-white/60 font-medium text-sm">IITian Mentors</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-7 rounded-3xl text-white">
                    <FaGraduationCap className="text-blue-400 text-3xl mb-4" />
                    <div className="text-4xl font-bold mb-1">5+</div>
                    <div className="text-white/60 font-medium text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY TIMELINE ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-primary-100 uppercase tracking-widest">How It All Started</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="text-primary-600">Journey</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From a dorm-room idea to India's leading 1-on-1 mentorship platform for JEE and NEET.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-orange-400 hidden md:block -translate-x-1/2" />

            <div className="space-y-12">
              {[
                { year: "2019", title: "The Idea Is Born", desc: "Two IITians realized that most students fail not due to lack of effort, but lack of personalized guidance. UnchaAI was conceived to bridge this gap.", side: "left", icon: "💡" },
                { year: "2020", title: "First 100 Students", desc: "We launched with a beta program and quickly mentored our first 100 JEE aspirants. The success rate blew everyone away.", side: "right", icon: "🚀" },
                { year: "2021", title: "Expanding to NEET", desc: "After overwhelming demand from medical aspirants, we onboarded top doctors and AIIMS alumni to our mentor network.", side: "left", icon: "🏥" },
                { year: "2023", title: "10,000 Students Strong", desc: "UnchaAI crossed 10,000 students mentored and 500+ IITian & top college mentors — all across India.", side: "right", icon: "🏆" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: item.side === 'left' ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${item.side === 'right' ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-0`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="inline-block bg-primary-50 text-primary-600 font-bold text-sm px-3 py-1 rounded-full mb-3">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center circle */}
                  <div className="hidden md:flex w-[10%] justify-center">
                    <div className="w-14 h-14 bg-white border-4 border-primary-400 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                      {item.icon}
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-orange-500 p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-3xl mb-8">
                  <FaLightbulb />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-white/85 leading-relaxed text-lg">
                  To democratize access to elite education. We want to ensure that every ambitious student, regardless of their location, can receive personalized, 1-on-1 guidance from the very best minds in the country.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-gray-900 p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white text-3xl mb-8">
                  <FaRocket />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  To build the world's most effective personalized learning ecosystem, where technology seamlessly connects learners with expert mentors — fostering continuous growth and stellar academic success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-50 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-orange-100 uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Core <span className="text-primary-600">Values</span></h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">The principles that drive everything we do at UnchaAI.</p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-7"
          >
            {[
              { icon: <FaStar className="text-2xl" />, title: "Excellence First", desc: "We don't compromise on quality. From our mentors to study materials, we deliver only the absolute best.", accent: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-100" },
              { icon: <FaHeart className="text-2xl" />, title: "Personalized Care", desc: "Every student is unique. We tailor our approach and teaching methods to fit individual learning speeds.", accent: "from-pink-400 to-red-400", bg: "bg-pink-50", border: "border-pink-100" },
              { icon: <FaTrophy className="text-2xl" />, title: "Result Oriented", desc: "We are obsessed with outcomes. Data-driven strategies and rigorous testing ensure continuous improvement.", accent: "from-primary-400 to-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: <FaHandshake className="text-2xl" />, title: "Community & Trust", desc: "We foster a warm, supportive community where mentors and students grow together in trust and respect.", accent: "from-green-400 to-teal-500", bg: "bg-green-50", border: "border-green-100" },
              { icon: <FaLightbulb className="text-2xl" />, title: "Innovation Always", desc: "We constantly evolve our platform, tools, and teaching methods to stay ahead in modern education.", accent: "from-purple-400 to-indigo-500", bg: "bg-purple-50", border: "border-purple-100" },
              { icon: <FaCheckCircle className="text-2xl" />, title: "Accountability", desc: "We take complete ownership of student outcomes and hold ourselves to the highest standards of delivery.", accent: "from-orange-400 to-primary-500", bg: "bg-orange-50", border: "border-orange-100" },
            ].map((v, i) => (
              <motion.div
                key={i} variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                className={`bg-white border ${v.border} rounded-3xl p-8 transition-all duration-300 cursor-default`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${v.accent} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY UNCHAAI ── */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-primary-50 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-primary-100 uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The UnchaAi <span className="text-primary-600">Difference</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We're not just another EdTech platform. We're a community of toppers who genuinely want to help the next generation of IIT and NEET achievers.
              </p>
              <div className="space-y-4">
                {[
                  "1-on-1 mentorship from verified IITians & doctors",
                  "Personalised study plans built just for you",
                  "Flexible scheduling — 24/7, from anywhere",
                  "Doubt-solving sessions & mock test reviews",
                  "Emotional & motivational support throughout prep",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — dark card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-gradient-to-br from-gray-900 to-primary-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🎓</div>
                  <h3 className="text-2xl font-bold mb-4">Trusted by Students Across India</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    From Tier-3 cities to metro students, UnchaAi has helped thousands bridge the gap between their current performance and their dream college.
                  </p>
                  <div className="grid grid-cols-2 gap-5 mb-8">
                    {[
                      { n: "10K+", l: "Students" },
                      { n: "500+", l: "Mentors" },
                      { n: "98%", l: "Satisfaction" },
                      { n: "5+", l: "Years" },
                    ].map((s, i) => (
                      <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold">{s.n}</div>
                        <div className="text-white/60 text-xs">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/mentors" className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-2xl transition-colors">
                    Meet Our Mentors →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-orange-500">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join thousands of students who have transformed their preparation with UnchaAi's 1-on-1 mentorship.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-xl">
                Get in Touch
              </Link>
              <Link to="/become-mentor" className="bg-white/10 border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
                Become a Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
