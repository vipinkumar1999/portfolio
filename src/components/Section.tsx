import type { ReactNode } from "react";
import { sections } from "../content";
import { useReveal } from "../hooks/useReveal";

type Props = {
  id: string;
  title: string;
  /** Visually hide the h2 (when a larger display heading already serves the section). */
  hideTitle?: boolean;
  reveal?: boolean;
  className?: string;
  children: ReactNode;
};

const sectionNumber = (id: string) => String(sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");

const Section = ({ id, title, hideTitle, reveal = true, className = "", children }: Props) => {
  const ref = useReveal<HTMLDivElement>();
  const labelId = `${id}-title`;
  const label = sections.find((s) => s.id === id)?.label ?? title;
  return (
    <section id={id} aria-labelledby={labelId} className={`section ${className}`}>
      <div className="container section__inner">
        <div className="section__label" aria-hidden="true">
          §{sectionNumber(id)} {label}
        </div>
        <div ref={ref} className={`section__body${reveal ? " reveal" : ""}`}>
          <h2 id={labelId} className={hideTitle ? "sr-only" : "section__title"}>
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
