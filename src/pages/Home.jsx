import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import MeetMentors from '../components/sections/MeetMentors';
import LiveBatches from '../components/sections/LiveBatches';
import Programs from '../components/sections/Programs';
import Testimonials from '../components/sections/Testimonials';
import { TrustSection, SubjectsSection, GettingStartedSection } from '../components/sections/TrustAndSubjects';
import BlogSection from '../components/sections/BlogSection';
import FAQSection from '../components/sections/FAQSection';

const Home = ({ onBookTrialClick }) => {
  return (
    <div className="pt-20">
      <Hero onBookTrialClick={onBookTrialClick} />
      <Stats />
      <MeetMentors onBookTrialClick={onBookTrialClick} />
      <LiveBatches onBookTrialClick={onBookTrialClick} />
      <Programs onBookTrialClick={onBookTrialClick} />
      <Testimonials />
      <TrustSection />
      <SubjectsSection />
      <GettingStartedSection onBookTrialClick={onBookTrialClick} />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default Home;
