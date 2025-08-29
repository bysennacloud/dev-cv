import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // {ok:boolean,msg:string}
  const [errors, setErrors] = useState({}); // {name,email,message}

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // honeypot: bots costumam preencher campos escondidos
    if (data.company) return;

    // validação simples
    const nextErrors = {};
    if (!data.name?.trim()) nextErrors.name = "Informe seu nome.";
    if (!EMAIL_RE.test(data.email || "")) nextErrors.email = "E-mail inválido.";
    if (!data.message?.trim()) nextErrors.message = "Digite sua mensagem.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ ok: false, msg: "Corrija os campos destacados." });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        ok: false,
        msg: "Configuração do envio ausente. Verifique as variáveis do EmailJS.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        PUBLIC_KEY
      );
      form.reset();
      setStatus({ ok: true, msg: "Mensagem enviada com sucesso! 🚀" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        msg: "Não foi possível enviar agora. Tente novamente em instantes.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section ">
      <div className="new-effects-green fxg-bg-glow">
        <h2 className="heading-2 mb-6">Contato</h2>
        <form
          onSubmit={onSubmit}
          className="grid gap-4 max-w-xl reveal"
          noValidate
        >
          {/* honeypot */}
          <input
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <label className="form-field">
            <span className="form-label">Nome</span>
            <input
              name="name"
              autoComplete="name"
              className={`input-dark focus:input-dark-focus ${
                errors.name ? "input-error" : ""
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name && (
              <span id="err-name" className="form-error">
                {errors.name}
              </span>
            )}
          </label>

          <label className="form-field">
            <span className="form-label">E-mail</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              className={`input-dark focus:input-dark-focus ${
                errors.email ? "input-error" : ""
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email && (
              <span id="err-email" className="form-error">
                {errors.email}
              </span>
            )}
          </label>

          <label className="form-field">
            <span className="form-label">Mensagem</span>
            <textarea
              name="message"
              rows={5}
              className={`input-dark focus:input-dark-focus ${
                errors.message ? "input-error" : ""
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && (
              <span id="err-message" className="form-error">
                {errors.message}
              </span>
            )}
          </label>

          <div className="flex gap-3 items-center">
            <button
              type="submit"
              className={`btn-primary hover:btn-primary-hover ${
                loading ? "is-loading" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="spinner"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      opacity=".25"
                    />
                    <path
                      d="M21 12a9 9 0 0 0-9-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Enviando…
                </>
              ) : (
                "Enviar"
              )}
            </button>

            <a
              href="mailto:anderson@exemplo.com?subject=Contato%20via%20portf%C3%B3lio"
              className="btn-secondary hover:btn-secondary-hover"
            >
              E-mail direto
            </a>
          </div>

          {/* status area */}
          <p
            className={`mt-2 text-sm ${
              status ? (status.ok ? "text-success" : "text-danger") : "hidden"
            }`}
            role="status"
            aria-live="polite"
          >
            {status?.msg}
          </p>
        </form>
      </div>
    </section>
  );
}
