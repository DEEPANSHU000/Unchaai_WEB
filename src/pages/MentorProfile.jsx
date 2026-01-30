import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaGraduationCap, FaClock, FaUsers, FaCheckCircle, FaAward, FaCertificate, FaCalendarAlt } from 'react-icons/fa';
import { getMentorById } from '../data/mentors';

const MentorProfile = ({ onBookTrialClick }) => {
  const { id } = useParams();
  const mentor = getMentorById(id);

  if (!mentor) {
    return (
      <div className="pt-20 min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mentor not found</h2>
          <Link to="/mentors" className="btn-primary">Browse All Mentors</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src={mentor.photo_url}
                alt={mentor.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-white shadow-xl"
              />
              {mentor.is_available && (
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
              )}
            </motion.div>

            <div className="text-center md:text-left text-white flex-1">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{mentor.name}</h1>
              <p className="text-xl mb-2">{mentor.college} • {mentor.branch}</p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold">{mentor.rating}</span>
                  <span className="ml-1">({mentor.total_reviews} reviews)</span>
                </div>
                <div className="bg-white/20 px-4 py-1 rounded-full font-bold">
                  AIR {mentor.jee_rank || mentor.neet_rank}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {mentor.subjects.map((subject, index) => (
                  <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={onBookTrialClick} className="btn-primary bg-white text-primary-500 hover:bg-cream-50">
                Book Demo Class
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                Choose as My Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="card p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FaClock className="text-3xl text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{mentor.experience_years}+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <FaUsers className="text-3xl text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{mentor.students_taught}+</p>
                  <p className="text-sm text-gray-600">Students Taught</p>
                </div>
                <div className="text-center">
                  <FaGraduationCap className="text-3xl text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{mentor.success_rate}%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="text-center">
                  <FaClock className="text-3xl text-primary-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{mentor.total_hours_taught}+</p>
                  <p className="text-sm text-gray-600">Teaching Hours</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="card p-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">About {mentor.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{mentor.bio}</p>
              <div className="bg-cream-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700"><span className="font-semibold">Teaching Philosophy:</span> {mentor.teaching_philosophy}</p>
              </div>
            </div>

            {/* Methodology */}
            <div className="card p-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Teaching Methodology</h2>
              <p className="text-gray-700 leading-relaxed">{mentor.methodology}</p>
            </div>

            {/* Achievements */}
            <div className="card p-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                <FaAward className="text-primary-500 mr-2" />
                Achievements
              </h2>
              <ul className="space-y-2">
                {mentor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="card p-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                <FaCertificate className="text-primary-500 mr-2" />
                Certifications
              </h2>
              <div className="flex flex-wrap gap-3">
                {mentor.certifications.map((cert, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Student Testimonials */}
            {mentor.testimonials && mentor.testimonials.length > 0 && (
              <div className="card p-6">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Student Testimonials</h2>
                <div className="space-y-4">
                  {mentor.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-cream-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-sm" />
                          ))}
                        </div>
                        <span className="ml-2 font-semibold text-gray-900">{testimonial.student_name}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{testimonial.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-primary-500 mb-2">₹{mentor.hourly_rate}</p>
                <p className="text-gray-600">per hour</p>
              </div>
              <button onClick={onBookTrialClick} className="w-full btn-primary mb-3">
                Book Demo Class
              </button>
              <button className="w-full btn-outline">
                Choose as My Mentor
              </button>
            </div>

            {/* Exam Focus */}
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Exam Focus</h3>
              <div className="space-y-2">
                {mentor.exam_focus.map((exam, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-primary-500 mr-2" />
                    <span className="text-gray-700">{exam}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center">
                <FaCalendarAlt className="text-primary-500 mr-2" />
                Availability
              </h3>
              <div className="space-y-2">
                {mentor.availability.map((slot, index) => (
                  <div key={index} className="bg-cream-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                    {slot}
                  </div>
                ))}
              </div>
            </div>

            {/* Video Preview */}
            {mentor.video_url && (
              <div className="card p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Sample Class</h3>
                <div className="video-responsive">
                  <iframe
                    src={mentor.video_url}
                    title="Sample Class Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
