import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { getFeaturedMentors } from '../../data/mentors';
import MentorCard from '../common/MentorCard';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MeetMentors = ({ onBookTrialClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const featuredMentors = getFeaturedMentors();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section ref={ref} className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Meet Our <span className="heading-gradient">Mentors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confidence begins with quality tutoring. Our multi-step interview and selection process ensures that only the best mentor join our community.
          </p>
        </motion.div>

        {/* Mentors Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mentor-carousel"
        >
          <Slider {...settings}>
            {featuredMentors.map((mentor) => (
              <div key={mentor.id} className="px-3">
                <MentorCard mentor={mentor} onBookDemo={onBookTrialClick} />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/mentors" className="btn-primary inline-block">
            View All Mentors
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetMentors;
