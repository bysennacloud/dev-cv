import { useState } from 'react';

/** Fallback leve em SVG (gradiente dark + brilho azul) */
const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b0d10"/>
        <stop offset="100%" stop-color="#0c1014"/>
      </linearGradient>
      <radialGradient id="halo" cx="85%" cy="15%" r="35%">
        <stop offset="0%" stop-color="rgba(59,130,246,0.35)"/>
        <stop offset="100%" stop-color="rgba(59,130,246,0)"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" fill="url(#halo)"/>
  </svg>`);

/** <SoftImage> cai pro fallback se der erro ou se src vier vazio */
function SoftImage({ src, alt, className }) {
  const [s, setS] = useState(src || FALLBACK_IMG);
  return (
    <img
      src={s}
      alt={alt || ''}
      className={className}
      onError={() => setS(FALLBACK_IMG)}
      loading="lazy"
      decoding="async"
    />
  );
}

/** Endpoints estáveis por query (não expiram) */
const IMG = {
  erp: 'https://images.adsttc.com/media/images/60da/30a5/447a/9201/6532/dffa/newsletter/bicubik-6793.jpg?1624912053',
  telemed: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1400&auto=format&fit=crop',
  infra: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  integracao: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
  portal: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'

};

const featured = {
  title: 'ERP Tasy — Liga Álvaro Bahia',
  desc: 'Parametrização multi-módulos, integrações e auditorias em saúde.',
  img: IMG.erp, // ⬅ usa query estável
  href: '#'
};

const projects = [
  {
    title: 'Telemedicina — Virtumed',
    desc: 'Páginas em React e templates de e-mail automatizados.',
    tags: ['React','Emails','Plataforma'],
    img: IMG.telemed,
    href: '#'
  },
  {
    title: 'Infra — Holiste Psiquiatria',
    desc: 'VMware/Hyper-V, redes/segurança; migração para Oracle Cloud.',
    tags: ['Infra','VMware','Cloud'],
    img: IMG.infra,
    href: '#'
  },
  {
    title: 'ERP + Integrações',
    desc: 'Integrações entre módulos Tasy, ETL e observabilidade.',
    tags: ['ERP','ETL','Observability'],
    img: IMG.integracao,
    href: '#'
  },
  {
    title: 'Portal Operacional',
    desc: 'Dashboard, autenticação e relatórios para times internos.',
    tags: ['React','Node','Design System'],
    img: IMG.portal,
    href: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="edu-card edu-featured edu-glow group">

          {/* Cabeçalho */}
          <div className="section-head">
            <div>
              <span className="section-kicker">Portfólio</span>
              <h2 className="heading-2 under-glow">Projetos</h2>
              <p className="text-muted mt-2">
                
                Seleção de trabalhos com ERP Tasy, integrações, infraestrutura e desenvolvimento web (React/Node).
              </p>
            </div>
            <div className="flex gap-3 self-end">
              <a href="#contact" className="btn-primary btn-primary-glow hover:btn-primary-hover">
                Precisa de algo parecido?
              </a>
            </div>
          </div>

          {/* Destaque */}
          <div className="mb-10">
            <a href={featured.href} className="project-card card-shine hover:project-card-hover group block">
              <SoftImage src={featured.img} alt={featured.title} className="project-media group-hover:scale-[1.05]" />
              <div className="project-overlay-top"></div>
              <div className="project-meta project-meta-bottom">
                <h3 className="project-title">{featured.title}</h3>
                <p className="project-desc">{featured.desc}</p>

              </div>
              
            </a>
          </div>

          {/* Grid */}
          <div className="project-grid">
            {projects.map((p) => (
              <a key={p.title} href={p.href} className="project-card card-shine hover:project-card-hover group">
                <SoftImage src={p.img} alt={p.title} className="project-media group-hover:scale-[1.05] transition duration-700" />
                <div className="project-overlay"></div>
                <div className="project-meta">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-chiprow">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
