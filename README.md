# UnchaAI - EdTech Platform Frontend (React.js)

A production-level, feature-rich EdTech platform frontend built with React.js, designed to replicate and enhance the UnchaAI website with advanced mentor selection capabilities and Supabase-ready architecture.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### ✅ Complete Website Replication
- **Hero Section** with compelling CTAs and trust indicators
- **Statistics Section** with animated counters (5K+ students, 150+ mentors, etc.)
- **Meet Our Mentors** carousel with 20+ featured mentors
- **Live Batches** section for NEET & JEE aspirants
- **JEE & NEET Programs** with detailed feature lists
- **Student Testimonials** with video support
- **Mentor Testimonials** from IITians and NEET toppers
- **Trust Factors** section highlighting quality and expertise
- **Subjects Section** (Maths, Physics, Chemistry, Biology)
- **Getting Started** 1-2-3 process
- **Blog Section** with featured articles
- **FAQ Accordion** with comprehensive Q&A
- **WhatsApp Floating Button** for instant contact

### 🚀 Enhanced Mentor Selection System (NEW)
- **Advanced Filtering System**:
  - Filter by Subject (Maths, Physics, Chemistry, Biology)
  - Filter by Exam Type (JEE Mains, JEE Advanced, NEET, Olympiad, etc.)
  - Filter by Experience Level (0-2 years, 2-5 years, 5+ years)
  - Filter by Rating (4+, 4.5+ stars)
  - Filter by Availability
  
- **Real-time Search**:
  - Search by mentor name
  - Search by college/qualification
  - Search by subject specialization
  
- **Sorting Options**:
  - Highest Rated
  - Most Experienced
  - Best Success Rate
  - Recently Joined
  
- **Detailed Mentor Profiles**:
  - Complete bio and teaching philosophy
  - Educational background with rank details
  - Subjects taught with proficiency
  - Teaching methodology
  - Student testimonials
  - Availability calendar
  - Achievements and certifications
  - Success stories and statistics
  - Sample class video
  - Hourly rate and booking options

### 🎨 Modern UI/UX
- Responsive design (mobile-first approach)
- Smooth animations with Framer Motion
- Custom Tailwind theme (orange/brown color scheme)
- Slick carousels for testimonials and mentors
- Interactive hover effects
- Loading states and transitions
- Accessibility features (ARIA labels, keyboard navigation)

### 🗄️ Supabase-Ready Architecture
- Mock data structured to mirror Supabase schema
- Async patterns for data fetching
- Easy-to-replace data layer
- Comprehensive data models for:
  - Mentors
  - Testimonials
  - FAQs
  - Blogs
  - Trial Bookings

## 📁 Project Structure

```
unchaai-react-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── MentorCard.jsx
│   │   │   ├── FAQAccordion.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── modals/
│   │   │   └── BookTrialModal.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── MeetMentors.jsx
│   │       ├── LiveBatches.jsx
│   │       ├── Programs.jsx
│   │       ├── Testimonials.jsx
│   │       ├── TrustAndSubjects.jsx
│   │       ├── BlogSection.jsx
│   │       └── FAQSection.jsx
│   ├── data/
│   │   ├── mentors.js
│   │   ├── testimonials.js
│   │   ├── faqs.js
│   │   ├── blogs.js
│   │   └── content.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Mentors.jsx
│   │   ├── MentorProfile.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or extract the project files)
```bash
cd unchaai-react-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🗄️ Supabase Integration Guide

### Step 1: Set Up Supabase Project

1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key from Settings > API

### Step 2: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Step 3: Create Supabase Client

Create `src/lib/supabase.js`:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Create `.env` file:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Create Database Tables

Run these SQL commands in Supabase SQL Editor:

#### Mentors Table
```sql
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  photo_url TEXT,
  college TEXT,
  branch TEXT,
  jee_rank INTEGER,
  neet_rank INTEGER,
  subjects TEXT[],
  exam_focus TEXT[],
  experience_years INTEGER,
  rating DECIMAL(2,1),
  total_reviews INTEGER,
  students_taught INTEGER,
  success_rate INTEGER,
  bio TEXT,
  teaching_philosophy TEXT,
  methodology TEXT,
  availability TEXT[],
  achievements TEXT[],
  certifications TEXT[],
  video_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true,
  testimonials JSONB,
  hourly_rate INTEGER,
  total_hours_taught INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Testimonials Table
```sql
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  college TEXT,
  rank TEXT,
  exam TEXT,
  photo_url TEXT,
  testimonial TEXT,
  video_url TEXT,
  rating INTEGER,
  type TEXT CHECK (type IN ('student', 'mentor')),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### FAQs Table
