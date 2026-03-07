import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGlobe, FaUniversity, FaPassport, FaFileAlt, FaHandshake,
    FaPlaneDeparture, FaCheckCircle, FaChevronDown, FaArrowRight
} from "react-icons/fa";

const countries = [
    {
        flag: "🇬🇧",
        name: "United Kingdom",
        universities: "200+ Universities",
        highlights: ["Oxford, Cambridge, Imperial", "Post-Study Work Visa (2 yrs)", "Globally ranked degrees"],
        color: "from-blue-500 to-blue-700",
    },
    {
        flag: "🇺🇸",
        name: "United States",
        universities: "500+ Universities",
        highlights: ["MIT, Stanford, Harvard", "OPT / STEM OPT Extension", "World's top research programs"],
        color: "from-red-500 to-red-700",
    },
    {
        flag: "🇨🇦",
        name: "Canada",
        universities: "100+ Universities",
        highlights: ["University of Toronto, UBC", "PGWP up to 3 years", "Easy PR pathway"],
        color: "from-rose-500 to-rose-700",
    },
    {
        flag: "🇦🇺",
        name: "Australia",
        universities: "150+ Universities",
        highlights: ["Group of Eight universities", "485 Graduate Visa", "High quality of life"],
        color: "from-yellow-500 to-yellow-700",
    },
    {
        flag: "🇩🇪",
        name: "Germany",
        universities: "80+ Universities",
        highlights: ["TU Munich, Heidelberg", "Tuition-free public universities", "Strong engineering focus"],
        color: "from-gray-600 to-gray-800",
    },
    {
        flag: "🇸🇬",
        name: "Singapore",
        universities: "30+ Universities",
        highlights: ["NUS, NTU — Top 20 globally", "Asia's financial hub", "Multicultural environment"],
        color: "from-red-400 to-red-600",
    },
];

const steps = [
    { icon: FaFileAlt, step: "01", title: "Free Counselling", desc: "We assess your profile, goals, and budget to suggest the best countries and universities for you." },
    { icon: FaUniversity, step: "02", title: "University Shortlisting", desc: "Data-driven shortlisting based on your academics, test scores, and career aspirations." },
    { icon: FaPassport, step: "03", title: "Application & Documentation", desc: "SOP, LOR, resume building, transcript evaluation — we handle everything end to end." },
    { icon: FaHandshake, step: "04", title: "Visa Guidance", desc: "Step-by-step visa interview prep and document checklist for smooth approval." },
    { icon: FaPlaneDeparture, step: "05", title: "Pre-Departure Support", desc: "Forex, accommodation, travel tips, and local community connect before you fly." },
];

