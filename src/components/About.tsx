import "./styles/About.css";

const stats = [
  { number: "4+", label: "Years in Data" },
  { number: "3", label: "Industries" },
  { number: "2", label: "Cloud Certifications" },
  { number: "4", label: "Companies" },
];

const WorkingFigure = () => (
  <div className="about-dataviz" aria-hidden="true">
    <svg viewBox="0 0 380 460" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c2a4ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c2a4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ambientGlow" cx="50%" cy="75%" r="55%">
          <stop offset="0%" stopColor="#7040cc" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7040cc" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="screenFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ambient floor glow */}
      <ellipse cx="190" cy="380" rx="210" ry="80" fill="url(#ambientGlow)" />

      {/* ── CHAIR BACK ── */}
      <rect x="78" y="207" width="138" height="14" rx="7" fill="#1a0930" stroke="#c2a4ff" strokeWidth="0.6" strokeOpacity="0.35" />
      <rect x="83" y="218" width="11" height="118" rx="5" fill="#1a0930" stroke="#c2a4ff" strokeWidth="0.5" strokeOpacity="0.25" />
      <rect x="200" y="218" width="11" height="118" rx="5" fill="#1a0930" stroke="#c2a4ff" strokeWidth="0.5" strokeOpacity="0.25" />

      {/* ── LEGS ── */}
      <path d="M126 316 Q122 358 118 392" stroke="#241040" strokeWidth="25" strokeLinecap="round" />
      <path d="M168 316 Q173 358 178 392" stroke="#241040" strokeWidth="25" strokeLinecap="round" />
      <ellipse cx="115" cy="394" rx="17" ry="8" fill="#150825" />
      <ellipse cx="180" cy="394" rx="17" ry="8" fill="#150825" />

      {/* ── CHAIR SEAT ── */}
      <rect x="76" y="304" width="142" height="16" rx="8" fill="#1a0930" stroke="#c2a4ff" strokeWidth="0.8" strokeOpacity="0.45" />

      {/* ── TORSO ── */}
      <path d="M93,248 Q88,241 83,252 L78,305 L216,305 L211,252 Q206,241 201,248 Z" fill="#2d1750" />
      {/* shirt collar V */}
      <path d="M147,248 L136,272 L147,278 L158,272 L147,248" fill="#3d2060" opacity="0.85" />
      {/* subtle shirt line */}
      <line x1="105" y1="270" x2="128" y2="270" stroke="#c2a4ff" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* ── LEFT ARM ── */}
      <path d="M91,272 Q68,305 70,348" stroke="#2d1750" strokeWidth="23" strokeLinecap="round" />
      {/* ── RIGHT ARM ── */}
      <path d="M203,272 Q222,305 218,348" stroke="#2d1750" strokeWidth="23" strokeLinecap="round" />

      {/* ── MONITOR FRAME ── */}
      <rect x="196" y="188" width="162" height="124" rx="9" fill="#120828" stroke="#c2a4ff" strokeWidth="1.6" strokeOpacity="0.8" filter="url(#glow)" />
      {/* Screen area */}
      <rect x="205" y="197" width="144" height="106" rx="4" fill="#07021a" />
      {/* Screen inner glow */}
      <rect x="205" y="197" width="144" height="106" rx="4" fill="url(#screenGlow)" className="screen-glow" />

      {/* ── SCREEN CONTENT ── */}
      {/* Code lines — animated */}
      <line x1="217" y1="215" x2="292" y2="215" stroke="#c2a4ff" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.95" className="code-line" style={{ animationDelay: "0s" }} />
      <line x1="217" y1="226" x2="268" y2="226" stroke="#7b5ff5" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" className="code-line" style={{ animationDelay: "0.3s" }} />
      <line x1="217" y1="237" x2="305" y2="237" stroke="#c2a4ff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" className="code-line" style={{ animationDelay: "0.6s" }} />
      <line x1="224" y1="248" x2="280" y2="248" stroke="#9b70ff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.65" className="code-line" style={{ animationDelay: "0.9s" }} />
      <line x1="224" y1="259" x2="298" y2="259" stroke="#c2a4ff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" className="code-line" style={{ animationDelay: "1.2s" }} />
      {/* Data bars — bottom right of screen */}
      <rect x="287" y="270" width="9" height="22" rx="2" fill="#c2a4ff" opacity="0.65" />
      <rect x="300" y="260" width="9" height="32" rx="2" fill="#7b5ff5" opacity="0.80" />
      <rect x="313" y="265" width="9" height="27" rx="2" fill="#c2a4ff" opacity="0.60" />
      <rect x="326" y="253" width="9" height="39" rx="2" fill="#9b70ff" opacity="0.90" />
      <line x1="285" y1="292" x2="337" y2="292" stroke="#c2a4ff" strokeWidth="0.8" strokeOpacity="0.35" />
      {/* Blinking cursor */}
      <rect x="217" y="270" width="2" height="14" rx="1" fill="#c2a4ff" className="cursor-blink" />

      {/* Monitor stand & base */}
      <rect x="269" y="310" width="16" height="30" rx="3" fill="#120828" stroke="#c2a4ff" strokeWidth="0.8" strokeOpacity="0.5" />
      <rect x="244" y="336" width="66" height="8" rx="3" fill="#120828" stroke="#c2a4ff" strokeWidth="1" strokeOpacity="0.55" />

      {/* ── DESK SURFACE ── */}
      <rect x="8" y="340" width="364" height="13" rx="4" fill="#150826" stroke="#c2a4ff" strokeWidth="0.9" strokeOpacity="0.5" />
      {/* desk top edge highlight */}
      <rect x="8" y="340" width="364" height="3" rx="2" fill="#c2a4ff" opacity="0.06" />
      {/* Desk legs */}
      <rect x="16" y="351" width="11" height="82" rx="3" fill="#120722" />
      <rect x="353" y="351" width="11" height="82" rx="3" fill="#120722" />

      {/* ── KEYBOARD ── */}
      <rect x="90" y="330" width="155" height="14" rx="4" fill="#120828" stroke="#c2a4ff" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="100" y1="335" x2="237" y2="335" stroke="#c2a4ff" strokeWidth="0.4" strokeOpacity="0.25" />
      <line x1="103" y1="340" x2="235" y2="340" stroke="#c2a4ff" strokeWidth="0.4" strokeOpacity="0.25" />

      {/* ── HANDS ── */}
      <ellipse cx="113" cy="339" rx="15" ry="7" fill="#2d1750" />
      <ellipse cx="220" cy="339" rx="15" ry="7" fill="#2d1750" />

      {/* ── NECK ── */}
      <rect x="141" y="228" width="14" height="24" rx="6" fill="#2d1750" />

      {/* ── HEAD ── */}
      <circle cx="148" cy="198" r="33" fill="#2d1750" />
      {/* Hair */}
      <path d="M116,193 Q114,165 148,159 Q182,165 180,193 Q177,172 148,167 Q119,172 116,193Z" fill="#120828" />
      {/* Left ear */}
      <ellipse cx="115" cy="199" rx="5" ry="8" fill="#2d1750" />
      {/* Eyes (looking right toward monitor) */}
      <circle cx="140" cy="196" r="3.8" fill="#08031a" />
      <circle cx="159" cy="195" r="3.8" fill="#08031a" />
      <circle cx="141" cy="195" r="1.2" fill="#c2a4ff" opacity="0.85" />
      <circle cx="160" cy="194" r="1.2" fill="#c2a4ff" opacity="0.85" />
      {/* Mouth */}
      <path d="M140,212 Q148,217 157,212" stroke="#1a0930" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.55" />

      {/* ── SCREEN LIGHT ON FACE (subtle) ── */}
      <circle cx="148" cy="198" r="33" fill="#c2a4ff" opacity="0.035" />

      {/* ── FLOATING AMBIENT PARTICLES ── */}
      <circle cx="45"  cy="175" r="3"   fill="#c2a4ff" opacity="0.5" className="viz-node" style={{ animationDelay: "0s" }} />
      <circle cx="358" cy="215" r="2.5" fill="#c2a4ff" opacity="0.4" className="viz-node" style={{ animationDelay: "1.3s" }} />
      <circle cx="50"  cy="285" r="2"   fill="#c2a4ff" opacity="0.35" className="viz-node" style={{ animationDelay: "0.7s" }} />
      <circle cx="360" cy="305" r="3"   fill="#7b5ff5" opacity="0.5" className="viz-node" style={{ animationDelay: "1.9s" }} />
      <circle cx="28"  cy="240" r="1.5" fill="#c2a4ff" opacity="0.4" className="viz-node" style={{ animationDelay: "0.4s" }} />
      <circle cx="368" cy="265" r="2"   fill="#9b70ff" opacity="0.45" className="viz-node" style={{ animationDelay: "2.4s" }} />
    </svg>
  </div>
);

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-highlights">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <h2>{s.number}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
      <WorkingFigure />
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Technical BI Engineer at Waters Corporation, where I build Column360 — an AI-powered analytics platform for chromatography science on Databricks, Streamlit, and AWS Bedrock. I hold an MS in Business Analytics from UMass Amherst (2025) and certifications from both Databricks and Azure. Before Waters, I spent time in BI consulting at Thorogood and data engineering at EXL, working across manufacturing, healthcare, and retail. The work that interests me most lives at the edge between clean data infrastructure and the decisions it enables.
        </p>
      </div>
    </div>
  );
};

export default About;
