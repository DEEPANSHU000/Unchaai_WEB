import { Link } from 'react-router-dom';
import {FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const courses = [
    { name: 'JEE Mains Coaching', path: '/courses/jee-mains' },
    { name: 'JEE Advanced Coaching', path: '/courses/jee-advanced' },
    { name: 'NEET Coaching', path: '/courses/neet' },
    { name: 'Board Exam Preparation', path: '/courses/boards' },
    { name: 'Olympiad Training', path: '/courses/olympiad' }
  ];

  const resources = [
    { name: 'Study Materials', path: '/resources/materials' },
    { name: 'Practice Tests', path: '/resources/tests' },
    { name: 'Previous Year Papers', path: '/resources/papers' },
    { name: 'Video Lectures', path: '/resources/videos' },
    { name: 'Free Resources', path: '/resources/free' }
  ];

  return (
    <footer className="bg-secondary-500 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/images/Unchaai-Logo.svg"
                alt="UnchaAi Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              5+ Years of Academic Excellence. Unlock Your Potential with IITians/NEET Rankers as Your Personal Mentors & Tutors.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/919661676563"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
                </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn className="text-sm" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-gray-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  ITHUM TOWER, 1018, Tower B, A 40, Sector 62, Noida, Uttar Pradesh 20130
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+919661676563" className="text-gray-300 hover:text-primary-500 transition-colors">
                  +91 9661676563
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:team@maiwaytech.com" className="text-gray-300 hover:text-primary-500 transition-colors">
                  team@maiwaytech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} UnchaAI. All rights reserved. Estd. 2019
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary-500 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
