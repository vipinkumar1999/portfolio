import { profile, stats } from "../content";
import Section from "./Section";
import "../styles/summary.css";


const Summary = () => (
  <Section id="summary" title="Summary" hideTitle reveal={false} className="summary">
    <p className="kicker">
      {profile.role} <span aria-hidden="true">/</span> <span className="kicker__detail">{profile.roleDetail}</span>
    </p>
    <h1 className="summary__name">{profile.name}</h1>
    <p className="summary__headline">{profile.headline}</p>
    <p className="summary__intro">{profile.intro}</p>
    <p className="summary__meta">
      <span>{profile.location}</span>
      <span className="summary__avail">
        <span className="dot" aria-hidden="true" />
        {profile.availability}
      </span>
    </p>
    <div className="summary__cta">
      <a className="btn btn--solid" href={`mailto:${profile.email}`}>
        Email me
      </a>
      <a className="btn btn--outline" href={profile.resume} target="_blank" rel="noopener">
        Résumé (PDF)
      </a>
      <a className="textlink" href={profile.linkedin} target="_blank" rel="noopener">
        LinkedIn <span aria-hidden="true">↗</span>
      </a>
      <a className="textlink" href={profile.github} target="_blank" rel="noopener">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>


    <ul className="stats" aria-label="At a glance">
      {stats.map((s) => (
        <li key={s.label}>
          <strong>{s.value}</strong> {s.label}
        </li>
      ))}
    </ul>
  </Section>
);

export default Summary;
