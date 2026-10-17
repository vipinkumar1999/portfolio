import { useCallback, useEffect, useRef, useState } from "react";
import { profile, sections } from "../content";
import { useActiveSection } from "../hooks/useActiveSection";
import "../styles/masthead.css";

const FOCUSABLE = "a[href], button:not([disabled])";

const Masthead = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(sections.map((s) => s.id));

  const close = useCallback(() => {
    setOpen(false);
    btnRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheetRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [btnRef.current, ...Array.from(sheetRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])].filter(
        (n): n is HTMLElement => !!n
      );
      const first = items[0];
      const last = items[items.length - 1];
      const cur = document.activeElement;
      if (e.shiftKey && cur === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && cur === last) {
        e.preventDefault();
        first.focus();
      } else if (!items.includes(cur as HTMLElement)) {
        e.preventDefault();
        first.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  return (
    <header className="masthead">
      <div className="container masthead__bar">
        <a className="masthead__name" href="#summary" onClick={() => open && close()}>
          <span className="masthead__full">{profile.name}</span>
          <span className="masthead__short" aria-hidden="true">
            {profile.initials}
          </span>
        </a>

        <nav className="masthead__nav" aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--outline masthead__resume" href={profile.resume} target="_blank" rel="noopener">
          Résumé
        </a>

        <button
          ref={btnRef}
          type="button"
          className="masthead__menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => (open ? close() : setOpen(true))}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" ref={sheetRef} className="sheet" role="dialog" aria-modal="true" aria-label="Menu">
          <ol className="sheet__links">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={close} aria-current={active === s.id ? "true" : undefined}>
                  <span className="sheet__num">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="sheet__actions">
            <a className="btn btn--outline" href={profile.resume} target="_blank" rel="noopener">
              Résumé (PDF)
            </a>
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Masthead;
