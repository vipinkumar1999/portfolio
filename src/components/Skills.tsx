import { skills } from "../content";
import Section from "./Section";
import "../styles/skills.css";

const Skills = () => (
  <Section id="skills" title="Skills" className="skills">
    <dl className="skilllist">
      {skills.map((s) => (
        <div key={s.category} className="skilllist__row">
          <dt>{s.category}</dt>
          <dd>
            <ul>
              {s.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
