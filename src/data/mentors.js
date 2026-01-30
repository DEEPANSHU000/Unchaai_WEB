// Supabase-ready mock data for mentors
// This structure mirrors the Supabase database schema
// Replace with actual Supabase queries: supabase.from('mentors').select('*')

export const mentorsData = [
  {
    id: 1,
    name: "Vivek Sen",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    college: "IIT Roorkee",
    branch: "Computer Science",
    jee_rank: 247,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Olympiad"],
    experience_years: 4,
    rating: 4.9,
    total_reviews: 156,
    students_taught: 289,
    success_rate: 94,
    bio: "Passionate about making complex mathematics simple. Helped 200+ students crack JEE Advanced with top ranks.",
    teaching_philosophy: "I believe in building strong fundamentals and problem-solving skills rather than memorization.",
    methodology: "Concept-based learning with regular doubt sessions and personalized attention to each student's weak areas.",
    availability: ["Monday 6PM-9PM", "Wednesday 6PM-9PM", "Saturday 10AM-6PM", "Sunday 10AM-6PM"],
    achievements: ["AIR 247 in JEE Advanced", "Gold Medal in Mathematics Olympiad", "Published research paper in IIT"],
    certifications: ["Teaching Excellence Award 2023", "Subject Matter Expert Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Rahul Sharma",
        rating: 5,
        comment: "Best mentor I could ask for! Vivek sir's teaching methodology helped me improve my rank by 5000 positions."
      },
      {
        student_name: "Priya Patel",
        rating: 5,
        comment: "His problem-solving techniques are amazing. Highly recommended for JEE Advanced preparation."
      }
    ],
    hourly_rate: 1500,
    total_hours_taught: 1200
  },
  {
    id: 2,
    name: "Shakshi Verma",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    college: "AIIMS Delhi",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 89,
    subjects: ["Biology", "Chemistry"],
    exam_focus: ["NEET", "Board Exams"],
    experience_years: 3,
    rating: 4.8,
    total_reviews: 142,
    students_taught: 234,
    success_rate: 92,
    bio: "NEET topper turned mentor. Specialized in Biology and Organic Chemistry. My mission is to make NEET preparation stress-free.",
    teaching_philosophy: "Focus on conceptual clarity and regular revision. Every student can crack NEET with the right guidance.",
    methodology: "Visual learning techniques for Biology, systematic approach for Chemistry with daily practice problems.",
    availability: ["Tuesday 5PM-8PM", "Thursday 5PM-8PM", "Saturday 2PM-7PM", "Sunday 2PM-7PM"],
    achievements: ["AIR 89 in NEET", "State topper in Biology", "Published medical research article"],
    certifications: ["NEET Subject Expert", "Biology Teaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Anjali Reddy",
        rating: 5,
        comment: "Shakshi ma'am made Biology so interesting! Her mnemonics and tricks are lifesavers."
      }
    ],
    hourly_rate: 1400,
    total_hours_taught: 980
  },
  {
    id: 3,
    name: "Anmol Sharma",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    college: "IIT Roorkee",
    branch: "Mechanical Engineering",
    jee_rank: 312,
    neet_rank: null,
    subjects: ["Physics", "Mathematics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Board Exams"],
    experience_years: 5,
    rating: 4.9,
    total_reviews: 198,
    students_taught: 356,
    success_rate: 96,
    bio: "5 years of mentoring experience with a track record of producing top 1000 rankers. Physics and Math specialist.",
    teaching_philosophy: "Practice makes perfect. I emphasize regular problem-solving and mock tests.",
    methodology: "Structured study plans, weekly assessments, and personalized feedback on every test.",
    availability: ["Monday 7PM-10PM", "Wednesday 7PM-10PM", "Friday 7PM-10PM", "Sunday 9AM-5PM"],
    achievements: ["AIR 312 in JEE Advanced", "Mentored 12 students who got AIR under 1000"],
    certifications: ["IIT Teaching Excellence Award", "Physics Subject Expert"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Karan Singh",
        rating: 5,
        comment: "Anmol sir's guidance was instrumental in my JEE success. Got AIR 756!"
      }
    ],
    hourly_rate: 1600,
    total_hours_taught: 1500
  },
  {
    id: 4,
    name: "Sanchit Kumar",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    college: "IIT BHU",
    branch: "Electrical Engineering",
    jee_rank: 421,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "NTSE"],
    experience_years: 3,
    rating: 4.7,
    total_reviews: 123,
    students_taught: 198,
    success_rate: 91,
    bio: "Passionate about teaching Mathematics and Physics. Known for simplifying complex concepts.",
    teaching_philosophy: "Every student learns differently. I adapt my teaching to match each student's learning style.",
    methodology: "Interactive sessions with real-world examples and extensive problem-solving practice.",
    availability: ["Tuesday 6PM-9PM", "Thursday 6PM-9PM", "Sunday 10AM-4PM"],
    achievements: ["AIR 421 in JEE Advanced", "National Mathematics Olympiad Gold Medal"],
    certifications: ["Mathematics Teaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Neha Gupta",
        rating: 5,
        comment: "Sanchit sir's approach to problem-solving is unique and very effective."
      }
    ],
    hourly_rate: 1350,
    total_hours_taught: 850
  },
  {
    id: 5,
    name: "Sneha Soni",
    photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    college: "IIT Guwahati",
    branch: "Chemical Engineering",
    jee_rank: 567,
    neet_rank: null,
    subjects: ["Chemistry", "Mathematics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Board Exams"],
    experience_years: 4,
    rating: 4.8,
    total_reviews: 167,
    students_taught: 276,
    success_rate: 93,
    bio: "Chemistry expert with a passion for organic chemistry. Helping students fall in love with Chemistry!",
    teaching_philosophy: "Chemistry is not about memorization, it's about understanding reactions and patterns.",
    methodology: "Visual learning aids, reaction mechanisms, and regular quizzes to track progress.",
    availability: ["Monday 5PM-8PM", "Friday 5PM-8PM", "Saturday 11AM-5PM"],
    achievements: ["AIR 567 in JEE Advanced", "Perfect score in Chemistry in JEE Advanced"],
    certifications: ["Chemistry Subject Matter Expert"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Arjun Mehta",
        rating: 5,
        comment: "Sneha ma'am made organic chemistry so easy to understand. My favorite mentor!"
      }
    ],
    hourly_rate: 1450,
    total_hours_taught: 1100
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    college: "IIT Bombay",
    branch: "Computer Science",
    jee_rank: 156,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Olympiad"],
    experience_years: 5,
    rating: 4.9,
    total_reviews: 203,
    students_taught: 412,
    success_rate: 97,
    bio: "IIT Bombay graduate with 5 years of mentoring experience. Specialized in advanced mathematics and physics.",
    teaching_philosophy: "Building strong foundations is key to cracking competitive exams.",
    methodology: "Problem-solving oriented approach with focus on JEE Advanced level questions.",
    availability: ["Monday 8PM-11PM", "Thursday 8PM-11PM", "Saturday 9AM-6PM"],
    achievements: ["AIR 156 in JEE Advanced", "International Mathematics Olympiad Bronze Medal"],
    certifications: ["IIT Excellence in Teaching Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Vikram Rao",
        rating: 5,
        comment: "Best mentor for JEE Advanced preparation. His strategies are top-notch!"
      }
    ],
    hourly_rate: 1800,
    total_hours_taught: 1800
  },
  {
    id: 7,
    name: "Priya Malhotra",
    photo_url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    college: "AIIMS Mumbai",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 134,
    subjects: ["Biology", "Chemistry"],
    exam_focus: ["NEET", "Board Exams"],
    experience_years: 3,
    rating: 4.8,
    total_reviews: 145,
    students_taught: 256,
    success_rate: 91,
    bio: "NEET AIR 134. Passionate about teaching Biology and making it fun and memorable.",
    teaching_philosophy: "Visualization and understanding over rote learning. Make Biology your strength!",
    methodology: "Diagram-based learning, regular tests, and concept mapping techniques.",
    availability: ["Tuesday 4PM-7PM", "Thursday 4PM-7PM", "Sunday 1PM-6PM"],
    achievements: ["AIR 134 in NEET", "State Biology Olympiad Winner"],
    certifications: ["NEET Biology Expert Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Divya Sharma",
        rating: 5,
        comment: "Priya ma'am's teaching style is amazing. I improved my Biology score by 40 marks!"
      }
    ],
    hourly_rate: 1350,
    total_hours_taught: 920
  },
  {
    id: 8,
    name: "Aditya Verma",
    photo_url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    college: "IIT Delhi",
    branch: "Electronics Engineering",
    jee_rank: 289,
    neet_rank: null,
    subjects: ["Physics", "Mathematics"],
    exam_focus: ["JEE Mains", "JEE Advanced"],
    experience_years: 4,
    rating: 4.9,
    total_reviews: 178,
    students_taught: 312,
    success_rate: 95,
    bio: "IIT Delhi alumnus specializing in Physics. Known for making difficult topics simple.",
    teaching_philosophy: "Understanding the 'why' behind every concept is more important than the 'what'.",
    methodology: "Conceptual learning followed by progressive difficulty level problem-solving.",
    availability: ["Wednesday 7PM-10PM", "Friday 7PM-10PM", "Sunday 10AM-5PM"],
    achievements: ["AIR 289 in JEE Advanced", "Physics Olympiad National Silver Medal"],
    certifications: ["Physics Teaching Excellence Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Rohan Joshi",
        rating: 5,
        comment: "Aditya sir's physics classes are the best. Complex topics become so easy!"
      }
    ],
    hourly_rate: 1650,
    total_hours_taught: 1320
  },
  {
    id: 9,
    name: "Kavya Reddy",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    college: "AFMC Pune",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 201,
    subjects: ["Biology", "Chemistry", "Physics"],
    exam_focus: ["NEET"],
    experience_years: 2,
    rating: 4.7,
    total_reviews: 98,
    students_taught: 167,
    success_rate: 89,
    bio: "Recent NEET topper with fresh strategies and updated study material. All subjects covered!",
    teaching_philosophy: "Smart work over hard work. Focus on high-yield topics and efficient revision.",
    methodology: "Topic-wise analysis, regular mock tests, and detailed performance reports.",
    availability: ["Monday 3PM-6PM", "Saturday 2PM-7PM"],
    achievements: ["AIR 201 in NEET", "Perfect score in Biology"],
    certifications: ["NEET Coaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Simran Kaur",
        rating: 5,
        comment: "Kavya ma'am's recent experience helps her understand our problems better."
      }
    ],
    hourly_rate: 1250,
    total_hours_taught: 650
  },
  {
    id: 10,
    name: "Harsh Agarwal",
    photo_url: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    college: "IIT Kharagpur",
    branch: "Mechanical Engineering",
    jee_rank: 398,
    neet_rank: null,
    subjects: ["Mathematics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Board Exams"],
    experience_years: 4,
    rating: 4.8,
    total_reviews: 156,
    students_taught: 289,
    success_rate: 94,
    bio: "Mathematics wizard from IIT Kharagpur. Making math fun and interesting for 4+ years.",
    teaching_philosophy: "Mathematics is about pattern recognition and logical thinking, not just formulas.",
    methodology: "Shortcut techniques, pattern recognition, and extensive practice problems.",
    availability: ["Tuesday 7PM-10PM", "Saturday 10AM-6PM", "Sunday 10AM-4PM"],
    achievements: ["AIR 398 in JEE Advanced", "Perfect 100/100 in JEE Maths"],
    certifications: ["Mathematics Expert Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Tanvi Jain",
        rating: 5,
        comment: "Harsh sir's shortcuts and tricks saved me so much time in JEE!"
      }
    ],
    hourly_rate: 1500,
    total_hours_taught: 1150
  },
  {
    id: 11,
    name: "Deepak Sahoo",
    photo_url: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=400&h=400&fit=crop",
    college: "IIT Bombay",
    branch: "Aerospace Engineering",
    jee_rank: 178,
    neet_rank: null,
    subjects: ["Physics", "Mathematics"],
    exam_focus: ["JEE Advanced", "Olympiad"],
    experience_years: 5,
    rating: 4.9,
    total_reviews: 189,
    students_taught: 345,
    success_rate: 96,
    bio: "IIT Bombay topper with specialization in advanced physics concepts. Olympiad expert.",
    teaching_philosophy: "Push boundaries and aim higher. Excellence is a habit, not an act.",
    methodology: "Advanced problem-solving, Olympiad-level questions, and competitive mindset training.",
    availability: ["Monday 8PM-11PM", "Friday 8PM-11PM", "Sunday 11AM-7PM"],
    achievements: ["AIR 178 in JEE Advanced", "International Physics Olympiad Participant"],
    certifications: ["Olympiad Training Certification", "IIT Teaching Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Amit Patel",
        rating: 5,
        comment: "Deepak sir prepared me not just for JEE but also for Olympiad. Got selected!"
      }
    ],
    hourly_rate: 1900,
    total_hours_taught: 1650
  },
  {
    id: 12,
    name: "Ritu Sharma",
    photo_url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
    college: "Lady Hardinge Medical College",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 267,
    subjects: ["Biology", "Chemistry"],
    exam_focus: ["NEET", "Board Exams"],
    experience_years: 3,
    rating: 4.7,
    total_reviews: 134,
    students_taught: 223,
    success_rate: 90,
    bio: "Medical student with a passion for teaching. Expertise in Biology and Organic Chemistry.",
    teaching_philosophy: "Patient and supportive teaching that builds confidence along with knowledge.",
    methodology: "Student-friendly approach with emphasis on clearing doubts and regular feedback.",
    availability: ["Wednesday 5PM-8PM", "Saturday 3PM-8PM", "Sunday 2PM-6PM"],
    achievements: ["AIR 267 in NEET", "State topper in Chemistry"],
    certifications: ["NEET Teaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Pooja Singh",
        rating: 5,
        comment: "Ritu ma'am is very patient and explains everything clearly. Highly recommended!"
      }
    ],
    hourly_rate: 1300,
    total_hours_taught: 890
  },
  {
    id: 13,
    name: "Aryan Mishra",
    photo_url: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop",
    college: "IIT Madras",
    branch: "Computer Science",
    jee_rank: 234,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced"],
    experience_years: 4,
    rating: 4.9,
    total_reviews: 172,
    students_taught: 298,
    success_rate: 95,
    bio: "IIT Madras CS graduate. Strong in mathematics and physics problem-solving techniques.",
    teaching_philosophy: "Consistency and daily practice are the keys to success in competitive exams.",
    methodology: "Daily assignments, weekly tests, and detailed performance analysis.",
    availability: ["Tuesday 6PM-9PM", "Thursday 6PM-9PM", "Sunday 9AM-5PM"],
    achievements: ["AIR 234 in JEE Advanced", "Google Code Jam Finalist"],
    certifications: ["IIT Teaching Excellence"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Sahil Kumar",
        rating: 5,
        comment: "Aryan sir's problem-solving approach is systematic and very effective."
      }
    ],
    hourly_rate: 1700,
    total_hours_taught: 1280
  },
  {
    id: 14,
    name: "Shaurya Singh",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    college: "IIT Delhi",
    branch: "Civil Engineering",
    jee_rank: 345,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced", "Board Exams"],
    experience_years: 3,
    rating: 4.8,
    total_reviews: 142,
    students_taught: 267,
    success_rate: 92,
    bio: "IIT Delhi alumnus passionate about teaching. Cleared JEE in first attempt with focused preparation.",
    teaching_philosophy: "Quality over quantity. Focus on understanding rather than solving more problems.",
    methodology: "Concept clarity sessions, doubt resolution, and targeted practice.",
    availability: ["Monday 6PM-9PM", "Wednesday 6PM-9PM", "Saturday 11AM-5PM"],
    achievements: ["AIR 345 in JEE Advanced", "State Board Topper"],
    certifications: ["Mathematics Teaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Megha Agarwal",
        rating: 5,
        comment: "Shaurya sir helped me understand concepts I struggled with for months!"
      }
    ],
    hourly_rate: 1450,
    total_hours_taught: 980
  },
  {
    id: 15,
    name: "Harshita Singh",
    photo_url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    college: "IIT Dhanbad",
    branch: "Electronics Engineering",
    jee_rank: 512,
    neet_rank: null,
    subjects: ["Physics", "Chemistry"],
    exam_focus: ["JEE Mains", "JEE Advanced"],
    experience_years: 2,
    rating: 4.7,
    total_reviews: 89,
    students_taught: 156,
    success_rate: 88,
    bio: "Recent IIT graduate with fresh perspective on JEE preparation. Physics and Chemistry expert.",
    teaching_philosophy: "Regular revision and practice are essential for retaining concepts.",
    methodology: "Weekly revision sessions, formula sheets, and quick recall techniques.",
    availability: ["Friday 5PM-8PM", "Sunday 12PM-5PM"],
    achievements: ["AIR 512 in JEE Advanced", "Chemistry Olympiad State Winner"],
    certifications: ["JEE Teaching Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Varun Reddy",
        rating: 5,
        comment: "Harshita ma'am's chemistry notes are excellent! Very helpful for revision."
      }
    ],
    hourly_rate: 1200,
    total_hours_taught: 620
  },
  {
    id: 16,
    name: "Aditya Agarwal",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    college: "IIT Kharagpur",
    branch: "Electrical Engineering",
    jee_rank: 423,
    neet_rank: null,
    subjects: ["Mathematics", "Physics"],
    exam_focus: ["JEE Mains", "JEE Advanced"],
    experience_years: 3,
    rating: 4.8,
    total_reviews: 145,
    students_taught: 245,
    success_rate: 93,
    bio: "IIT KGP graduate with strong mathematics background. Helping students achieve their IIT dreams.",
    teaching_philosophy: "Hard work beats talent when talent doesn't work hard.",
    methodology: "Structured study plans, time management techniques, and motivational guidance.",
    availability: ["Monday 7PM-10PM", "Thursday 7PM-10PM", "Saturday 2PM-7PM"],
    achievements: ["AIR 423 in JEE Advanced", "Perfect score in JEE Maths"],
    certifications: ["IIT Excellence Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Ritika Malhotra",
        rating: 5,
        comment: "Aditya sir's guidance helped me crack IIT Bombay. Forever grateful!"
      }
    ],
    hourly_rate: 1550,
    total_hours_taught: 1050
  },
  {
    id: 17,
    name: "Meera Iyer",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    college: "Maulana Azad Medical College",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 178,
    subjects: ["Biology", "Chemistry"],
    exam_focus: ["NEET"],
    experience_years: 4,
    rating: 4.9,
    total_reviews: 167,
    students_taught: 289,
    success_rate: 94,
    bio: "NEET expert with 4 years of teaching experience. Specializing in Botany and Organic Chemistry.",
    teaching_philosophy: "Visual learning and mnemonics make complex biology topics memorable.",
    methodology: "Diagram-based learning, flowcharts, and regular revision tests.",
    availability: ["Tuesday 4PM-7PM", "Thursday 4PM-7PM", "Sunday 10AM-5PM"],
    achievements: ["AIR 178 in NEET", "National Biology Olympiad Gold Medal"],
    certifications: ["NEET Biology Expert", "Medical Education Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Ishita Desai",
        rating: 5,
        comment: "Meera ma'am's botany classes are the best! Her diagrams are so helpful."
      }
    ],
    hourly_rate: 1600,
    total_hours_taught: 1340
  },
  {
    id: 18,
    name: "Karthik Nair",
    photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    college: "IIT Kanpur",
    branch: "Chemical Engineering",
    jee_rank: 289,
    neet_rank: null,
    subjects: ["Chemistry", "Mathematics"],
    exam_focus: ["JEE Mains", "JEE Advanced"],
    experience_years: 5,
    rating: 4.9,
    total_reviews: 201,
    students_taught: 378,
    success_rate: 96,
    bio: "Chemistry enthusiast from IIT Kanpur. 5 years of experience helping students master chemistry.",
    teaching_philosophy: "Chemistry is beautiful when you understand the underlying principles.",
    methodology: "Reaction mechanism focus, regular problem-solving, and concept linking.",
    availability: ["Monday 6PM-9PM", "Wednesday 6PM-9PM", "Saturday 1PM-7PM"],
    achievements: ["AIR 289 in JEE Advanced", "Chemistry Olympiad International Bronze"],
    certifications: ["Chemistry Subject Expert", "IIT Teaching Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Nikhil Bhat",
        rating: 5,
        comment: "Karthik sir made organic chemistry my strongest subject. Thank you!"
      }
    ],
    hourly_rate: 1750,
    total_hours_taught: 1620
  },
  {
    id: 19,
    name: "Siddharth Bose",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    college: "IIT Bombay",
    branch: "Mathematics",
    jee_rank: 198,
    neet_rank: null,
    subjects: ["Mathematics"],
    exam_focus: ["JEE Advanced", "Olympiad"],
    experience_years: 6,
    rating: 5.0,
    total_reviews: 234,
    students_taught: 456,
    success_rate: 98,
    bio: "Mathematics professor from IIT Bombay. Olympiad trainer with 6 years of excellence.",
    teaching_philosophy: "Mathematics is not about memorizing formulas, it's about developing logical thinking.",
    methodology: "Proof-based learning, Olympiad-level problem-solving, and conceptual mastery.",
    availability: ["Tuesday 8PM-11PM", "Thursday 8PM-11PM", "Sunday 9AM-6PM"],
    achievements: ["AIR 198 in JEE Advanced", "International Mathematics Olympiad Silver Medal", "Published mathematics research"],
    certifications: ["Olympiad Trainer Certification", "IIT Teaching Excellence Award"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: true,
    is_available: true,
    testimonials: [
      {
        student_name: "Aarav Khanna",
        rating: 5,
        comment: "Best mathematics mentor ever! Siddharth sir is a genius and excellent teacher."
      }
    ],
    hourly_rate: 2000,
    total_hours_taught: 2100
  },
  {
    id: 20,
    name: "Tanvi Kapoor",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    college: "JIPMER Puducherry",
    branch: "Medicine",
    jee_rank: null,
    neet_rank: 145,
    subjects: ["Biology", "Physics"],
    exam_focus: ["NEET", "Board Exams"],
    experience_years: 3,
    rating: 4.8,
    total_reviews: 156,
    students_taught: 267,
    success_rate: 92,
    bio: "JIPMER graduate with expertise in Biology and Physics. Making NEET preparation enjoyable.",
    teaching_philosophy: "Consistent effort and smart planning can help anyone crack NEET.",
    methodology: "Topic-wise breakdown, regular assessments, and performance tracking.",
    availability: ["Monday 5PM-8PM", "Friday 5PM-8PM", "Sunday 11AM-5PM"],
    achievements: ["AIR 145 in NEET", "Biology Olympiad National Gold Medal"],
    certifications: ["NEET Subject Expert Certification"],
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    is_featured: false,
    is_available: true,
    testimonials: [
      {
        student_name: "Prachi Joshi",
        rating: 5,
        comment: "Tanvi ma'am's teaching style is amazing. She makes difficult topics so simple!"
      }
    ],
    hourly_rate: 1400,
    total_hours_taught: 1020
  }
];

