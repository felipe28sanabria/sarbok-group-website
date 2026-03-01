import { useNavigate } from 'react-router-dom';

export default function CapDev() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>CapDev</div>
          <h1>CapDev</h1>
          <p>Cross-border capital development and workforce execution platform — operating across the United States and Costa Rica.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>CapDev is a cross-border capital development and workforce execution platform operating across the United States and Costa Rica. The entity facilitates structured capital deployment, infrastructure development projects, and workforce performance management solutions, with emphasis on regulatory navigation and institutional documentation standards.</p>
          <p>CapDev differentiates itself from traditional staffing firms by positioning as a complete workforce performance ecosystem — integrating talent identification, acquisition, onboarding, performance management, and FTE tracking with full visibility and measurable outcomes.</p>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye">Service Lines</div>
        <h2>What CapDev Delivers</h2>
        <div className="slist">
          <div className="sitem"><div className="snum">01</div><div><h4>Capital Development</h4><p>Structured capital deployment and infrastructure development across US and CR markets with full regulatory navigation.</p></div></div>
          <div className="sitem"><div className="snum">02</div><div><h4>Workforce Performance Management</h4><p>End-to-end talent ecosystem — identification, acquisition, onboarding, performance tracking, and FTE accountability.</p></div></div>
          <div className="sitem"><div className="snum">03</div><div><h4>Cross-Border Execution</h4><p>Bilingual operational capability with established regulatory relationships across both US and Costa Rica jurisdictions.</p></div></div>
          <div className="sitem"><div className="snum">04</div><div><h4>Institutional Documentation</h4><p>All engagements are governed by formal documentation standards aligned with institutional counterparty expectations.</p></div></div>
        </div>
      </div></div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye">Geography</div>
        <h2>US–Costa Rica Operating Platform</h2>
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>CapDev's cross-border operating model creates structural advantages in talent cost arbitrage, regulatory diversity, and capital deployment flexibility. The platform is purpose-built for companies seeking to establish or expand operations in Latin America while maintaining US institutional standards.</p>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Engage with CapDev</h2>
        <p>For capital development inquiries, workforce solutions, or cross-border partnerships, contact us through the Group.</p>
        <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
      </div>
    </>
  );
}