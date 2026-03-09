import { useNavigate } from 'react-router-dom';

export default function DCSNetwork() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      {/* HERO */}
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>DCS Network</div>
          <div className="sec-eye-w sr">Portfolio Company</div>
          <h1 className="sr sr-d1">DCS Network</h1>
          <p className="sr sr-d2">A fintech payment facilitation company enabling high-risk merchants to accept card payments and settle in digital currency — same day, with no rolling reserve.</p>
        </div>
      </div>

      {/* AT A GLANCE */}
      <div className="sec-light">
        <div className="sec-inner">
          <div className="sec-eye sr">At a Glance</div>
          <div className="stats sr sr-d1">
            <div className="stat">
              <div className="stat-val">USDT</div>
              <div className="stat-lbl">Settlement Currency</div>
            </div>
            <div className="stat">
              <div className="stat-val">Same Day</div>
              <div className="stat-lbl">Settlement Speed</div>
            </div>
            <div className="stat">
              <div className="stat-val">0%</div>
              <div className="stat-lbl">Rolling Reserve</div>
            </div>
            <div className="stat">
              <div className="stat-val">22</div>
              <div className="stat-lbl">Active Pipeline Prospects</div>
            </div>
          </div>
          <div className="g2c sr sr-d2" style={{ marginTop: 0 }}>
            <div>
              <h2>What DCS Network Does</h2>
              <div className="prose">
                <p>DCS Network (operating as DCS Exchange) is a merchant aggregator and payment facilitation company. It does not directly hold, transfer, or process funds — instead, it acts as a commercial and compliance intermediary, connecting high-risk merchants with licensed payment service providers and structuring settlement in a way that materially benefits those merchants over traditional banking alternatives.</p>
                <p>The company serves merchants in verticals that are routinely denied or de-platformed by conventional banks and payment processors — providing them access to card acceptance infrastructure with a settlement structure designed to eliminate two of the most damaging financial constraints they face: the rolling reserve and multi-week settlement delays.</p>
              </div>
            </div>
            <div>
              <div className="sec-eye">Entity Details</div>
              <div className="slist" style={{ marginTop: 12 }}>
                <div className="sitem">
                  <div className="snum">01</div>
                  <div><h4>Legal Entity</h4><p>DCS Exchange (DBA: DCS Network)</p></div>
                </div>
                <div className="sitem">
                  <div className="snum">02</div>
                  <div><h4>Structure</h4><p>Merchant aggregator and referral agency — does not directly hold or transfer funds</p></div>
                </div>
                <div className="sitem">
                  <div className="snum">03</div>
                  <div><h4>Geography</h4><p>Central America (primary), with planned expansion to North America and Europe</p></div>
                </div>
                <div className="sitem">
                  <div className="snum">04</div>
                  <div><h4>Portfolio Position</h4><p>Sarbok Group operating company — shared services via group MSA platform</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE OFFER */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-eye sr">The Core Offer</div>
          <h2 className="sr sr-d1">Built for Merchants Traditional Banks Won't Serve</h2>
          <p className="lead sr sr-d2">DCS Network's model is purpose-built to solve the specific infrastructure and cash flow constraints facing high-risk merchant verticals.</p>
          <div className="pillars" style={{ marginTop: 8 }}>
            <div className="pillar lt sr">
              <div className="pillar-num">01</div>
              <h4>Card Payment Acceptance</h4>
              <p>Full card acceptance infrastructure for high-risk and underserved merchant verticals — routed through PCI-DSS Level 1 certified PSP infrastructure while DCS manages the merchant relationship.</p>
            </div>
            <div className="pillar lt sr sr-d1">
              <div className="pillar-num">02</div>
              <h4>Same-Day USDT Settlement</h4>
              <p>Merchants receive funds daily in USDT (ERC20) — not in 7–21 day cycles. Immediate access to capital fundamentally changes merchant cash flow dynamics.</p>
            </div>
            <div className="pillar lt sr sr-d2">
              <div className="pillar-num">03</div>
              <h4>No Rolling Reserve</h4>
              <p>Traditional PSPs hold 10–20% of merchant revenue for 30–90 days as risk protection. DCS eliminates this entirely — freeing capital that would otherwise be locked in reserve.</p>
            </div>
          </div>
        </div>
      </div>

      {/* REVENUE MODEL */}
      <div className="sec-dark">
        <div className="sec-inner">
          <div className="sec-eye-w sr">Revenue Model</div>
          <h2 className="w sr sr-d1">Fee Structure</h2>
          <p className="lead w sr sr-d2">DCS earns a Merchant Discount Rate on every transaction processed. Fees are tiered by merchant volume with no setup costs at entry.</p>
          <div className="tiers sr sr-d3">
            <div className="tier">
              <div className="tier-n">Starter Tier</div>
              <div className="tier-name">Under $50K / Month</div>
              <div className="tier-desc">MDR 11–12% plus $0.50 per transaction. No setup fees. Full access to settlement infrastructure from day one.</div>
            </div>
            <div className="tier">
              <div className="tier-n">Growth Tier</div>
              <div className="tier-name">$50K – $250K / Month</div>
              <div className="tier-desc">MDR 9–10% plus $0.30 per transaction. Designed for merchants with established volume and consistent processing history.</div>
            </div>
            <div className="tier">
              <div className="tier-n">Enterprise Tier</div>
              <div className="tier-name">$250K+ / Month</div>
              <div className="tier-desc">Custom-negotiated MDR targeting 7–8% with dedicated account management. Built for high-volume operators requiring tailored infrastructure.</div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPETITIVE DIFFERENTIATION */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-eye sr">Competitive Position</div>
          <h2 className="sr sr-d1">Structural Advantages Over Traditional PSPs</h2>
          <p className="lead sr sr-d2">DCS Network's differentiation is structural, not promotional. Three features that traditional high-risk processors cannot easily replicate.</p>
          <div className="col-pillars sr sr-d3" style={{ maxWidth: 760 }}>
            <div className="cpillar">
              <h4>No Rolling Reserve</h4>
              <p>Most PSPs hold 10–20% of merchant revenue for 30–90 days as risk protection. DCS eliminates this entirely — a material cash flow advantage for any high-volume merchant.</p>
            </div>
            <div className="cpillar">
              <h4>Same-Day Liquidity</h4>
              <p>Daily USDT settlement means merchants access capital the same day transactions clear. Traditional PSPs settle in 7–21 day cycles, creating chronic working capital gaps for merchants.</p>
            </div>
            <div className="cpillar">
              <h4>High-Risk Specialization</h4>
              <p>DCS is purpose-built for verticals that conventional banks routinely decline. The compliance framework, merchant relationships, and operational model are designed around this market — not retrofitted to serve it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="sec-eye-w sr" style={{ justifyContent: 'center' }}>DCS Network</div>
          <h2 className="sr sr-d1">Merchant or Partner Inquiries</h2>
          <p className="sr sr-d2">For payment infrastructure, merchant onboarding, or partnership inquiries, contact the Group and we will direct your inquiry appropriately.</p>
          <div className="sr sr-d3">
            <button className="btn btn-blue" onClick={() => go('/contact')}>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}