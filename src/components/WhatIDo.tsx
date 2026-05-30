import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  // Fallback: if GSAP never reveals the boxes (e.g. character failed to load),
  // show them via IntersectionObserver when the section scrolls into view.
  useEffect(() => {
    const section = document.querySelector(".whatIDO") as HTMLElement | null;
    const boxIn = document.querySelector(".what-box-in") as HTMLElement | null;
    if (!section || !boxIn) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && getComputedStyle(boxIn).display === "none") {
          boxIn.style.display = "flex";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {/* Top + bottom horizontal dashed borders around the card row */}
          <div className="what-border2">
            <svg width="100%" height="100%">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* Card 1 — right vertical separator */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg width="100%" height="100%">
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ENGINEERING</h3>
              <h4>Cloud & Pipeline</h4>
              <p>
                Designing and building scalable data pipelines, lakehouses, and cloud infrastructure that turn raw data into reliable, analytics-ready assets across Azure, AWS, and Databricks.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 2 — right vertical separator */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg width="100%" height="100%">
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ANALYTICS & BI</h3>
              <h4>Insights & Dashboards</h4>
              <p>
                Translating complex data into clear, executive-grade dashboards and reports that help business leaders make faster, more confident decisions using Power BI and Tableau.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 3 — no separator (last card) */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1"></div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI & MACHINE LEARNING</h3>
              <h4>Models & Agents</h4>
              <p>
                Building AI pipelines, Genie agents, and predictive models that automate decisions and surface patterns — from AWS Bedrock integrations to ML-powered manufacturing analytics.
              </p>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
