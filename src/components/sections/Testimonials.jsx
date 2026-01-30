import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { studentTestimonials, mentorTestimonials } from '../../data/testimonials';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [studentRef, studentInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mentorRef, mentorInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      {/* Student Testimonials */}
      <section ref={studentRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={studentInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Results Say
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Proven <span className="heading-gradient">Results</span> from Unchaai Mentorship
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted By Thousands of Students - Hear it from UnchaAi's Result Holders!
            </p>
          </motion.div>

          <Slider {...sliderSettings}>
            {studentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="card p-6 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.photo_url}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600 font-semibold">{testimonial.college}</p>
                      <p className="text-xs text-gray-500">{testimonial.rank} - {testimonial.exam}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {testimonial.testimonial}
                  </p>
                  
                  {testimonial.video_url && (
                    <button className="mt-4 text-primary-500 text-sm font-semibold hover:text-primary-600">
                      Watch Video →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Mentor Testimonials */}
      <section ref={mentorRef} className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mentorInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Mentors
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Hear it from Our <span className="heading-gradient">Mentors!</span>
            </h2>
          </motion.div>

          <Slider {...sliderSettings}>
            {mentorTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="card p-6 h-full relative">
                  <FaQuoteLeft className="text-4xl text-primary-200 absolute top-4 right-4" />
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.photo_url}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-secondary-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-secondary-600 font-semibold">{testimonial.college}</p>
                      <p className="text-xs text-gray-500">{testimonial.designation}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
