import Reveal from "./Reveal";

const skills = [
  {
    icon: "fa-code",
    title: "Backend",
    text: "C#, .NET / ASP.NET Core, REST APIs, SignalR, MediatR, OpenIddict",
  },
  {
    icon: "fa-database",
    title: "Data",
    text: "SQL Server, Azure Cosmos DB, EF Core, PostgreSQL, SQLite",
  },
  {
    icon: "fa-sitemap",
    title: "Architecture",
    text: "Clean Architecture, CQRS, API design, multi-tenant SaaS, performance",
  },
  {
    icon: "fa-desktop",
    title: "Frontend",
    text: "Angular, Tailwind CSS, Astro, NgRx, responsive UI",
  },
  {
    icon: "fa-lightbulb-o",
    title: "Current Focus — AI for .NET",
    text: "Microsoft.Extensions.AI, local LLMs, streaming chat, provider-agnostic integration within clean architecture",
    featured: true,
  },
  {
    icon: "fa-globe",
    title: "Languages",
    text: "English, Turkish, Arabic, French",
    languages: true,
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="text-center">
          <Reveal as="h2" className="section-heading dark">
            Technical Skills
          </Reveal>
          <Reveal as="hr" className="divider" delay={0.06} />
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.title}
              className={`skill-box${skill.featured ? " featured" : ""}${skill.languages ? " languages" : ""}`}
              delay={(i % 6) * 0.06}
            >
              <i className={`fa ${skill.icon} fa-3x`}></i>
              <h3>{skill.title}</h3>
              <p className={skill.title === "Frontend" || skill.title === "Backend" ? "dark-text" : undefined}>{skill.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
