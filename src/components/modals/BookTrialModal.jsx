import { motion } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaStar, FaUserGraduate } from 'react-icons/fa';
import { useState } from 'react';

const BookTrialModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    exam: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classes = ['Class 11th', 'Class 12th', 'Dropper', 'Foundation (8th-10th)'];
  const exams = ['JEE Mains & Advanced', 'NEET UG', 'Board Exams + CUET'];
  const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'All Subjects (PCM/PCB)'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Must be 10 digits';
    if (!formData.class) newErrors.class = 'Required';
    if (!formData.exam) newErrors.exam = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Mobile) */}
        <button onClick={onClose} className="md:hidden absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full text-gray-600 hover:text-gray-900 shadow">
          <FaTimes />
        </button>

        {/* Left Side - Info */}
        <div className="md:w-5/12 bg-gradient-to-br from-primary-600 to-orange-500 p-8 text-white flex flex-col justify-between hidden md:flex relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Kickstart Your Prep</h2>
            <p className="text-white/80 text-sm mb-8">Book a 1-on-1 free trial session with an IITian or NEET Ranker.</p>

            <div className="space-y-5">
              {[
                { icon: FaUserGraduate, text: "Learn from Top 1% Mentors" },
                { icon: FaStar, text: "Personalized Study Roadmap" },
                { icon: FaCheckCircle, text: "Doubt Clearing Sessions" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-lg text-white" />
                  </div>
                  <span className="font-medium text-sm text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <p className="text-white/60 text-xs text-center">Join 10,000+ successful students at UnchaAi.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
          {/* Close Button (Desktop) */}
          <button onClick={onClose} className="hidden md:flex absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
            <FaTimes className="text-xl" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="mb-6 md:mb-8 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 md:hidden mb-1">Book Free Trial</h3>
                <h3 className="text-2xl font-bold text-gray-900 hidden md:block">Fill Details</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Full Name *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 px-1">{errors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 px-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Phone *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="10-digit mobile"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 px-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Class & Exam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Class *</label>
                    <select
                      name="class" value={formData.class} onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer ${errors.class ? 'border-red-300' : 'border-gray-200'}`}
                    >
                      <option value="">Select...</option>
                      {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                    </select>
                    {errors.class && <p className="text-red-500 text-xs mt-1 px-1">{errors.class}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Target *</label>
                    <select
                      name="exam" value={formData.exam} onChange={handleChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all cursor-pointer ${errors.exam ? 'border-red-300' : 'border-gray-200'}`}
                    >
                      <option value="">Select...</option>
                      {exams.map(exam => <option key={exam} value={exam}>{exam}</option>)}
                    </select>
                    {errors.exam && <p className="text-red-500 text-xs mt-1 px-1">{errors.exam}</p>}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-primary-600 text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-lg hover:from-orange-600 hover:to-primary-700 transition-all disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                        Processing...
                      </span>
                    ) : 'Book Free Trial Now'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center py-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaCheckCircle className="text-4xl text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-500 max-w-sm">We've received your details. Our academic team will contact you shortly to schedule your trial class.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookTrialModal;
