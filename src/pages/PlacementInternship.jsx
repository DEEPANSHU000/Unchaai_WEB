import { motion } from "framer-motion";
import {
  FaBriefcase, FaCertificate, FaChalkboardTeacher, FaCode,
  FaFileAlt, FaHandshake, FaLaptopCode, FaLinkedin,
  FaRegClock, FaUserTie, FaCheckCircle
} from "react-icons/fa";

const highlights = [
  { icon: FaBriefcase, title: "Real Internship Experience", desc: "Work on live projects under industry mentors, not just theory." },
  { icon: FaCertificate, title: "Internship Certificate", desc: "Get a verified certificate to showcase on LinkedIn & your resume." },
  { icon: FaChalkboardTeacher, title: "1-on-1 Mentorship", desc: "Dedicated mentor guidance throughout your internship journey." },
  { icon: FaFileAlt, title: "ATS-Ready Resume", desc: "Build a resume that clears applicant tracking systems effortlessly." },
  { icon: FaLinkedin, title: "LinkedIn Optimization", desc: "Craft a recruiter-magnet profile with expert help." },
  { icon: FaHandshake, title: "Referrals for Top Performers", desc: "Outstanding interns get direct referrals to our hiring partners." },
];

const curriculum = [
  {
    week: "Week 1–2",
    title: "Onboarding & Project Setup",
    topics: ["Team introduction & role assignment", "Tech stack overview", "Setting up dev environment", "Understanding the product roadmap"],
  },
  {
    week: "Week 3–5",
    title: "Core Development",
    topics: ["Feature development tasks", "Code reviews & feedback loops", "Daily standups & sprint planning", "Version control best practices (Git)"],
  },
  {
    week: "Week 6–7",
    title: "Testing & Deployment",
    topics: ["Writing unit & integration tests", "Bug fixing & QA cycles", "Deployment pipeline overview", "Documentation & handoff"],
  },
  {
    week: "Week 8",
    title: "Demo & Career Prep",
    topics: ["Project demo to stakeholders", "Portfolio & case study creation", "Mock interview + feedback", "Certificate & referral process"],
  },
];

const eligibility = [
  "Students in 2nd, 3rd, or final year of engineering/BCA/MCA",
  "Freshers or early-career professionals looking for real experience",
  "Anyone who has completed or is pursuing a programming course",
  "Candidates with basic knowledge of any programming language",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const PlacementInternship = () => {
  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-400 text-white py-20 px-4">
        <div className="container-custom max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              🚀 8-Week Internship Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Kickstart Your Career with a<br />
              <span className="text-yellow-300">Real-World Internship</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
              Gain hands-on experience, build a professional portfolio, and land your dream job — all in 8 weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Apply Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
            {[
              { num: "500+", label: "Interns Placed" },
              { num: "8 Weeks", label: "Program Duration" },
              { num: "95%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold">{s.num}</p>
                <p className="text-white/75 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">What You'll Get</h2>
          <p className="text-center text-gray-500 mb-10">Everything you need to launch your career successfully.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <h.icon className="text-primary-500 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{h.title}</h3>
                <p className="text-gray-500 text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Program Curriculum</h2>
          <p className="text-center text-gray-500 mb-12">A structured 8-week journey from onboarding to job-ready.</p>
          <div className="space-y-6">
            {curriculum.map((c, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6 items-start"
              >
                <div className="min-w-[90px] text-center">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                    {c.week}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 flex-1 border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">{c.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.topics.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary-400 mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-10 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <FaUserTie className="text-primary-500 text-2xl" />
              <h2 className="text-2xl font-bold text-gray-800">Who Can Apply?</h2>
            </div>
            <ul className="space-y-3">
              {eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="text-primary-500 mt-1 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 px-4">
        <div className="container-custom max-w-3xl text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-3xl p-10 text-white">
            <FaLaptopCode className="text-5xl mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-3">Ready to Start Your Internship?</h2>
            <p className="text-white/80 mb-6">
              Limited seats available. Apply now and take the first step toward your dream career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">
                Apply for Internship
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all">
                <FaRegClock className="inline mr-2" />
                Book a Free Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementInternship;