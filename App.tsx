
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';
import BrandDetail from './pages/BrandDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:id" element={<BrandDetail />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </Router>
  );
};

export default App;
