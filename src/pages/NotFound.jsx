import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="pt-20 min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