```sql
CREATE TABLE faqs (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Blogs Table
```sql
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  author TEXT,
  published_date DATE,
  reading_time TEXT,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Trial Bookings Table
```sql
CREATE TABLE trial_bookings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  class TEXT,
  exam TEXT,
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Step 5: Replace Mock Data with Supabase Queries

#### Example: Fetch Mentors

Replace `src/data/mentors.js` functions:

```javascript
import { supabase } from '../lib/supabase'

export const getMentorsWithFilters = async (filters) => {
  let query = supabase.from('mentors').select('*')
  
  if (filters.subject && filters.subject !== 'All Subjects') {
    query = query.contains('subjects', [filters.subject])
  }
  
  if (filters.examFocus && filters.examFocus !== 'All') {
    query = query.contains('exam_focus', [filters.examFocus])
  }
  
  if (filters.rating) {
    query = query.gte('rating', parseFloat(filters.rating))
  }
  
  if (filters.search) {
    query = query.or(`name.ilike.%${filters.search}%,college.ilike.%${filters.search}%`)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching mentors:', error)
    return []
  }
  
  return data
}

export const getMentorById = async (id) => {
  const { data, error } = await supabase
    .from('mentors')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error fetching mentor:', error)
    return null
  }
  
  return data
}
```

#### Example: Submit Trial Booking

In `BookTrialModal.jsx`:

```javascript
import { supabase } from '../../lib/supabase'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  const { data, error } = await supabase
    .from('trial_bookings')
    .insert([formData])

  if (error) {
    console.error('Error submitting form:', error)
    alert('Error submitting form. Please try again.')
  } else {
    setIsSubmitted(true)
    setTimeout(() => onClose(), 2000)
  }

  setIsSubmitting(false)
}
```

### Step 6: Update Components to Use Async Data

Update components to handle async data fetching:

```javascript
import { useState, useEffect } from 'react'
import { getMentorsWithFilters } from '../data/mentors'

const Mentors = () => {
  const [mentors, setMentors] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchMentors = async () => {
      setLoading(true)
      const data = await getMentorsWithFilters(filters)
      setMentors(data)
      setLoading(false)
    }
    
    fetchMentors()
  }, [filters])
  
  // Rest of component...
}
```

## 🎨 Customization

### Color Theme

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    500: '#FF6B35', // Main orange
    // ... other shades
  },
  secondary: {
    500: '#4A2C2A', // Dark brown
    // ... other shades
  }
}
```

### Content Updates

All content is centralized in `/src/data/`:
- `mentors.js` - Mentor information
- `testimonials.js` - Student and mentor testimonials
- `faqs.js` - Frequently asked questions
- `blogs.js` - Blog posts
- `content.js` - Statistics, subjects, trust factors

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Slick** - Carousels
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📈 Performance Optimizations

- Code splitting with React lazy loading
- Image lazy loading
- Optimized bundle size
- Minified production build
- Cached assets
- Smooth scroll behavior

## 🔒 Security Considerations

When integrating with Supabase:
- Never commit `.env` files
- Use Row Level Security (RLS) policies
- Validate all user inputs
- Sanitize data before display
- Use HTTPS in production

## 📝 Current Status

### ✅ Completed Features
- Complete homepage with all sections
- Enhanced Mentors page with filtering
- Detailed mentor profile pages
- Responsive navigation with dropdowns
- Book trial modal with validation
- All reusable components
- Mock data (Supabase-ready)
- Responsive design
- Animations and transitions
- FAQ accordion
- Blog section
- Contact form

### 🔄 Ready for Database Integration
- Supabase schema defined
- Async data patterns in place
- Easy-to-replace data layer
- Example integration code provided

### 🎯 Recommended Next Steps

1. **Set up Supabase** and create database tables
2. **Migrate mock data** to Supabase
3. **Add authentication** for mentors and students
4. **Implement booking system** with calendar integration
5. **Add payment integration** (Razorpay/Stripe)
6. **Create admin dashboard** for managing content
7. **Add real-time features** (chat, notifications)
8. **Implement analytics** (Google Analytics, Mixpanel)
9. **Add SEO optimization** (meta tags, sitemap)
10. **Set up CI/CD pipeline** for automated deployment

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to your web server
```

## 📞 Support

For questions or issues:
- Email: info@unchaai.com
- Phone: +91 123 456 7890
- WhatsApp: +91 123 456 7890

## 📄 License

MIT License - feel free to use this project for your needs.

## 🙏 Acknowledgments

- Original website: [unchaai.com](https://unchaai.com)
- Icons: React Icons
- Images: Unsplash
- Fonts: Google Fonts (Inter, Poppins)

---

Built with ❤️ for the future of education
