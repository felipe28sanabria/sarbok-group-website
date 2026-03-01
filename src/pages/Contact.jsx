import { useNavigate } from 'react-router-dom';
import StagingNotice from '../components/StagingNotice';
import PipeDriveForm from '../components/PipeDriveForm';

export default function Contact() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Contact</div>
          <h1>Get in Touch</h1>
          <p>We respond to substantive inquiries from institutional partners, investors, and executive candidates.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div>
            <div className="sec-eye">Contact Information</div>
            <h2>Sarbok Group</h2>
            <div className="cinfo" style={{ marginTop: 22 }}>
              <StagingNotice>Registered address and contact email pending confirmation from client.</StagingNotice>
              <div className="cinfo-item">
                <div className="cinfo-item-label">Registered Address</div>
                <div className="cinfo-item-val">[Pending client confirmation]</div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-item-label">General Inquiries</div>
                <div className="cinfo-item-val">[Pending client confirmation]</div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-item-label">Response Time</div>
                <div className="cinfo-item-val">Within three business days for substantive inquiries</div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-item-label">Investor Relations</div>
                <div className="cinfo-item-val"><a onClick={() => go('/investors')} style={{ cursor: 'pointer' }}>Submit through the Investor Relations page →</a></div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-item-label">Vendor / Partner Inquiries</div>
                <div className="cinfo-item-val"><a onClick={() => go('/portfolio/ascenda')} style={{ cursor: 'pointer' }}>Ascenda vendor intake form →</a></div>
              </div>
            </div>
          </div>
          <div>
            <div className="sec-eye">Send a Message</div>
            <h2>General Inquiry</h2>
            <div className="form-wrap" style={{ marginTop: 16 }}>
              <PipeDriveForm entity="Sarbok Group" formType="General Contact" submitLabel="Send Message">
                <div className="fg2">
                  <div className="field"><label>Full Name *</label><input type="text" name="name" required placeholder="Your full name" /></div>
                  <div className="field"><label>Organization</label><input type="text" name="org" placeholder="Your organization" /></div>
                </div>
                <div className="field"><label>Inquiry Type *</label>
                  <select name="inquiry_type" required>
                    <option value="">Select…</option>
                    <option>Partnership Inquiry</option>
                    <option>Executive Candidate</option>
                    <option>Media / Press</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fg2">
                  <div className="field"><label>Email Address *</label><input type="email" name="email" required placeholder="you@company.com" /></div>
                  <div className="field"><label>Phone (optional)</label><input type="tel" name="phone" placeholder="+1 (555) 000-0000" /></div>
                </div>
                <div className="field"><label>Message *</label><textarea name="message" required placeholder="Describe your inquiry…" /></div>
              </PipeDriveForm>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
}