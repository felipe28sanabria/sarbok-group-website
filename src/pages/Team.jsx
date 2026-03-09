import { useNavigate } from 'react-router-dom';
import StagingNotice from '../components/StagingNotice';

export default function Team() {
  const navigate = useNavigate();
  function go(path) { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const team = [
    { initials: 'DS', name: 'Dee Sarbok', title: 'Executive Team · Finance, DM Holdings', linkedin: 'https://www.linkedin.com/in/detlef-w-s-332111/' },
    { initials: 'ED', name: 'Errol Denger', title: 'Chief Operating Officer, Ascenda Group', linkedin: 'https://www.linkedin.com/in/edenger' },
    { initials: 'LH', name: 'Lisle Head', title: 'Executive Team, Ascenda Group', linkedin: 'https://cr.linkedin.com/in/lislehead' },
    { initials: 'EM', name: 'Enrique Méndez', title: 'VP Technology, CapDev', linkedin: 'https://www.linkedin.com/in/mandrakecostarica/' },
    { initials: 'CS', name: 'Carl Sauter', title: 'Director of Portfolio Operations & Compliance', linkedin: 'https://www.linkedin.com/in/csauter506/' },
    { initials: 'CB', name: 'Cristina Bruno', title: 'Operations', linkedin: 'https://cr.linkedin.com/in/cristina-bruno-96913619' },
    { initials: 'FJ', name: 'Felipe Jiménez', title: 'Software Engineer, CapDev', linkedin: 'https://cr.linkedin.com/in/felipe-jimenez-jimenez-013689190' },
  ];

  return (
    <>
      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="bc"><a onClick={() => go('/')}>Home</a><span className="bc-sep">/</span>Team</div>
          <div className="sec-eye-w sr">Leadership</div>
          <h1 className="sr sr-d1">Our Team</h1>
          <p className="sr sr-d2">Operator-led management across the Sarbok Group portfolio. Each entity is run by dedicated leadership accountable to the Group's governance standards.</p>
        </div>
      </div>

      <div className="sec"><div className="sec-inner">
        <StagingNotice>7 executive headshots pending from client. Placeholder initials shown. Headshots will be dropped in when delivered — no other changes required.</StagingNotice>
        <div className="tgrid">
          {team.map((m, i) => (
            <div className={`tcard sr${i > 0 ? ` sr-d${Math.min(i, 4)}` : ''}`} key={m.name}>
              <div className="tavatar">{m.initials}</div>
              <div className="tname">{m.name}</div>
              <div className="ttitle">{m.title}</div>
              <a className="tlink" href={m.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec-light"><div className="sec-inner">
        <div className="sec-eye sr">Leadership Philosophy</div>
        <h2 className="sr sr-d1">Operator-Led at Every Level</h2>
        <div className="g2c sr sr-d2" style={{ marginTop: 8 }}>
          <div className="prose">
            <p>Sarbok Group does not manage its portfolio companies through the holding company. Each entity is run by a dedicated management team with full operational accountability. The Group's role is governance, shared services, and capital allocation — not operational management.</p>
          </div>
          <div className="prose">
            <p>This structure ensures that each portfolio company can scale independently, attract talent appropriate to its sector, and maintain decision-making speed — while benefiting from the institutional infrastructure the Group provides.</p>
          </div>
        </div>
      </div></div>
    </>
  );
}