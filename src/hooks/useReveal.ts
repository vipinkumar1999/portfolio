import { useEffect, useRef } from "react";

/** Adds `is-in` to the element the first time it scrolls into view. Elements are only hidden once <html> has the `js` class. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.02 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
