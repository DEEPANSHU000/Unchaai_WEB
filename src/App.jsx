import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import MentorProfile from './pages/MentorProfile';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import BookTrialModal from './components/modals/BookTrialModal';

function App() {
  const [isBookTrialOpen, setIsBookTrialOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header onBookTrialClick={() => setIsBookTrialOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookTrialClick={() => setIsBookTrialOpen(true)} />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentor/:id" element={<MentorProfile onBookTrialClick={() => setIsBookTrialOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        
        {isBookTrialOpen && (
          <BookTrialModal onClose={() => setIsBookTrialOpen(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;
