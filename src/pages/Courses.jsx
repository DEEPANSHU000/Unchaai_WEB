import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaAtom, FaFlask, FaCalculator, FaBook, FaTrophy,
    FaCheckCircle, FaClock, FaUserGraduate, FaStar, FaArrowRight
} from "react-icons/fa";

const courseData = {
    "jee-mains": {
        title: "JEE Mains",
        subtitle: "Crack India's premier engineering entrance exam with expert guidance",
        icon: FaCalculator,
        color: "from-blue-600 to-blue-400",
        badge: "Engineering",
        duration: "1–2 Years",
        students: "10,000+",
        rating: "4.9",
        overview: "JEE Mains is the gateway to top NITs, IIITs, and GFTIs across India. Our comprehensive program covers all three subjects — Physics, Chemistry, and Mathematics — with a focus on conceptual clarity, speed, and accuracy.",
        subjects: [
            {
                name: "Physics",
                icon: FaAtom,
                topics: ["Mechanics & Kinematics", "Thermodynamics", "Electrostatics", "Optics", "Modern Physics", "Waves & Sound"],
            },
            {
                name: "Chemistry",
                icon: FaFlask,
                topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Electrochemistry", "Chemical Bonding", "Reaction Mechanisms"],
            },
            {
                name: "Mathematics",
                icon: FaCalculator,
                topics: ["Algebra & Functions", "Calculus", "Coordinate Geometry", "Trigonometry", "Probability & Statistics", "Vectors & 3D"],
            },
        ],
        features: ["200+ hours of live classes", "Daily practice sheets", "Weekly mock tests", "Doubt-clearing sessions", "Rank booster modules", "Previous year paper analysis"],
    },
    "jee-advanced": {
        title: "JEE Advanced",
        subtitle: "Your path to the prestigious IITs starts here",
        icon: FaTrophy,
        color: "from-purple-600 to-purple-400",
        badge: "IIT Preparation",
        duration: "1–2 Years",
        students: "5,000+",
        rating: "4.9",
        overview: "JEE Advanced is the gateway to the Indian Institutes of Technology. Our elite program goes beyond standard preparation with deep problem-solving, advanced concept building, and IIT-specific strategy.",
        subjects: [
            {
                name: "Physics",
                icon: FaAtom,
                topics: ["Advanced Mechanics", "Electrodynamics", "Quantum Physics", "Wave Optics", "Nuclear Physics", "Fluid Mechanics"],
            },
            {
                name: "Chemistry",
                icon: FaFlask,
                topics: ["Advanced Organic Chemistry", "Coordination Chemistry", "Chemical Equilibrium", "Spectroscopy Basics", "Polymers & Biomolecules", "Surface Chemistry"],
            },
            {
                name: "Mathematics",
                icon: FaCalculator,
                topics: ["Complex Numbers", "Advanced Calculus", "Permutations & Combinations", "Matrices & Determinants", "Conic Sections", "Differential Equations"],
            },
        ],
        features: ["IIT-level problem sets", "Expert IIT alumni mentors", "Full-length mock tests", "Personalised performance analysis", "Intensive crash courses", "Strategy sessions for exam day"],
    },
    "neet": {
        title: "NEET",
        subtitle: "Achieve your medical dream with structured NEET preparation",
        icon: FaFlask,
        color: "from-green-600 to-green-400",
        badge: "Medical",
        duration: "1–2 Years",
        students: "8,000+",
        rating: "4.8",
        overview: "NEET is the single gateway for medical admissions across India. Our biology-heavy, MCQ-focused program blends conceptual depth with exam strategy so you can secure a seat in your dream medical college.",
        subjects: [
            {
                name: "Biology",
                icon: FaBook,
                topics: ["Cell Biology & Genetics", "Human Physiology", "Plant Physiology", "Ecology & Environment", "Reproduction", "Evolution & Biodiversity"],
            },
            {
                name: "Physics",
                icon: FaAtom,
                topics: ["Laws of Motion", "Work & Energy", "Current Electricity", "Optics", "Thermodynamics", "Dual Nature of Matter"],
            },
            {
                name: "Chemistry",
                icon: FaFlask,
                topics: ["Basic Concepts", "Atomic Structure", "s, p, d, f Block Elements", "Biomolecules", "Polymers", "Environmental Chemistry"],
            },
        ],
        features: ["NCERT-focused strategy", "Chapter-wise MCQ banks", "Biology deep-dive sessions", "Full-length NEET mocks", "Revision modules", "Personalised mentor support"],
    },
    "boards": {
        title: "Board Exams",
        subtitle: "Excel in CBSE / ICSE / State Board with targeted preparation",
        icon: FaBook,
        color: "from-orange-600 to-orange-400",
        badge: "Class 10 & 12",
        duration: "6–12 Months",
        students: "15,000+",
        rating: "4.8",
        overview: "Strong board marks open doors to top colleges and competitive exams. Our board exam program focuses on NCERT mastery, exam-oriented writing skills, and consistent practice to help you score 90%+.",
        subjects: [
            {
                name: "Science",
                icon: FaAtom,
                topics: ["Physics — All Chapters", "Chemistry — All Chapters", "Biology — All Chapters", "Practical Exam Prep", "Lab Manual Guidance", "HOTS Questions"],
            },
            {
                name: "Mathematics",
                icon: FaCalculator,
                topics: ["Algebra", "Geometry & Mensuration", "Trigonometry", "Statistics & Probability", "Calculus (Class 12)", "Linear Programming"],
            },
            {
                name: "Other Subjects",
                icon: FaBook,
                topics: ["English — Reading & Writing", "Hindi / Regional Language", "Business Studies", "Accountancy", "Economics", "Computer Science"],
            },
        ],
        features: ["NCERT line-by-line coverage", "Sample paper practice", "Answer writing workshops", "Chapter-wise revision notes", "Previous year question sets", "Parent progress reports"],
    },
    "olympiad": {
        title: "Olympiad",
        subtitle: "Compete at national & international level with advanced training",
        icon: FaTrophy,
        color: "from-yellow-600 to-yellow-400",
        badge: "Competitions",
        duration: "3–12 Months",
        students: "2,000+",
        rating: "5.0",
        overview: "Olympiads are the ultimate test of academic brilliance. We prepare students for IMO, INPhO, IChO, IOQM, NSO, and other national and international competitions through advanced curriculum and problem-solving marathons.",
        subjects: [
            {
                name: "Mathematics",
                icon: FaCalculator,
                topics: ["Number Theory", "Combinatorics", "Geometry Olympiad Style", "Algebra — Advanced", "Inequalities", "Functional Equations"],
            },
            {
                name: "Science",
                icon: FaAtom,
                topics: ["Physics — Advanced Problems", "Chemistry — Olympiad Level", "Biology — Advanced Concepts", "Experimental Problem Solving", "Theoretical Mastery", "International Paper Analysis"],
            },
            {
                name: "Strategy & Practice",
                icon: FaTrophy,
                topics: ["Olympiad exam strategies", "Time management drills", "Mock olympiad papers", "Error analysis sessions", "Senior olympiad mentors", "National camp preparation"],
            },
        ],
        features: ["Expert olympiad trainers", "Advanced problem sets", "Mock olympiad competitions", "1-on-1 mentor reviews", "International paper analysis", "Certificate & recognition"],
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const CourseDetail = ({ course }) => {
    const Icon = course.icon;
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

            {/* Hero */}
            <section className={`bg-gradient-to-br ${course.color} text-white py-20 px-4`}>
                <div className="container-custom max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
                            {course.badge}
                        </span>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                <Icon className="text-white text-3xl" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
                        </div>
                        <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-8">{course.subtitle}</p>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <span className="flex items-center gap-2"><FaClock /> {course.duration}</span>
                            <span className="flex items-center gap-2"><FaUserGraduate /> {course.students} Students</span>
                            <span className="flex items-center gap-2"><FaStar /> {course.rating} Rating</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-14 px-4">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Program Overview</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{course.overview}</p>
                </div>
            </section>

            {/* Subjects */}
            <section className="py-6 px-4 pb-14">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">What You'll Study</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {course.subjects.map((sub, i) => {
                            const SIcon = sub.icon;
                            return (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                                            <SIcon className="text-primary-500 text-lg" />
                                        </div>
                                        <h3 className="font-bold text-gray-800">{sub.name}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {sub.topics.map((t, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                                <FaCheckCircle className="text-primary-400 mt-0.5 shrink-0" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-14 px-4 bg-white">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Program Features</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {course.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 bg-primary-50 rounded-xl px-5 py-4">
                                <FaCheckCircle className="text-primary-500 shrink-0" />
                                <span className="text-gray-700 text-sm font-medium">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 px-4">
                <div className="container-custom max-w-3xl text-center">
                    <div className={`bg-gradient-to-r ${course.color} text-white rounded-3xl p-10`}>
                        <h2 className="text-3xl font-bold mb-3">Ready to Begin?</h2>
                        <p className="text-white/80 mb-6">
                            Book a free trial class and experience our teaching style before you enroll.
                        </p>
                        <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-full shadow hover:shadow-lg transition-all hover:-translate-y-0.5">
                            Book a Free Trial
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const CoursesOverview = () => {
    const allCourses = [
        { slug: "jee-mains", ...courseData["jee-mains"] },
        { slug: "jee-advanced", ...courseData["jee-advanced"] },
        { slug: "neet", ...courseData["neet"] },
        { slug: "boards", ...courseData["boards"] },
        { slug: "olympiad", ...courseData["olympiad"] },
    ];

    return (
        <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
            <section className="bg-gradient-to-br from-primary-600 to-primary-400 text-white py-20 px-4">
                <div className="container-custom max-w-4xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
                        <p className="text-lg text-white/85 max-w-2xl mx-auto">
                            Expert-led courses for JEE, NEET, Board Exams & Olympiads — choose your path to success.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="container-custom max-w-5xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allCourses.map((c, i) => {
                            const CIcon = c.icon;
                            return (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    <Link
                                        to={`/courses/${c.slug}`}
                                        className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                                            <CIcon className="text-white text-xl" />
                                        </div>
                                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wide">{c.badge}</span>
                                        <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{c.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">{c.subtitle}</p>
                                        <div className="flex items-center gap-1 text-primary-500 text-sm font-semibold group-hover:gap-2 transition-all">
                                            Explore Course <FaArrowRight className="text-xs" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

const Courses = () => {
    const { courseSlug } = useParams();
    const course = courseSlug ? courseData[courseSlug] : null;

    if (courseSlug && !course) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                <p className="text-gray-500 mb-6">The course you're looking for doesn't exist.</p>
                <Link to="/courses" className="text-primary-500 font-semibold hover:underline">
                    ← Back to Courses
                </Link>
            </div>
        );
    }

    return course ? <CourseDetail course={course} /> : <CoursesOverview />;
};

export default Courses;
