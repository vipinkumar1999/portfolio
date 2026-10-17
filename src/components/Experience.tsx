import { about, experience, type Role } from "../content";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";
import "../styles/experience.css";

const START_YEAR = 2020;

/** Short axis label: company plus a brief role so repeated employers stay distinguishable. */
const SHORT: Record<string, string> = {
  "role-waters": "Waters · Analyst",
  "role-waters-intern": "Waters · Intern",
};

/** Figures worth scanning for: $3.06B, 99.9%, 500K+, 45+. Plain numbers (12, 2023) stay as text. */
const FIGURE = /(\$\d+(?:\.\d+)?[KMB]?\+?|\d+(?:\.\d+)?(?:[KMB]\+?|%|\+))/g;

const withFigures = (text: string) =>
  text.split(FIGURE).map((part, i) => (i % 2 ? <strong key={i} className="fig">{part}</strong> : part));

const monthIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return (y - START_YEAR) * 12 + (m - 1);
};

const Timeline = () => {
  const ref = useReveal<HTMLDivElement>();
  const now = new Date();
  const endYear = now.getFullYear();
  const total = (endYear + 1 - START_YEAR) * 12;
  const nowIdx = (endYear - START_YEAR) * 12 + now.getMonth() + 1;
  const years = Array.from({ length: endYear - START_YEAR + 1 }, (_, i) => START_YEAR + i);
  const pct = (n: number) => `${(n / total) * 100}%`;
  const bar = (r: Role) => {
    const s = monthIndex(r.start);
    const e = r.end ? monthIndex(r.end) + 1 : nowIdx;
    return { left: pct(s), width: pct(e - s) };
  };

  return (
    <figure className="tl-wrap" aria-labelledby="tl-cap">
      <figcaption id="tl-cap" className="tl-cap">
        Career timeline, {START_YEAR} to present
      </figcaption>
      <div className="tl-scroll">
        <div ref={ref} className="tl reveal-bars" aria-hidden="true">
          <div className="tl__row tl__axis">
            <span />
            <div className="tl__track">
              {years.map((y) => (
                <span key={y} className="tl__year" style={{ left: pct((y - START_YEAR) * 12) }}>
                  {y}
                </span>
              ))}
            </div>
          </div>
          {experience.map((r) => (
            <div key={r.id} className="tl__row">
              <span className="tl__co">{SHORT[r.id] ?? r.company}</span>
              <div className="tl__track">
                {years.map((y) => (
                  <span key={y} className="tl__grid" style={{ left: pct((y - START_YEAR) * 12) }} />
                ))}
                <span className={`tl__bar${r.end ? "" : " is-current"}`} style={bar(r)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sr-only">
      <table>
        <caption>Roles by period</caption>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Period</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((r) => (
            <tr key={r.id}>
              <td>{r.company}</td>
              <td>{r.title}</td>
              <td>{r.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </figure>
  );
};

const Experience = () => (
  <Section id="experience" title="Experience" className="experience">
    <p className="lead">{about}</p>
    <Timeline />
    <div className="roles">
      {experience.map((r) => (
        <article key={r.id} id={r.id} className="role">
          <p className="role__period">{r.period}</p>
          <div>
            <h3 className="role__title">{r.title}</h3>
            <p className="role__co">
              {r.company} · {r.location}
            </p>
            <ul className="role__points">
              {r.points.map((pt) => (
                <li key={pt}>{withFigures(pt)}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Experience;
