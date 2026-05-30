import { lazy, Suspense, useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Certifications from "./Certifications";
import Education from "./Education";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import setSplitText from "./utils/splitText";
import { setAllTimeline } from "./utils/GsapScroll";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => setSplitText();
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    // Career and education scroll animations — previously triggered after
    // character load; now called directly since there is no 3D character.
    setAllTimeline();
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Education />
            <Certifications />
            <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
