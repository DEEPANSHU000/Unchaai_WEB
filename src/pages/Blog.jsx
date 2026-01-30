import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogs';
import { FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16">
        <div className="container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Insights, tips, and strategies to help you succeed in your academic journey
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {blog.reading_time}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-500 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                  >
                    Read More <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
