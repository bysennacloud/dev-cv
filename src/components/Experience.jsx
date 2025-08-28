const jobs = [
  {
    role: "Analista de Sistemas — Especialista de TI",
    org: "Liga Álvaro Bahia",
    period: "Dez/2023 — Atual",
    bullets: [
      "Implementação e suporte aos módulos ERP Tasy.",
      "Integrações, auditorias e conformidade com convênios.",
      "Mediação entre negócio e TI.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Virtumed (Telemedicina)",
    period: "Jan/2022 — Out/2022",
    bullets: [
      "Páginas em React e templates de e-mails automatizados.",
      "Manutenção de sistemas modernos e legados.",
    ],
  },
  {
    role: "Assistente de TI",
    org: "Holiste Psiquiatria",
    period: "Mai/2019 — Dez/2021",
    bullets: [
      "Administração de VMware, Windows/Linux; redes e firewalls.",
      "Suporte Tasy (Nutrição, Manutenção, Suprimentos, Recepção).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="featured-panel featured-panel-glow">
          <h2 className="heading-2 mb-6 under-glow">Experiência</h2>
          

          <div className="grid gap-5">
            {jobs.map((j) => (
              <article
                key={j.role}
                className="card hover:card-hover transition edu-card edu-featured edu-glow group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="card-title">{j.role}</h3>
                    <p className="text-muted">{j.org}</p>
                  </div>
                  <span className="tag">{j.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-muted">
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
