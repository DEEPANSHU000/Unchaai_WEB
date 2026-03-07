import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBriefcase, FaCertificate, FaChalkboardTeacher, FaCode,
  FaFileAlt, FaHandshake, FaLaptopCode, FaLinkedin,
  FaRegClock, FaUserTie, FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaVideo
} from "react-icons/fa";

const highlights = [
  { icon: FaBriefcase, title: "Real Internship Experience", desc: "Work on live projects under industry mentors, not just theory.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: FaCertificate, title: "Internship Certificate", desc: "Get a verified certificate to showcase on LinkedIn & your resume.", color: "text-green-500", bg: "bg-green-50" },
  { icon: FaChalkboardTeacher, title: "1-on-1 Mentorship", desc: "Dedicated mentor guidance throughout your internship journey.", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: FaFileAlt, title: "ATS-Ready Resume", desc: "Build a resume that clears applicant tracking systems effortlessly.", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: FaLinkedin, title: "LinkedIn Optimization", desc: "Craft a recruiter-magnet profile with expert help.", color: "text-cyan-500", bg: "bg-cyan-50" },
  { icon: FaHandshake, title: "Referrals for Top Performers", desc: "Outstanding interns get direct referrals to our hiring partners.", color: "text-amber-500", bg: "bg-amber-50" },
];

const curriculum = [
  {
    week: "Phase 1: Week 1–2",
    title: "Onboarding & Environment Setup",
    topics: ["Team introduction & role assignment", "Tech stack deep dive & architecture", "Setting up dev environment", "Understanding the product roadmap & JIRA"],
  },
  {
    week: "Phase 2: Week 3–5",
    title: "Core Feature Development",
    topics: ["Live feature development tasks", "Code reviews & PR feedback loops", "Daily standups & agile sprint planning", "Version control & Git best practices"],
  },
  {
    week: "Phase 3: Week 6–7",
    title: "Testing, QA & Deployment",
    topics: ["Writing exhaustive unit & integration tests", "Bug fixing & QA testing cycles", "Understanding CI/CD & Deployments", "API Documentation & Handoffs"],
  },
  {
    week: "Phase 4: Week 8",
    title: "Project Demo & Career Prep",
    topics: ["Final project demo to stakeholders", "Portfolio & case study creation", "Mock technical interviews + feedback", "Certificate issuing & referral process"],
  },
];

const eligibility = [
  "Students in 2nd, 3rd, or final year of engineering (B.Tech/BE) or BCA/MCA",
  "Freshers or early-career professionals looking to break into tech with real experience",
  "Anyone who has completed or is currently pursuing a programming course",
  "Candidates with basic to intermediate knowledge of any programming language",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

const PlacementInternship = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen overflow-hidden">

      {/* ── HERO SECTION WITH 3D ABSTRACT GRAPHICS ── */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-24 pb-32 px-4 overflow-hidden">
        {/* Animated Orbs & Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -40, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-400/20 rounded-full blur-[120px] pointer-events-none"></motion.div>
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-blue-400/20 rounded-full blur-[150px] pointer-events-none"></motion.div>

        <div className="container-custom max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 text-center lg:text-left pt-10">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> 8-Week Live Project Program
            </span>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-md">
              Launch Your Career with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">Real Experience.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Stop building "todo apps". Work on live industry projects, get certified, optimize your resume, and land top-tier placements in just 8 weeks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-white text-primary-900 font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all text-lg tracking-wide hover:-translate-y-1">
                Apply for Internship
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all text-lg tracking-wide flex items-center justify-center gap-2">
                <FaRegClock /> Download Syllabus
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/20 pt-8">
              <div>
                <p className="text-3xl font-black text-white">500+</p>
                <p className="text-white/60 text-xs uppercase tracking-wider font-bold mt-1">Interns Placed</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div>
                <p className="text-3xl font-black text-amber-300">₹8–15L</p>
                <p className="text-white/60 text-xs uppercase tracking-wider font-bold mt-1">Avg. CTC Landed</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div>
                <p className="text-3xl font-black text-white">96%</p>
                <p className="text-white/60 text-xs uppercase tracking-wider font-bold mt-1">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive 3D Mockup Container */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="lg:w-1/2 w-full max-w-lg relative">
            <div className="aspect-square relative flex items-center justify-center">
              {/* Glowing backlight */}
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-[80px] opacity-40 mix-blend-screen"></div>

              {/* Main floating card */}
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-[10px] text-white/50 font-mono tracking-wider">PROJECT_PORTAL_V2.0</span>
                </div>

                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 flex flex-col justify-end p-4">
                    <div className="h-2 w-1/3 bg-white/40 rounded-full mb-2"></div>
                    <div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/10 rounded-xl p-4 flex flex-col justify-between border border-white/10">
                      <FaCode className="text-amber-300 text-xl" />
                      <div className="h-1.5 w-1/2 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="h-24 bg-white/10 rounded-xl p-4 flex flex-col justify-between border border-white/10">
                      <FaBuilding className="text-emerald-300 text-xl" />
                      <div className="h-1.5 w-3/4 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -left-8 top-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 text-xl"><FaCertificate /></div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Verified Intern</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Top 1% Performers</p>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -right-6 bottom-20 bg-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700 z-20 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-6 pb-2 border-b border-gray-700">
                  <span className="text-xs font-bold text-white">Offer Received</span>
                  <span className="text-[10px] text-green-400 bg-green-400/20 px-2 rounded font-bold">New</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">TC</div>
                  <p className="text-xs text-white/80 font-medium">Software Engineer (L3)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,189.22,107.5Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* ── BENTO GRID HIGHLIGHTS ── */}
      <section className="py-24 px-4 relative z-10 -mt-10">
        <div className="container-custom max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">The <span className="text-primary-600">Complete Edge</span></h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Everything you need to transform from a learner to a hired professional.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 border border-gray-100 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${h.bg} rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-150`}></div>
                <div className={`w-14 h-14 rounded-2xl ${h.bg} ${h.color} flex items-center justify-center mb-6 text-2xl relative z-10 group-hover:rotate-6 transition-transform shadow-sm`}>
                  <h.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 tracking-tight">{h.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed relative z-10">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CURRICULUM TIMELINE ── */}
      <section className="py-24 px-4">
        <div className="container-custom max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">8-Week <span className="text-primary-600">Transformation Journey</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -ml-0.5 rounded-full"></div>

            <div className="space-y-12">
              {curriculum.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full -ml-3 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className={`bg-white rounded-[2rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-50 hover:border-primary-100 transition-colors ${i % 2 !== 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <span className="inline-block bg-primary-50 text-primary-700 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        {c.week}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{c.title}</h3>
                      <div className="space-y-3">
                        {c.topics.map((t, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5"><FaCheckCircle className="text-green-500 text-sm" /></div>
                            <span className="text-gray-600 font-medium">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY & OUTCOMES ── */}
      <section className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary-600 to-transparent rounded-full blur-[120px] opacity-20 -mr-96 -mt-96 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600 to-transparent rounded-full blur-[120px] opacity-20 -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container-custom max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Who Should <span className="text-primary-400">Apply?</span></h2>
            <div className="space-y-6">
              {eligibility.map((e, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 border border-primary-500/30">
                    <FaUserTie className="text-primary-300" />
                  </div>
                  <p className="text-white/80 text-lg font-light pt-1">{e}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square w-full max-w-md mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="relative w-full aspect-video bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
                <FaVideo className="text-6xl text-gray-600 mb-4" />
                <p className="text-gray-400 font-medium">Student Testimonials Video</p>
                <button className="absolute inset-0 w-full h-full flex items-center justify-center group pointer-events-none">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform pointer-events-auto cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-t-transparent border-b-transparent border-l-white ml-2"></div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GLOWING CTA ── */}
      <section className="py-24 px-4">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight relative z-10">Don't Wait For <br /> Opportunities. <span className="text-amber-300">Create Them.</span></h2>
            <p className="text-white/90 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto relative z-10">
              Spots are extremely limited for the upcoming batch. Secure your seat today and fast-track your tech career.
            </p>

            <div className="relative inline-block group z-10">
              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <button className="relative bg-white text-gray-900 font-bold px-12 py-6 rounded-full shadow-2xl text-xl tracking-wide hover:bg-gray-50 transition-colors flex items-center gap-3 mx-auto">
                Apply Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlacementInternship;