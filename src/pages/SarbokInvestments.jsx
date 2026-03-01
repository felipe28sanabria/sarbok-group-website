import { useNavigate } from 'react-router-dom';

export default function SarbokInvestments() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>Sarbok Investments</div>
          <h1>Sarbok Investments</h1>
          <p>Direct investment and strategic capital allocation — disciplined underwriting, structured deal vehicles.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>Sarbok Investments is the direct investment and strategic capital allocation arm of the Sarbok Group. The entity structures and executes direct investments into operating businesses, real assets, and special situations through purpose-built deal vehicles — typically SPVs with defined investment mandates, governance structures, and exit parameters.</p>
          <p>Sarbok Investments operates with a disciplined underwriting approach: every investment is subject to formal diligence, a documented investment thesis, and a defined risk-containment structure before capital is deployed.</p>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye">Investment Approach</div>
        <h2>How Sarbok Investments Deploys Capital</h2>
        <div className="pillars">
          <div className="pillar lt"><h4>Direct Investments</h4><p>Equity and structured equity positions in operating businesses with identifiable cash flow profiles and clear governance frameworks.</p></div>
          <div className="pillar lt"><h4>Real Asset Transactions</h4><p>Infrastructure and real asset acquisitions structured for long-term income generation and capital preservation.</p></div>
          <div className="pillar lt"><h4>Special Situations</h4><p>Opportunistic capital deployment into distressed or transitional situations where structural complexity creates value.</p></div>
        </div>
      </div></div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye">Deal Structure</div>
        <h2>SPV-Based Deal Architecture</h2>
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>All Sarbok Investments transactions are structured through purpose-built Special Purpose Vehicles (SPVs). This architecture ring-fences each investment from the broader Group, provides investors with defined exposure to a single transaction, and enables clean governance and reporting at the deal level.</p>
          <p>Each SPV is governed by a formal operating agreement, a documented investment mandate, and reporting obligations to all capital participants.</p>
        </div>
        <div className="disc-box" style={{ marginTop: 28 }}>
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">Specific investment opportunities and terms are not published on this platform. Qualified investors may request formal offering documentation through the Investor Relations page. All opportunities are subject to Debra Buhring legal review prior to distribution.</div>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Interested in Sarbok Investments?</h2>
        <p>For qualified investor inquiries, contact us through the Investor Relations page.</p>
        <button className="btn btn-blue" onClick={() => go('/investors')}>Investor Relations</button>
      </div>
    </>
  );
}