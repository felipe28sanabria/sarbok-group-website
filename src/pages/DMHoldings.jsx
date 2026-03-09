import { useNavigate } from 'react-router-dom';

export default function DMHoldings() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>DM Holdings</div>
          <div className="sec-eye-w sr">Portfolio Company</div>
          <h1 className="sr sr-d1">DM Holdings</h1>
          <p className="sr sr-d2">Private credit and capital allocation — providing liquidity without outside equity dilution.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Overview</div>
            <h2>Private Credit & Capital Allocation</h2>
            <div className="prose">
              <p>DM Holdings is the private credit and capital allocation vehicle of the Sarbok Group. The entity provides structured debt facilities and liquidity solutions to portfolio companies and select third-party borrowers, operating within a documented credit framework with defined underwriting standards, covenant packages, and repayment structures.</p>
              <p>DM Holdings allows the Sarbok Group to deploy capital efficiently across the portfolio without equity dilution, while providing investors with a defined income-generating instrument rather than equity participation.</p>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="sec-eye">How It Operates</div>
            <div className="col-pillars" style={{ marginTop: 12 }}>
              <div className="cpillar"><h4>Private Credit Facilities</h4><p>Structured debt instruments deployed to portfolio companies and qualified third-party borrowers on documented terms.</p></div>
              <div className="cpillar"><h4>Defined Underwriting Standards</h4><p>All credit facilities are governed by documented underwriting criteria, covenant packages, and repayment protocols.</p></div>
              <div className="cpillar"><h4>Income-Generating Structure</h4><p>Investors participate as lenders, not equity holders — providing predictable income characteristics without equity risk.</p></div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-dark"><div className="sec-inner">
        <div className="sec-eye-w sr">Investment Profile</div>
        <h2 className="w sr sr-d1">Who DM Holdings Works With</h2>
        <p className="lead w sr sr-d2">DM Holdings engages with qualified investors seeking documented private credit exposure within a governed holding structure.</p>
        <div className="pillars sr sr-d3">
          <div className="pillar dk">
            <div className="pillar-num">01</div>
            <h4>Accredited Individuals</h4>
            <p>Individual accredited investors seeking income-generating private credit exposure with defined risk parameters.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">02</div>
            <h4>Family Offices</h4>
            <p>Family offices seeking documented credit instruments within a governed holding structure and institutional reporting standards.</p>
          </div>
          <div className="pillar dk">
            <div className="pillar-num">03</div>
            <h4>Institutional Investors</h4>
            <p>Institutional counterparties requiring formal offering documentation, compliance frameworks, and covenant-governed deployment.</p>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="disc-box sr">
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">Detailed investment terms — minimum investment, return structure specifics — are pending finalization and Debra Buhring legal review. Contact us through the Investor Relations page to request formal offering documentation.</div>
        </div>
      </div></div>

      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-eye-w sr" style={{ justifyContent: 'center' }}>DM Holdings</div>
          <h2 className="sr sr-d1">Interested in DM Holdings?</h2>
          <p className="sr sr-d2">For qualified investor inquiries, contact us through the Investor Relations page.</p>
          <div className="sr sr-d3"><button className="btn btn-blue" onClick={() => go('/investors')}>Investor Relations</button></div>
        </div>
      </div>
    </>
  );
}