import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUserGraduate, FaStar, FaArrowRight, FaAtom, FaFlask, FaCalculator, FaLeaf, FaBookOpen, FaBrain } from "react-icons/fa";

/* ─────────────────────────────────────────
   ALL COURSE DATA (from unchaai.com)
───────────────────────────────────────── */
const courseData = {

    /* ══ JEE CLASS 11 ══ */
    "jee-class-11": {
        title: "JEE Class 11 Batch",
        tag: "JEE",
        badge: "Foundation 2026",
        heroTitle: "JEE Foundation 2026",
        heroSubtitle: "Concept-Focused Ultra-Small Batch Program",
        desc: "The JEE Foundation Program 2026 is a carefully structured, concept-driven academic model designed for serious Class 11 aspirants targeting IITs, NITs, and top engineering institutions. With a maximum of only 10 students per batch, we ensure individual attention, early JEE exposure, and strong mentor-student connection.",
        color: "from-blue-600 to-indigo-600",
        lightColor: "bg-blue-50 text-blue-600 border-blue-200",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "Foundation-to-Advanced learning",
            "Individual mentorship",
            "Regular practice & feedback",
            "Early exam temperament",
        ],
        sections: [
            {
                title: "Academic Structure",
                icon: FaBookOpen,
                items: [
                    "Step-by-step theory explanation with visualization",
                    "Gradual progression basic to advanced",
                    "Regular doubt-solving sessions",
                    "Alignment with Class 11 syllabus + JEE",
                    "Personalized Class 11 study plan",
                    "Weekly performance tracking",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "Chapter-wise theory notes & solved problems",
                    "Formula sheets and concept summaries",
                    "Extensive chapter-wise question bank",
                    "Categorized: Foundation → JEE Main → Advanced",
                    "Daily Practice Problems (DPPs)",
                    "Integrated concept-based questions",
                ],
            },
            {
                title: "Revision & Assessment",
                icon: FaCheckCircle,
                items: [
                    "Concise chapter-wise revision notes",
                    "Weekly and monthly revision plans",
                    "Concept reinforcement for tough chapters",
                    "Chapter-wise tests after every chapter",
                    "Cumulative part tests covering multiple",
                    "Performance analysis & roadmap",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 11 students aspiring for IITs / NITs",
            "Students wanting strong fundamentals",
            "Learners needing structured guidance",
            "Parents looking for low-crowd coaching",
        ],
        outcomes: [
            "Strong conceptual clarity in PCM",
            "Confidence in problem-solving",
            "Disciplined study habits",
            "Early exposure to JEE Advanced",
            "Smooth transition to Class 12",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "jee",
    },

    /* ══ JEE CLASS 12 ══ */
    "jee-class-12": {
        title: "JEE Class 12 Batch",
        tag: "JEE",
        badge: "Advanced 2026",
        heroTitle: "JEE Class 12 Preparation 2026",
        heroSubtitle: "Advanced Small Batch Tutoring",
        desc: "Designed for Class 12 JEE aspirants who already have basic Class 11 exposure and now need structured syllabus completion, deep problem-solving, and exam-oriented mentorship. The program ensures focused Class 12 coverage, board-JEE alignment, and individual mentorship to avoid backlog and burnout.",
        color: "from-purple-600 to-indigo-500",
        lightColor: "bg-purple-50 text-purple-600 border-purple-200",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "Integrated Board + JEE strategy",
            "Individual academic planning",
            "Structured practice & testing",
            "JEE Main & Advanced curriculum",
        ],
        sections: [
            {
                title: "Academic Structure",
                icon: FaBookOpen,
                items: [
                    "NCERT-aligned theory + conceptual JEE depth",
                    "Progression: Board → Main → Advanced",
                    "Balance school exams and JEE prep",
                    "Daily performance management",
                    "Exam strategy and stress management",
                    "Regular doubt-solving sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "Chapter-wise detailed theory notes",
                    "Solved examples & formula sheets",
                    "Extensive question bank (Board to Adv)",
                    "PYQs (Main & Advanced)",
                    "Daily Practice Problems (DPPs)",
                    "Integrated 11th + 12th problems",
                ],
            },
            {
                title: "Revision & Assessment",
                icon: FaCheckCircle,
                items: [
                    "Concise revision notes & key derivations",
                    "Weekly, monthly, and pre-exam revision",
                    "High-intensity revision before exams",
                    "Focus on high-weightage chapters",
                    "Chapter-wise tests + part tests",
                    "Full-length mock tests",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 12 students targeting Top Colleges",
            "Students needing board + JEE dual strategy",
            "Learners wanting structured guidance",
            "Students seeking personal attention",
        ],
        outcomes: [
            "Complete PCM syllabus mastery",
            "Strong board exam performance (90%+)",
            "Advanced JEE problem-solving",
            "Disciplined exam temperament",
            "Confidence for JEE Main & Advanced",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "jee",
    },

    /* ══ JEE DROPPER ══ */
    "jee-dropper": {
        title: "JEE Droppers Batch",
        tag: "JEE",
        badge: "Dropper 2026",
        heroTitle: "JEE Preparation 2026",
        heroSubtitle: "Small Batch Tutoring for Droppers",
        desc: "A highly personalized JEE preparation model designed for serious dropper aspirants who require individual attention, structured mentorship, and deep conceptual clarity. With a maximum batch size of 10 students, the program combines 1-on-1 style tutoring within a small batch.",
        color: "from-orange-500 to-red-500",
        lightColor: "bg-orange-50 text-orange-600 border-orange-200",
        subjects: ["Physics", "Chemistry", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "Individual mentorship",
            "Structured daily practice",
            "Complete syllabus with revisions",
            "Exam-oriented preparation",
        ],
        sections: [
            {
                title: "Program Focus",
                icon: FaBookOpen,
                items: [
                    "1-on-1 style tutoring in a small batch",
                    "Dedicated mentor for every student",
                    "Concept mastery & advanced problem-solving",
                    "Complete syllabus coverage",
                    "Multiple full revision cycles",
                    "Exam temperament training",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "Comprehensive study modules for PCM",
                    "Chapter-wise question banks",
                    "PYQ analysis & pattern-based practice",
                    "Daily Practice Problems (DPPs)",
                    "Full-length mock tests",
                    "Detailed performance analysis",
                ],
            },
            {
                title: "Mentorship & Support",
                icon: FaCheckCircle,
                items: [
                    "Dedicated personal academic mentor",
                    "Weekly 1-on-1 mentorship sessions",
                    "Personalized revision plan",
                    "Weak chapter identification",
                    "Psychological support sessions",
                    "Referral for top performers",
                ],
            },
        ],
        whoShouldJoin: [
            "Students who want to improve JEE rank",
            "Dropper students seeking structured guidance",
            "Aspirants targeting IIT / NIT in 2nd attempt",
            "Students needing personal attention",
        ],
        outcomes: [
            "Significantly improved JEE rank",
            "Mastery in PCM with revision confidence",
            "Advanced exam temperament",
            "Strategies to avoid repeated mistakes",
            "Full problem-solving speed & accuracy",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "jee",
    },

    /* ══ NEET CLASS 11 ══ */
    "neet-class-11": {
        title: "NEET Class 11 Batch",
        tag: "NEET",
        badge: "Foundation 2026",
        heroTitle: "NEET Foundation 2026",
        heroSubtitle: "Ultra-Small Batch Tutoring",
        desc: "A foundation-building NEET preparation model for Class 11 students, aimed at developing strong NCERT-based concepts, disciplined study habits, and early exam readiness. With an ultra-small batch of maximum 10 students, the focus is on NCERT mastery, accuracy, consistency, and conceptual understanding.",
        color: "from-teal-500 to-green-500",
        lightColor: "bg-teal-50 text-teal-600 border-teal-200",
        subjects: ["Physics", "Chemistry", "Biology"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "NCERT-first teaching methodology",
            "Individual study planning",
            "Structured practice & assessment",
            "Early NEET exam temperament",
        ],
        sections: [
            {
                title: "Academic Structure",
                icon: FaBookOpen,
                items: [
                    "Line-by-line NCERT explanation",
                    "Gradual shift to NEET-style MCQs",
                    "Regular doubt-solving sessions",
                    "Personalized Class 11 study plan",
                    "Balance school exams and NEET prep",
                    "Weekly progress tracking",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "Chapter-wise theory notes (NCERT focus)",
                    "Solved NEET-level MCQs & summaries",
                    "Question bank: NCERT → Conceptual → AR",
                    "Previous Year NEET Questions",
                    "Daily Practice Problems (DPPs)",
                    "Integrated MCQs",
                ],
            },
            {
                title: "Revision & Assessment",
                icon: FaCheckCircle,
                items: [
                    "Concise notes, formulas & bio diagrams",
                    "Weekly and monthly revision plans",
                    "Concept reinforcement",
                    "Chapter-wise NEET pattern tests",
                    "Cumulative tests for retention",
                    "Performance improvement roadmap",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 11 students aspiring for MBBS",
            "Students wanting strong NEET foundation",
            "Learners needing personal attention",
            "Parents looking for quality coaching",
        ],
        outcomes: [
            "Strong NCERT-based conceptual clarity",
            "Improved MCQ accuracy & speed",
            "Disciplined study habits",
            "Smooth transition to Class 12",
            "Early NEET exam temperament",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "neet",
    },

    /* ══ NEET CLASS 12 ══ */
    "neet-class-12": {
        title: "NEET Class 12 Batch",
        tag: "NEET",
        badge: "Focused 2026",
        heroTitle: "NEET UG Preparation 2026",
        heroSubtitle: "Ultra-Small Batch Tutoring",
        desc: "A focused NEET preparation program for Class 12 students balancing board exams alongside NEET prep. With maximum 10 students per batch, the program delivers NCERT-mastery, board-to-NEET integrated strategy, targeted practice, and continuous mentorship.",
        color: "from-emerald-500 to-teal-500",
        lightColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
        subjects: ["Physics", "Chemistry", "Biology"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "Integrated Board + NEET strategy",
            "Individual academic planning",
            "Structured practice & testing",
            "NEET UG & Board alignment",
        ],
        sections: [
            {
                title: "Academic Structure",
                icon: FaBookOpen,
                items: [
                    "Line-by-line NCERT + NEET MCQ practice",
                    "Balance board exams with NEET",
                    "11th Revision + full 12th coverage",
                    "Personalized study plan",
                    "Daily performance tracking",
                    "Regular doubt-solving sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "Chapter-wise NCERT highlight notes",
                    "Biology diagrams & fact summaries",
                    "MCQ bank: NCERT → Conceptual → PYQ",
                    "Previous Year NEET Questions",
                    "Daily Practice Problems (DPPs)",
                    "Assertion-Reason & Match-the-Following",
                ],
            },
            {
                title: "Revision & Assessment",
                icon: FaCheckCircle,
                items: [
                    "Concise revision notes & diagrams",
                    "Weekly, monthly, pre-exam revision",
                    "Chapter-wise NEET pattern tests",
                    "Full-length NEET mock tests",
                    "Cumulative part tests",
                    "Performance feedback plan",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 12 students targeting MBBS / AIIMS",
            "Students needing board + NEET strategy",
            "Learners wanting structured guidance",
            "Students seeking personal attention",
        ],
        outcomes: [
            "Complete PCB NCERT mastery",
            "Strong board exam performance",
            "High MCQ accuracy & speed",
            "Disciplined exam temperament",
            "Confidence to crack NEET in 1st attempt",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "neet",
    },

    /* ══ NEET DROPPER ══ */
    "neet-dropper": {
        title: "NEET Droppers Batch",
        tag: "NEET",
        badge: "Dropper 2026",
        heroTitle: "NEET UG Preparation 2026",
        heroSubtitle: "Ultra-Small Batch Tutoring for Droppers",
        desc: "A focused, high-intensity NEET preparation program for dropper students who want to significantly improve their NEET rank. With maximum 10 students per batch, the program combines dedicated 1-on-1 mentorship, complete NCERT mastery, aggressive revision cycles, and full-length test series.",
        color: "from-rose-500 to-pink-600",
        lightColor: "bg-rose-50 text-rose-600 border-rose-200",
        subjects: ["Physics", "Chemistry", "Biology"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring",
            "Dedicated 1-on-1 mentorship",
            "Complete syllabus revision",
            "Aggressive test series & PYQs",
            "Exam-oriented preparation",
        ],
        sections: [
            {
                title: "Program Focus",
                icon: FaBookOpen,
                items: [
                    "Complete NCERT revision from scratch",
                    "1-on-1 style tutoring within a small batch",
                    "Dedicated mentor for every student",
                    "Weak chapter identification",
                    "MCQ accuracy & speed techniques",
                    "Psychological support sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                icon: FaBrain,
                items: [
                    "NCERT-aligned study modules",
                    "Biology diagrams & fact summaries",
                    "Extensive chapter-wise MCQs",
                    "PYQ (2015–2024) analysis",
                    "Daily Practice Problems (DPPs)",
                    "Assertion-Reason & Match-the-Following",
                ],
            },
            {
                title: "Revision & Assessment",
                icon: FaCheckCircle,
                items: [
                    "Multiple complete revision cycles",
                    "Weekly, monthly, pre-exam revision",
                    "Full-length NEET mock tests",
                    "Detailed performance analysis",
                    "Chapter-wise and part tests",
                    "Common mistake error correction",
                ],
            },
        ],
        whoShouldJoin: [
            "Students who want to improve NEET rank",
            "Dropper students seeking focused guidance",
            "Aspirants targeting MBBS / AIIMS",
            "Students needing NCERT mastery",
        ],
        outcomes: [
            "Significantly improved NEET score",
            "Complete NCERT mastery across PCB",
            "Improved MCQ accuracy & speed",
            "Strategies to eliminate mistakes",
            "Confidence for NEET UG exam day",
        ],
        duration: "1 Year",
        students: "Max 10/batch",
        type: "neet",
    },
};

const subjectIcons = {
    jee: [FaAtom, FaFlask, FaCalculator],
    neet: [FaAtom, FaFlask, FaLeaf],
};

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

/* ─── MAIN COMPONENT ─── */
const CoursePage = ({ onBookTrialClick }) => {
    const { slug } = useParams();
    const course = courseData[slug];

    if (!course) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">We couldn't locate the details for this course. Please check the URL or return to the main courses menu.</p>
                    <Link to="/courses" className="bg-primary-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-600 transition-colors shadow-lg">
                        Browse Courses
                    </Link>
                </motion.div>
            </div>
        );
    }

    const icons = subjectIcons[course.type];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen overflow-hidden">

            {/* ── HERO SECTION WITH GLASSMORPHISM & FLOATING BLOBS ── */}
            <section className={`relative bg-gradient-to-br ${course.color} text-white pt-24 pb-32 px-4 overflow-hidden`}>
                {/* Floating Shapes Background */}
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] right-[5%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></motion.div>

                <div className="container-custom max-w-5xl relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">{course.tag}</span>
                            <span className="bg-black/20 backdrop-blur-md border border-black/10 text-white/95 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">{course.badge}</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight drop-shadow-md">
                            {course.heroTitle}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide">{course.heroSubtitle}</p>
                        <p className="text-white/80 text-base md:text-lg max-w-4xl mx-auto mb-10 leading-relaxed font-light backdrop-blur-sm bg-white/5 p-6 rounded-3xl border border-white/10 shadow-xl">
                            {course.desc}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm mb-12">
                            {[
                                { icon: FaClock, text: course.duration },
                                { icon: FaUserGraduate, text: course.students },
                                { icon: FaStar, text: "1-on-1 Mentorship" }
                            ].map((badge, idx) => (
                                <motion.span whileHover={{ scale: 1.05, y: -2 }} key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 shadow hover:bg-white/20 transition-all cursor-default">
                                    <badge.icon className="text-yellow-300" /> {badge.text}
                                </motion.span>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBookTrialClick}
                            className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all text-lg tracking-wide relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">Book a Free Trial Session <FaArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Curved divider at bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                    <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,189.22,107.5Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* ── HIGHLIGHTS (Staggered Grid) ── */}
            <section className="py-16 px-4 -mt-16 relative z-10">
                <div className="container-custom max-w-6xl">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-3 gap-6">
                        {course.highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 group"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${course.lightColor} font-bold text-xl group-hover:scale-110 transition-transform`}>
                                    {i + 1}
                                </div>
                                <span className="text-gray-700 font-medium leading-tight">{h}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── SUBJECTS (Floating Cards) ── */}
            <section className="py-16 px-4 bg-white">
                <div className="container-custom max-w-5xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Subjects Mastered</h2>
                        <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
                        {course.subjects.map((sub, i) => {
                            const Icon = icons[i] || FaAtom;
                            return (
                                <motion.div key={i} variants={popIn} whileHover={{ y: -10 }} className="bg-gray-50 rounded-[2rem] p-8 text-center shadow-lg border border-gray-100 relative overflow-hidden group">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150`}></div>
                                    <div className="w-20 h-20 mx-auto rounded-3xl bg-white shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform">
                                        <Icon className="text-3xl text-primary-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 relative z-10">{sub}</h3>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ── DETAILED SECTIONS (Alternating Layout) ── */}
            <section className="py-20 px-4">
                <div className="container-custom max-w-5xl space-y-24">
                    {course.sections.map((sec, si) => (
                        <motion.div
                            key={si}
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                            className={`flex flex-col md:flex-row items-center gap-12 ${si % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="md:w-1/2">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl ${course.lightColor}`}>
                                    <sec.icon />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{sec.title}</h2>
                                <div className="space-y-4">
                                    {sec.items.map((item, i) => (
                                        <motion.div whileHover={{ x: 5 }} key={i} className="flex items-start gap-4">
                                            <FaCheckCircle className="text-primary-500 mt-1 shrink-0 text-lg" />
                                            <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 shadow-2xl border border-gray-100 relative overflow-hidden flex items-center justify-center p-6 md:p-8 group">
                                    {/* Animated Gradient Orbs */}
                                    <div className={`absolute top-0 right-0 w-[120%] h-[120%] bg-gradient-to-br ${course.color} opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-transform duration-700 group-hover:scale-110`}></div>
                                    <div className={`absolute bottom-0 left-0 w-[80%] h-[80%] bg-gradient-to-tr ${course.color} opacity-[0.05] rounded-full blur-2xl translate-y-1/3 -translate-x-1/3`}></div>

                                    <div className="relative w-full h-full flex flex-col justify-center gap-5 z-10 max-w-sm">

                                        {/* Floating Notification/Action Card */}
                                        <motion.div
                                            animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white flex items-center justify-between w-[90%] mx-auto z-10 hover:bg-white transition-colors cursor-default"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${course.lightColor} shrink-0`}>
                                                    <sec.icon className="text-lg" />
                                                </div>
                                                <div>
                                                    <div className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">{sec.title}</div>
                                                    <div className="text-[10px] text-gray-500 mt-0.5 font-medium">Active Module</div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-primary-50 transition-colors">
                                                <FaArrowRight className="text-gray-300 transform -rotate-45 text-xs group-hover:text-primary-500 transition-colors" />
                                            </div>
                                        </motion.div>

                                        {/* Main Chart/Progress Card */}
                                        {si === 0 && (
                                            <>
                                                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-50 w-full md:-ml-6 flex flex-col gap-6 z-20 relative">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-sm font-bold text-gray-800">Weekly Progress</div>
                                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md border border-green-100">+12%</span>
                                                    </div>
                                                    <div className="flex gap-5 items-center">
                                                        <div className="w-[72px] h-[72px] shrink-0 relative flex items-center justify-center">
                                                            <svg className="w-[72px] h-[72px] transform -rotate-90">
                                                                <circle cx="36" cy="36" r="32" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-50" />
                                                                <motion.circle initial={{ strokeDasharray: "201", strokeDashoffset: "201" }} whileInView={{ strokeDashoffset: "40" }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} cx="36" cy="36" r="32" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-primary-500" strokeLinecap="round" />
                                                            </svg>
                                                            <div className="absolute flex flex-col items-center justify-center">
                                                                <span className="text-base font-black text-gray-800 leading-none">80</span>
                                                                <span className="text-[9px] font-bold text-gray-400 leading-none mt-0.5">%</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow space-y-3.5">
                                                            <div>
                                                                <div className="flex justify-between text-[11px] font-semibold text-gray-500 mb-1.5"><span>Lectures</span><span className="text-gray-800">18/20</span></div>
                                                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1.5, delay: 0.5 }} className={`h-full bg-gradient-to-r ${course.color}`}></motion.div></div>
                                                            </div>
                                                            <div>
                                                                <div className="flex justify-between text-[11px] font-semibold text-gray-500 mb-1.5"><span>Practice</span><span className="text-gray-800">45/60</span></div>
                                                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.7 }} className={`h-full bg-gradient-to-r ${course.color} opacity-70`}></motion.div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Floating Badges */}
                                                <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-6 right-0 w-12 h-12 bg-white rounded-2xl shadow-lg border border-gray-50 flex items-center justify-center z-0">
                                                    <FaStar className="text-yellow-400 text-xl" />
                                                </motion.div>
                                                <motion.div animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-6 right-6 bg-gray-900 border border-gray-700 text-white text-[10px] font-bold px-3 py-2 rounded-full shadow-2xl z-30 flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Live Session
                                                </motion.div>
                                            </>
                                        )}

                                        {si === 1 && (
                                            <>
                                                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-50 w-full md:-ml-6 flex flex-col gap-4 z-20 relative">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="text-sm font-bold text-gray-800">Latest Materials</div>
                                                        <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">View All</span>
                                                    </div>
                                                    {[1, 2, 3].map((_, i) => (
                                                        <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors cursor-pointer group/item">
                                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${course.color} shrink-0`}>
                                                                <FaBookOpen className="text-white text-sm" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="text-xs font-bold text-gray-800 group-hover/item:text-primary-600 transition-colors">Chapter {i + 1} Notes</div>
                                                                <div className="text-[10px] text-gray-500">PDF • 2.{i + 1} MB</div>
                                                            </div>
                                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover/item:bg-primary-100 group-hover/item:text-primary-600 transition-colors">
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </motion.div>

                                                <motion.div animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-50 flex items-center justify-center z-0 text-2xl">
                                                    📚
                                                </motion.div>
                                            </>
                                        )}

                                        {si === 2 && (
                                            <>
                                                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-50 w-full md:-ml-6 flex flex-col gap-5 z-20 relative">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-sm font-bold text-gray-800">Mock Test Scores</div>
                                                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100"><FaStar className="text-yellow-500 text-xs" /> <span className="text-[10px] font-bold text-yellow-700">Top 5%</span></div>
                                                    </div>

                                                    {/* Bar Chart */}
                                                    <div className="h-28 flex items-end justify-between gap-1.5 md:gap-2 pt-2 border-b border-gray-100 pb-2 relative">
                                                        {/* Target Line */}
                                                        <div className="absolute top-6 left-0 w-full border-t border-dashed border-gray-300"></div>

                                                        {[40, 55, 45, 75, 60, 85, 95].map((height, i) => (
                                                            <div key={i} className="w-full flex justify-center h-full items-end group">
                                                                <motion.div initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className={`w-full max-w-[12px] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity ${i === 6 ? `bg-gradient-to-t ${course.color}` : 'bg-gray-200'}`}></motion.div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Stats */}
                                                    <div className="flex justify-between items-center pt-2">
                                                        <div>
                                                            <div className="text-2xl font-black text-gray-900 leading-none">680<span className="text-sm text-gray-400 font-medium">/720</span></div>
                                                            <div className="text-[10px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">Latest Score</div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-sm font-bold border border-green-200 text-green-600 bg-green-50 px-2 rounded">+45 pts</div>
                                                            <div className="text-[10px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">Improvement</div>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-4 right-10 bg-white border border-gray-100 rounded-2xl shadow-xl px-4 py-3 z-30 flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold text-gray-800">100% Accuracy</div>
                                                        <div className="text-[9px] text-gray-500">In Physics</div>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── WHO SHOULD JOIN + OUTCOMES (Bento Grid) ── */}
            <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl ${course.color} rounded-full blur-[120px] opacity-20 -mr-96 -mt-96 pointer-events-none`}></div>

                <div className="container-custom max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Who Should Join */}
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <FaUserGraduate className="text-blue-400" /> Target Audience
                            </h2>
                            <ul className="space-y-6">
                                {course.whoShouldJoin.map((w, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80 text-lg">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="w-2.5 h-2.5 bg-blue-400 rounded-full"></span>
                                        </div>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Outcomes */}
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-white/10 rounded-3xl p-10">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <FaStar className="text-yellow-400" /> Key Outcomes
                            </h2>
                            <ul className="space-y-6">
                                {course.outcomes.map((o, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/90 text-lg font-medium">
                                        <FaCheckCircle className="text-green-400 mt-1.5 shrink-0 text-xl" />
                                        {o}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── EXPLORE OTHER BATCHES ── */}
            <section className="py-20 px-4 bg-white">
                <div className="container-custom max-w-6xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Explore Other Batches</h2>
                    </motion.div>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Object.entries(courseData)
                            .filter(([k]) => k !== slug)
                            .slice(0, 3)
                            .map(([k, c], i) => (
                                <Link
                                    key={k}
                                    to={`/courses/${k}`}
                                    className="block group bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100 transition-all overflow-hidden"
                                >
                                    <div className={`h-2 w-full bg-gradient-to-r ${c.color}`}></div>
                                    <div className="p-6 flex items-center justify-between">
                                        <div>
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">{c.tag}</span>
                                            <p className="text-gray-900 font-bold text-lg">{c.title}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA WITH PULSATING ANIMATION ── */}
            <section className="py-16 px-4 pb-32">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className={`bg-gradient-to-r ${course.color} rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                            <FaUserGraduate className="text-4xl text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Crush Your Goals?</h2>
                        <p className="text-white/80 text-xl font-light mb-10 max-w-2xl mx-auto">
                            Experience the difference with {course.students} styling and our top IITian / Medical mentors before making a decision.
                        </p>

                        <div className="relative inline-block group">
                            <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onBookTrialClick}
                                className="relative bg-white text-gray-900 font-bold px-10 py-5 rounded-full shadow-xl text-lg tracking-wide hover:bg-gray-50 transition-colors"
                            >
                                Book a Free Trial Class Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
