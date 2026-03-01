import { useNavigate } from 'react-router-dom';
import StagingNotice from '../components/StagingNotice';

export default function DCSNetwork() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>DCS Network</div>
          <h1>DCS Network</h1>
          <p>Technology infrastructure and digital services platform.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <StagingNotice>
          Positioning conflict: Two source documents describe DCS differently — IT services vs. fintech/digital currency. Leadership confirmation required from Carl Sauter or Dee Sarbok before final copy is published. Both options shown below.
        </StagingNotice>

        <div className="g2" style={{ marginTop: 8 }}>
          <div className="card">
            <div className="sec-eye">Option A — IT Services</div>
            <h3>Technology Infrastructure & Managed Services</h3>
            <div className="prose" style={{ marginTop: 12 }}>
              <p>DCS Network provides technology infrastructure, managed IT services, and digital transformation support to businesses across regulated industries. The entity delivers network architecture, cybersecurity, systems integration, and ongoing managed services with a focus on institutional-grade documentation and compliance.</p>
              <p>DCS Network positions as a strategic technology partner for businesses that require institutional IT standards — not commodity support.</p>
            </div>
          </div>
          <div className="card">
            <div className="sec-eye">Option B — Fintech / Digital Currency</div>
            <h3>Digital Currency & Financial Technology Platform</h3>
            <div className="prose" style={{ marginTop: 12 }}>
              <p>DCS Network operates as a financial technology and digital currency platform, providing infrastructure for digital asset management, currency exchange, and fintech services. The entity is positioned at the intersection of financial services and emerging technology.</p>
              <p>DCS Network serves institutional and retail clients requiring compliant digital currency infrastructure and fintech tooling.</p>
            </div>
          </div>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Engage with DCS Network</h2>
        <p>For technology infrastructure or digital services inquiries, contact us through the Group.</p>
        <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
      </div>
    </>
  );
}