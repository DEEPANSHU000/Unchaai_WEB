import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUserGraduate, FaStar, FaArrowRight, FaAtom, FaFlask, FaCalculator, FaLeaf } from "react-icons/fa";

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
        color: "from-blue-600 to-blue-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Mathematics)",
            "Foundation-to-Advanced learning approach",
            "Individual mentorship & study planning",
            "Regular practice, assessment, and feedback",
            "Early exam temperament development",
        ],
        sections: [
            {
                title: "Academic Structure",
                items: [
                    "Step-by-step theory explanation with visualization & derivations",
                    "Gradual progression from basic to advanced problems",
                    "Regular doubt-solving sessions",
                    "Alignment with Class 11 syllabus + JEE orientation",
                    "Personalized Class 11 study plan per student",
                    "Weekly performance tracking & consistency check",
                ],
            },
            {
                title: "Study Material & Practice Ecosystem",
                items: [
                    "Chapter-wise theory notes & solved problems",
                    "Formula sheets and concept summaries",
                    "Extensive chapter-wise & topic-wise question bank",
                    "Categorized: Foundation → JEE Main → Introductory JEE Advanced",
                    "Daily Practice Problems (DPPs) with detailed solutions",
                    "Integrated concept-based questions for analytical thinking",
                ],
            },
            {
                title: "Revision & Assessment",
                items: [
                    "Concise chapter-wise revision notes & formula sheets",
                    "Weekly and monthly revision plans",
                    "Concept reinforcement & bridge sessions for tough chapters",
                    "Chapter-wise tests after every chapter",
                    "Cumulative part tests covering multiple chapters",
                    "Performance analysis & improvement roadmap",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 11 students aspiring for IITs / NITs / Top Engineering Colleges",
            "Students who want strong fundamentals from Day 1",
            "Learners who need structured guidance & mentorship",
            "Parents looking for quality-focused, low-crowd coaching",
        ],
        outcomes: [
            "Strong conceptual clarity in PCM",
            "Confidence in problem-solving",
            "Disciplined study habits",
            "Early exposure to JEE Advanced-level thinking",
            "Smooth transition into Class 12 advanced preparation",
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
        color: "from-purple-600 to-purple-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Mathematics)",
            "Integrated Board + JEE preparation strategy",
            "Individual mentorship & academic planning",
            "Structured practice, testing, and revision cycles",
            "JEE Main & Advanced aligned curriculum",
        ],
        sections: [
            {
                title: "Academic Structure",
                items: [
                    "NCERT-aligned theory (board-friendly) + conceptual JEE depth",
                    "Step-wise progression: Board clarity → JEE Main → JEE Advanced",
                    "Balance school exams, practicals, and JEE prep",
                    "Daily performance & backlog management",
                    "Exam strategy and stress management guidance",
                    "Regular doubt-solving sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                items: [
                    "Chapter-wise detailed theory notes with NCERT derivations",
                    "Solved examples (Board + JEE level) & formula sheets",
                    "Extensive question bank: Board → JEE Main → JEE Advanced",
                    "PYQs (Main & Advanced) + PYQ-inspired practice questions",
                    "Daily Practice Problems (DPPs) with detailed solutions",
                    "Integrated Class 11 + 12 concept-based problems",
                ],
            },
            {
                title: "Revision & Assessment",
                items: [
                    "Concise revision notes with formula sheets & key derivations",
                    "Weekly, monthly, and pre-exam revision plans",
                    "High-intensity revision before exams",
                    "Focus on high-weightage chapters & repeated PYQ patterns",
                    "Chapter-wise tests + cumulative part tests",
                    "Full-length mock tests (JEE Main pattern)",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 12 students targeting IITs / NITs / Top Engineering Colleges",
            "Students who completed Class 11 and need structured JEE prep",
            "Learners who need board + JEE dual strategy",
            "Students seeking personal attention and mentorship",
        ],
        outcomes: [
            "Complete PCM syllabus mastery (Class 11 + 12)",
            "Strong board exam performance (90%+)",
            "Advanced JEE problem-solving capability",
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
        heroTitle: "JEE Mains & Advanced Preparation 2026",
        heroSubtitle: "Small Batch Tutoring for Droppers",
        desc: "A highly personalized JEE preparation model designed for serious dropper aspirants who require individual attention, structured mentorship, and deep conceptual clarity. With a maximum batch size of 10 students, the program combines 1-on-1 style tutoring within a small batch, dedicated mentorship, comprehensive study material, and continuous performance tracking.",
        color: "from-orange-500 to-orange-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Mathematics"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Mathematics)",
            "Individual mentorship & academic planning",
            "Structured daily practice and assessment",
            "Complete syllabus coverage with multiple revision cycles",
            "Exam-oriented preparation aligned with latest JEE pattern",
        ],
        sections: [
            {
                title: "Program Focus",
                items: [
                    "1-on-1 style tutoring within a small batch setting",
                    "Dedicated mentor for every student",
                    "Concept mastery & advanced problem-solving",
                    "Complete syllabus coverage within the year",
                    "Multiple full revision cycles before exam",
                    "Exam temperament & time management training",
                ],
            },
            {
                title: "Study Material & Practice",
                items: [
                    "Comprehensive study modules for all PCM topics",
                    "Chapter-wise question banks (JEE Main & Advanced)",
                    "PYQ analysis & pattern-based practice",
                    "Daily Practice Problems (DPPs)",
                    "Full-length mock tests (JEE Main + Advanced pattern)",
                    "Detailed performance analysis after every test",
                ],
            },
            {
                title: "Mentorship & Support",
                items: [
                    "Dedicated personal academic mentor",
                    "Weekly 1-on-1 mentorship sessions",
                    "Personalized revision & study plan",
                    "Weak chapter identification & targeted improvement",
                    "Psychological support & motivation sessions",
                    "Referral for top performers",
                ],
            },
        ],
        whoShouldJoin: [
            "Students who appeared for JEE but want to improve their rank",
            "Dropper students seeking structured guidance",
            "Aspirants targeting IIT / NIT in their second attempt",
            "Students who need personal attention over crowd coaching",
        ],
        outcomes: [
            "Significantly improved JEE rank",
            "Mastery in PCM with revision confidence",
            "Advanced exam temperament & time management",
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
        heroTitle: "NEET Foundation Program 2026",
        heroSubtitle: "Ultra-Small Batch Tutoring",
        desc: "A foundation-building NEET preparation model for Class 11 students, aimed at developing strong NCERT-based concepts, disciplined study habits, and early exam readiness. With an ultra-small batch of maximum 10 students, the focus is on NCERT mastery, accuracy, consistency, and conceptual understanding — the backbone of NEET success.",
        color: "from-green-600 to-green-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Biology (Botany & Zoology)"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Biology)",
            "NCERT-first teaching methodology",
            "Individual mentorship & study planning",
            "Structured practice, assessment, and revision",
            "Early NEET exam temperament development",
        ],
        sections: [
            {
                title: "Academic Structure",
                items: [
                    "Line-by-line NCERT explanation with diagrams & examples",
                    "Gradual shift from theory to NEET-style MCQs",
                    "Regular doubt-solving sessions",
                    "Personalized Class 11 study plan per student",
                    "Balance school exams and NEET preparation",
                    "Weekly progress tracking & discipline check",
                ],
            },
            {
                title: "Study Material & Practice Ecosystem",
                items: [
                    "Chapter-wise theory notes with important NCERT lines highlighted",
                    "Solved NEET-level MCQs & biology fact summaries",
                    "Question bank: NCERT-based → Conceptual → Assertion-Reason",
                    "Previous Year NEET Questions (as learning examples)",
                    "Daily Practice Problems (DPPs) with detailed explanations",
                    "Integrated MCQs combining multiple chapter concepts",
                ],
            },
            {
                title: "Revision & Assessment",
                items: [
                    "Concise revision notes, formula sheets & biology diagrams",
                    "Weekly and monthly revision plans",
                    "Concept reinforcement for tough chapters",
                    "Chapter-wise tests with NEET pattern MCQs",
                    "Cumulative tests improving retention & concept linking",
                    "Performance analysis & improvement roadmap",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 11 students aspiring for MBBS / BDS / AIIMS",
            "Students wanting strong NEET foundation from Day 1",
            "Learners who need personal attention & mentorship",
            "Parents looking for quality-focused, low-crowd coaching",
        ],
        outcomes: [
            "Strong NCERT-based conceptual clarity",
            "Improved MCQ accuracy & speed",
            "Disciplined study habits",
            "Smooth transition into Class 12 NEET preparation",
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
        desc: "A focused NEET preparation program for Class 12 students balancing board exams alongside NEET prep. With maximum 10 students per batch, the program delivers NCERT-mastery, board-to-NEET integrated strategy, targeted practice, and continuous mentorship to help students crack NEET in their Class 12 year.",
        color: "from-teal-600 to-teal-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Biology (Botany & Zoology)"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Biology)",
            "Integrated Board + NEET preparation strategy",
            "Individual mentorship & academic planning",
            "Structured practice, testing, and revision cycles",
            "NEET UG aligned curriculum with Board alignment",
        ],
        sections: [
            {
                title: "Academic Structure",
                items: [
                    "Line-by-line NCERT explanation + NEET MCQ practice",
                    "Balance school board exams with NEET preparation",
                    "Strong revision of Class 11 + full Class 12 coverage",
                    "Personalized study plan balancing boards & NEET",
                    "Daily performance tracking & backlog prevention",
                    "Regular doubt-solving sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                items: [
                    "Chapter-wise NCERT notes with important lines highlighted",
                    "Biology diagrams, formula sheets & fact summaries",
                    "Extensive MCQ bank: Direct NCERT → Conceptual → PYQ-based",
                    "Previous Year NEET Questions with analysis",
                    "Daily Practice Problems (DPPs) with solutions",
                    "Assertion-Reason & Match-the-Following practice sets",
                ],
            },
            {
                title: "Revision & Assessment",
                items: [
                    "Concise revision notes & biology diagram sheets",
                    "Weekly, monthly, and pre-exam revision plans",
                    "Chapter-wise NEET pattern tests",
                    "Full-length NEET mock tests with analysis",
                    "Cumulative part tests for long-term retention",
                    "Performance feedback & targeted improvement plan",
                ],
            },
        ],
        whoShouldJoin: [
            "Class 12 students targeting MBBS / BDS / AIIMS",
            "Students needing board + NEET dual preparation strategy",
            "Learners who want structured guidance in final year",
            "Students seeking personal attention over crowd coaching",
        ],
        outcomes: [
            "Complete PCB NCERT mastery (Class 11 + 12)",
            "Strong board exam performance alongside NEET prep",
            "High MCQ accuracy & speed in all three subjects",
            "Disciplined exam temperament for NEET",
            "Confidence to crack NEET in the first attempt",
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
        desc: "A focused, high-intensity NEET preparation program for dropper students who want to significantly improve their NEET rank. With maximum 10 students per batch, the program combines dedicated 1-on-1 mentorship, complete NCERT mastery, aggressive revision cycles, and full-length test series to help you crack NEET UG.",
        color: "from-red-500 to-red-400",
        subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Biology (Botany & Zoology)"],
        highlights: [
            "Maximum 10 students per batch",
            "Subject-wise expert tutoring (Physics, Chemistry, Biology)",
            "Dedicated 1-on-1 mentorship for every student",
            "Complete syllabus revision with multiple cycles",
            "Aggressive test series & PYQ analysis",
            "Exam-oriented preparation aligned with latest NEET pattern",
        ],
        sections: [
            {
                title: "Program Focus",
                items: [
                    "Complete NCERT revision from scratch",
                    "1-on-1 style tutoring within a small batch",
                    "Dedicated mentor for every dropper student",
                    "Weak chapter identification & targeted improvement",
                    "MCQ accuracy & speed improvement techniques",
                    "Psychological support & motivation sessions",
                ],
            },
            {
                title: "Study Material & Practice",
                items: [
                    "Comprehensive NCERT-aligned study modules for all PCB topics",
                    "Biology diagrams, formula sheets & fact summaries",
                    "Extensive chapter-wise NEET MCQ banks",
                    "PYQ (2015–2024) analysis & pattern-based practice",
                    "Daily Practice Problems (DPPs) with solutions",
                    "Assertion-Reason & Match-the-Following practice sets",
                ],
            },
            {
                title: "Revision & Assessment",
                items: [
                    "Multiple complete syllabus revision cycles",
                    "Weekly, monthly, and pre-exam revision plans",
                    "Full-length NEET mock tests (NEET UG pattern)",
                    "Detailed performance analysis after every test",
                    "Chapter-wise and part tests for targeted improvement",
                    "Common mistake analysis & error correction strategy",
                ],
            },
        ],
        whoShouldJoin: [
            "Students who appeared for NEET but want to improve their rank",
            "Dropper students seeking structured, focused NEET guidance",
            "Aspirants targeting MBBS / AIIMS in their second attempt",
            "Students who need personal attention and NCERT mastery",
        ],
        outcomes: [
            "Significantly improved NEET score & rank",
            "Complete NCERT mastery across all three subjects",
            "Improved MCQ accuracy, speed & exam temperament",
            "Strategies to eliminate repeated mistakes",
            "Confidence for NEET UG on exam day",
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

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

/* ─── MAIN COMPONENT ─── */
const CoursePage = ({ onBookTrialClick }) => {
    const { slug } = useParams();
    const course = courseData[slug];

    if (!course) {
        return (
            <div className="pt-32 pb-20 text-center min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                <p className="text-gray-500 mb-6">The course you're looking for doesn't exist.</p>
                <Link to="/courses" className="text-primary-500 font-semibold hover:underline">
                    ← Back to Courses
                </Link>
            </div>
        );
    }

    const icons = subjectIcons[course.type];

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

            {/* ── HERO ── */}
            <section className={`bg-gradient-to-br ${course.color} text-white py-20 px-4`}>
                <div className="container-custom max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{course.tag}</span>
                            <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1 rounded-full">{course.badge}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{course.heroTitle}</h1>
                        <p className="text-xl text-white/80 mb-6">{course.heroSubtitle}</p>
                        <p className="text-white/85 text-base max-w-3xl mb-8 leading-relaxed">{course.desc}</p>
                        <div className="flex flex-wrap gap-6 text-sm mb-8">
                            <span className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2">
                                <FaClock /> {course.duration}
                            </span>
                            <span className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2">
                                <FaUserGraduate /> {course.students}
                            </span>
                            <span className="flex items-center gap-2 bg-white/15 rounded-full px-4 py-2">
                                <FaStar /> 1-on-1 Mentorship
                            </span>
                        </div>
                        <button
                            onClick={onBookTrialClick}
                            className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            Book a Free Trial
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── HIGHLIGHTS ── */}
            <section className="py-14 px-4">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Key Program Highlights</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {course.highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
                            >
                                <FaCheckCircle className="text-primary-500 mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-sm">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUBJECTS ── */}
            <section className="py-6 px-4 pb-14">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Subjects Covered</h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {course.subjects.map((sub, i) => {
                            const Icon = icons[i] || FaAtom;
                            return (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                                        <Icon className="text-primary-500 text-lg" />
                                    </div>
                                    <p className="text-gray-700 text-sm font-medium">{sub}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTIONS (Academic Structure / Study Material / Revision) ── */}
            {course.sections.map((sec, si) => (
                <section key={si} className={`py-14 px-4 ${si % 2 === 1 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="container-custom max-w-5xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">{sec.title}</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {sec.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
                                >
                                    <FaCheckCircle className="text-primary-400 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* ── WHO SHOULD JOIN + OUTCOMES ── */}
            <section className="py-14 px-4 bg-white">
                <div className="container-custom max-w-5xl grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Should Join?</h2>
                        <ul className="space-y-3">
                            {course.whoShouldJoin.map((w, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                    <FaCheckCircle className="text-primary-500 mt-0.5 shrink-0" />
                                    {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Outcomes</h2>
                        <ul className="space-y-3">
                            {course.outcomes.map((o, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                    <FaStar className="text-yellow-400 mt-0.5 shrink-0" />
                                    {o}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── EXPLORE OTHER BATCHES ── */}
            <section className="py-14 px-4">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore Other Batches</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(courseData)
                            .filter(([k]) => k !== slug)
                            .slice(0, 3)
                            .map(([k, c], i) => (
                                <Link
                                    key={k}
                                    to={`/courses/${k}`}
                                    className="flex items-center justify-between bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
                                >
                                    <div>
                                        <span className="text-xs font-bold text-primary-500">{c.tag}</span>
                                        <p className="text-gray-800 font-semibold text-sm">{c.title}</p>
                                    </div>
                                    <FaArrowRight className="text-gray-300 group-hover:text-primary-500 transition-colors" />
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-10 px-4">
                <div className="container-custom max-w-3xl">
                    <div className={`bg-gradient-to-r ${course.color} rounded-3xl p-10 text-white text-center`}>
                        <h2 className="text-3xl font-bold mb-3">Ready to Begin {course.tag} Preparation?</h2>
                        <p className="text-white/80 mb-6">
                            Book a free trial class and experience our teaching style before you enroll.
                        </p>
                        <button
                            onClick={onBookTrialClick}
                            className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5"
                        >
                            Book a Free Trial
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
