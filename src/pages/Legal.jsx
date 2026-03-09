import { useNavigate } from 'react-router-dom';

export default function Legal() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Legal</div>
          <div className="sec-eye-w sr">Legal</div>
          <h1 className="sr sr-d1">Legal & Compliance</h1>
          <p className="sr sr-d2">Privacy Policy, Terms of Use, and Investment Disclaimer.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="disc-box sr">
          <div className="disc-lbl">Staging Placeholder — Legal Review Required</div>
          <div className="disc-txt">All three legal pages — Privacy Policy, Terms of Use, and Investment Disclaimer — require attorney-reviewed final copy from Debra Buhring before this section can go live. No legal page may be published without Debra Buhring's written sign-off or a documented exception from Carl Sauter.</div>
        </div>

        <div style={{ marginTop: 64 }} className="sr sr-d1">
          <div className="sec-eye">Privacy Policy</div>
          <h2 style={{ marginTop: 8 }}>Privacy Policy</h2>
          <div className="prose" style={{ marginTop: 16, maxWidth: 680 }}>
            <p><em>Attorney-reviewed copy pending — Debra Buhring.</em></p>
          </div>
        </div>

        <div className="sec-divider" style={{ margin: '48px 0' }} />

        <div className="sr">
          <div className="sec-eye">Terms of Use</div>
          <h2 style={{ marginTop: 8 }}>Terms of Use</h2>
          <div className="prose" style={{ marginTop: 16, maxWidth: 680 }}>
            <p><em>Attorney-reviewed copy pending — Debra Buhring.</em></p>
          </div>
        </div>

        <div className="sec-divider" style={{ margin: '48px 0' }} />

        <div className="sr">
          <div className="sec-eye">Investment Disclaimer</div>
          <h2 style={{ marginTop: 8 }}>Investment Disclaimer</h2>
          <div className="disc-box" style={{ marginTop: 16 }}>
            <div className="disc-lbl">Investment Disclaimer — Staging Placeholder</div>
            <div className="disc-txt">This website and any materials presented on it do not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment opportunities described herein are available only to qualified or accredited investors as defined by applicable law. All investments involve risk. Past performance is not indicative of future results. Please review the formal offering documents before making any investment decision. Attorney-reviewed final copy required from Debra Buhring before this page goes live.</div>
          </div>
        </div>
      </div></div>
    </>
  );
}