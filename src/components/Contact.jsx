import Reveal from "./Reveal";

const items = [
  {
    icon: "fa-envelope-o",
    href: "mailto:maabzakour@gmail.com",
    label: "maabzakour@gmail.com",
  },
  {
    icon: "fa-phone",
    href: "tel:+905366982746",
    label: "+90 536 698 27 46",
  },
  {
    icon: "fa-github",
    href: "https://github.com/maabb",
    label: "github.com/maabb",
    external: true,
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/maab-zakour",
    label: "LinkedIn",
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="text-center">
          <Reveal as="h2" className="section-heading dark">
            Get In Touch
          </Reveal>
          <Reveal as="hr" className="divider" delay={0.06} />
          <Reveal as="p" className="contact-lead" delay={0.12}>
            Bursa, Türkiye
          </Reveal>
        </div>
        <div className="contact-row">
          {items.map((item, i) => (
            <Reveal key={item.href} className="contact-item" delay={(i % 6) * 0.06}>
              <i className={`fa ${item.icon} fa-3x`}></i>
              <p>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener" : undefined}
                >
                  {item.label}
                </a>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
