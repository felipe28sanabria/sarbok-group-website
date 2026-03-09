import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [mobOpen, setMobOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function go(path) {
    setMobOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className="nav" style={{ boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.22)' : 'none' }}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => go('/')}>
          <img src="/logos/logo-sarbok-group.svg" alt="Sarbok Group" />
        </div>
        <div className="nav-links">
          <a onClick={() => go('/')}>Home</a>
          <a onClick={() => go('/about')}>About</a>
          <a onClick={() => go('/portfolio')}>Portfolio</a>
          <a onClick={() => go('/team')}>Team</a>
          <a onClick={() => go('/culture')}>Culture</a>
          <a onClick={() => go('/investors')}>Investors</a>
          <a onClick={() => go('/contact')} className="nav-cta">Contact</a>
        </div>
        <button className="ham" onClick={() => setMobOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>
      {mobOpen && (
        <div className="mob-nav">
          <a onClick={() => go('/')}>Home</a>
          <a onClick={() => go('/about')}>About</a>
          <a onClick={() => go('/portfolio')}>Portfolio</a>
          <a onClick={() => go('/team')}>Team</a>
          <a onClick={() => go('/culture')}>Culture</a>
          <a onClick={() => go('/investors')}>Investors</a>
          <a onClick={() => go('/contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
}