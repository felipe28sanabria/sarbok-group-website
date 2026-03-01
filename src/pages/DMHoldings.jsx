import { useNavigate } from 'react-router-dom';

export default function DMHoldings() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>DM Holdings</div>
          <h1>DM Holdings</h1>
          <p>Private credit and capital allocation — providing liquidity without outside equity dilution.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="prose" style={{ maxWidth: 680 }}>
          <p>DM Holdings is the private credit and capital allocation vehicle of the Sarbok Group. The entity provides structured debt facilities and liquidity solutions to portfolio companies and select third-party borrowers, operating within a documented credit framework with defined underwriting standards, covenant packages, and repayment structures.</p>
          <p>DM Holdings allows the Sarbok Group to deploy capital efficiently across the portfolio without equity dilution, while providing investors with a defined income-generating instrument rather than equity participation.</p>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye">Capital Structure</div>
        <h2>How DM Holdings Operates</h2>
        <div className="pillars">
          <div className="pillar lt"><h4>Private Credit Facilities</h4><p>Structured debt instruments deployed to portfolio companies and qualified third-party borrowers on documented terms.</p></div>
          <div className="pillar lt"><h4>Defined Underwriting Standards</h4><p>All credit facilities are governed by documented underwriting criteria, covenant packages, and repayment protocols.</p></div>
          <div className="pillar lt"><h4>Income-Generating Structure</h4><p>Investors participate as lenders, not equity holders — providing predictable income characteristics without equity risk.</p></div>
        </div>
      </div></div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye">Investment Profile</div>
        <h2>Who DM Holdings Works With</h2>
        <div className="ilist">
          <div className="iitem"><div className="idot" /><p>Accredited individual investors seeking income-generating private credit exposure</p></div>
          <div className="iitem"><div className="idot" /><p>Family offices seeking documented credit instruments within a governed holding structure</p></div>
          <div className="iitem"><div className="idot" /><p>Institutional investors requiring formal offering documentation and compliance frameworks</p></div>
        </div>
        <div className="disc-box" style={{ marginTop: 28 }}>
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">Detailed investment terms — minimum investment, return structure specifics — are pending finalization and Debra Buhring legal review. Contact us through the Investor Relations page to request formal offering documentation.</div>
        </div>
      </div></div>

      <div className="cta-banner">
        <h2>Interested in DM Holdings?</h2>
        <p>For qualified investor inquiries, contact us through the Investor Relations page.</p>
        <button className="btn btn-blue" onClick={() => go('/investors')}>Investor Relations</button>
      </div>
    </>
  );
}