import { useNavigate } from 'react-router-dom';

export default function Legal() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Legal</div>
          <h1>Legal</h1>
          <p>Privacy Policy, Terms of Use, and Investment Disclaimer.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="disc-box">
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">
            All three legal pages — Privacy Policy, Terms of Use, and Investment Disclaimer — require attorney-reviewed final copy from Debra Buhring before this section can go live. Staging placeholder only. No legal page may be published without Debra Buhring's written sign-off or a documented exception from Carl Sauter.
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2>Privacy Policy</h2>
          <div className="prose" style={{ marginTop: 16, maxWidth: 680 }}>
            <p><em>Attorney-reviewed copy pending — Debra Buhring.</em></p>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2>Terms of Use</h2>
          <div className="prose" style={{ marginTop: 16, maxWidth: 680 }}>
            <p><em>Attorney-reviewed copy pending — Debra Buhring.</em></p>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2>Investment Disclaimer</h2>
          <div className="disc-box" style={{ marginTop: 16 }}>
            <div className="disc-lbl">Investment Disclaimer — Staging Placeholder</div>
            <div className="disc-txt">This website and any materials presented on it do not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment opportunities described herein are available only to qualified or accredited investors as defined by applicable law. All investments involve risk. Past performance is not indicative of future results. Please review the formal offering documents before making any investment decision. Attorney-reviewed final copy required from Debra Buhring before this page goes live.</div>
          </div>
        </div>
      </div></div>
    </>
  );
}