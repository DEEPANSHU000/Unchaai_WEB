import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaClipboardList,
  FaVideo,
  FaLightbulb,
  FaGift,
  FaUserGraduate,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
            Free Learning Hub
          </span>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            UnchaAI <span className="heading-gradient">Resources</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            High-quality study material, practice resources, and expert guidance
            curated by IITians & NEET toppers.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ResourceCard
            icon={<FaBookOpen />}
            title="Study Materials"
            description="Chapter-wise notes, formula sheets, and revision guides for JEE & NEET."
            color="from-orange-400 to-orange-600"
          />

          <ResourceCard
            icon={<FaClipboardList />}
            title="Practice Tests"
            description="Mock tests, topic-wise questions, and previous year papers."
            color="from-blue-400 to-blue-600"
          />

          <ResourceCard
            icon={<FaVideo />}
            title="Video Lectures"
            description="Concept explanation videos by IITians & top rankers."
            color="from-purple-400 to-purple-600"
          />

          <ResourceCard
            icon={<FaLightbulb />}
            title="Preparation Guides"
            description="Smart strategies, time management, and exam tips."
            color="from-green-400 to-green-600"
          />

          <ResourceCard
            icon={<FaGift />}
            title="Free Resources"
            description="Hand-picked free tools and materials to boost preparation."
            color="from-pink-400 to-pink-600"
          />

          <ResourceCard
            icon={<FaUserGraduate />}
            title="1-on-1 Mentorship"
            description="Get personalized mentorship from IITians & NEET toppers."
            color="from-primary-500 to-primary-700"
            highlight
          />
        </motion.div>
      </div>
    </div>
  );
};

const ResourceCard = ({ icon, title, description, color, highlight }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl bg-white shadow-lg p-6 transition-all ${
        highlight ? "ring-2 ring-primary-500" : ""
      }`}
    >
      {/* Gradient Icon */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl mb-4`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <button className="inline-flex items-center font-semibold text-primary-500 hover:text-primary-600 transition-colors">
        Explore Resources →
      </button>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-transparent rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default Resources;