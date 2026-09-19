import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import {
  Home,
  About,
  Services,
  Clients,
  Works,
  SivaBiryaniCaseStudy,
  Team,
  Contact,
  DesignSystemPage,
} from './pages';
import { ToastProvider } from './design-system';

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Standalone Design System Documentation & Live Showcase Portal */}
          <Route path="/design-system" element={<DesignSystemPage />} />

          {/* Core Getup Digital Solution Pages */}
          <Route
            path="*"
            element={
              <div className="flex flex-col min-h-screen bg-white text-[#111111] font-poppins antialiased selection:bg-[#008000] selection:text-white">
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
            }
          />
        </Routes>
      </Router>
    </ToastProvider>
  );
};

export default App;
