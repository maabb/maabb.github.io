import { useEffect, useState } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [affix, setAffix] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setAffix(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <nav className={`navbar${affix ? " affix" : ""}${open ? " open-menu" : ""}`} id="mainNav">
      <div className="nav-inner">
        <a className="brand" href="#page-top" onClick={go("#page-top")}>
          Maabb Zakour
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu <i className="fa fa-bars"></i>
        </button>
        <ul className={`nav-menu${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={go(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
