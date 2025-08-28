const icons = {
  JavaScript:  (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" fill="#111827"/><path d="M10 8v7a3 3 0 0 0 5 2" stroke="currentColor" strokeWidth="1.5" /><path d="M7 10v5a2 2 0 0 0 2 2" stroke="currentColor" strokeWidth="1.5"/></svg>),
  TypeScript:  (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="#111827"/><path d="M8 12h4M10 12v6M16 12a3 3 0 1 1 0 6" stroke="currentColor" strokeWidth="1.5"/></svg>),
  ReactJS:     (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.2"/><ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)"/></svg>),
  "Node.js":   (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 10h6v4a3 3 0 0 1-6 0v-4Z" stroke="currentColor" strokeWidth="1.5"/></svg>),
  Tailwind:    (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M4 13c2-5 6-5 8-3s4 2 8-1c-2 5-6 5-8 3s-4-2-8 1Z" fill="currentColor" opacity=".9"/></svg>),
  Vite:        (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M12 3l8 5-8 13L4 8l8-5Z" stroke="currentColor" strokeWidth="1.2"/><path d="M12 7v4" stroke="currentColor" strokeWidth="1.2"/></svg>),
  Oracle:      (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="5" y="7" width="14" height="10" rx="5" stroke="currentColor" strokeWidth="1.5"/></svg>),
  "PL/SQL":    (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M5 7h9M5 12h6M5 17h4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>),
  MySQL:       (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M4 17c1-5 8-8 12-6 3 1 4 4 4 6" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="10" r="1" fill="currentColor"/></svg>),
  Docker:      (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="6" y="11" width="4" height="3" stroke="currentColor"/><rect x="11" y="11" width="4" height="3" stroke="currentColor"/><rect x="11" y="7" width="4" height="3" stroke="currentColor"/><path d="M4 15c1 3 4 4 8 4s7-1 8-4" stroke="currentColor"/></svg>),
  Linux:       (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3" stroke="currentColor"/><path d="M7 20c0-3 2-5 5-5s5 2 5 5" stroke="currentColor"/></svg>),
  Git:         (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M7 7l10 10M9 9v4m6-2v4" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/><circle cx="15" cy="11" r="1.5" fill="currentColor"/></svg>),
  VMware:      (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><rect x="5" y="6" width="6" height="6" rx="1.2" stroke="currentColor"/><rect x="13" y="12" width="6" height="6" rx="1.2" stroke="currentColor"/></svg>),
  Infra:       (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M4 18h16M6 14h12M8 10h8M10 6h4" stroke="currentColor"/></svg>),
  "Integrações":(p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M8 8h8M4 12h16M8 16h8" stroke="currentColor" strokeWidth="1.5"/></svg>),
  "Clean Code": (p) => (<svg {...p} viewBox="0 0 24 24" fill="none"><path d="M7 9l3 3-3 3M17 9l-3 3 3 3" stroke="currentColor" strokeWidth="1.5"/></svg>)
};

const skills = [
  "JavaScript","TypeScript","ReactJS","Node.js",
  "Tailwind","Vite","Oracle","PL/SQL",
  "MySQL","Docker","Linux","Git",
  "VMware","Infra","Integrações","Clean Code"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="new-effects-green fxg-bg-glow">


       
        <h2 className="heading-2 under-glow">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {skills.map((s) => {
            const Icon = icons[s] ?? ((p) => <svg {...p}/>);
            return (
              <span key={s} className="skill-tag hover:skill-tag-hover">
                <Icon className="skill-icon" />
                {s}
              </span>
            );
          })}
        </div>
         </div>
      </div>
    </section>
  );
}
