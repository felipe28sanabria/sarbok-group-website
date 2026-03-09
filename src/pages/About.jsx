import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>About</div>
          <div className="sec-eye-w sr">The Group</div>
          <h1 className="sr sr-d1">Who We Are</h1>
          <p className="sr sr-d2">An operating holding company built around governance, operational discipline, and long-term institutional performance.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Overview</div>
            <h2>How Sarbok Group Is Structured</h2>
            <div className="prose">
              <p>Sarbok Group functions as an operating holding company and shared services platform for a portfolio of controlled operating businesses. The Group provides centralized finance, legal, compliance, and strategic support through formal management agreements with each portfolio entity.</p>
              <p>Each operating company maintains independent legal status, separate capitalization, and dedicated management teams. Shared services are delivered on a cost-recovery basis with documented service agreements and transfer pricing protocols in place. This structure enables operational leverage while preserving entity-level accountability.</p>
              <p>Sarbok Group is built to be operator-led rather than investor-led, cash-flow disciplined rather than valuation-driven, and structurally risk-contained rather than dependent on informal arrangements.</p>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="sec-eye">Operating Philosophy</div>
            <h2>Three Governing Principles</h2>
            <div className="col-pillars" style={{ marginTop: 20 }}>
              <div className="cpillar">
                <h4>Operator-Led</h4>
                <p>Portfolio companies are run by dedicated management teams. The holding company sets governance standards — it does not run the business.</p>
              </div>
              <div className="cpillar">
                <h4>Cash-Flow Disciplined</h4>
                <p>Capital deployment decisions are made on the basis of operating cash flows. Valuation multiples do not drive allocation.</p>
              </div>
              <div className="cpillar">
                <h4>Structurally Risk-Contained</h4>
                <p>Each entity maintains separate capitalization and ring-fenced liability. Risk is managed structurally, not informally.</p>
              </div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-dark"><div className="sec-inner">
        <div className="sec-eye-w sr">Institutional Foundation</div>
        <h2 className="w sr sr-d1">Built to institutional counterparty standards</h2>
        <p className="lead w sr sr-d2">The operational infrastructure of Sarbok Group reflects institutional investor expectations — not founder-stage informality.</p>
        <div className="pillars sr sr-d3">
          <div className="pillar dk">
            <div className="pillar-num">01</div>
            <h4>Governance Documents</h4>
            <p>Formal board structures, service agreements, and compliance frameworks across all entities — not informal arrangements.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">02</div>
            <h4>Reporting Standards</h4>
            <p>Financial and operational reporting built to the standard required for institutional counterparty relationships.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">03</div>
            <h4>Scalable Infrastructure</h4>
            <p>The Group's governance infrastructure is the operational foundation upon which portfolio companies can scale and attract institutional capital.</p>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye sr">Financial Architecture</div>
        <h2 className="sr sr-d1">How the Capital Structure Works</h2>
        <div className="g2c sr sr-d2" style={{ marginTop: 8 }}>
          <div className="prose">
            <p>The financial architecture of the Sarbok Group is designed to create operational leverage without structural fragility. Each portfolio company is independently capitalized. Shared services are delivered through documented management agreements on a cost-recovery basis with formal transfer pricing protocols.</p>
          </div>
          <div className="prose">
            <p>Capital allocation is governed by DM Holdings (private credit and liquidity) and Sarbok Investments (direct investment and deal structuring). This separation ensures that operating company performance is not cross-contaminated by investment activity, and that investment vehicles are not diluted by operating company risk.</p>
          </div>
        </div>
      </div></div>

      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-eye-w sr" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="sr sr-d1">Ready to engage?</h2>
          <p className="sr sr-d2">Whether you represent an institutional partner, potential investor, or executive candidate — we respond to substantive inquiries.</p>
          <div className="sr sr-d3"><button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button></div>
        </div>
      </div>
    </>
  );
}