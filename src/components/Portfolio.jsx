import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    href: "https://aliif.dev/",
    external: true,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    category: ".NET · Astro · OIDC",
    name: "Aliif Platform",
  },
  {
    href: "#portfolio",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    category: ".NET · Angular · AI",
    name: "AI-Library",
  },
  {
    href: "#portfolio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: ".NET · Angular",
    name: "Tech Financial",
  },
  {
    href: "#portfolio",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    category: ".NET · Angular · Tailwind · CI/CD",
    name: "DevPuls",
  },
  {
    href: "#portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "ASP.NET · SignalR",
    name: "Real-time SaaS APIs",
  },
  {
    href: "#portfolio",
    image: `${import.meta.env.BASE_URL}images/csharp-code.svg`,
    category: "SQL Server · Cosmos DB",
    name: "Data Driven Services",
  },
];

function canHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    if (!openProject) return;

    const close = (event) => {
      if (!event.target.closest(".portfolio-box")) setOpenProject(null);
    };

    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openProject]);

  const handleProjectClick = (event, project) => {
    if (canHover()) return;

    if (openProject !== project.name) {
      event.preventDefault();
      setOpenProject(project.name);
      return;
    }

    if (!project.external) {
      event.preventDefault();
      setOpenProject(null);
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container text-center portfolio-heading">
        <Reveal as="h2" className="section-heading">
          Projects
        </Reveal>
        <Reveal as="hr" className="divider" delay={0.06} />
      </div>
      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <Reveal
            as="a"
            key={project.name}
            className={`portfolio-box${openProject === project.name ? " is-open" : ""}`}
            href={project.href}
            target={project.external ? "_blank" : undefined}
            rel={project.external ? "noopener" : undefined}
            delay={(i % 6) * 0.06}
            onClick={(event) => handleProjectClick(event, project)}
          >
            <div
              className="portfolio-bg"
              style={{ backgroundImage: `url('${project.image}')` }}
            ></div>
            <div className="portfolio-caption">
              <div className="portfolio-caption-content">
                <div className="project-category">{project.category}</div>
                <div className="project-name">{project.name}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
