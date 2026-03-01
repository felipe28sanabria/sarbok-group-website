import { useNavigate } from 'react-router-dom';
import StagingNotice from '../components/StagingNotice';

export default function Home() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Private Investment Group · Operating Holding Company</div>
          <h1>Building durable value through <em>disciplined operations</em></h1>
          <p className="hero-sub">A family-office-backed portfolio of operating companies focused on healthcare, infrastructure, technology, and capital allocation. Operator-led. Cash-flow disciplined. Structurally risk-contained.</p>
          <div className="hero-btns">
            <button className="btn btn-blue" onClick={() => go('/portfolio')}>View Portfolio Companies</button>
            <button className="btn btn-outline" onClick={() => go('/about')}>About the Group</button>
          </div>
        </div>
      </div>

      {/* VALUE BAR */}
      <div className="value-bar">
        <div className="value-bar-inner">
          <div className="vi"><div className="vi-title">Operator-Led</div><div className="vi-desc">Every portfolio company is run by dedicated management, not by holding company staff.</div></div>
          <div className="vi"><div className="vi-title">Cash-Flow Disciplined</div><div className="vi-desc">Capital allocation decisions are governed by operating cash flows, not valuation multiples.</div></div>
          <div className="vi"><div className="vi-title">Structurally Risk-Contained</div><div className="vi-desc">Each entity is separately capitalized with ring-fenced liability at the SPV level.</div></div>
          <div className="vi"><div className="vi-title">Institutionally Documented</div><div className="vi-desc">Governance, reporting, and compliance standards reflect institutional investor expectations.</div></div>
        </div>
      </div>

      {/* OPERATING MODEL */}
      <div className="sec">
        <div className="sec-inner">
          <div className="g2c">
            <div>
              <div className="sec-eye">Operating Model</div>
              <h2>How the Group Operates</h2>
              <div className="prose">
                <p>Sarbok Group functions as an operating holding company and shared services platform. The Group provides centralized finance, legal, compliance, and strategic support to each portfolio entity through formal management agreements. Each operating company maintains independent legal status, separate capitalization, and dedicated management teams.</p>
                <p>This structure enables operational leverage while preserving entity-level accountability — each company can scale independently without diluting the governance standards that define the Group's institutional positioning.</p>
              </div>
            </div>
            <div>
              <div className="sec-eye">Operating Discipline</div>
              <h2>Built for Institutional Standards</h2>
              <div className="col-pillars" style={{ marginTop: 16 }}>
                <div className="cpillar"><h4>Governance</h4><p>Formal board structures, documented service agreements, and compliance frameworks across all entities.</p></div>
                <div className="cpillar"><h4>Financial Architecture</h4><p>Separate capitalization, cost-recovery shared services, and transfer pricing protocols.</p></div>
                <div className="cpillar"><h4>Operational Execution</h4><p>Cross-entity coordination, accountability tracking, and systems adoption aligned with institutional documentation standards.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="sec-light">
        <div className="sec-inner">
          <div className="sec-eye">About Us</div>
          <h2>A family office built around operating discipline</h2>
          <div className="prose" style={{ maxWidth: 660 }}>
            <p>Sarbok Group is a family-office-backed operating holding company. The Group is built to be operator-led rather than investor-led, cash-flow disciplined rather than valuation-driven, and structurally risk-contained rather than dependent on informal arrangements.</p>
            <p>The portfolio spans healthcare services, technology infrastructure, capital development, financial services, and real estate — all connected by a shared commitment to institutional standards, operational clarity, and long-term value creation.</p>
          </div>
          <div style={{ marginTop: 26 }}>
            <button className="btn-blue-sm" onClick={() => go('/about')}>Learn More About the Group</button>
          </div>
        </div>
      </div>

      {/* CASH FLOW */}
      <div className="sec-dark">
        <div className="sec-inner">
          <div className="sec-eye-w">Capital Structure</div>
          <h2 className="w">How Value Moves Through the Portfolio</h2>
          <p className="lead w">Capital flows from operating companies through Sarbok Group's shared services structure into DM Holdings for credit allocation and Sarbok Investments for direct deal vehicles.</p>
          <div className="cfdiag">
            <StagingNotice>Custom diagram pending Carl Sauter scope confirmation. Structural placeholder shown for staging.</StagingNotice>
            <div className="cfrow" style={{ marginTop: 16 }}>
              <div className="cfnode"><div className="cfnode-t">Ascenda Group</div><div className="cfnode-s">Healthcare &amp; Retail Brokerage</div></div>
              <div className="cfnode"><div className="cfnode-t">CapDev</div><div className="cfnode-s">Capital Development</div></div>
              <div className="cfnode"><div className="cfnode-t">DCS Network</div><div className="cfnode-s">Technology Infrastructure</div></div>
            </div>
            <div className="cfarrow">↓</div>
            <div className="cflabel">Operating Cash Flows</div>
            <div className="cfnode"><div className="cfnode-t">Sarbok Group</div><div className="cfnode-s">Shared Services Platform · Cost-Recovery Basis</div></div>
            <div className="cfarrow">↓</div>
            <div className="cfrow">
              <div className="cfnode"><div className="cfnode-t">DM Holdings</div><div className="cfnode-s">Private Credit &amp; Capital Allocation</div></div>
              <div className="cfnode"><div className="cfnode-t">Sarbok Investments</div><div className="cfnode-s">Direct Investment Vehicles (SPVs)</div></div>
            </div>
            <div className="cfnote">Ring-fenced liability at SPV level · Investors participate as lenders, not equity holders</div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-eye">Portfolio</div>
          <h2>Our Portfolio</h2>
          <p className="lead">A portfolio of operating companies, each independently managed and built for long-term institutional performance.</p>
          <div className="pgrid">
            <div className="pcard" onClick={() => go('/portfolio/ascenda')}><div className="pcard-logo">ASC</div><h3>Ascenda Group</h3><p>Healthcare services and retail brokerage platform</p><span className="pcard-lnk">View entity →</span></div>
            <div className="pcard" onClick={() => go('/portfolio/capdev')}><div className="pcard-logo">CAP</div><h3>CapDev</h3><p>Cross-border capital development and workforce execution</p><span className="pcard-lnk">View entity →</span></div>
            <div className="pcard" onClick={() => go('/portfolio/dcs-network')}><div className="pcard-logo">DCS</div><h3>DCS Network</h3><p>Technology infrastructure and digital services</p><span className="pcard-lnk">View entity →</span></div>
            <div className="pcard" onClick={() => go('/portfolio/dm-holdings')}><div className="pcard-logo">DM</div><h3>DM Holdings</h3><p>Private credit and capital allocation</p><span className="pcard-lnk">View entity →</span></div>
            <div className="pcard" onClick={() => go('/portfolio/sarbok-investments')}><div className="pcard-logo">SI</div><h3>Sarbok Investments</h3><p>Direct investment and strategic capital arm</p><span className="pcard-lnk">View entity →</span></div>
            <div className="pcard" onClick={() => go('/contact')}><div className="pcard-logo" style={{ background: 'var(--primary)' }}>+</div><h3>Engage with the Group</h3><p>Institutional partners, investors, and executive candidates</p><span className="pcard-lnk">Contact us →</span></div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <h2>Ready to engage?</h2>
        <p>Whether you represent an institutional partner, potential investor, or executive candidate — we respond to substantive inquiries.</p>
        <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
      </div>
    </>
  );
}