const faqs = [
    { q: "What GPA/percentage is required for global admissions?", a: "Requirements vary by country and university. Generally, a 70–75%+ academic record is a good baseline. We help you find options matching your profile regardless of your scores." },
    { q: "Do I need IELTS/TOEFL for every country?", a: "Most English-speaking countries require an English proficiency test. Germany and some EU countries may have alternative requirements. We guide you on exactly what's needed." },
    { q: "How much does studying abroad cost?", a: "Costs vary widely — Germany has tuition-free public universities while the US/UK can range from $20,000–$60,000/year. We help you find scholarships and financial aid to reduce costs." },
    { q: "Can you help with scholarship applications?", a: "Yes! We actively assist with identifying and applying for merit-based, need-based, and country-specific scholarships to reduce your financial burden." },
    { q: "How long does the whole process take?", a: "Typically 6–12 months from profile assessment to university acceptance. We recommend starting at least a year before your intended intake." },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const FaqItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
                <span className="font-semibold text-gray-800">{q}</span>
                <FaChevronDown className={`transition-transform duration-300 text-gray-400 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                    >
                        {a}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const GlobalAdmissions = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

            {/* ── HERO ── */}
            <section className="bg-gradient-to-br from-indigo-700 to-primary-500 text-white py-20 px-4">
                <div className="container-custom max-w-5xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            🌍 Study Abroad Guidance
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                            Your Dream University,<br />
                            <span className="text-yellow-300">Anywhere in the World</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
                            Expert end-to-end guidance for global university admissions — from shortlisting to visa to landing at your campus.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                Get Free Counselling
                            </button>
                            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">
                                Explore Universities
                            </button>
                        </div>
                    </motion.div>

                    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
                        {[
                            { num: "1,000+", label: "Students Placed Abroad" },
                            { num: "20+", label: "Countries Covered" },
                            { num: "95%", label: "Visa Success Rate" },
                        ].map((s, i) => (
                            <div key={i}>
                                <p className="text-3xl font-bold">{s.num}</p>
                                <p className="text-white/75 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="py-16 px-4">
                <div className="container-custom max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Top Study Destinations</h2>
                    <p className="text-center text-gray-500 mb-12">We guide students to universities in 20+ countries worldwide.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countries.map((c, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                            >
                                <div className={`bg-gradient-to-r ${c.color} p-5 text-white`}>
                                    <span className="text-4xl">{c.flag}</span>
                                    <h3 className="text-xl font-bold mt-2">{c.name}</h3>
                                    <p className="text-white/80 text-sm">{c.universities}</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2">
                                        {c.highlights.map((h, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                                <FaCheckCircle className="text-primary-400 mt-0.5 shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-4 flex items-center gap-1 text-primary-500 text-sm font-semibold hover:gap-2 transition-all">
                                        Learn More <FaArrowRight className="text-xs" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="py-16 px-4 bg-white">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Our Process</h2>
                    <p className="text-center text-gray-500 mb-12">A clear, step-by-step journey to your global campus.</p>
                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-primary-100" />
                        <div className="space-y-8">
                            {steps.map((s, i) => {
                                const SIcon = s.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center">
                                            <SIcon className="text-primary-600 text-2xl" />
                                        </div>
                                        <div className="bg-gray-50 rounded-2xl p-5 flex-1 border border-gray-100">
                                            <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">Step {s.step}</span>
                                            <h3 className="font-bold text-gray-800 text-lg mt-1 mb-2">{s.title}</h3>
                                            <p className="text-gray-500 text-sm">{s.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="py-16 px-4">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">What We Offer</h2>
                    <p className="text-center text-gray-500 mb-10">Comprehensive support at every stage of your application.</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {[
                            { icon: "📋", title: "Profile Evaluation", desc: "Honest assessment of your academic and extra-curricular profile." },
                            { icon: "🏫", title: "University Shortlisting", desc: "Curated list of best-fit universities based on data and your goals." },
                            { icon: "✍️", title: "SOP & LOR Writing", desc: "Compelling personal statements and recommendation letters crafted by experts." },
                            { icon: "📄", title: "Application Submission", desc: "End-to-end application filling, document packaging, and submission." },
                            { icon: "🛂", title: "Visa Assistance", desc: "Document prep, interview coaching, and embassy guidance." },
                            { icon: "🎓", title: "Scholarship Guidance", desc: "Identify and apply for merit and need-based scholarships worldwide." },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-3xl">{s.icon}</span>
                                <h3 className="font-bold text-gray-800 mt-3 mb-1">{s.title}</h3>
                                <p className="text-gray-500 text-sm">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 px-4 bg-white">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Frequently Asked Questions</h2>
                    <p className="text-center text-gray-500 mb-10">Everything you need to know about studying abroad.</p>
                    <div className="space-y-4">
                        {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-12 px-4">
                <div className="container-custom max-w-3xl text-center">
                    <div className="bg-gradient-to-r from-indigo-700 to-primary-500 rounded-3xl p-10 text-white">
                        <FaGlobe className="text-5xl mx-auto mb-4 opacity-80" />
                        <h2 className="text-3xl font-bold mb-3">Start Your Global Journey Today</h2>
                        <p className="text-white/80 mb-6">
                            Book a free 1-on-1 counselling session with our global admissions expert.
                        </p>
                        <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">
                            Book Free Counselling
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalAdmissions;
