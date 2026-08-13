(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("affix", window.scrollY > 80);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu && nav) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      nav.classList.toggle("open-menu", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        nav.classList.remove("open-menu");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });
})();
