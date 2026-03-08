import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp,
  FaYoutube, FaInstagram, FaLinkedin, FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const inputClass =
  "w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-sm";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contacts = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: 'Our Office',
      value: 'ITHUM Tower, 1018, Tower B, A 40, Sector 62, Noida, UP 201309',
      link: 'https://maps.google.com/?q=ITHUM+Tower+Sector+62+Noida',
      accent: 'from-orange-400 to-primary-500',
      bg: 'bg-orange-50',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Call Us',
      value: '+91 96616 76563',
      link: 'tel:+919661676563',
      accent: 'from-blue-400 to-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email Us',
      value: 'hello@unchaai.com',
      link: 'mailto:hello@unchaai.com',
      accent: 'from-purple-400 to-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: 'WhatsApp',
      value: '+91 96616 76563',
      link: 'https://wa.me/+919661676563',
      accent: 'from-green-400 to-green-600',
      bg: 'bg-green-50',
    },
  ];

  const socials = [
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@UnchaAI', color: 'hover:text-red-500' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/unchaai.learning', color: 'hover:text-pink-500' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/unchaai/', color: 'hover:text-blue-600' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/+919661676563', color: 'hover:text-green-500' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[130px] opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px] opacity-15 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUp} className="inline-block bg-white/10 border border-white/20 text-white text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
              Get In Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We'd Love to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400">
                Hear From You
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about our mentorship programs or courses? Our team is just a message away — we respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                target={c.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                className="bg-white rounded-3xl p-7 text-center border border-gray-100 shadow-sm cursor-pointer transition-all duration-300 group block"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center text-white mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {c.icon}
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.label}</p>
                <p className="text-gray-800 font-semibold text-sm leading-relaxed">{c.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">

            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Let's Start a <span className="text-primary-500">Conversation</span>
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Whether you're a student looking for guidance, a mentor wanting to join, or just curious about what UnchaAi offers — we're here to help.
                </p>
              </div>

              {/* Quick info */}
              <div className="space-y-4">
                {[
                  { emoji: '⏱️', title: 'Quick Response', desc: 'We reply within 24 hours' },
                  { emoji: '🎓', title: 'Expert Guidance', desc: 'Talk directly to our mentor coordinators' },
                  { emoji: '💬', title: 'Friendly Support', desc: 'No bots, just real humans who care' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-2xl px-5 py-4">
                    <div className="text-2xl">{item.emoji}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className={`w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 text-lg transition-colors ${s.color}`}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name *</label>
                      <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass} placeholder="Rahul Sharma" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass} placeholder="rahul@email.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject *</label>
                      <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className={inputClass} required>
                        <option value="">Select a topic</option>
                        <option>JEE / NEET Mentorship</option>
                        <option>Become a Mentor</option>
                        <option>Course Enquiry</option>
                        <option>Technical Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5} className={`${inputClass} resize-none`} placeholder="Tell us how we can help you..." required />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary-500/25 flex items-center justify-center gap-3 text-base hover:from-primary-600 hover:to-orange-600 transition-all"
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="pb-20">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100"
          >
            <iframe
              title="UnchaAi Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1785386025077!2d77.36534351508325!3d28.62764128241897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a7e5f5d3a3%3A0x3d7e8e9f56a98a75!2sITHUM%20Tower%2C%20Sector%2062%2C%20Noida!5e0!3m2!1sen!2sin!4v1678000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
