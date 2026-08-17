import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Hero() {
  const mastheadRef = useRef(null);
  const reduce = usePrefersReducedMotion();
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    if (reduce) return;
    const el = mastheadRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        el.style.backgroundPosition = `center ${y * 0.35}px`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <header className="masthead" ref={mastheadRef}>
      <div className="masthead-overlay"></div>
      <Reveal className="masthead-content">
        <h1>
          Maab Zakour
          <br />
          Software Engineer
        </h1>
        <hr className="divider" />
        <p className="tagline">.Net &amp; AI</p>
        <a
          className="btn btn-primary"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
        >
          Explore Experience
        </a>
      </Reveal>
      <div className="scroll-hint" aria-hidden="true">
        <span></span>
      </div>
    </header>
  );
}
