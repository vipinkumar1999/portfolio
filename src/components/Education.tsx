import { certifications, education, projectsResearch } from "../content";
import Section from "./Section";
import "../styles/education.css";

const Education = () => (
  <Section id="education" title="Education & certifications" className="education">
    <div className="edu">
      <div>
        <h3 className="edu__h">Education</h3>
        {education.map((e) => (
          <article key={e.degree} className="edu__item">
            <p className="edu__period">{e.period}</p>
            <h4>{e.degree}</h4>
            <p className="edu__school">
              {e.school} · {e.detail}
            </p>
            <p>{e.summary}</p>
          </article>
        ))}
      </div>
      <div>
        <h3 className="edu__h">Certifications</h3>
        <ul className="certs">
          {certifications.map((c) => (
            <li key={c.title} className="cert">
              <h4>
                {c.title}
                {c.code && <span className="pill">{c.code}</span>}
              </h4>
              <p className="cert__meta">
                {c.issuer}
                {c.year && <> · {c.year}</>}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="edu__h edu__h--spaced">Projects &amp; research</h3>
        {projectsResearch.map((pr) => (
          <article key={pr.title} className="edu__item">
            <p className="edu__period">{pr.meta}</p>
            <h4>{pr.title}</h4>
            <p>{pr.body}</p>
          </article>
        ))}
      </div>
    </div>
  </Section>
);

export default Education;
