import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    FaUniversity, FaMapMarkerAlt, FaFileAlt, FaHandshake,
    FaCheckCircle, FaChevronDown, FaStar, FaGraduationCap
} from "react-icons/fa";

const topColleges = [
    { name: "IIT Bombay", city: "Mumbai", stream: "Engineering", rank: "#1 NIRF Engineering", color: "bg-blue-50 border-blue-200" },
    { name: "IIT Delhi", city: "New Delhi", stream: "Engineering", rank: "#2 NIRF Engineering", color: "bg-purple-50 border-purple-200" },
    { name: "AIIMS Delhi", city: "New Delhi", stream: "Medical", rank: "#1 NIRF Medical", color: "bg-red-50 border-red-200" },
    { name: "IIM Ahmedabad", city: "Ahmedabad", stream: "Management", rank: "#1 NIRF Management", color: "bg-yellow-50 border-yellow-200" },
    { name: "NIT Trichy", city: "Tiruchirappalli", stream: "Engineering", rank: "#9 NIRF Engineering", color: "bg-green-50 border-green-200" },
    { name: "Delhi University", city: "New Delhi", stream: "Arts & Science", rank: "#11 NIRF Overall", color: "bg-orange-50 border-orange-200" },
    { name: "BITS Pilani", city: "Pilani, Rajasthan", stream: "Engineering", rank: "Top 30 NIRF", color: "bg-teal-50 border-teal-200" },
    { name: "VIT Vellore", city: "Vellore", stream: "Engineering", rank: "Top 20 NIRF", color: "bg-pink-50 border-pink-200" },
];

const exams = [
    { name: "JEE Main", full: "Joint Entrance Examination (Main)", for: "NITs, IIITs, GFTIs", timing: "Jan & Apr", seats: "1,50,000+" },
    { name: "JEE Advanced", full: "Joint Entrance Examination (Advanced)", for: "IITs", timing: "Jun", seats: "17,385" },
    { name: "NEET UG", full: "National Eligibility cum Entrance Test", for: "MBBS, BDS, AIIMS", timing: "May", seats: "1,00,000+" },
    { name: "CAT", full: "Common Admission Test", for: "IIMs and Top B-Schools", timing: "Nov/Dec", seats: "5,000+" },
    { name: "CLAT", full: "Common Law Admission Test", for: "National Law Universities", timing: "Dec", seats: "2,500+" },
    { name: "CUET", full: "Common University Entrance Test", for: "Central Universities", timing: "May–Jun", seats: "Varies" },
];

const steps = [
    { icon: "🎯", title: "Free Career Counselling", desc: "We understand your interests, strengths, and goals to recommend the best stream and college options." },
    { icon: "📚", title: "Exam Strategy & Preparation", desc: "Personalized study plan, mock tests, and mentorship to crack your target entrance examination." },
    { icon: "🏫", title: "College Shortlisting", desc: "Smart shortlisting of colleges across India based on your expected rank, city preference, and career goals." },
    { icon: "📝", title: "Application & Documentation", desc: "Complete guidance on JoSAA counselling, state counselling, direct admissions, and all required documents." },
    { icon: "🎓", title: "Admission & Scholarship", desc: "Final seat allotment guidance, scholarship application assistance, and hostel/accommodation support." },
];

const faqs = [
    { q: "What exams do I need to write for campus admissions?", a: "It depends on your chosen stream. JEE for engineering, NEET for medical, CAT for MBA, CLAT for law, and CUET for central university undergraduate admissions." },
    { q: "Can I get admission to IIT/AIIMS without coaching?", a: "Yes! With the right strategy, structured self-study, and mentorship, many students crack these exams. Our personalized mentorship program is designed exactly for this." },
    { q: "What if I don't get my desired rank?", a: "We have backup plans ready — from state-level colleges, private deemed universities, to alternative career paths. We ensure you always have a strong option." },
    { q: "Do you help with scholarship applications?", a: "Absolutely. We guide you through government scholarships, institution-specific merit scholarships, and other financial aid programs." },
    { q: "Is guidance available for arts, commerce, and science streams?", a: "Yes! We cover all major streams — Engineering, Medical, Management, Law, Design, Arts & Humanities, and more." },
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

const CampusIndiaAdmissions = () => (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

        {/* HERO */}
        <section className="bg-gradient-to-br from-orange-600 to-primary-500 text-white py-20 px-4">
            <div className="container-custom max-w-5xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🏛️ Global Admissions → Campus India</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Get Into Your Dream<br /><span className="text-yellow-300">Indian University</span>
                    </h1>
                    <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
                        Expert guidance for IIT, NIT, AIIMS, IIM, and top college admissions across India — from exam strategy to final seat allotment.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-orange-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">Get Free Counselling</button>
                        <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all">Explore Colleges</button>
                    </div>
                </motion.div>
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
                    {[["5,000+", "Students Guided"], ["500+", "Colleges Covered"], ["IIT to IIM", "All Streams"]].map(([n, l], i) => (
                        <div key={i}><p className="text-3xl font-bold">{n}</p><p className="text-white/75 text-sm mt-1">{l}</p></div>
                    ))}
                </div>
            </div>
        </section>

        {/* TOP COLLEGES */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Top Colleges We Help You Get Into</h2>
                <p className="text-center text-gray-500 mb-12">From IITs to IIMs — we cover admissions across all major streams.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {topColleges.map((c, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className={`rounded-2xl p-5 border-2 ${c.color} hover:shadow-lg transition-all hover:-translate-y-1`}>
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm">
                                <FaUniversity className="text-primary-500" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">{c.name}</h3>
                            <p className="text-xs text-gray-500 mb-1">📍 {c.city}</p>
                            <p className="text-xs text-primary-600 font-semibold mb-1">{c.stream}</p>
                            <p className="text-xs text-gray-400">{c.rank}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ENTRANCE EXAMS */}
        <section className="py-16 px-4 bg-white">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">Major Entrance Exams We Cover</h2>
                <p className="text-center text-gray-500 mb-12">We help you prepare for and navigate every major Indian entrance exam.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {exams.map((e, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{e.name}</span>
                            <p className="text-gray-500 text-xs mb-3">{e.full}</p>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-700"><span className="font-semibold">For:</span> {e.for}</p>
                                <p className="text-xs text-gray-700"><span className="font-semibold">Held:</span> {e.timing}</p>
                                <p className="text-xs text-gray-700"><span className="font-semibold">Seats:</span> {e.seats}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 px-4">
            <div className="container-custom max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">How We Help You</h2>
                <p className="text-center text-gray-500 mb-12">A structured journey from exam prep to final admission.</p>
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
                <p className="text-center text-gray-500 mb-10">Everything about campus admissions in India.</p>
                <div className="space-y-4">{faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
            <div className="container-custom max-w-3xl text-center">
                <div className="bg-gradient-to-r from-orange-600 to-primary-500 rounded-3xl p-10 text-white">
                    <FaGraduationCap className="text-5xl mx-auto mb-4 opacity-80" />
                    <h2 className="text-3xl font-bold mb-3">Ready to Get Into Your Dream College?</h2>
                    <p className="text-white/80 mb-6">Book a free counselling session and let us chart your path to India's top institutions.</p>
                    <button className="bg-white text-orange-700 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">Book Free Counselling</button>
                </div>
            </div>
        </section>
    </div>
);

export default CampusIndiaAdmissions;
