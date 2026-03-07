import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    FaLaptop, FaCheckCircle, FaChevronDown, FaGraduationCap,
    FaClock, FaUserGraduate, FaStar, FaGlobe, FaShieldAlt
} from "react-icons/fa";

const platforms = [
    { name: "IIT Online Degree", provider: "IIT Madras / IIT Bombay", type: "B.Sc. / M.Sc. / MBA", duration: "2–4 Years", mode: "100% Online", color: "border-blue-200 bg-blue-50", badge: "IIT" },
    { name: "IGNOU Programs", provider: "Indira Gandhi National Open University", type: "BA / B.Com / BCA / MA", duration: "2–6 Years", mode: "Open Distance Learning", color: "border-orange-200 bg-orange-50", badge: "ODL" },
    { name: "Online MBA", provider: "Top B-Schools (SPJIMR, NMIMS, etc.)", type: "MBA / PGDM Online", duration: "2 Years", mode: "Live Online", color: "border-purple-200 bg-purple-50", badge: "MBA" },
    { name: "NPTEL Certification", provider: "IITs & IISc", type: "Certificate Courses", duration: "4–12 Weeks", mode: "Online", color: "border-green-200 bg-green-50", badge: "Cert" },
    { name: "UGC Recognized Online Degrees", provider: "UGC-approved Universities", type: "BA / B.Com / BBA / BCA", duration: "3 Years", mode: "Online", color: "border-teal-200 bg-teal-50", badge: "UGC" },
    { name: "Professional Certifications", provider: "ICAI / ICSI / CA / CS", type: "CA / CS / CMA", duration: "3–5 Years", mode: "Mixed Mode", color: "border-red-200 bg-red-50", badge: "Pro" },
];

const benefits = [
    { icon: FaClock, title: "Flexible Timings", desc: "Study at your own pace — no rigid schedules. Perfect for working professionals and gap-year students." },
    { icon: FaShieldAlt, title: "UGC / Govt Recognized", desc: "All programs we guide you through are recognized by UGC, AICTE, or relevant government bodies." },
    { icon: FaGlobe, title: "Access Anywhere", desc: "Study from anywhere in India with a stable internet connection — no relocation required." },
    { icon: FaStar, title: "IIT / Top Institute Credentials", desc: "Earn a degree or certificate from IIT, IIM, or other top institutions without leaving your city." },
    { icon: FaUserGraduate, title: "1-on-1 Mentorship", desc: "We provide dedicated academic mentors to guide you through the online program alongside counselling." },
    { icon: FaLaptop, title: "Career-Aligned Programs", desc: "We help you pick programs that are aligned with your career goals and industry demands." },
];

const steps = [
    { icon: "🎯", title: "Career Goal Assessment", desc: "We understand your interests, current qualifications, and career goals to recommend the best online program." },
    { icon: "🏫", title: "Program Shortlisting", desc: "We shortlist UGC-recognized online degrees, IIT online programs, or certification courses that fit your profile." },
    { icon: "📝", title: "Application Guidance", desc: "Step-by-step guidance on filling applications, document submission, and entrance requirements (if any)." },
    { icon: "💻", title: "Enrollment Support", desc: "Assistance during enrollment, fee payment, platform setup, and understanding the study structure." },
    { icon: "🎓", title: "Academic Mentorship", desc: "Ongoing mentorship to help you stay on track, clear doubts, and complete the program successfully." },
];

const faqs = [
    { q: "Are online Indian degrees valid for jobs?", a: "Yes! UGC-recognized online degrees from accredited universities hold the same value as regular degrees for most government and private sector jobs in India." },
    { q: "Can I do an IIT degree online?", a: "Yes! IIT Madras offers an online B.Sc. in Data Science & Applications and IIT Bombay has online certificate programs. We guide you through the entire admission process." },
    { q: "What is the difference between distance learning and online learning?", a: "Distance learning (like IGNOU) is mostly self-paced with physical study materials. Online learning involves live/recorded sessions through digital platforms, often with more interaction." },
    { q: "Can a working professional do an online degree?", a: "Absolutely! Online programs are designed for working professionals. You can attend classes during evenings/weekends and study at your own pace." },
    { q: "Do you help with IGNOU admissions?", a: "Yes! We help students choose the right IGNOU program, fill the application, understand the credit transfer system, and navigate the exam structure." },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-semibold text-gray-800 text-sm">{q}</span>
                <FaChevronDown className={`transition-transform duration-300 text-gray-400 flex-shrink-0 ml-3 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{a}</motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const OnlineIndiaAdmissions = () => (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

        {/* HERO */}
        <section className="bg-gradient-to-br from-teal-700 to-primary-500 text-white py-20 px-4">
            <div className="container-custom max-w-5xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">💻 Global Admissions → Online India</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Earn a Recognized Indian<br /><span className="text-yellow-300">Degree — Online</span>
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
                        Get into IIT, UGC-recognized, or top Indian university online programs — study from anywhere, anytime, with full expert guidance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">Explore Programs</button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">Book Free Counselling</button>
                    </div>
                </motion.div>
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
                    {[["2,000+", "Students Enrolled"], ["UGC/AICTE", "Recognized Programs"], ["100%", "Flexible Learning"]].map(([n, l], i) => (
                        <div key={i}><p className="text-3xl font-bold">{n}</p><p className="text-white/75 text-sm mt-1">{l}</p></div>
                    ))}
                </div>
            </div>
        </section>

        {/* PROGRAMS */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Online Programs We Guide You Into</h2>
                <p className="text-center text-gray-500 mb-12">UGC-recognized, IIT-backed, and career-aligned online Indian programs.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {platforms.map((p, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className={`rounded-2xl p-5 border-2 ${p.color} hover:shadow-lg transition-all hover:-translate-y-1`}>
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                    <FaLaptop className="text-primary-500" />
                                </div>
                                <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded-full">{p.badge}</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">{p.name}</h3>
                            <p className="text-xs text-gray-500 mb-2">{p.provider}</p>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-700"><span className="font-semibold">Type:</span> {p.type}</p>
                                <p className="text-xs text-gray-700"><span className="font-semibold">Duration:</span> {p.duration}</p>
                                <p className="text-xs text-primary-600 font-semibold">💻 {p.mode}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 px-4 bg-white">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Why Choose Online India Admissions?</h2>
                <p className="text-center text-gray-500 mb-12">The smartest way to get a recognized degree without boundaries.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                                    <Icon className="text-teal-600 text-xl" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                                <p className="text-gray-500 text-sm">{b.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">How We Help You Enroll</h2>
                <p className="text-center text-gray-500 mb-12">A simple 5-step journey from goal to graduation.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {steps.map((s, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <span className="text-3xl">{s.icon}</span>
                            <h3 className="font-bold text-gray-800 mt-3 mb-2">{s.title}</h3>
                            <p className="text-gray-500 text-sm">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
            <div className="container-custom max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Frequently Asked Questions</h2>
                <p className="text-center text-gray-500 mb-10">Everything about online Indian university admissions.</p>
                <div className="space-y-4">{faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
            <div className="container-custom max-w-3xl text-center">
                <div className="bg-gradient-to-r from-teal-700 to-primary-500 rounded-3xl p-10 text-white">
                    <FaLaptop className="text-5xl mx-auto mb-4 opacity-80" />
                    <h2 className="text-3xl font-bold mb-3">Start Your Online Degree Journey Today</h2>
                    <p className="text-white/80 mb-6">Book a free session to find the perfect online program for your goals.</p>
                    <button className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">Book Free Counselling</button>
                </div>
            </div>
        </section>
    </div>
);

export default OnlineIndiaAdmissions;
