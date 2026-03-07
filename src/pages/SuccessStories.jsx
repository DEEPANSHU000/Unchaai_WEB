import { Link } from "react-router-dom";
import { successStories } from "../data/successStories";
import { motion } from "framer-motion";

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SuccessStories = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container-custom py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <span className="inline-block bg-primary-100 text-primary-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
          Our Achievers
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Success <span className="heading-gradient">Stories</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Real journeys of students who cracked JEE & NEET with UnchaAI’s
          mentorship.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {successStories.map((story) => (
          <motion.div
            key={story.id}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card p-6 overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={story.image}
                alt={story.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="font-bold text-lg text-gray-900">
              {story.name}{" "}
              <span className="text-primary-500">
                ({story.institute})
              </span>
            </h3>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {story.excerpt}
            </p>

            <Link
              to={`/success-stories/${story.slug}`}
              className="btn-primary mt-4 inline-block"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories;