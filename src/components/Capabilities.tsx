import { capabilities } from "../content";
import Section from "./Section";
import "../styles/capabilities.css";

const Capabilities = () => (
  <Section id="capabilities" title="What I do" className="capabilities">
    <div className="caps">
      {capabilities.map((c) => (
        <article key={c.title} className="cap">
          <p className="kicker">{c.kicker}</p>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default Capabilities;
