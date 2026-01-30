// Supabase-ready blog data
export const blogsData = [
  {
    id: 1,
    title: "Crack JEE 2025 with Expert Mentor Guidance",
    slug: "crack-jee-2025-with-expert-mentor-guidance",
    excerpt: "Preparing for one of the toughest exams in India, the JEE (Joint Entrance Examination), can be overwhelming. Whether you are aiming for JEE Mains or Advanced, the right guidance...",
    content: "Preparing for one of the toughest exams in India, the JEE (Joint Entrance Examination), can be overwhelming. Whether you are aiming for JEE Mains or Advanced, the right guidance can make all the difference. In this comprehensive guide, we'll explore proven strategies and tips from IIT toppers to help you achieve your dream rank.",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    category: "JEE Preparation",
    author: "UnchaAi Team",
    published_date: "2024-12-15",
    reading_time: "8 min read",
    tags: ["JEE", "Preparation", "Strategy", "IIT"]
  },
  {
    id: 2,
    title: "NEET 2025: Complete Preparation Strategy",
    slug: "neet-2025-complete-preparation-strategy",
    excerpt: "A comprehensive guide to NEET preparation covering Biology, Chemistry, and Physics. Learn from NEET toppers about effective study techniques and time management...",
    content: "NEET is one of the most competitive medical entrance exams in India. With lakhs of aspirants competing for limited seats, having the right preparation strategy is crucial. This guide covers everything you need to know about NEET preparation.",
    image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    category: "NEET Preparation",
    author: "Dr. Priya Sharma",
    published_date: "2024-12-10",
    reading_time: "10 min read",
    tags: ["NEET", "Medical", "Biology", "Preparation"]
  },
  {
    id: 3,
    title: "Top 10 Time Management Tips for JEE Aspirants",
    slug: "time-management-tips-jee-aspirants",
    excerpt: "Time management is the key to success in JEE preparation. Learn how to balance school, coaching, self-study, and revision effectively from IIT toppers...",
    content: "Effective time management can make or break your JEE preparation. In this article, we share proven time management techniques used by successful JEE toppers to optimize their study schedule and maximize productivity.",
    image_url: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=500&fit=crop",
    category: "Study Tips",
    author: "Rajesh Kumar, IIT Bombay",
    published_date: "2024-12-05",
    reading_time: "6 min read",
    tags: ["Time Management", "JEE", "Productivity", "Study Tips"]
  },
  {
    id: 4,
    title: "How to Choose the Right Mentor for JEE/NEET",
    slug: "choose-right-mentor-jee-neet",
    excerpt: "Selecting the perfect mentor can significantly impact your preparation journey. Here's a comprehensive guide on what to look for in a mentor...",
    content: "The right mentor can transform your preparation experience. This guide helps you understand what qualities to look for in a mentor and how to make the most of your mentorship sessions for maximum benefit.",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    category: "Mentorship",
    author: "UnchaAi Team",
    published_date: "2024-11-28",
    reading_time: "7 min read",
    tags: ["Mentorship", "Guidance", "Success"]
  },
  {
    id: 5,
    title: "Mathematics Preparation Strategy for JEE Advanced",
    slug: "mathematics-strategy-jee-advanced",
    excerpt: "Master JEE Advanced Mathematics with these proven strategies. Learn topic-wise preparation approach, important chapters, and problem-solving techniques...",
    content: "Mathematics is often considered the toughest section in JEE Advanced. This comprehensive guide covers chapter-wise strategies, important topics, and problem-solving techniques to help you excel in JEE Mathematics.",
    image_url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop",
    category: "Subject Guide",
    author: "Siddharth Bose, IIT Bombay",
    published_date: "2024-11-20",
    reading_time: "12 min read",
    tags: ["Mathematics", "JEE Advanced", "Strategy"]
  },
  {
    id: 6,
    title: "Biology Preparation Tips from NEET Toppers",
    slug: "biology-preparation-neet-toppers",
    excerpt: "Learn effective Biology preparation techniques from NEET toppers. Covering Botany and Zoology with mnemonics, diagrams, and revision strategies...",
    content: "Biology is the scoring subject in NEET, and mastering it can significantly boost your overall score. Learn from NEET toppers about effective preparation strategies, memory techniques, and revision methods.",
    image_url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop",
    category: "Subject Guide",
    author: "Meera Iyer, MAMC",
    published_date: "2024-11-15",
    reading_time: "9 min read",
    tags: ["Biology", "NEET", "Preparation"]
  }
];

export const getBlogBySlug = (slug) => {
  return blogsData.find(blog => blog.slug === slug);
};

export const getBlogsByCategory = (category) => {
  if (!category || category === 'all') return blogsData;
  return blogsData.filter(blog => blog.category === category);
};

export const getFeaturedBlogs = () => {
  return blogsData.slice(0, 3);
};

export default blogsData;
