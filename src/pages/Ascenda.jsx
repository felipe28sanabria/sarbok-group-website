import { useNavigate } from 'react-router-dom';
import PipeDriveForm from '../components/PipeDriveForm';

export default function Ascenda() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span><a onClick={() => go('/portfolio')}>Portfolio</a><span className="bc-sep">/</span>Ascenda Group</div>
          <div className="sec-eye-w sr">Portfolio Company</div>
          <h1 className="sr sr-d1">Ascenda Group</h1>
          <p className="sr sr-d2">Healthcare services and retail brokerage platform — connecting brands to buyers across major retail channels.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <div className="g2c">
          <div className="sr">
            <div className="sec-eye">Overview</div>
            <h2>Two Distinct Business Lines</h2>
            <div className="prose">
              <p>Ascenda Group operates two distinct business lines: Ascenda Health, which delivers administrative and credentialing services to healthcare providers, and Ascenda Sales, which provides retail brokerage, commercialization support, and B2B sales infrastructure across regulated verticals.</p>
              <p>Ascenda is positioned as a strategic retail brokerage partner helping high-potential brands enter and grow across major retailers through representation, fractional executive leadership, and test-and-learn retail programs.</p>
            </div>
          </div>
          <div className="sr sr-d1">
            <div className="stats" style={{ margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              <div className="stat"><div className="stat-val">50–100</div><div className="stat-lbl">Active Healthcare Clients</div></div>
              <div className="stat"><div className="stat-val">200–400</div><div className="stat-lbl">Merchants Onboarded</div></div>
              <div className="stat" style={{ borderTop: '1px solid var(--border)' }}><div className="stat-val">Multi-Year</div><div className="stat-lbl">Client Retention Standard</div></div>
              <div className="stat" style={{ borderTop: '1px solid var(--border)' }}><div className="stat-val">MRR</div><div className="stat-lbl">Revenue Model</div></div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye sr">Service Offerings</div>
        <h2 className="sr sr-d1">Engagement Tiers — Ascenda Sales</h2>
        <div className="tiers sr sr-d2">
          <div className="tier">
            <div className="tier-n">Tier 1</div>
            <div className="tier-name">Retail Broker</div>
            <div className="tier-desc">Buyer introductions, category alignment, pitching, follow-up, roadshow and test-market opportunities, and expansion strategy.</div>
          </div>
          <div className="tier">
            <div className="tier-n">Tier 2</div>
            <div className="tier-name">Fractional CSO</div>
            <div className="tier-desc">Retail strategy and channel planning, pricing and margin modeling, forecasting, performance management, and coordination across distributors, brokers, and retailers.</div>
          </div>
          <div className="tier">
            <div className="tier-n">Tier 3</div>
            <div className="tier-name">JV Partnership + CSO Support</div>
            <div className="tier-desc">Strategic capital support, deep operational involvement, expansion roadmap, and a shared success model for long-term collaboration.</div>
          </div>
        </div>
        <div style={{ marginTop: 32 }} className="sr">
          <div className="sec-eye">Ideal Categories</div>
          <div className="tags" style={{ marginTop: 12 }}>
            <span className="tag">Food &amp; Beverage</span>
            <span className="tag">Electronics &amp; Specialty</span>
            <span className="tag">Beauty &amp; Personal Care</span>
            <span className="tag">Health &amp; Wellness</span>
            <span className="tag">Household Goods</span>
          </div>
        </div>
      </div></div>

      <div className="sec"><div className="sec-inner">
        <div className="sec-eye sr">Vendor Intake</div>
        <h2 className="sr sr-d1">Apply to Work with Ascenda</h2>
        <p className="lead sr sr-d2">Submit your information below. All inquiries are reviewed within three business days.</p>
        <div className="form-wrap sr sr-d3">
          <PipeDriveForm entity="Ascenda Group" formType="Vendor Intake" submitLabel="Submit Vendor Inquiry">
            <div className="fg2">
              <div className="field"><label>Company Name *</label><input type="text" name="company" required placeholder="Your company" /></div>
              <div className="field"><label>Contact Name *</label><input type="text" name="name" required placeholder="Your name" /></div>
            </div>
            <div className="fg2">
              <div className="field"><label>Email Address *</label><input type="email" name="email" required placeholder="you@company.com" /></div>
              <div className="field"><label>Phone Number</label><input type="tel" name="phone" placeholder="+1 (555) 000-0000" /></div>
            </div>
            <div className="field"><label>Product Category *</label>
              <select name="category" required>
                <option value="">Select…</option>
                <option>Food &amp; Beverage</option>
                <option>Electronics &amp; Specialty</option>
                <option>Beauty, Lifestyle &amp; Personal Care</option>
                <option>Health, Wellness &amp; Supplements</option>
                <option>Household Goods &amp; General Merchandise</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field"><label>Brief Description of Product / Offering *</label><textarea name="description" required placeholder="Describe your product or service…" /></div>
            <div className="field"><label>Current Distribution Channels</label><input type="text" name="channels" placeholder="e.g. Direct, Amazon, Regional grocery…" /></div>
            <div className="field"><label>Annual Revenue Range (optional)</label>
              <select name="revenue">
                <option value="">Prefer not to say</option>
                <option>Under $500K</option>
                <option>$500K – $2M</option>
                <option>$2M – $10M</option>
                <option>$10M+</option>
              </select>
            </div>
            <div className="field"><label>Message / Additional Context</label><textarea name="message" placeholder="Anything else you'd like us to know…" /></div>
          </PipeDriveForm>
        </div>
      </div></div>
    </>
  );
}