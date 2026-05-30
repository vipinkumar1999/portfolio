import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const navLinks = [
  { text: "About",         href: "#about" },
  { text: "Experience",    href: "#experience" },
  { text: "Education",     href: "#education" },
  { text: "Certification", href: "#certifications" },
  { text: "Skills",        href: "#skills" },
  { text: "Contact",       href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    window.addEventListener("resize", () => ScrollSmoother.refresh(true));

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (window.innerWidth > 1024) {
        smoother.scrollTo(href, true, "top top");
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }, 420);
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">VKK</a>
        <span className="navbar-connect">Turning Data into Business Decisions</span>

        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-cursor="disable"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <div className={`nav-menu${menuOpen ? " nav-menu--open" : ""}`} aria-hidden={!menuOpen}>
        {/* backdrop — click to close */}
        <div className="nav-menu__backdrop" onClick={() => setMenuOpen(false)} />

        <nav className="nav-menu__panel">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-menu__item"
              style={{ animationDelay: menuOpen ? `${i * 0.07 + 0.1}s` : "0s" }}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              data-cursor="disable"
            >
              <span className="nav-menu__num">0{i + 1}</span>
              {link.text}
            </a>
          ))}
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
