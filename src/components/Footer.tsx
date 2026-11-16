import imgDownload1 from '../assets/figma/440be.png'
import type { NavSectionId } from './EvBikeLanding'

interface FooterProps {
  onNavigate: (section: NavSectionId) => void
  onOpenPreOrder: () => void
}

export default function Footer({ onNavigate, onOpenPreOrder }: FooterProps) {
  const handleNav = (section: NavSectionId) => {
    onNavigate(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      aria-label="Rodapé Institucional EV-B"
      className="relative w-full overflow-hidden border-t border-[rgba(0,0,0,0.16)] bg-gradient-to-br from-[#eef7f9] via-[#dceef3] to-[#c4e1ea] px-6 pt-10 pb-6 text-[#363543] sm:px-10 lg:px-[59px]"
    >
      {/* Linha decorativa superior em gradiente */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-[#9ae0d3] via-[#35a7a0] to-[#73adc1]" />

      <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-12">
        {/* Coluna 1: Marca, Manifesto e Redes Sociais */}
        <div className="flex flex-col justify-between lg:col-span-4">
          <div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNav('home')}
                aria-label="Voltar ao início"
                className="relative h-[56px] w-[82px] shrink-0 cursor-pointer border-0 bg-transparent p-0 mix-blend-multiply transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={imgDownload1}
                  alt="Logo EV-B"
                  style={{ filter: 'url(#evb-logo-alpha)' }}
                  className="size-full object-cover"
                />
              </button>
              <div>
                <p className="font-['Inter',sans-serif] text-[18px] leading-none font-black tracking-[3px] text-[#363543] uppercase">
                  EV-B MOBILITY
                </p>
                <p className="mt-1 font-['Inter',sans-serif] text-[10px] font-bold tracking-[2.5px] text-[#35a7a0] uppercase">
                  Electric Scooter Brasil
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-sm font-['Inter',sans-serif] text-[13px] leading-relaxed font-medium text-[#3b3b3b]/85">
              Mobilidade elétrica urbana com emissão zero, engenharia minimalista de alta
              precisão e assistência inteligente 24h em território nacional.
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="mt-5">
            <p className="mb-2.5 font-['Inter',sans-serif] text-[10px] font-bold tracking-[2.5px] text-[#35a7a0] uppercase">
              Siga nas Redes
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @evbmobility.br"
                className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-3.5 py-2 font-['Inter',sans-serif] text-[12px] font-bold text-[#363543] no-underline transition-all hover:border-[#35a7a0] hover:bg-[#35a7a0] hover:text-white"
              >
                <svg
                  className="size-4 shrink-0 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@evbmobility.br</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/551134908820"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/60 px-3.5 py-2 font-['Inter',sans-serif] text-[12px] font-bold text-[#363543] no-underline transition-all hover:border-[#35a7a0] hover:bg-[#35a7a0] hover:text-white"
              >
                <svg
                  className="size-4 shrink-0 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube EV-B"
                className="inline-flex size-9 items-center justify-center rounded-full border border-black/15 bg-white/60 text-[#363543] no-underline transition-all hover:border-[#35a7a0] hover:bg-[#35a7a0] hover:text-white"
              >
                <svg
                  className="size-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 2: Navegação & Linha EV-B */}
        <div className="lg:col-span-2">
          <h3 className="m-0 font-['Inter',sans-serif] text-[12px] font-black tracking-[2.5px] text-[#35a7a0] uppercase">
            Navegação
          </h3>
          <ul className="mt-3 flex list-none flex-col gap-2.5 p-0">
            {[
              { id: 'home' as NavSectionId, label: 'Início & Conceito' },
              { id: 'products' as NavSectionId, label: 'Catálogo de Produtos' },
              { id: 'gallery' as NavSectionId, label: 'Galeria de Estúdio' },
              { id: 'contact' as NavSectionId, label: 'Agendar Test-Ride' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className="cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[13px] font-semibold text-[#363543]/85 transition-colors hover:text-[#35a7a0]"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={onOpenPreOrder}
                className="cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[13px] font-bold text-[#28857f] transition-colors hover:text-[#35a7a0]"
              >
                Pré-venda Prioritária →
              </button>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Localização & Showrooms */}
        <div className="lg:col-span-3">
          <h3 className="m-0 font-['Inter',sans-serif] text-[12px] font-black tracking-[2.5px] text-[#35a7a0] uppercase">
            Localização & Showrooms
          </h3>
          <div className="mt-3 flex flex-col gap-3 font-['Inter',sans-serif] text-[13px] text-[#3b3b3b]">
            <div className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 size-4 shrink-0 fill-none stroke-[#35a7a0]"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-bold text-[#363543]">Flagship São Paulo</p>
                <p className="text-[12px] text-[#3b3b3b]/85">
                  Av. Europa, 840 · Jardim Europa, São Paulo - SP · CEP 01449-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <svg
                className="mt-0.5 size-4 shrink-0 fill-none stroke-[#35a7a0]"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <p className="font-bold text-[#363543]">Horário de Atendimento</p>
                <p className="text-[12px] text-[#3b3b3b]/85">
                  Segunda a Sábado: 09h às 19h · Unidades SP, Curitiba e Rio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 4: Central de Relacionamento */}
        <div className="lg:col-span-3">
          <h3 className="m-0 font-['Inter',sans-serif] text-[12px] font-black tracking-[2.5px] text-[#35a7a0] uppercase">
            Central & Contato
          </h3>
          <div className="mt-3 flex flex-col gap-2.5 font-['Inter',sans-serif] text-[13px]">
            <a
              href="tel:+551134908820"
              className="flex items-center gap-2 font-semibold text-[#363543] no-underline transition-colors hover:text-[#35a7a0]"
            >
              <svg
                className="size-4 shrink-0 fill-none stroke-[#35a7a0]"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+55 (11) 3490-8820</span>
            </a>

            <a
              href="mailto:contato@ev-b.com.br"
              className="flex items-center gap-2 font-semibold text-[#363543] no-underline transition-colors hover:text-[#35a7a0]"
            >
              <svg
                className="size-4 shrink-0 fill-none stroke-[#35a7a0]"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>contato@ev-b.com.br</span>
            </a>

            <div className="mt-1 rounded-[14px] border border-black/10 bg-white/55 p-3">
              <p className="text-[11px] font-bold tracking-[1.5px] text-[#28857f] uppercase">
                Assistência & Garantia
              </p>
              <p className="mt-0.5 text-[12px] font-medium text-[#363543]">
                3 anos de garantia integral · Telemetria 24h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior: Copyright + Políticas + Créditos YourPage */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-black/15 pt-5 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-['Inter',sans-serif] text-[12px] font-medium text-[#3b3b3b]/80 sm:justify-start">
          <span>© 2026 EV-B Electric Mobility Brasil Ltda.</span>
          <span className="hidden sm:inline">·</span>
          <span>CNPJ 48.920.114/0001-80</span>
          <span className="hidden sm:inline">·</span>
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="cursor-pointer border-0 bg-transparent p-0 font-semibold text-[#363543] underline-offset-2 hover:underline"
          >
            Privacidade & Termos
          </button>
        </div>

        {/* Assinatura YourPage */}
        <a
          href="https://yourpage.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="yp-footer-link"
        >
          <span className="yp-footer-text">Desenvolvido por</span>
          <span translate="no" className="notranslate yp-footer-badge">
            YourPage
          </span>
        </a>
      </div>
    </footer>
  )
}
