import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Works } from './pages/Works';
import { SivaBiryaniCaseStudy } from './pages/SivaBiryaniCaseStudy';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#008000] selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/works" element={<Works />} />
            <Route path="/case-study/siva-biryani" element={<SivaBiryaniCaseStudy />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
