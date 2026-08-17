import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container narrow text-center">
        <Reveal as="h2" className="section-heading">
          Who Am I?
        </Reveal>
        <Reveal as="hr" className="divider" delay={0.06} />
        <Reveal className="about-text" delay={0.12}>
          <p>
            Backend developer designing and building scalable APIs and production services
            in C# and ASP.NET Core, with an emphasis on clean architecture
            and systems that stay reliable under real load.
          </p>
          <p>
            I hold a B.Sc. in Computer Engineering from Eskisehir Technical University.
            Professionally I have delivered multi-tenant SaaS backends, real-time features with SignalR,
            and data layers on SQL Server and Cosmos DB.
          </p>
          <p>
            I am particularly interested in <strong>integrating AI into .NET applications</strong> —
            local models, Microsoft.Extensions.AI, streaming interfaces, and maintainable provider abstractions.
            DevOps and cybersecurity remain ongoing interests alongside day-to-day engineering.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
