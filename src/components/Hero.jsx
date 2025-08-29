export default function Hero() {
  return (
    <section id="home" className="">
      <div className="container pb-2">
        <div className="new-effects-green fxg-bg-glow group grid md:grid-cols-2 py-6 gap-10 items-center">
          {/* Coluna esquerda */}
          <div>
            <h1 className="heading-1">Anderson Sena</h1>
            <p className="text-5xl sm:text-6xl font-extrabold leading-tight text-luxe mt-1 under-glow">
              Especialista de TI
            </p>

            <p className="text-muted mt-5 max-w-xl">
              Analista de Sistemas com foco em <b>ERP Tasy</b> (parametrização,
              integrações), background sólido em <b>infra</b> (Windows/Linux,
              VMware, redes) e experiência em <b>desenvolvimento web</b> (React,
              Node).
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="btn-primary btn-primary-glow hover:btn-primary-hover"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="btn-secondary hover:btn-secondary-hover"
              >
                Fale comigo
              </a>
            </div>

            <div className="hero-chiprow">
              <span className="hero-chip">ERP Tasy</span>
              <span className="hero-chip">Integrações</span>
              <span className="hero-chip">Cloud/VMware</span>
              <span className="hero-chip">React/Node</span>
            </div>

            {/* mini métricas */}
            <div className="stat-row text-muted">
              <div className="stat">
                <span className="stat-num text-muted">10+</span>
                <span>projetos entregues</span>
              </div>
              <div className="stat text-muted">
                <span className="stat-num text-muted">6</span>
                <span>anos com Tasy & Infra</span>
              </div>
              <div className="stat text-muted">
                <span className="stat-num text-muted">BA</span>
                <span>baseado na Bahia/BR</span>
              </div>
            </div>
          </div>

          <div className="hero-plate relative p-6 sm:p-8 min-h-[500px]">
            <img
              src="./andersonsena.jpg"
              alt="Anderson Sena"
              className="hero-media" 
            />
            <div className="hero-media-overlay"></div>

            {/* Badge fixo no canto */}
            <span className="avail-pill avail-badge hero-badge ">
              <span className="avail-dot-wrap">
                <span className="avail-dot" aria-hidden="true" />
              </span>
              <span>Disponível para freelance</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
