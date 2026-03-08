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
        icon: '⚛️',
        desc: 'Physics, Chemistry & Maths for IIT aspirants',
        path: '/courses/jee',
        items: [
          { name: 'JEE Class 11 Batch', path: '/courses/jee-class-11', icon: '📘', desc: 'Foundation & advanced for Class 11' },
          { name: 'JEE Class 12 Batch', path: '/courses/jee-class-12', icon: '📗', desc: 'Intensive prep for Class 12 droppers' },
          { name: 'JEE Droppers Batch', path: '/courses/jee-dropper', icon: '🎯', desc: 'Crash course for serious droppers' },
        ],
      },
      {
        group: 'NEET',
        icon: '🏥',
        desc: 'Biology, Physics & Chemistry for AIIMS/NEET',
        path: '/courses/neet',
        items: [
          { name: 'NEET Class 11 Batch', path: '/courses/neet-class-11', icon: '📘', desc: 'Foundation & advanced for Class 11' },
          { name: 'NEET Class 12 Batch', path: '/courses/neet-class-12', icon: '📗', desc: 'Intensive prep for Class 12 students' },
          { name: 'NEET Droppers Batch', path: '/courses/neet-dropper', icon: '🎯', desc: 'Focused course for NEET droppers' },
        ],
      },
    ],
  },
  { name: 'Mentors', path: '/mentors' },
  {
    name: 'Placements',
    dropdown: [
      { name: 'Internship', path: '/placements/internships', icon: '💼', desc: 'Find top internship opportunities', accent: 'bg-blue-500' },
      { name: 'Jobs', path: '/placements/jobs', icon: '🚀', desc: 'Launch your career with UnchaAi', accent: 'bg-green-500' },
    ],
  },
  {
    name: 'Global Admissions',
    dropdown: [
      { name: 'Overseas Admissions', path: '/global-admissions/overseas', icon: '✈️', desc: 'Study abroad programs & guidance', accent: 'bg-purple-500' },
      { name: 'Campus India Admissions', path: '/global-admissions/campus-india', icon: '🏛️', desc: 'Top campus college admissions', accent: 'bg-orange-500' },
      { name: 'Online India Admissions', path: '/global-admissions/online-india', icon: '💻', desc: 'Flexible online degree programs', accent: 'bg-teal-500' },
    ],
  },
  {
    name: 'Explore',
    dropdown: [
      { name: 'Success Stories', path: '/success-stories', icon: '🏆', desc: 'Hear from students who cracked it', accent: 'bg-yellow-500' },
      { name: 'Blog', path: '/blog', icon: '📝', desc: 'Tips, strategies & exam insights', accent: 'bg-pink-500' },
    ],
  },
  { name: 'Become A Mentor', path: '/become-mentor' },
];

/* ─── mega dropdown (Courses) ─── */
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
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 flex"
          style={{ minWidth: 420, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
        >
          {/* Left pane — group selector */}
          <div className="w-36 bg-gray-50 border-r border-gray-100 p-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">Courses</p>
            {groups.map((g) => (
              <button
                key={g.group}
                onMouseEnter={() => setActiveGroup(g.group)}
                onClick={() => setActiveGroup(g.group)}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all ${activeGroup === g.group
                  ? 'bg-white shadow text-primary-600'
                  : 'text-gray-600 hover:bg-white/70 hover:text-primary-500'
                  }`}
              >
                <span className="text-lg">{g.icon}</span>
                <span className="font-bold text-sm">{g.group}</span>
              </button>
            ))}
          </div>

          {/* Right pane — sub-items */}
          <div className="flex-1 p-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">{activeGroup} Batches</p>
            <div className="space-y-0.5">
              {current?.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-50 group transition-all"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-sm group-hover:bg-primary-200 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                  <FaChevronRight className="text-gray-300 text-xs group-hover:text-primary-400 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
            <div className="mt-2 mx-1 bg-gradient-to-r from-primary-500 to-orange-500 rounded-xl px-3 py-2 text-white flex items-center gap-2">
              <span>🎯</span>
              <div>
                <div className="text-xs font-bold">Book a Free Demo</div>
                <div className="text-xs text-white/75">Talk to a mentor first</div>
              </div>
            </div>
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
        initial={{ opacity: 0, y: 12, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-3 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50"
        style={{ minWidth: 260, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
      >
        <div className="p-3 space-y-1">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-50 group transition-all"
            >
              <div className={`w-10 h-10 ${item.accent} rounded-xl flex items-center justify-center text-white text-lg shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{item.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
              </div>
              <FaChevronRight className="text-gray-300 text-xs group-hover:text-primary-400 transition-colors" />
            </Link>
          ))}
        </div>
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
