import { useNavigate } from 'react-router-dom';

export default function SarbokInvestments() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>Sarbok Investments</div>
          <div className="sec-eye-w sr">Portfolio Company</div>
          <h1 className="sr sr-d1">Sarbok Investments</h1>
          <p className="sr sr-d2">Direct investment and strategic capital allocation — disciplined underwriting, structured deal vehicles.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Overview</div>
            <h2>Direct Investment & Strategic Capital</h2>
            <div className="prose">
              <p>Sarbok Investments is the direct investment and strategic capital allocation arm of the Sarbok Group. The entity structures and executes direct investments into operating businesses, real assets, and special situations through purpose-built deal vehicles — typically SPVs with defined investment mandates, governance structures, and exit parameters.</p>
              <p>Sarbok Investments operates with a disciplined underwriting approach: every investment is subject to formal diligence, a documented investment thesis, and a defined risk-containment structure before capital is deployed.</p>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="sec-eye">Investment Approach</div>
            <div className="col-pillars" style={{ marginTop: 12 }}>
              <div className="cpillar"><h4>Direct Investments</h4><p>Equity and structured equity positions in operating businesses with identifiable cash flow profiles and clear governance frameworks.</p></div>
              <div className="cpillar"><h4>Real Asset Transactions</h4><p>Infrastructure and real asset acquisitions structured for long-term income generation and capital preservation.</p></div>
              <div className="cpillar"><h4>Special Situations</h4><p>Opportunistic capital deployment into distressed or transitional situations where structural complexity creates value.</p></div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-dark"><div className="sec-inner">
        <div className="sec-eye-w sr">Deal Structure</div>
        <h2 className="w sr sr-d1">SPV-Based Deal Architecture</h2>
        <p className="lead w sr sr-d2">All Sarbok Investments transactions are structured through purpose-built Special Purpose Vehicles — ring-fencing each investment from the broader Group.</p>
        <div className="pillars sr sr-d3">
          <div className="pillar dk">
            <div className="pillar-num">01</div>
            <h4>Ring-Fenced Exposure</h4>
            <p>Each SPV provides investors with defined exposure to a single transaction — isolated from the broader portfolio and other investment vehicles.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">02</div>
            <h4>Formal Operating Agreements</h4>
            <p>Every SPV is governed by a formal operating agreement, a documented investment mandate, and defined reporting obligations to all capital participants.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">03</div>
            <h4>Defined Exit Parameters</h4>
            <p>Investment mandates include documented exit parameters — ensuring capital participants understand the structure and timeline from the outset.</p>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="disc-box sr">
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">Specific investment opportunities and terms are not published on this platform. Qualified investors may request formal offering documentation through the Investor Relations page. All opportunities are subject to Debra Buhring legal review prior to distribution.</div>
        </div>
      </div></div>

      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-eye-w sr" style={{ justifyContent: 'center' }}>Sarbok Investments</div>
          <h2 className="sr sr-d1">Interested in Sarbok Investments?</h2>
          <p className="sr sr-d2">For qualified investor inquiries, contact us through the Investor Relations page.</p>
          <div className="sr sr-d3"><button className="btn btn-blue" onClick={() => go('/investors')}>Investor Relations</button></div>
        </div>
      </div>
    </>
  );
}