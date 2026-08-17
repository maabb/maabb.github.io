import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useSmoothScroll() {
  const reduce = usePrefersReducedMotion();

  return (href) => {
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
}
