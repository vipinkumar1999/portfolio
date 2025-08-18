import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li key={i} className="software-skill-inline" name={skill.skillName}>
            <img
              src={skill.src}
              alt={skill.skillName}
              className="skill-logo"
              onError={e => {
                e.target.onerror = null;
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png";
              }}
            />
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
