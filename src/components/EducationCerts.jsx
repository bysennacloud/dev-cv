const education = [
  {
    title: "MBA Lato Sensu — Desenvolvimento de Softwares",
    org: "UNIFACS (EAD)",
    period: "2024",
  },
  {
    title: "Redes de Computadores — Graduação",
    org: "UNIRUY",
    period: "2018–2020",
  },
  { title: "Técnico em Eletrotécnica", org: "EEEMBA", period: "2013–2014" },
];

const certs = [
  "Learning Center Philips Tasy — Atendimento, Assistencial, Hotelaria, Financeiro/Faturamento, Cadastros (80h+)",
  "B7Web — FullStack",
  "FIAP — Python (40h); DevOps & Agile",
  "Juniper JNCIA-Junos — Fundamentals",
];

export default function EducationCerts() {
  return (
    <section id="education" className="section reveal">
      <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
        {/* Formação */}
        <div className="edu-card edu-featured edu-glow group">
          <h3 className="card-title mb-4">Formação</h3>

          <ul className="edu-list">
            {education.map((e) => (
              <li
                key={e.title}
                className="edu-item p-3 sm:p-4 rounded-lg sm:rounded-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  {/* Esquerda: título + org */}
                  <div className="min-w-0 md:max-w-[75%]">
                    <p className="font-medium text-muted whitespace-normal md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
                      {e.title}
                    </p>
                    <p className="text-muted text-xs mt-0.5">{e.org}</p>
                  </div>

                  {/* Direita: período (pílula) */}
                  <span
                    className="edu-period shrink-0 whitespace-nowrap mt-1 sm:mt-0 text-[11px] sm:text-xs px-2 py-0.5 rounded-full"
                    aria-label={`Período: ${e.period}`}
                  >
                    {e.period}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Certificações */}
        <div className="edu-card edu-featured edu-glow group">
          <h3 className="card-title mb-4">Certificações</h3>
          <ul className="cert-list">
            {certs.map((c) => (
              <li key={c} className="cert-item">
                <span className="cert-dot" aria-hidden="true" />
                <span className="text-muted block">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
