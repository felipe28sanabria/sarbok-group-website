import { useNavigate } from 'react-router-dom';

export default function CapDev() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>CapDev</div>
          <div className="sec-eye-w sr">Portfolio Company</div>
          <h1 className="sr sr-d1">CapDev</h1>
          <p className="sr sr-d2">Cross-border capital development and workforce execution platform — operating across the United States and Costa Rica.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Overview</div>
            <h2>Capital Development & Workforce Execution</h2>
            <div className="prose">
              <p>CapDev is a cross-border capital development and workforce execution platform operating across the United States and Costa Rica. The entity facilitates structured capital deployment, infrastructure development projects, and workforce performance management solutions, with emphasis on regulatory navigation and institutional documentation standards.</p>
              <p>CapDev differentiates itself from traditional staffing firms by positioning as a complete workforce performance ecosystem — integrating talent identification, acquisition, onboarding, performance management, and FTE tracking with full visibility and measurable outcomes.</p>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="sec-eye">Entity Details</div>
            <div className="col-pillars" style={{ marginTop: 12 }}>
              <div className="cpillar"><h4>Geography</h4><p>United States and Costa Rica — bilingual operational capability with established regulatory relationships in both jurisdictions.</p></div>
              <div className="cpillar"><h4>Portfolio Position</h4><p>Sarbok Group operating company — shared services via group MSA. Technology infrastructure provided by Enrique Méndez, VP Technology.</p></div>
              <div className="cpillar"><h4>Documentation Standard</h4><p>All engagements governed by formal documentation standards aligned with institutional counterparty expectations.</p></div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye sr">Service Lines</div>
        <h2 className="sr sr-d1">What CapDev Delivers</h2>
        <div className="slist sr sr-d2">
          <div className="sitem"><div className="snum">01</div><div><h4>Capital Development</h4><p>Structured capital deployment and infrastructure development across US and CR markets with full regulatory navigation.</p></div></div>
          <div className="sitem"><div className="snum">02</div><div><h4>Workforce Performance Management</h4><p>End-to-end talent ecosystem — identification, acquisition, onboarding, performance tracking, and FTE accountability.</p></div></div>
          <div className="sitem"><div className="snum">03</div><div><h4>Cross-Border Execution</h4><p>Bilingual operational capability with established regulatory relationships across both US and Costa Rica jurisdictions.</p></div></div>
          <div className="sitem"><div className="snum">04</div><div><h4>Institutional Documentation</h4><p>All engagements are governed by formal documentation standards aligned with institutional counterparty expectations.</p></div></div>
        </div>
      </div></div>

      <div className="sec-dark"><div className="sec-inner">
        <div className="sec-eye-w sr">Geographic Advantage</div>
        <h2 className="w sr sr-d1">US–Costa Rica Operating Platform</h2>
        <p className="lead w sr sr-d2">CapDev's cross-border operating model creates structural advantages in talent cost arbitrage, regulatory diversity, and capital deployment flexibility.</p>
        <div className="pillars sr sr-d3">
          <div className="pillar dk">
            <div className="pillar-num">01</div>
            <h4>Talent Cost Arbitrage</h4>
            <p>Access to skilled bilingual talent at competitive cost structures without compromising on documentation or performance standards.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">02</div>
            <h4>Regulatory Diversity</h4>
            <p>Operational presence in two regulatory environments creates flexibility for clients seeking cross-border capital and workforce solutions.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">03</div>
            <h4>Institutional Standards</h4>
            <p>Purpose-built for companies seeking Latin American expansion while maintaining US institutional documentation and governance standards.</p>
          </div>
        </div>
      </div></div>

      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-eye-w sr" style={{ justifyContent: 'center' }}>CapDev</div>
          <h2 className="sr sr-d1">Engage with CapDev</h2>
          <p className="sr sr-d2">For capital development inquiries, workforce solutions, or cross-border partnerships, contact us through the Group.</p>
          <div className="sr sr-d3"><button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button></div>
        </div>
      </div>
    </>
  );
}