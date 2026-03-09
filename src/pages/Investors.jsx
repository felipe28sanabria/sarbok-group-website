import { useNavigate } from 'react-router-dom';
import StagingNotice from '../components/StagingNotice';
import PipeDriveForm from '../components/PipeDriveForm';

export default function Investors() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Investors</div>
          <div className="sec-eye-w sr">Investor Relations</div>
          <h1 className="sr sr-d1">Institutional Engagement</h1>
          <p className="sr sr-d2">Sarbok Group engages with accredited investors, family offices, and institutional partners through a structured, documentation-first process.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <StagingNotice><strong>Launch blocker:</strong> This page cannot go live without attorney-reviewed legal copy from Debra Buhring. Content shown is approved for staging only.</StagingNotice>
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Investment Opportunities</div>
            <h2>How We Engage with Investors</h2>
            <div className="prose">
              <p>Sarbok Group offers two primary investment vehicles: DM Holdings, which provides private credit exposure through structured debt instruments, and Sarbok Investments, which structures direct equity and special situation transactions through SPVs.</p>
              <p>All investor engagements begin with a formal inquiry process. We do not accept cold capital. Every investor relationship starts with a documented qualification process, an NDA, and a review of formal offering documentation.</p>
            </div>
            <div className="ilist" style={{ marginTop: 24 }}>
              <div className="iitem"><div className="idot" /><p><strong>DM Holdings</strong> — Private credit, income-generating, lender not equity participant</p></div>
              <div className="iitem"><div className="idot" /><p><strong>Sarbok Investments</strong> — Direct investment, SPV-structured, defined mandate and exit parameters</p></div>
              <div className="iitem"><div className="idot" /><p>Available to accredited individuals, family offices, and institutional investors</p></div>
              <div className="iitem"><div className="idot" /><p>All opportunities subject to formal offering documentation and attorney review</p></div>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="sec-eye">Investor Inquiry</div>
            <h2>Submit an Inquiry</h2>
            <div className="form-wrap">
              <PipeDriveForm entity="Sarbok Group" formType="Investor Inquiry" submitLabel="Submit Inquiry">
                <div className="field"><label>Full Name *</label><input type="text" name="name" required placeholder="Your full name" /></div>
                <div className="field"><label>Organization / Fund Name</label><input type="text" name="org" placeholder="Your organization" /></div>
                <div className="field"><label>Investor Type *</label>
                  <select name="investor_type" required>
                    <option value="">Select…</option>
                    <option>Accredited Individual</option>
                    <option>Family Office</option>
                    <option>Institutional Investor</option>
                  </select>
                </div>
                <div className="field"><label>Investment Interest</label>
                  <select name="investment_interest">
                    <option value="">Select…</option>
                    <option>DM Holdings — Private Credit</option>
                    <option>Sarbok Investments — Direct Investment</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="fg2">
                  <div className="field"><label>Email Address *</label><input type="email" name="email" required placeholder="you@fund.com" /></div>
                  <div className="field"><label>Phone Number</label><input type="tel" name="phone" placeholder="+1 (555) 000-0000" /></div>
                </div>
                <div className="field"><label>Jurisdiction</label><input type="text" name="jurisdiction" placeholder="e.g. United States, Costa Rica…" /></div>
                <div className="field"><label>Message / Context</label><textarea name="message" placeholder="Brief description of your interest and investment focus…" /></div>
                <p className="fdis">By submitting this form you confirm you are a qualified or accredited investor as defined by applicable law. Submission does not constitute an offer or commitment.</p>
              </PipeDriveForm>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye sr">Legal Disclaimer</div>
        <div className="disc-box sr sr-d1">
          <div className="disc-lbl">Investment Disclaimer — Staging Placeholder · Attorney Review Required</div>
          <div className="disc-txt">This website and any materials presented on it do not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment opportunities described herein are available only to qualified or accredited investors as defined by applicable law. All investments involve risk. Past performance is not indicative of future results. Please review the formal offering documents before making any investment decision. <strong>Attorney-reviewed final copy required from Debra Buhring before this page goes live.</strong></div>
        </div>
      </div></div>
    </>
  );
}