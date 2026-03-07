import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    FaGlobe, FaPassport, FaUniversity, FaFileAlt, FaHandshake,
    FaPlaneDeparture, FaCheckCircle, FaChevronDown, FaStar,
    FaArrowRight, FaPhoneAlt
} from "react-icons/fa";

const countries = [
    { flag: "🇬🇧", name: "United Kingdom", seats: "200+ Universities", visa: "Post-Study Work Visa (2 yrs)", top: "Oxford · Cambridge · Imperial", color: "border-blue-200 bg-blue-50" },
    { flag: "🇺🇸", name: "United States", seats: "500+ Universities", visa: "OPT / STEM OPT Extension", top: "MIT · Stanford · Harvard", color: "border-red-200 bg-red-50" },
    { flag: "🇨🇦", name: "Canada", seats: "100+ Universities", visa: "PGWP up to 3 years", top: "University of Toronto · UBC", color: "border-rose-200 bg-rose-50" },
    { flag: "🇦🇺", name: "Australia", seats: "150+ Universities", visa: "485 Graduate Visa", top: "Group of Eight Universities", color: "border-yellow-200 bg-yellow-50" },
    { flag: "🇩🇪", name: "Germany", seats: "80+ Universities", visa: "Job Seeker Visa (18 months)", top: "TU Munich · Heidelberg", color: "border-gray-200 bg-gray-50" },
    { flag: "🇸🇬", name: "Singapore", seats: "30+ Universities", visa: "Employment Pass", top: "NUS · NTU — Top 20 Globally", color: "border-red-200 bg-red-50" },
    { flag: "🇫🇷", name: "France", seats: "60+ Universities", visa: "APS Visa (12 months)", top: "Sorbonne · Sciences Po · CentraleSupélec", color: "border-indigo-200 bg-indigo-50" },
    { flag: "🇳🇱", name: "Netherlands", seats: "40+ Universities", visa: "Orientation Year Permit", top: "TU Delft · Leiden · Erasmus", color: "border-orange-200 bg-orange-50" },
];

const steps = [
    { icon: FaFileAlt, step: "01", title: "Free Profile Evaluation", desc: "We honestly assess your academics, test scores, and goals to suggest the best-fit countries and universities." },
    { icon: FaUniversity, step: "02", title: "University Shortlisting", desc: "Data-driven shortlisting of dream, match, and safety universities aligned with your profile and aspirations." },
    { icon: FaPassport, step: "03", title: "SOP, LOR & Application", desc: "Compelling statement of purpose, recommendation letters, and end-to-end application filing by experts." },
    { icon: FaHandshake, step: "04", title: "Visa Guidance", desc: "Complete visa document preparation, interview coaching, and embassy guidance for smooth approval." },
    { icon: FaPlaneDeparture, step: "05", title: "Pre-Departure Support", desc: "Forex, accommodation, travel tips, and local community connect so you land stress-free." },
];

const faqs = [
    { q: "What GPA is needed for overseas admissions?", a: "Requirements vary by country and university. Generally a 70–75%+ record is a strong baseline. We help match you with best-fit options regardless of your scores." },
    { q: "Do I need IELTS/TOEFL?", a: "Most English-speaking countries require an English proficiency test. Germany and some EU countries may accept other certifications. We guide you on exact requirements." },
    { q: "How much does it cost to study abroad?", a: "Costs range from free public university tuition in Germany to $20,000–$60,000/year in the US/UK. We help you find scholarships to significantly reduce costs." },
    { q: "Can you help with scholarship applications?", a: "Yes! We actively help identify and apply for merit-based, need-based, and country-specific scholarships at every stage." },
    { q: "How long does the process take?", a: "Typically 6–12 months from profile assessment to acceptance. We recommend starting at least a year before your intended intake." },
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

const OverseasAdmissions = () => (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

        {/* HERO */}
        <section className="bg-gradient-to-br from-indigo-700 to-primary-500 text-white py-20 px-4">
            <div className="container-custom max-w-5xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🌍 Global Admissions → Overseas</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Study Abroad with<br /><span className="text-yellow-300">Expert Guidance</span>
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
                        End-to-end overseas university admissions support — from shortlisting your dream university to landing at the airport.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">Get Free Counselling</button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">Explore Countries</button>
                    </div>
                </motion.div>
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
                    {[["1,000+", "Students Placed Abroad"], ["20+", "Countries Covered"], ["95%", "Visa Success Rate"]].map(([n, l], i) => (
                        <div key={i}><p className="text-3xl font-bold">{n}</p><p className="text-white/75 text-sm mt-1">{l}</p></div>
                    ))}
                </div>
            </div>
        </section>

        {/* COUNTRIES */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Top Study Destinations</h2>
                <p className="text-center text-gray-500 mb-12">We guide students to universities across 20+ countries worldwide.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {countries.map((c, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className={`rounded-2xl p-5 border-2 ${c.color} hover:shadow-lg transition-all hover:-translate-y-1`}>
                            <span className="text-4xl">{c.flag}</span>
                            <h3 className="font-bold text-gray-800 mt-3 mb-1">{c.name}</h3>
                            <p className="text-xs text-gray-500 mb-2">{c.seats}</p>
                            <p className="text-xs text-primary-600 font-semibold mb-1">🎓 {c.top}</p>
                            <p className="text-xs text-gray-500">🛂 {c.visa}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 px-4 bg-white">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Our Step-by-Step Process</h2>
                <p className="text-center text-gray-500 mb-12">A clear journey from profile to campus.</p>
                <div className="space-y-6">
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="flex gap-5 items-start">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                                    <Icon className="text-indigo-600 text-xl" />
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
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">What We Offer</h2>
                <p className="text-center text-gray-500 mb-10">Comprehensive support at every stage of your overseas application.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                        { e: "📋", t: "Profile Evaluation", d: "Honest assessment of your academics and extra-curricular profile." },
                        { e: "🏫", t: "University Shortlisting", d: "Data-driven list of dream, match, and safe universities." },
                        { e: "✍️", t: "SOP & LOR Writing", d: "Compelling personal statements and recommendation letters by experts." },
                        { e: "📄", t: "Application Submission", d: "End-to-end filling, document packaging, and submission." },
                        { e: "🛂", t: "Visa Assistance", d: "Document prep, interview coaching, and embassy guidance." },
                        { e: "🎓", t: "Scholarship Guidance", d: "Identify and apply for merit and need-based scholarships worldwide." },
                    ].map((s, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <span className="text-3xl">{s.e}</span>
                            <h3 className="font-bold text-gray-800 mt-3 mb-1">{s.t}</h3>
                            <p className="text-gray-500 text-sm">{s.d}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
            <div className="container-custom max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Frequently Asked Questions</h2>
                <p className="text-center text-gray-500 mb-10">Everything you need to know about studying abroad.</p>
                <div className="space-y-4">{faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
            <div className="container-custom max-w-3xl text-center">
                <div className="bg-gradient-to-r from-indigo-700 to-primary-500 rounded-3xl p-10 text-white">
                    <FaGlobe className="text-5xl mx-auto mb-4 opacity-80" />
                    <h2 className="text-3xl font-bold mb-3">Start Your Global Journey Today</h2>
                    <p className="text-white/80 mb-6">Book a free 1-on-1 counselling session with our overseas admissions expert.</p>
                    <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">Book Free Counselling</button>
                </div>
            </div>
        </section>
    </div>
);

export default OverseasAdmissions;
