import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>About</div>
          <h1>Who We Are</h1>
          <p>An operating holding company built around governance, operational discipline, and long-term institutional performance.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>Sarbok Group functions as an operating holding company and shared services platform for a portfolio of controlled operating businesses. The Group provides centralized finance, legal, compliance, and strategic support through formal management agreements with each portfolio entity.</p>
          <p>Each operating company maintains independent legal status, separate capitalization, and dedicated management teams. Shared services are delivered on a cost-recovery basis with documented service agreements and transfer pricing protocols in place. This structure enables operational leverage while preserving entity-level accountability.</p>
          <p>Sarbok Group is built to be operator-led rather than investor-led, cash-flow disciplined rather than valuation-driven, and structurally risk-contained rather than dependent on informal arrangements.</p>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye">Philosophy</div>
        <h2>How We Think About Operating Companies</h2>
        <div className="pillars">
          <div className="pillar lt"><h4>Operator-Led</h4><p>Portfolio companies are run by dedicated management teams. The holding company sets governance standards; it does not run the business.</p></div>
          <div className="pillar lt"><h4>Cash-Flow Disciplined</h4><p>Capital deployment decisions are made on the basis of operating cash flows. Valuation multiples do not drive allocation.</p></div>
          <div className="pillar lt"><h4>Structurally Risk-Contained</h4><p>Each entity maintains separate capitalization and ring-fenced liability. Risk is managed structurally, not informally.</p></div>
        </div>
      </div></div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye">Institutional Foundation</div>
        <h2 style={{ maxWidth: 600 }}>Built to institutional counterparty standards</h2>
        <div className="prose" style={{ maxWidth: 680, marginTop: 16 }}>
          <p>The operational infrastructure of Sarbok Group reflects institutional investor expectations — not founder-stage informality. Governance documents, service agreements, compliance frameworks, and reporting standards are built to the standard required for institutional counterparty relationships.</p>
          <p>This is not a cosmetic positioning. The Group's governance infrastructure is the operational foundation upon which portfolio companies can scale, attract institutional capital, and sustain long-term performance.</p>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye">Financial Architecture</div>
        <h2>How the Capital Structure Works</h2>
        <div className="prose" style={{ maxWidth: 680, marginTop: 16 }}>
          <p>The financial architecture of the Sarbok Group is designed to create operational leverage without structural fragility. Each portfolio company is independently capitalized. Shared services are delivered through documented management agreements on a cost-recovery basis with formal transfer pricing protocols.</p>
          <p>Capital allocation is governed by DM Holdings (private credit and liquidity) and Sarbok Investments (direct investment and deal structuring). This separation ensures that operating company performance is not cross-contaminated by investment activity, and that investment vehicles are not diluted by operating company risk.</p>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Ready to engage?</h2>
        <p>Whether you represent an institutional partner, potential investor, or executive candidate — we respond to substantive inquiries.</p>
        <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
      </div>
    </>
  );
}