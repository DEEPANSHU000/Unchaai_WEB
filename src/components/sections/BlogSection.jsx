import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { getFeaturedBlogs } from '../../data/blogs';
import { FaClock, FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const featuredBlogs = getFeaturedBlogs();

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Explore Our <span className="heading-gradient">Blogs</span> to Unlock Insights for Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get into our blog posts for valuable insights, educational guidance, and expert tips.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/blog" className="btn-outline">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
