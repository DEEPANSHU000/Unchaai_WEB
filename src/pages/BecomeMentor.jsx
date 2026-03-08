import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaClock, FaMoneyBillWave, FaUsers, FaCheckCircle, FaLaptopHouse, FaChevronDown, FaChevronUp } from "react-icons/fa";

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

const BecomeMentor = () => {
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "1. How do I apply to become a teacher on Unchaai?",
      answer: "You can easily apply to become a Mentor on Unchaai with these easy steps:\nStep 1: Apply for mentorship\nStep 2: Get a call from our team\nStep 3: Tell your qualifications and showcase your teaching skills\nStep 4: Get shortlisted, followed by a training\nStep 5: Get started with mentorship"
    },
    {
      question: "2. What are the basic requirements to be a teacher on Unchaai?",
      answer: "To become a Mentor, you must have studied at an IIT. You must have 2 years of tutoring experience on that subject or have a specialization degree in it to become a tutor."
    },
    {
      question: "3. What do I do if I don't have a pen tablet or don't know how to use one?",
      answer: "Pen-tab is the most efficient way to teach a student online. If you don’t have a pen tab, you have to adapt to alternate ways of teaching.\nFor instance, you can use PowerPoint presentations of concepts to make the students understand topics more efficiently."
    },
    {
      question: "4. What is the interview process?",
      answer: "After shortlisting profiles, the interview process consists of two rounds.\n1. Technical Round: Where our team will test your knowledge and experience.\n2. HR Round: Where the HRs will test your soft skills."
    },
    {
      question: "5. How will I get paid?",
      answer: "You will get paid based on your number of sessions every month."
    },
    {
      question: "6. What do I do if my student doesn't attend the class?",
      answer: "If a student is absent, you can inform the management team and mark him absent."
    },
    {
      question: "7. Will my information be safe with Unchaai?",
      answer: "Yes, we keep all your information confidential and protected."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-[80px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.span variants={fadeUp} className="inline-block bg-primary-50 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-primary-100 tracking-wide">
                TEACH WITH UNCHAAI
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Join Our Mentor Community and <span className="text-primary-600">Teach Online</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Teach from the comfort of your home, choose flexible working hours, earn for every session, and make a meaningful impact on students preparing for competitive exams.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setOpen(true)}
                  className="btn-primary py-4 px-8 text-lg rounded-full shadow-xl shadow-primary-500/30 hover:-translate-y-1"
                >
                  Apply to be a Mentor
                </button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Flexible Hours</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Work From Home</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Earn Per Session</div>
              </motion.div>
            </motion.div>

            {/* Hero Image / Stats */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              {/* Replace with actual image later, using abstract design for now */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-green-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <img
                  src="/images/mentor-hero.png"
                  alt="Become a Mentor"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += `
                      <div class="relative z-10 w-full h-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-between">
                         <div class="space-y-4">
                            <div class="w-full h-4 bg-gray-100 rounded flex items-center justify-between"><div class="h-full bg-primary-100 rounded w-2/3"></div></div>
                            <div class="w-full h-4 bg-gray-100 rounded flex items-center justify-between"><div class="h-full bg-blue-100 rounded w-1/2"></div></div>
                            <div class="w-full h-4 bg-gray-100 rounded flex items-center justify-between"><div class="h-full bg-green-100 rounded w-3/4"></div></div>
                         </div>
                         <div class="bg-gray-50 p-6 rounded-2xl flex items-center gap-4">
                            <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl">🎓</div>
                            <div><div class="font-bold text-gray-900">Live Session Active</div><div class="text-xs text-green-500 font-medium">Earned: ₹850.00</div></div>
                         </div>
                      </div>
                    `;
                  }}
                />

                {/* Floating Badges */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><FaMoneyBillWave /></div>
                  <div><div className="text-xs text-gray-500">Avg. Earnings</div><div className="font-bold text-gray-900">₹25k / month</div></div>
                </motion.div>

                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><FaLaptopHouse /></div>
                  <div><div className="text-xs text-gray-500">Environment</div><div className="font-bold text-gray-900">100% Remote</div></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PERKS & BENEFITS ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Perks of joining the <span className="text-primary-600">UnchaAi family</span></h2>
            <p className="text-lg text-gray-600">We empower our mentors to do their best work with maximum flexibility and support.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitCard
              icon={<FaClock className="text-3xl" />}
              color="text-orange-500"
              bg="bg-orange-100"
              title="WFH With Flexible Hours"
              text="You are your own boss. Set your availability calendar and teach from your dorm room or home with complete flexibility."
            />
            <BenefitCard
              icon={<FaMoneyBillWave className="text-3xl" />}
              color="text-green-500"
              bg="bg-green-100"
              title="Earn For Every Lesson"
              text="Get paid fairly for every session you teach. Build a steady stream of income while helping juniors crack their exams."
            />
            <BenefitCard
              icon={<FaUsers className="text-3xl" />}
              color="text-blue-500"
              bg="bg-blue-100"
              title="Steady Stream Of Students"
              text="No need to hustle for marketing. We provide a consistent demand from highly motivated learners ready to be guided."
            />
          </motion.div>
        </div>
      </section>

      {/* -- IMPACT STATS -- */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-orange-500">
        <div className="container-custom">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
          >
            {[
              { num: "10,000+", label: "Students Impacted" },
              { num: "500+", label: "Active Mentors" },
              { num: "25K+", label: "Avg. Monthly Earnings" },
              { num: "95%", label: "Mentor Satisfaction Rate" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.num}</div>
                <div className="text-white/80 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -- HOW IT WORKS -- */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-50 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-primary-100">SIMPLE PROCESS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How It <span className="text-primary-600">Works</span></h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Get started as a UnchaAi mentor in just 5 easy steps. Our onboarding is fast, transparent, and completely free.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-5 gap-6"
            >
              {[
                { step: "01", icon: "📝", title: "Apply Online", desc: "Fill the quick mentor application form." },
                { step: "02", icon: "📞", title: "Get a Call", desc: "Our team will call to understand your profile." },
                { step: "03", icon: "🎓", title: "Demo Session", desc: "Showcase your teaching skills to our evaluators." },
                { step: "04", icon: "✅", title: "Get Shortlisted", desc: "Pass the evaluation and enter training." },
                { step: "05", icon: "🚀", title: "Start Teaching", desc: "Begin your sessions and earn every month." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary-50 border-2 border-primary-200 rounded-full flex items-center justify-center text-3xl shadow-sm">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- THE BENEFITS YOU'LL GET (Cards - matching unchaai.com) -- */}
      <section className="py-24 bg-[#F2F8F1]">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-green-400"></div>
              <span className="text-green-600 text-sm font-bold uppercase tracking-widest">WHAT WE HANDLE</span>
              <div className="h-px w-12 bg-green-400"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">The Benefits You'll Get</h2>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "💳",
                title: "Easy Payout System",
                desc: "Payment is settled based on the number of sessions taken",
                bg: "bg-amber-50",
                border: "border-amber-100"
              },
              {
                icon: "📅",
                title: "Weekly Payout",
                desc: "Get paid weekly for the number of sessions taken in that week",
                bg: "bg-blue-50",
                border: "border-blue-100"
              },
              {
                icon: "🎧",
                title: "24/7 Tutor Support",
                desc: "Our team is available to help you around the clock",
                bg: "bg-purple-50",
                border: "border-purple-100"
              },
              {
                icon: "🏠",
                title: "Teach From Home",
                desc: "Take classes online and avoid the hassle of commuting",
                bg: "bg-green-50",
                border: "border-green-100"
              },
              {
                icon: "📜",
                title: "Enhance Your CV",
                desc: "We recognize our best teachers with a certificate of excellence",
                bg: "bg-orange-50",
                border: "border-orange-100"
              },
              {
                icon: "💡",
                title: "Make A Difference",
                desc: "Help students out with their academic goals",
                bg: "bg-rose-50",
                border: "border-rose-100"
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className={`bg-white rounded-3xl p-8 text-center border ${benefit.border} shadow-sm transition-all duration-300`}
              >
                <div className={`w-20 h-20 ${benefit.bg} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -- MENTOR TEXT TESTIMONIALS -- */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Mentors <span className="text-primary-600">Say About Us</span></h2>
            <p className="text-gray-500 text-lg">Real words from real mentors who have transformed their passion into earnings.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "UnchaAi gave me the best platform to monetize my knowledge. I earn ₹30K+ a month while still in college.", name: "Anmol Sharma", college: "IIT Roorkee", emoji: "👨‍🎓" },
              { quote: "The best part? I don't have to find students. UnchaAi handles it all. I just show up and teach!", name: "Shakshi Verma", college: "DLMP Medical College", emoji: "👩‍⚕️" },
              { quote: "I never thought teaching could be this rewarding. Weekly payouts and zero hassle — I absolutely love it.", name: "Sanchit Kumar", college: "IIT BHU", emoji: "🎓" },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="text-4xl mb-4">{t.emoji}</div>
                <p className="text-gray-700 text-base leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-primary-500 text-sm font-medium">{t.college}</div>
                </div>
                <div className="absolute top-6 right-8 text-8xl text-primary-50 font-serif leading-none">"</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -- MENTOR TESTIMONIALS (VIDEOS) -- */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Hear it from Our <span className="text-primary-600">Mentors!</span></h2>
            <p className="text-lg text-gray-600">See what our top mentors have to say about their journey with UnchaAi.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Vivek Sen", expr: "2+ Years Exp", college: "IIT Roorkee", videoId: "dQw4w9WgXcQ" }, // Placeholders for videos
              { name: "Shakshi Verma", expr: "1+ Years Exp", college: "DLMP Medical College", videoId: "rmCCml7BM_E" }, // Real links if available
              { name: "Anmol Sharma", expr: "3+ Years Exp", college: "IIT Roorkee", videoId: "OljmMWNMAGM" },
              { name: "Sanchit Kumar", expr: "1.5+ Years Exp", college: "IIT BHU", videoId: "FPJEO37ho1I" },
            ].map((mentor, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden group">
                <div className="aspect-[4/5] w-full relative bg-gray-900">
                  {/* YouTube Embed */}
                  <iframe
                    className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${mentor.videoId}?controls=1&rel=0`}
                    title={mentor.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                  {/* Overlay Gradient for text readability if video fails or before play */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                  {/* Mentor Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <p className="text-sm font-bold text-primary-400 mb-1">{mentor.expr}</p>
                    <h3 className="text-xl font-bold mb-1 leading-tight">{mentor.name}</h3>
                    <p className="text-sm text-gray-300">{mentor.college}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-4">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">Ready To Get Started?</h2>
            <p className="text-white/80 text-xl font-light mb-10 max-w-2xl mx-auto relative z-10">
              Join the UnchaAi community today and start shaping the future of millions of ambitious students across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="bg-primary-500 text-white font-bold px-10 py-5 rounded-full shadow-xl shadow-primary-500/30 text-lg tracking-wide hover:bg-primary-600 transition-colors"
              >
                Apply to be a Mentor
              </motion.button>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 border border-white/30 text-white font-bold px-10 py-5 rounded-full text-lg tracking-wide hover:bg-white/20 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-4">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">─── ANSWER YOU NEED TO KNOW ───</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-primary-600">Questions</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Below are some frequently asked questions by teachers about Unchaai's learning and mentorship programs and their answers because we understand that making a life-changing decision is never easy!</p>
          </div>

          <div className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === index ? 'bg-primary-50 text-primary-600' : 'bg-gray-50 text-gray-400'}`}>
                    {activeFaq === index ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL FORM ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-xl p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <FaTimes size={16} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Mentor Application
                </h2>
                <p className="text-gray-500 text-sm">Fill in your details and our team will get back to you.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); setOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">First Name</label>
                    <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Anmol" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Last Name</label>
                    <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Sharma" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email ID</label>
                    <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="10-digit number" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">College / Institute</label>
                  <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="e.g. IIT Delhi, AIIMS New Delhi" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">JEE / NEET Rank (Optional)</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="e.g. AIR 450" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Applying For</label>
                    <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Select Role...</option>
                      <option>JEE Mentor</option>
                      <option>NEET Mentor</option>
                      <option>Subject Tutor</option>
                      <option>Doubt Solver</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Subject Expertise</label>
                    <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Select Subject...</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Mathematics</option>
                      <option>Biology</option>
                      <option>Mentorship Only</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary-500 text-white font-bold py-4 rounded-xl hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 transition-all text-lg tracking-wide">
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* BENEFIT CARD */
const BenefitCard = ({ icon, title, text, bg, color }) => (
  <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group">
    <div className={`w-16 h-16 rounded-2xl ${bg} ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-[15px]">{text}</p>

    <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full ${bg} opacity-50 group-hover:scale-[2] transition-transform duration-500 -z-10`}></div>
  </motion.div>
);

export default BecomeMentor;