import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onBookTrialClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Courses',
      dropdown: [
        { name: 'JEE Mains', path: '/courses/jee-mains' },
        { name: 'JEE Advanced', path: '/courses/jee-advanced' },
        { name: 'NEET', path: '/courses/neet' },
        { name: 'Board Exams', path: '/courses/boards' },
        { name: 'Olympiad', path: '/courses/olympiad' }
      ]
    },
    { name: 'Mentors', path: '/mentors' },
    {
      name: 'Placements',
      dropdown: [
        { name: 'Internship', path: '/placements/internships' },
        { name: 'Jobs', path: '/placements/jobs' }
    ]
    },
    { name: 'Global Admissions', path: '/global-admissions' },
    {
      name: 'Explore',
      dropdown: [
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Blog', path: '/blog' },
        { name: 'Resources', path: '/resources' }
      ]
    },
    { name: 'Become A Mentor', path: '/become-mentor' }
  ];
  const scrollToTop = (e) => {
  if (location.pathname === '/') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img
              src="/images/Unchaai-Logo.svg"
              alt="UnchaAI Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav onClick={scrollToTop} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-4 py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors flex items-center gap-1 whitespace-nowrap">
                      {item.name}
                      <FaChevronDown className="text-xs" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onBookTrialClick}
              className="btn-primary"
            >
              Book a Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 text-2xl p-2"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg font-medium transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <FaChevronDown
                          className={`text-xs transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-primary-50 text-primary-500'
                          : 'text-gray-700 hover:bg-primary-50 hover:text-primary-500'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button
                onClick={onBookTrialClick}
                className="w-full btn-primary mt-4"
              >
                Book a Free Trial
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
