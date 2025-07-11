import './App.css';
import Navbar from './components/navbar';
import LandingPage from './components/landing-section';
import EducationalBackground from './components/educational-background-section';
import WorkingExperience from './components/working-experience-section';
import Skills from './components/skills-section';
import Portfolio from './components/portfolio-section';
import Seminar from './components/seminar-section';
import ContactMe from './components/contact-section';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* LANDING PAGE SECTION */}
      <section id="home">
        <LandingPage />
      </section>
      
      {/* EDUCATIONAL BACKGROUND SECTION */}
      <section id="education">
        <EducationalBackground />
      </section>
      
      {/* WORKING EXPERIENCE SECTION */}  
      <section id="experience">
        <WorkingExperience />
      </section>
      
      {/* SKILLS SECTION */}
      <section id="skills">
        <Skills />
      </section>
      
      {/* PORTFOLIO SECTION */}
      <section id="portfolio">
        <Portfolio />
      </section>
      
      {/* SEMINARS SECTION */}
      <section id="seminar">
        <Seminar />
      </section>
      
      {/* CONTACT SECTION */}
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;