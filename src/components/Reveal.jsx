import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children, delay = 0, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}s`;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className} ${visible ? "visible" : ""}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