// Function to simulate Supabase query for featured mentors
export const getFeaturedMentors = () => {
  return mentorsData.filter(mentor => mentor.is_featured);
};

// Function to simulate Supabase query with filters
export const getMentorsWithFilters = (filters) => {
  let filtered = [...mentorsData];
  
  if (filters.subject && filters.subject !== 'All Subjects') {
    filtered = filtered.filter(mentor => 
      mentor.subjects.includes(filters.subject)
    );
  }
  
  if (filters.examFocus && filters.examFocus !== 'All') {
    filtered = filtered.filter(mentor => 
      mentor.exam_focus.includes(filters.examFocus)
    );
  }
  
  if (filters.experience) {
    const [min, max] = filters.experience.split('-').map(Number);
    filtered = filtered.filter(mentor => 
      max ? (mentor.experience_years >= min && mentor.experience_years <= max) : mentor.experience_years >= min
    );
  }
  
  if (filters.rating) {
    const minRating = parseFloat(filters.rating);
    filtered = filtered.filter(mentor => mentor.rating >= minRating);
  }
  
  if (filters.availability && filters.availability !== 'All') {
    filtered = filtered.filter(mentor => mentor.is_available);
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(mentor => 
      mentor.name.toLowerCase().includes(searchLower) ||
      mentor.college.toLowerCase().includes(searchLower) ||
      mentor.subjects.some(subject => subject.toLowerCase().includes(searchLower))
    );
  }
  
  // Sorting
  if (filters.sortBy) {
    switch(filters.sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'experience':
        filtered.sort((a, b) => b.experience_years - a.experience_years);
        break;
      case 'success_rate':
        filtered.sort((a, b) => b.success_rate - a.success_rate);
        break;
      case 'recent':
        filtered.sort((a, b) => a.id - b.id); // Assuming lower ID means more recent
        break;
      default:
        break;
    }
  }
  
  return filtered;
};

// Function to get mentor by ID
export const getMentorById = (id) => {
  return mentorsData.find(mentor => mentor.id === parseInt(id));
};

export default mentorsData;
