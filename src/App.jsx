import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
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