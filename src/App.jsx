import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Ascenda from './pages/Ascenda';
import CapDev from './pages/CapDev';
import DCSNetwork from './pages/DCSNetwork';
import DMHoldings from './pages/DMHoldings';
import SarbokInvestments from './pages/SarbokInvestments';
import Team from './pages/Team';
import Culture from './pages/Culture';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Scroll reveal — runs on every route change
function ScrollReveal() {
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    // Observe all .sr elements after route renders
    const timer = setTimeout(() => {
      document.querySelectorAll('.sr').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
      });
    }, 50);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [location]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReveal />
      <Nav />
      <Routes>
        <Route path="/"                              element={<Home />} />
        <Route path="/about"                         element={<About />} />
        <Route path="/portfolio"                     element={<Portfolio />} />
        <Route path="/portfolio/ascenda"             element={<Ascenda />} />
        <Route path="/portfolio/capdev"              element={<CapDev />} />
        <Route path="/portfolio/dcs-network"         element={<DCSNetwork />} />
        <Route path="/portfolio/dm-holdings"         element={<DMHoldings />} />
        <Route path="/portfolio/sarbok-investments"  element={<SarbokInvestments />} />
        <Route path="/team"                          element={<Team />} />
        <Route path="/culture"                       element={<Culture />} />
        <Route path="/investors"                     element={<Investors />} />
        <Route path="/contact"                       element={<Contact />} />
        <Route path="/legal"                         element={<Legal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}