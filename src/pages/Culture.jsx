import { useNavigate } from 'react-router-dom';

export default function Culture() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Culture</div>
          <h1>How We Work</h1>
          <p>The operating culture of Sarbok Group is defined by accountability, documentation, and a commitment to institutional standards at every level.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye">Operating Culture</div>
        <h2>What We Expect From Every Team</h2>
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>Sarbok Group operates across multiple companies, geographies, and sectors. What holds the portfolio together is not a shared office or a common product — it is a shared standard of operational discipline. Every team across the Group is expected to operate to the same documentation standards, governance expectations, and accountability frameworks.</p>
          <p>This is not a cultural aspiration. It is an operational requirement that governs how we engage with counterparties, deploy capital, and build institutions that outlast their founders.</p>
        </div>
        <div className="cpillars" style={{ marginTop: 32 }}>
          <div className="cpill"><h4>Document Everything</h4><p>Every engagement, decision, and agreement is documented. Verbal commitments are confirmed in writing. Governance is not informal.</p></div>
          <div className="cpill"><h4>Accountability Without Exception</h4><p>Performance expectations are defined, tracked, and enforced. Every role has measurable outcomes. Every manager is accountable to their portfolio company's board.</p></div>
          <div className="cpill"><h4>Institutional Standards, Not Startup Informality</h4><p>We build to institutional counterparty standards from day one. Not because we plan to exit, but because that is the only way to build something that lasts.</p></div>
          <div className="cpill"><h4>Operator-First Decision Making</h4><p>Decisions are made by operators with context, not holding company staff with spreadsheets. The Group sets standards; the entities make decisions.</p></div>
        </div>
      </div></div>

      <div className="sec-dark"><div className="sec-inner">
        <div className="sec-eye-w">Why It Matters</div>
        <h2 className="w">Culture is Infrastructure</h2>
        <p className="lead w">Informal cultures produce informal outcomes. When the Group's governance infrastructure is the foundation, operating companies can scale without rebuilding their systems from scratch at every stage.</p>
        <div className="pillars" style={{ marginTop: 28 }}>
          <div className="pillar dk"><h4>Attracts Institutional Capital</h4><p>Investors and lenders engage with organizations that operate to their standards. Culture is due diligence.</p></div>
          <div className="pillar dk"><h4>Retains Operational Talent</h4><p>High-performers stay in organizations where accountability is clear and standards are enforced consistently.</p></div>
          <div className="pillar dk"><h4>Enables Scale</h4><p>Companies that document and govern well can grow without the chaos that destroys most scaling organizations.</p></div>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Join the Group</h2>
        <p>If you are an operator, executive, or institutional partner who works to these standards, we want to hear from you.</p>
        <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
      </div>
    </>
  );
}