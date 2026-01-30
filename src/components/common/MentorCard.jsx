import { motion } from 'framer-motion';
import { FaStar, FaGraduationCap, FaClock, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MentorCard = ({ mentor, onBookDemo }) => {
  const getExamBadgeColor = (exam) => {
    const colors = {
      'JEE Mains': 'bg-blue-100 text-blue-700',
      'JEE Advanced': 'bg-purple-100 text-purple-700',
      'NEET': 'bg-green-100 text-green-700',
      'Olympiad': 'bg-yellow-100 text-yellow-700',
      'Board Exams': 'bg-pink-100 text-pink-700'
    };
    return colors[exam] || 'bg-gray-100 text-gray-700';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card p-6 h-full flex flex-col"
    >
      {/* Featured Badge */}
      {mentor.is_featured && (
        <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Mentor Photo */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={mentor.photo_url}
            alt={mentor.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
          />
          {mentor.is_available && (
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-display font-bold text-lg text-gray-900 mb-1">
            {mentor.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">{mentor.college}</p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 text-sm mr-1" />
              <span className="text-sm font-semibold text-gray-700">{mentor.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({mentor.total_reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Rank Badge */}
      {(mentor.jee_rank || mentor.neet_rank) && (
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold py-2 px-4 rounded-lg mb-4 text-center">
          AIR {mentor.jee_rank || mentor.neet_rank} - {mentor.jee_rank ? 'JEE Advanced' : 'NEET'}
        </div>
      )}

      {/* Subjects */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {mentor.subjects.slice(0, 3).map((subject, index) => (
            <span
              key={index}
              className="bg-cream-200 text-secondary-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {subject}
            </span>
          ))}
          {mentor.subjects.length > 3 && (
            <span className="bg-cream-200 text-secondary-700 text-xs font-medium px-3 py-1 rounded-full">
              +{mentor.subjects.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Exam Focus */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {mentor.exam_focus.slice(0, 2).map((exam, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-3 py-1 rounded-full ${getExamBadgeColor(exam)}`}
            >
              {exam}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-gray-200">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <FaClock className="text-primary-500 text-sm" />
          </div>
          <p className="text-xs text-gray-500">Experience</p>
          <p className="text-sm font-bold text-gray-900">{mentor.experience_years}+ yrs</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <FaUsers className="text-primary-500 text-sm" />
          </div>
          <p className="text-xs text-gray-500">Students</p>
          <p className="text-sm font-bold text-gray-900">{mentor.students_taught}+</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <FaGraduationCap className="text-primary-500 text-sm" />
          </div>
          <p className="text-xs text-gray-500">Success</p>
          <p className="text-sm font-bold text-gray-900">{mentor.success_rate}%</p>
        </div>
      </div>

      {/* Bio Preview */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{mentor.bio}</p>

      {/* Action Buttons */}
      <div className="mt-auto space-y-2">
        <Link
          to={`/mentor/${mentor.id}`}
          className="block w-full text-center px-4 py-2 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-all"
        >
          View Full Profile
        </Link>
        <button
          onClick={() => onBookDemo && onBookDemo(mentor)}
          className="w-full btn-primary"
        >
          Book Demo Class
        </button>
      </div>
    </motion.div>
  );
};

export default MentorCard;
