// Supabase-ready FAQ data
export const faqData = [
  {
    id: 1,
    question: "How do I enroll for mentorship?",
    answer: "You can enroll for the mentorship program by these simple steps:\n\nStep 1: Apply for the mentorship\nStep 2: Get a call from our team\nStep 3: Choose a subscription plan\nStep 4: Get started with mentorship\n\nOur team will guide you through each step to ensure a smooth onboarding experience.",
    category: "enrollment"
  },
  {
    id: 2,
    question: "How many sessions do I need to bring my JEE/NEET preparation on track?",
    answer: "It is usually about six months of focused learning, but you can always break it down into smaller segments and study when you have the time. The exact duration depends on your current preparation level, target exam, and daily commitment. Our mentors will assess your needs and create a personalized timeline for you.",
    category: "preparation"
  },
  {
    id: 3,
    question: "What impact will this MENTORSHIP have on my preparation?",
    answer: "This mentorship will be soundly beneficial for you in your preparation. You will learn the basics and gain conceptual strength, which is very important. Additional benefits include:\n\n• Personalized study plans tailored to your needs\n• Regular doubt-solving sessions\n• Strategic guidance from IIT/NEET toppers\n• Performance tracking and improvement suggestions\n• Motivation and mental support throughout your journey\n• Access to high-quality study materials and test series",
    category: "benefits"
  },
  {
    id: 4,
    question: "I have enrolled in coaching. Do I still need mentorship?",
    answer: "• If you are not able to perform better with your coaching, then you definitely need mentorship!\n\n• But even if you are not associated with any coaching, still our platform can benefit your preparation. Learning how the JEE ecosystem works can yield excellent results and success in the attempts.\n\n• Mentorship complements coaching by providing personalized attention, which is often missing in large classroom settings.\n\n• Our mentors help you optimize your coaching material and create efficient study strategies.",
    category: "coaching"
  },
  {
    id: 5,
    question: "What subjects are covered in the mentorship program?",
    answer: "We provide comprehensive mentorship for:\n\n• Mathematics - All JEE/Board topics\n• Physics - Mechanics, Electromagnetism, Modern Physics, etc.\n• Chemistry - Physical, Organic, and Inorganic Chemistry\n• Biology - For NEET aspirants (Botany and Zoology)\n\nOur mentors are subject experts who specialize in their respective fields.",
    category: "subjects"
  },
  {
    id: 6,
    question: "Can I change my mentor if I'm not satisfied?",
    answer: "Yes, absolutely! Student satisfaction is our priority. If you feel that your current mentor is not the right fit for you, you can request a mentor change. Our team will understand your requirements and match you with a more suitable mentor. We want to ensure you have the best learning experience possible.",
    category: "flexibility"
  },
  {
    id: 7,
    question: "What is the fee structure for mentorship?",
    answer: "We offer flexible subscription plans to suit different needs:\n\n• Monthly Plans - Ideal for short-term preparation\n• Quarterly Plans - Most popular, balanced approach\n• Half-Yearly Plans - Comprehensive preparation\n• Yearly Plans - Best value, complete exam preparation\n\nThe exact pricing varies based on the mentor's experience, subjects chosen, and session frequency. Please book a free trial to discuss pricing with our team.",
    category: "pricing"
  },
  {
    id: 8,
    question: "How are the mentors selected at UnchaAi?",
    answer: "Confidence begins with quality tutoring. Our multi-step interview and selection process ensures that only the best mentors join our community:\n\n• Only top 1% candidates are selected\n• Verification of JEE/NEET ranks and college credentials\n• Teaching demo and communication skills assessment\n• Background verification\n• Training on our teaching methodology\n• Continuous performance monitoring based on student feedback",
    category: "mentors"
  },
  {
    id: 9,
    question: "What is the schedule flexibility for sessions?",
    answer: "We understand that students have different schedules with school, coaching, and self-study. Our mentorship program offers high flexibility:\n\n• Sessions can be scheduled according to your availability\n• Early morning, evening, and weekend slots available\n• Rescheduling options with advance notice\n• Recorded sessions available for revision\n• Make-up sessions for missed classes",
    category: "flexibility"
  },
  {
    id: 10,
    question: "Do you provide study materials and test series?",
    answer: "Yes! Along with mentorship, you get access to:\n\n• Curated study materials from top sources\n• Chapter-wise practice problems\n• AI-based adaptive test series\n• Previous year question papers with solutions\n• Topic-wise notes and formula sheets\n• Performance analytics and detailed reports\n• Doubt-solving resources",
    category: "resources"
  }
];

export const getFAQsByCategory = (category) => {
  if (!category || category === 'all') return faqData;
  return faqData.filter(faq => faq.category === category);
};

export default faqData;
