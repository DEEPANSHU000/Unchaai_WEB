import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaTh, FaList } from 'react-icons/fa';
import { getMentorsWithFilters } from '../data/mentors';
import MentorCard from '../components/common/MentorCard';

const Mentors = () => {
  const [filters, setFilters] = useState({
    subject: 'All Subjects',
    examFocus: 'All',
    experience: '',
    rating: '',
    availability: 'All',
    search: '',
    sortBy: 'rating'
  });

  const [mentors, setMentors] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const filtered = getMentorsWithFilters(filters);
    setMentors(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  const examTypes = ['All', 'JEE Mains', 'JEE Advanced', 'NEET', 'Olympiad', 'NTSE', 'Board Exams'];
  const experienceLevels = [
    { label: 'All Experience', value: '' },
    { label: '0-2 years', value: '0-2' },
    { label: '2-5 years', value: '2-5' },
    { label: '5+ years', value: '5' }
  ];
  const ratings = [
    { label: 'All Ratings', value: '' },
    { label: '4+ Stars', value: '4' },
    { label: '4.5+ Stars', value: '4.5' }
  ];
  const sortOptions = [
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Most Experienced', value: 'experience' },
    { label: 'Best Success Rate', value: 'success_rate' },
    { label: 'Recently Joined', value: 'recent' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16">
        <div className="container-custom text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Find Your Perfect Mentor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Connect with top IITians and NEET toppers for personalized 1-1 mentorship
          </motion.p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="card p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setFilters({
                    subject: 'All Subjects',
                    examFocus: 'All',
                    experience: '',
                    rating: '',
                    availability: 'All',
                    search: '',
                    sortBy: 'rating'
                  })}
                  className="text-sm text-primary-500 hover:text-primary-600 font-semibold"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Mentor
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, college..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Subject Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <div className="space-y-2">
                  {subjects.map(subject => (
                    <button
                      key={subject}
                      onClick={() => handleFilterChange('subject', subject)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        filters.subject === subject
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exam Focus Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Exam Focus
                </label>
                <select
                  value={filters.examFocus}
                  onChange={(e) => handleFilterChange('examFocus', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  {examTypes.map(exam => (
                    <option key={exam} value={exam}>{exam}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Experience
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) => handleFilterChange('experience', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  {experienceLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  {ratings.map(rating => (
                    <option key={rating.value} value={rating.value}>{rating.label}</option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  value={filters.availability}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="All">All Mentors</option>
                  <option value="Available">Available Now</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  {mentors.length} Mentors Found
                </h2>
                <p className="text-sm text-gray-600">
                  Choose from our expert mentors to accelerate your preparation
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                  >
                    <FaTh className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                  >
                    <FaList className="text-gray-600" />
                  </button>
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden btn-outline p-2"
                >
                  <FaFilter />
                </button>
              </div>
            </div>

            {/* Mentors Grid/List */}
            {mentors.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-6'
              }>
                {mentors.map((mentor) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MentorCard mentor={mentor} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No mentors found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => setFilters({
                    subject: 'All Subjects',
                    examFocus: 'All',
                    experience: '',
                    rating: '',
                    availability: 'All',
                    search: '',
                    sortBy: 'rating'
                  })}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
