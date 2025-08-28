import { useEffect, useRef, useState } from 'react'

const LINKS = [
  { href: '#skills',      label: 'Skills' },
  { href: '#projects',    label: 'Projetos' },
  { href: '#experience',  label: 'Experiência' },
  { href: '#education',   label: 'Formação' },
]

function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  // tema inicial: localStorage -> prefers-color-scheme -> dark
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    } else {
      const mql = window.matchMedia('(prefers-color-scheme: light)')
      setTheme(mql.matches ? 'light' : 'dark')
      // se o usuário não salvou preferência, siga mudanças do SO
      const handler = (e) => {
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'light' : 'dark')
        }
      }
      mql.addEventListener?.('change', handler)
      return () => mql.removeEventListener?.('change', handler)
    }
  }, [])

  // aplica no <html>: light = data-theme="light"; dark = remove
  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'light') root.setAttribute('data-theme', 'light')
    else root.removeAttribute('data-theme')
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  useEffect(() => { setMounted(true) }, [])

  const isLight = theme === 'light'
  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className={`btn-secondary hover:btn-secondary-hover h-9 px-3 ${className}`}
      aria-label={isLight ? 'Alternar para o tema escuro' : 'Alternar para o tema claro'}
      aria-pressed={isLight}
      title={isLight ? 'Tema escuro' : 'Tema claro'}
      style={!mounted ? { visibility: 'hidden' } : undefined}
    >
      <span className="inline-block w-4 h-4 mr-2 align-[-2px]">
        {isLight ? (
          // lua
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        ) : (
          // sol
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-16a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm12.95 6.36a1 1 0 010 1.41l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 011.41 0zM7.17 6.22a1 1 0 010 1.41l-.71.71A1 1 0 114.99 7.0l.71-.71a1 1 0 011.41 0zm10.07-.71a1 1 0 010 1.41l-.71.71a1 1 0 01-1.41-1.41l.71-.71a1 1 0 011.41 0zM7.17 16.81l-.71.71a1 1 0 11-1.41-1.41l.71-.71a1 1 0 111.41 1.41z"/>
          </svg>
        )}
      </span>
      {isLight ? 'Escuro' : 'Claro'}
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const panelRef = useRef(null)
  const firstLinkRef = useRef(null)

  // trava scroll quando menu mobile abre
  useEffect(() => {
    const prevBody = document.body.style.overflow
    const prevRoot = document.documentElement.style.overflow
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevBody || ''
      document.documentElement.style.overflow = prevRoot || ''
    }
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevRoot
    }
  }, [open])

  // focus ao abrir/fechar + ESC + trap de foco
  useEffect(() => {
    if (!open) return
    // foca primeiro link
    firstLinkRef.current?.focus()

    function onKeydown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const root = panelRef.current
      if (!root) return
      const focusables = root.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [open])

  // devolve foco ao botão ao fechar
  useEffect(() => {
    if (!open) triggerRef.current?.focus()
  }, [open])

  const hamburgerLabel = open ? 'Fechar menu' : 'Abrir menu'

  return (
    <header className="navbar">
      {/* Skip link (a11y) */}
      <a href="#main" className="sr-only focus:not-sr-only focus:btn-secondary absolute left-2 top-2 z-[60] rounded px-3 py-2">
        Pular para conteúdo
      </a>

      <nav className="container h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="brand-link">
          anderson.dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm" role="menu" aria-label="Seções do site">
            {LINKS.map((l) => (
              <li key={l.href} role="none">
                <a href={l.href} role="menuitem" className="hover:text-luxe transition focus-visible:outline-none">
                  {l.label}
                </a>
              </li>
            ))}
            <li role="none">
              <a href="#contact" role="menuitem" className="btn-primary btn-primary-glow hover:btn-primary-hover h-9">
                Contato
              </a>
            </li>
            <li role="none">
              <a href="#projects" role="menuitem" className="btn-secondary hover:btn-secondary-hover h-9">
                Ver projetos
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            className="btn-secondary hover:btn-secondary-hover h-9 px-3"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={hamburgerLabel}
            title={hamburgerLabel}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        {/* backdrop */}
        <button
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
        />
        {/* sheet */}
        <div
          ref={panelRef}
          className="fixed right-0 top-0 h-full w-72 featured-panel featured-panel-glow p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nav-title"
        >
          <div className="flex items-center justify-between mb-4">
            <span id="nav-title" className="font-semibold text-white">Navegação</span>
            <button
              className="btn-secondary hover:btn-secondary-hover h-8 px-2"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-3 text-sm" role="menu" aria-label="Seções do site (mobile)">
            {LINKS.map((l, i) => (
              <li key={l.href} role="none">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="btn-secondary hover:btn-secondary-hover h-10 w-full text-left"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="btn-secondary hover:btn-secondary-hover h-10 w-full text-center"
            >
              Ver projetos
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary hover:btn-primary-hover h-10 w-full text-center"
            >
              Contato
            </a>
          </div>

          <p className="mt-6 text-xs text-muted">
            Disponível para freelance — resposta rápida.
          </p>
        </div>
      </div>
    </header>
  )
}
