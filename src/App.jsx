import ScrollToTop from "./components/common/ScrollToTop";
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
import BlogDetail from "./pages/BlogDetail";
import Resources from "./pages/Resources";
import NotFound from './pages/NotFound';
import BookTrialModal from './components/modals/BookTrialModal';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import BecomeMentor from "./pages/BecomeMentor";
import PlacementJobs from "./pages/PlacementJobs";
import PlacementInternship from "./pages/PlacementInternship";
import CoursePage from "./pages/CoursePage";
import OverseasAdmissions from "./pages/OverseasAdmissions";
import CampusIndiaAdmissions from "./pages/CampusIndiaAdmissions";
import OnlineIndiaAdmissions from "./pages/OnlineIndiaAdmissions";

function App() {
  const [isBookTrialOpen, setIsBookTrialOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/placements/jobs" element={<PlacementJobs />} />
            <Route path="/placements/internships" element={<PlacementInternship onBookTrialClick={() => setIsModalOpen(true)} />} />
            <Route path="/courses/:slug" element={<CoursePage onBookTrialClick={() => setIsBookTrialOpen(true)} />} />
            <Route path="/global-admissions/overseas" element={<OverseasAdmissions />} />
            <Route path="/global-admissions/campus-india" element={<CampusIndiaAdmissions />} />
            <Route path="/global-admissions/online-india" element={<OnlineIndiaAdmissions />} />
            <Route
              path="/success-stories/:slug"
              element={<SuccessStoryDetail />}
            />
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
