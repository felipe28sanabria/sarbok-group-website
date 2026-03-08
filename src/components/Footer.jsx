import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  function go(path) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer>
      <div className="ft-inner">
        <div className="ft-top">
          <div>
            <img src="/logos/logo-sarbok-group.svg" alt="Sarbok Group" style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: 12 }} />
            <div className="ft-brand-tag">A family-office-backed operating holding company. Operator-led. Cash-flow disciplined. Institutionally documented.</div>
          </div>
          <div className="ft-col">
            <h5>Company</h5>
            <a onClick={() => go('/about')}>About</a>
            <a onClick={() => go('/team')}>Team</a>
            <a onClick={() => go('/culture')}>Culture</a>
            <a onClick={() => go('/investors')}>Investors</a>
          </div>
          <div className="ft-col">
            <h5>Portfolio</h5>
            <a onClick={() => go('/portfolio/ascenda')}>Ascenda Group</a>
            <a onClick={() => go('/portfolio/capdev')}>CapDev</a>
            <a onClick={() => go('/portfolio/dcs-network')}>DCS Network</a>
            <a onClick={() => go('/portfolio/dm-holdings')}>DM Holdings</a>
            <a onClick={() => go('/portfolio/sarbok-investments')}>Sarbok Investments</a>
          </div>
          <div className="ft-col">
            <h5>Contact</h5>
            <a onClick={() => go('/contact')}>Get in Touch</a>
            <a onClick={() => go('/investors')}>Investor Relations</a>
            <a onClick={() => go('/legal')}>Legal</a>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-copy">© 2026 Sarbok Group. All rights reserved.</div>
          <div className="ft-legal">
            <a onClick={() => go('/legal')}>Privacy Policy</a>
            <a onClick={() => go('/legal')}>Terms of Use</a>
            <a onClick={() => go('/legal')}>Investment Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}