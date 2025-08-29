export default function Footer() {
  return (
    <footer className="section">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted">© {new Date().getFullYear()} Anderson Sena</p>
        <div className="flex gap-3 text-sm">
          <a
            className="tag"
            href="https://github.com/SEUUSER"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="tag"
            href="https://br.linkedin.com/in/andersonsantossena"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="tag" href="mailto:seuemail@exemplo.com">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
