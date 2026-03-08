import { useNavigate } from 'react-router-dom';

export default function Portfolio() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Portfolio</div>
          <h1>Our Portfolio</h1>
          <p>Five operating companies across healthcare, technology, capital development, and financial services — each independently managed, institutionally governed.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="prose" style={{ maxWidth: 680, marginBottom: 36 }}>
          <p>The Sarbok Group portfolio is built for operational durability, not valuation-driven growth. Each company is independently managed with dedicated leadership, separate capitalization, and governance structures aligned with institutional standards.</p>
        </div>
        <div className="pgrid">
          <div className="pcard" onClick={() => go('/portfolio/ascenda')}>
            <div className="pcard-logo">ASC</div>
            <h3>Ascenda Group</h3><p>Healthcare services and retail brokerage platform — connecting brands to buyers across major retail channels.</p>
            <span className="pcard-lnk">View entity →</span>
          </div>
          <div className="pcard" onClick={() => go('/portfolio/capdev')}>
            <div className="pcard-logo" style={{ padding: '8px 0' }}><img src="/logos/logo-capdev.svg" alt="CapDev" style={{ height: 36, width: 'auto', maxWidth: 120 }} /></div>
            <h3>CapDev</h3><p>Cross-border capital development and workforce execution platform.</p>
            <span className="pcard-lnk">View entity →</span>
          </div>
          <div className="pcard" onClick={() => go('/portfolio/dcs-network')}>
            <div className="pcard-logo" style={{ padding: '8px 0' }}><img src="/logos/logo-dcs.svg" alt="DCS Network" style={{ height: 36, width: 'auto', maxWidth: 120 }} /></div>
            <h3>DCS Network</h3><p>Technology infrastructure and digital services platform.</p>
            <span className="pcard-lnk">View entity →</span>
          </div>
          <div className="pcard" onClick={() => go('/portfolio/dm-holdings')}>
            <div className="pcard-logo" style={{ padding: '8px 0' }}><img src="/logos/logo-dm.svg" alt="DM Holdings" style={{ height: 36, width: 'auto', maxWidth: 120 }} /></div>
            <h3>DM Holdings</h3><p>Private credit and capital allocation — providing liquidity without outside equity dilution.</p>
            <span className="pcard-lnk">View entity →</span>
          </div>
          <div className="pcard" onClick={() => go('/portfolio/sarbok-investments')}>
            <div className="pcard-logo" style={{ padding: '8px 0' }}><img src="/logos/logo-sarbokinvestments.svg" alt="Sarbok Investments" style={{ height: 36, width: 'auto', maxWidth: 120 }} /></div>
            <h3>Sarbok Investments</h3><p>Direct investment and strategic capital allocation — disciplined underwriting, structured deal vehicles.</p>
            <span className="pcard-lnk">View entity →</span>
          </div>
          <div className="pcard" onClick={() => go('/contact')}>
            <div className="pcard-logo" style={{ background: 'var(--primary)' }}>+</div>
            <h3>Engage with the Group</h3><p>Institutional partners, investors, and executive candidates.</p>
            <span className="pcard-lnk">Contact us →</span>
          </div>
        </div>
      </div></div>
    </>
  );
}