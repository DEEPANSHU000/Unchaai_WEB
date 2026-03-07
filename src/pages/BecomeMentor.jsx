import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaClock, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const BecomeMentor = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-28 bg-[#F2F8F1] min-h-screen">
      {/* HERO */}
      <section className="container-custom grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-primary-500 font-semibold mb-3">
            # BECOME A MENTOR
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Join Our Mentor Community <br />
            And Teach Online From <br />
            The Comfort Of Your Home
          </h1>

          <p className="text-gray-600 mt-5 max-w-xl">
            Get flexible WFH hours, earn for every lesson, and make a real
            impact on students preparing for competitive exams.
          </p>

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="btn-primary mt-8"
          >
            Apply Now
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.img
          src="/images/mentor-hero.png"
          alt="Become a Mentor"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg mx-auto"
        />
      </section>

      {/* BENEFITS */}
      <section className="container-custom py-20 grid md:grid-cols-3 gap-8">
        <Benefit
          icon={<FaClock />}
          title="WFH With Flexible Hours"
          text="Teach from anywhere with complete flexibility."
        />
        <Benefit
          icon={<FaMoneyBillWave />}
          title="Earn For Every Lesson"
          text="Get paid fairly for every session you teach."
        />
        <Benefit
          icon={<FaUsers />}
          title="Steady Stream Of Students"
          text="Consistent demand from motivated learners."
        />
      </section>

      {/* MENTOR TESTIMONIALS */}
<section className="container-custom py-24">
  <h2 className="text-3xl font-bold text-center mb-12">
    Hear It From Our <span className="heading-gradient">Mentors</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Anmol Sharma",
        college: "IIT Roorkee",
        videoId: "rmCCml7BM_E?si=4BIS1s4hfgQdPwY5",
      },
      {
        name: "Sanchit Kumar",
        college: "IIT BHU",
        videoId: "OljmMWNMAGM?si=eRLP1TMSMCXDG2zQ",
      },
      {
        name: "Sneha Soni",
        college: "IIT Guwahati",
        videoId: "FPJEO37ho1I?si=gtbrSMTr2DPVj631",
      },
    ].map((mentor, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -6 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        {/* YouTube Video */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${mentor.videoId}`}
            title={mentor.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Mentor Info */}
        <div className="p-4 text-center">
          <p className="font-semibold">{mentor.name}</p>
          <p className="text-sm text-gray-600">{mentor.college}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl w-full max-w-2xl p-8 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-primary-500"
              >
                <FaTimes size={18} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-6">
                Book A <span className="text-primary-500">Free Trial</span>
              </h2>

              {/* Responsive Form */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
                <input className="input" placeholder="Email ID" />
                <input className="input" placeholder="Phone Number" />
                <input className="input" placeholder="College Name" />
                <input className="input" placeholder="JEE / NEET Rank" />

                <select className="input md:col-span-2">
                  <option>Mentor</option>
                  <option>Mentor JEE</option>
                  <option>Mentor NEET</option>
                  <option>Tutor</option>
                  <option>Others</option>
                </select>

                <input
                  className="input md:col-span-2"
                  placeholder="Subject Expertise"
                />

                <button className="btn-primary md:col-span-2 mt-4">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BecomeMentor;

/* BENEFIT CARD */
const Benefit = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white rounded-xl p-6 shadow-md text-center"
  >
    <div className="text-primary-500 text-3xl mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-600 mt-2">{text}</p>
  </motion.div>
);