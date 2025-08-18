// Skills.js
import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      {/* Top Section */}
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <div className="skills-description-list">
              {skillsSection.skills.map((skill, i) => (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  ⚡ {skill}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* Bottom Section */}
      <div className="skills-center-section">
        <h2 className="skills-sub-heading">Industrial Skills</h2>
        <div className="software-skills-main-div">
          <SoftwareSkill />
        </div>
      </div>
    </div>
  );
}
