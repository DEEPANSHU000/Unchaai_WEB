import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── nav structure ─── */
const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Courses',
    megaMenu: [
      {
        group: 'JEE',
        path: '/courses/jee',
        items: [
          { name: 'JEE Class 11 Batch', path: '/courses/jee-class-11' },
          { name: 'JEE Class 12 Batch', path: '/courses/jee-class-12' },
          { name: 'JEE Droppers Batch', path: '/courses/jee-dropper' },
        ],
      },
      {
        group: 'NEET',
        path: '/courses/neet',
        items: [
          { name: 'NEET Class 11 Batch', path: '/courses/neet-class-11' },
          { name: 'NEET Class 12 Batch', path: '/courses/neet-class-12' },
          { name: 'NEET Droppers Batch', path: '/courses/neet-dropper' },
        ],
      },
    ],
  },
  { name: 'Mentors', path: '/mentors' },
  {
    name: 'Placements',
    dropdown: [
      { name: 'Internship', path: '/placements/internships' },
      { name: 'Jobs', path: '/placements/jobs' },
    ],
  },
  {
    name: 'Global Admissions',
    dropdown: [
      { name: 'Overseas Admissions', path: '/global-admissions/overseas' },
      { name: 'Campus India Admissions', path: '/global-admissions/campus-india' },
      { name: 'Online India Admissions', path: '/global-admissions/online-india' },
    ],
  },
  {
    name: 'Explore',
    dropdown: [
      { name: 'Success Stories', path: '/success-stories' },
      { name: 'Blog', path: '/blog' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  { name: 'Become A Mentor', path: '/become-mentor' },
];

/* ─── mega dropdown ─── */
const MegaMenu = ({ groups, isOpen }) => {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.group ?? '');

  useEffect(() => {
    if (isOpen) setActiveGroup(groups[0]?.group ?? '');
  }, [isOpen]);

  const current = groups.find((g) => g.group === activeGroup);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 flex bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
          style={{ minWidth: 380 }}
        >
          {/* Left pane — groups */}
          <div className="py-3 px-2 bg-gray-50 border-r border-gray-100" style={{ minWidth: 160 }}>
            {groups.map((g) => (
              <button
                key={g.group}
                onMouseEnter={() => setActiveGroup(g.group)}
                onClick={() => setActiveGroup(g.group)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeGroup === g.group
                  ? 'text-primary-500 bg-white shadow-sm'
                  : 'text-gray-600 hover:text-primary-500 hover:bg-white'
                  }`}
              >
                <span className="flex items-center gap-2">
                  {activeGroup === g.group && (
                    <span className="text-primary-500 text-xs">✦</span>
                  )}
                  {g.group}
                </span>
                <FaChevronRight className="text-xs opacity-50" />
              </button>
            ))}
          </div>

          {/* Right pane — sub-items */}
          <div className="py-3 px-3" style={{ minWidth: 220 }}>
            {current?.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── simple dropdown ─── */
const SimpleDropdown = ({ items, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.18 }}
        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50"
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── header ─── */
const Header = ({ onBookTrialClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const openDropdown = (name) => {
    clearTimeout(timerRef.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const scrollToTop = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      {/* Top Notification Banner */}
      <div className="w-full bg-[#ff5a28] text-white py-1.5 text-center text-sm font-medium z-50">
        Get a FREE Mentorship Call Today: <a href="tel:+919661676563" className="underline hover:text-white/90 transition-colors">+91 96616 76563</a>
      </div>
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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => (item.megaMenu || item.dropdown) && openDropdown(item.name)}
                onMouseLeave={closeDropdown}
              >
                {item.megaMenu ? (
                  <>
                    <button className={`px-4 py-2 font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${activeDropdown === item.name ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'}`}>
                      {item.name}
                      <FaChevronDown className={`text-xs transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <MegaMenu groups={item.megaMenu} isOpen={activeDropdown === item.name} />
                  </>
                ) : item.dropdown ? (
                  <>
                    <button className={`px-4 py-2 font-medium transition-colors flex items-center gap-1 whitespace-nowrap ${activeDropdown === item.name ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'}`}>
                      {item.name}
                      <FaChevronDown className={`text-xs transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <SimpleDropdown items={item.dropdown} isOpen={activeDropdown === item.name} />
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={item.path === '/' ? scrollToTop : undefined}
                    className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${location.pathname === item.path
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

          {/* CTA */}
          <div className="hidden lg:block">
            <button onClick={onBookTrialClick} className="btn-primary">
              Book a Free Trial
            </button>
          </div>

          {/* Mobile burger */}
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
            <nav className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.megaMenu ? (
                    <>
                      <button
                        onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg font-medium transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <FaChevronDown className={`text-xs transition-transform ${mobileOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            {item.megaMenu.map((group) => (
                              <div key={group.group}>
                                <p className="px-4 py-1 text-xs font-bold text-primary-500 uppercase tracking-wider">{group.group}</p>
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors text-sm"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-lg font-medium transition-colors flex items-center justify-between"
                      >
                        {item.name}
                        <FaChevronDown className={`text-xs transition-transform ${mobileOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpen === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-500 rounded-lg transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={item.path === '/' ? scrollToTop : undefined}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-500'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button onClick={onBookTrialClick} className="w-full btn-primary mt-4">
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
