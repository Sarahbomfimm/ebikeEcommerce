import { useRef, useState } from 'react'
import type { MouseEvent, TouchEvent } from 'react'
import imgRectangle3 from '../assets/figma/01dff.svg'
import imgEllipse1 from '../assets/figma/0482c.svg'
import imgRectangle4 from '../assets/figma/12359.svg'
import imgEllipse2 from '../assets/figma/28604.svg'
import imgGroup from '../assets/figma/2970a.svg'
import imgEvBike11 from '../assets/figma/380f1.png'
import imgDownload1 from '../assets/figma/440be.png'
import imgVector1 from '../assets/figma/6433d.svg'
import imgVector2 from '../assets/figma/7f093.svg'
import imgEllipse4 from '../assets/figma/bc967.svg'
import imgVector from '../assets/figma/c41d9.svg'
import imgEllipse3 from '../assets/figma/d8cd7.svg'
import imgEllipse6 from '../assets/figma/e4b34.svg'
import imgEllipse5 from '../assets/figma/e57e0.svg'
import imgCityLite from '../assets/scooters/scooter-city-lite.png'
import imgSportGt from '../assets/scooters/scooter-sport-gt.png'
import imgUrbanPro from '../assets/scooters/scooter-urban-pro.png'
import Footer from './Footer'
import ContactModule from './modules/ContactModule'
import GalleryModule from './modules/GalleryModule'
import { LoginModal, PreOrderModal } from './modules/Modals'
import ProductsModule from './modules/ProductsModule'
import { PRODUCTS_DATA } from './modules/productsData'
import type { ProductModel } from './modules/productsData'

export type NavSectionId = 'home' | 'products' | 'gallery' | 'contact'

const NAV_ITEMS: ReadonlyArray<{
  id: NavSectionId
  label: string
  nodeId: string
}> = [
  { id: 'home', label: 'Início', nodeId: '1:25' },
  { id: 'products', label: 'Produtos', nodeId: '1:37' },
  { id: 'gallery', label: 'Galeria', nodeId: '1:38' },
  { id: 'contact', label: 'Contato', nodeId: '1:39' },
]

const HERO_SLIDES = [
  {
    subtitle: 'Vamos pilotar o',
    title: 'FUTURO',
    line1: 'Design simples e elegante para facilitar sua pilotagem',
    line2: 'Torne sua jornada rápida e prática',
    watermark: 'ev-b',
    image: imgEvBike11,
    useDarkenBlend: true,
    frontTitle: 'Conjunto Dianteiro — Concept One',
    frontSpec: 'Pneu Fat-Tire 130/90-10 + Freio a Disco Hidráulico ABS',
    specs: [
      { id: 'speed', value: '50 km/h', label: 'velocidade', nodeId: '9:10' },
      { id: 'range', value: '80 km', label: 'autonomia', nodeId: '9:11' },
      { id: 'charging', value: '3,5 h', label: 'recarga', nodeId: '9:12' },
    ],
  },
  {
    subtitle: 'Projetada para a',
    title: 'CIDADE',
    line1: 'Carenagem verde glacial acetinada com farol Halo LED integrado',
    line2: 'Células duplas de íons de lítio para 110 km de autonomia',
    watermark: 'pro',
    image: imgUrbanPro,
    useDarkenBlend: false,
    frontTitle: 'Conjunto Dianteiro — Urban Pro',
    frontSpec: 'Farol Halo LED na Coluna + Para-lama Verde Glacial Acetinado',
    specs: [
      { id: 'speed', value: '60 km/h', label: 'velocidade', nodeId: '9:10' },
      { id: 'range', value: '110 km', label: 'autonomia', nodeId: '9:11' },
      { id: 'charging', value: '3,0 h', label: 'recarga', nodeId: '9:12' },
    ],
  },
  {
    subtitle: 'Libere puro',
    title: 'TORQUE',
    line1: 'Garfo invertido anodizado, fibra de carbono e pinças ciano',
    line2: 'Motor de alta potência de 4,8 kW com pneus largos esportivos',
    watermark: 'gt-s',
    image: imgSportGt,
    useDarkenBlend: false,
    frontTitle: 'Conjunto Dianteiro — Sport GT',
    frontSpec: 'Suspensão Invertida Bronze + Pinça Radial Ciano de 4 Pistões',
    specs: [
      { id: 'speed', value: '75 km/h', label: 'velocidade', nodeId: '9:10' },
      { id: 'range', value: '95 km', label: 'autonomia', nodeId: '9:11' },
      { id: 'charging', value: '2,5 h', label: 'recarga', nodeId: '9:12' },
    ],
  },
  {
    subtitle: 'Inteligente e ágil',
    title: 'CITY LITE',
    line1: 'Chassi tubular ultraleve em titânio grafite e verde-esmeralda metálico',
    line2: 'Conecte em qualquer tomada comum e carregue em menos de 3 horas',
    watermark: 'lite',
    image: imgCityLite,
    useDarkenBlend: false,
    frontTitle: 'Conjunto Dianteiro — City Lite',
    frontSpec: 'Garfo Invertido Verde-Esmeralda + Disco Ventilado em Aço',
    specs: [
      { id: 'speed', value: '45 km/h', label: 'velocidade', nodeId: '9:10' },
      { id: 'range', value: '65 km', label: 'autonomia', nodeId: '9:11' },
      { id: 'charging', value: '2,8 h', label: 'recarga', nodeId: '9:12' },
    ],
  },
] as const

const PAGINATION_DOTS = [
  { index: 0, nodeId: '9:46' },
  { index: 1, nodeId: '9:47' },
  { index: 2, nodeId: '9:48' },
  { index: 3, nodeId: '9:49' },
] as const

export default function EvBikeLanding() {
  const [activeNav, setActiveNav] = useState<NavSectionId>('home')
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [showHotspotInfo, setShowHotspotInfo] = useState<boolean>(false)
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false)
  const [loggedUser, setLoggedUser] = useState<string | null>(null)
  const [preOrderProduct, setPreOrderProduct] = useState<ProductModel | null>(null)
  const [preOrderModalOpen, setPreOrderModalOpen] = useState<boolean>(false)

  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const slide = HERO_SLIDES[currentSlide]

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setParallax({ x: nx, y: ny })
  }

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 })
  }

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    if (e.touches.length !== 1) return
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
  }

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    if (!touchStartRef.current || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - touchStartRef.current.x
    const dy = e.touches[0].clientY - touchStartRef.current.y
    const nx = Math.max(-1.2, Math.min(1.2, dx / 110))
    const ny = Math.max(-1, Math.min(1, dy / 140))
    setParallax({ x: nx, y: ny })
  }

  const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (!touchStartRef.current) return
    const endTouch = e.changedTouches[0]
    if (endTouch && activeNav === 'home') {
      const dx = endTouch.clientX - touchStartRef.current.x
      const dy = endTouch.clientY - touchStartRef.current.y
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        if (dx < 0) {
          handleNext()
        } else {
          handlePrev()
        }
      }
    }
    touchStartRef.current = null
    setParallax({ x: 0, y: 0 })
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + PAGINATION_DOTS.length) % PAGINATION_DOTS.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % PAGINATION_DOTS.length)
  }

  const handleStepBackward = () => {
    if (activeNav === 'home') {
      handlePrev()
    } else {
      const idx = NAV_ITEMS.findIndex((i) => i.id === activeNav)
      const prevIdx = (idx - 1 + NAV_ITEMS.length) % NAV_ITEMS.length
      setActiveNav(NAV_ITEMS[prevIdx].id)
    }
  }

  const handleStepForward = () => {
    if (activeNav === 'home') {
      handleNext()
    } else {
      const idx = NAV_ITEMS.findIndex((i) => i.id === activeNav)
      const nextIdx = (idx + 1) % NAV_ITEMS.length
      setActiveNav(NAV_ITEMS[nextIdx].id)
    }
  }

  const handleNavClick = (section: NavSectionId) => {
    setActiveNav(section)
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }

  const openPreOrder = (product?: ProductModel) => {
    setPreOrderProduct(product ?? PRODUCTS_DATA[currentSlide] ?? PRODUCTS_DATA[0])
    setPreOrderModalOpen(true)
  }

  return (
    <>
      <main
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden select-none"
        data-node-id="1:2"
        data-name="EV Bike"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(132.9 123.8 -190.62 204.63 355 -10.5)'><stop stop-color='rgba(235,243,245,1)' offset='0.10457'/><stop stop-color='rgba(197,226,240,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(129.4014173920212deg, rgb(238, 255, 255) 4.2848%, rgb(110, 169, 168) 106.09%)",
        }}
      >
        {/* Filtro SVG de Matriz de Luminância para remover 100% do fundo branco da logo mantendo bordas suaves */}
        <svg className="pointer-events-none absolute size-0 overflow-hidden" aria-hidden="true">
          <defs>
            <filter id="evb-logo-alpha" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        -1.6 -1.6 -1.6 4.65 0"
              />
            </filter>
          </defs>
        </svg>

        {/* Background Large Ellipses on Right (Ancoradas proporcionalmente à direita) */}
        <div
          style={{
            transform: `translate3d(${parallax.x * -6}px, ${parallax.y * -6}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute top-[-586px] right-[-660px] size-[1516px]"
          data-node-id="1:7"
        >
          <img alt="" className="block max-w-none" src={imgEllipse1} />
        </div>

        <div
          style={{
            transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -8}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute top-[-535px] right-[-590px] h-[1487px] w-[1458px]"
          data-node-id="9:32"
        >
          <img alt="" className="block max-w-none" src={imgEllipse2} />
        </div>

        {/* Decorative Floating Orbs */}
        <div
          style={{
            transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 10}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute top-[105px] left-[-134px] h-[249px] w-[268px]"
          data-node-id="9:2"
        >
          <div className="evb-ambient-orb absolute inset-[-11.65%_-53.73%_-60.64%_-13.43%]">
            <img alt="" className="block max-w-none" src={imgEllipse3} />
          </div>
        </div>

        <div
          style={{
            transform: `translate3d(${parallax.x * -12}px, ${parallax.y * 8}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute top-[-90px] right-[26%] h-[179.501px] w-[176px]"
          data-node-id="9:4"
        >
          <div className="evb-ambient-orb-delayed absolute inset-[-17.27%_-56.25%_-83.01%_-46.02%]">
            <img alt="" className="block max-w-none" src={imgEllipse4} />
          </div>
        </div>

        {/* Bottom Concentric Decorative Orbs */}
        <div
          style={{
            transform: `translate3d(${parallax.x * 9}px, ${parallax.y * -7}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute bottom-[-140px] left-[18%] h-[249px] w-[268px]"
          data-node-id="9:59"
        >
          <div className="evb-ambient-orb absolute inset-[-11.65%_-53.73%_-60.64%_-13.43%]">
            <img alt="" className="block max-w-none" src={imgEllipse3} />
          </div>
        </div>

        <div
          style={{
            transform: `translate3d(${parallax.x * 15}px, ${parallax.y * -11}px, 0)`,
          }}
          className="evb-parallax-layer pointer-events-none absolute bottom-[-110px] left-[calc(18%+47px)] h-[179.501px] w-[176px]"
          data-node-id="9:61"
        >
          <div className="evb-ambient-orb-delayed absolute inset-[-17.27%_-56.25%_-83.01%_-46.02%]">
            <img alt="" className="block max-w-none" src={imgEllipse4} />
          </div>
        </div>

        {/* ==================== BARRA LATERAL DIREITA RESPONSIVA ==================== */}
        <aside
          aria-label="Conceito EV-B"
          className="pointer-events-none hidden lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:z-10 lg:flex lg:w-[88px] lg:flex-col xl:w-[106px]"
        >
          {/* Top Half: O CONCEITO + Search Icon */}
          <div
            className="relative flex flex-1 flex-col items-center justify-center"
            data-node-id="9:25"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 106 491' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(8.8463 47.9 -40.643 12.356 17.537 12)'><stop stop-color='rgba(154,224,211,1)' offset='0'/><stop stop-color='rgba(103,195,186,1)' offset='0.48037'/><stop stop-color='rgba(78,181,173,1)' offset='0.72056'/><stop stop-color='rgba(53,167,160,1)' offset='0.96075'/></radialGradient></defs></svg>\")",
            }}
          >
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="pointer-events-auto absolute top-11 h-[28px] w-[28px] cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300 hover:scale-110"
              data-node-id="9:26"
              data-name="Vector"
            >
              <img alt="" className="block max-w-none" src={imgVector} />
            </button>

            <div className="mt-10 flex items-center justify-center" data-node-id="9:27">
              <p className="rotate-90 font-['Inter',sans-serif] text-[14px] leading-[1.18] font-medium tracking-[11px] whitespace-nowrap text-white uppercase not-italic xl:text-[15px] xl:tracking-[13.125px]">
                O CONCEITO
              </p>
            </div>
          </div>

          {/* Bottom Half: ELÉTRICA - B */}
          <div
            className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-[#89c8dd] to-[#73adc1] pb-12"
            data-node-id="9:29"
          >
            <div className="flex items-center justify-center" data-node-id="9:30">
              <p className="rotate-90 font-['Inter',sans-serif] text-[14px] leading-[1.18] font-medium tracking-[11px] whitespace-nowrap text-white uppercase not-italic xl:text-[15px] xl:tracking-[13.125px]">
                ELÉTRICA - B
              </p>
            </div>
          </div>
        </aside>

        {/* Quick Search Popover */}
        {searchOpen && (
          <div className="evb-anim-step-1 absolute top-[95px] right-6 z-40 w-[320px] rounded-[18px] border border-black/25 bg-white/92 p-4 shadow-xl backdrop-blur-xl sm:w-[340px] lg:right-[115px]">
            <div className="flex items-center justify-between pb-2">
              <span className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#35a7a0] uppercase">
                Busca Rápida
              </span>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="cursor-pointer border-0 bg-transparent text-xs font-bold text-[#363543]"
              >
                ✕
              </button>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar modelos, ficha técnica, galeria..."
              className="w-full rounded-[10px] border border-black/20 bg-white px-3 py-2 font-['Inter',sans-serif] text-[13px] text-[#363543] outline-none focus:border-[#35a7a0]"
            />
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {[
                { label: 'Visão Geral', section: 'home' as NavSectionId },
                { label: 'Frota EV-B', section: 'products' as NavSectionId },
                { label: 'Fotos de Estúdio', section: 'gallery' as NavSectionId },
                { label: 'Agendar Test-Ride', section: 'contact' as NavSectionId },
              ]
                .filter((item) =>
                  item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
                )
                .map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.section)}
                    className="cursor-pointer rounded-full bg-[#35a7a0]/15 px-3 py-1 font-['Inter',sans-serif] text-[11px] font-bold text-[#28857f] uppercase hover:bg-[#35a7a0] hover:text-white"
                  >
                    {item.label} →
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* ==================== HEADER FLUIDA E RESPONSIVA ==================== */}
        <header className="relative flex w-full items-center justify-between px-5 pt-3 sm:px-10 lg:pr-[125px] lg:pl-[42px] xl:pr-[155px]">
          {/* Logo da Moto no Canto Superior Esquerdo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="Ir para o Início"
            className="group relative -ml-3 h-[76px] w-[115px] shrink-0 cursor-pointer border-0 bg-transparent p-0 mix-blend-multiply transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 sm:h-[96px] sm:w-[145px] xl:h-[120px] xl:w-[175px]"
            data-node-id="1:24"
            data-name="download 1"
          >
            <img
              alt="Logo EV-B"
              style={{
                filter: 'url(#evb-logo-alpha) drop-shadow(0 6px 14px rgba(53, 167, 160, 0.22))',
              }}
              className="pointer-events-none size-full object-cover"
              src={imgDownload1}
            />
          </button>

          {/* Navegação Principal (Desktop & Tablet) */}
          <nav
            aria-label="Navegação Principal"
            className="z-30 hidden items-center gap-7 md:flex lg:gap-11 xl:gap-14"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[15px] leading-[normal] tracking-[2.5px] whitespace-nowrap text-[#363543] uppercase not-italic transition-all duration-300 lg:text-[18px] xl:text-[20px] xl:tracking-[3px] ${
                    isActive
                      ? 'font-black text-[#1d1c26]'
                      : 'font-bold opacity-75 hover:opacity-100'
                  }`}
                  data-node-id={item.nodeId}
                >
                  {item.label}
                  <span
                    className={`pointer-events-none absolute -bottom-2 left-0 h-[2.5px] rounded-full bg-[#35a7a0] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                    }`}
                  />
                </button>
              )
            })}
          </nav>

          {/* Botão Entrar (Texto centralizado dentro da arte SVG) + Hamburger Mobile */}
          <div className="z-30 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLoginModalOpen(true)}
              className="relative inline-flex h-[48px] w-[125px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:h-[54px] sm:w-[140px] xl:h-[60px] xl:w-[150px]"
              data-node-id="1:41"
            >
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full object-fill"
                src={imgRectangle3}
                data-node-id="1:40"
              />
              <span className="relative z-10 font-['Inter',sans-serif] text-[15px] leading-none font-bold tracking-[2.5px] whitespace-nowrap text-white uppercase not-italic sm:text-[17px] xl:text-[20px] xl:tracking-[3px]">
                {loggedUser ? 'Piloto' : 'Entrar'}
              </span>
            </button>

            <button
              type="button"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex size-11 cursor-pointer items-center justify-center rounded-[12px] border border-black/25 bg-white/60 text-[20px] font-bold text-[#363543] backdrop-blur-md md:hidden"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="evb-anim-step-1 relative z-40 mx-5 mt-2 flex flex-col gap-2 rounded-[20px] border border-black/25 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:mx-10 md:hidden">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex cursor-pointer items-center justify-between rounded-[12px] px-4 py-3 text-left font-['Inter',sans-serif] text-[16px] tracking-[3px] uppercase transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#57b9b0] to-[#35a7a0] font-black text-white'
                      : 'bg-transparent font-bold text-[#363543] hover:bg-black/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs">●</span>}
                </button>
              )
            })}
          </div>
        )}

        {/* ==================== ÁREA CENTRAL DOS MÓDULOS ==================== */}
        {activeNav === 'home' && (
          <div
            key={`slide-${currentSlide}`}
            className="relative my-auto grid w-full grid-cols-1 items-center gap-6 px-6 py-4 sm:px-10 lg:grid-cols-12 lg:py-2 lg:pr-[120px] lg:pl-[59px] xl:pr-[145px]"
          >
            {/* Coluna Esquerda: Textos Hero + Botão Pré-venda */}
            <div className="relative z-20 flex flex-col items-start lg:col-span-5">
              <p
                className="evb-anim-step-1 font-['Inter',sans-serif] text-[18px] leading-tight font-medium tracking-[8px] text-black uppercase not-italic sm:text-[24px] sm:tracking-[12px] xl:text-[30px] xl:tracking-[14px]"
                data-node-id="1:44"
              >
                {slide.subtitle}
              </p>
              <h1
                className="evb-anim-step-2 m-0 mt-2 font-['Inter',sans-serif] text-[48px] leading-[1.05] font-bold tracking-[5px] text-black uppercase not-italic sm:text-[68px] sm:tracking-[7px] xl:text-[88px] xl:tracking-[9px]"
                data-node-id="1:45"
              >
                {slide.title}
              </h1>
              <p
                className="evb-anim-step-3 mt-4 font-['Inter',sans-serif] text-[13px] leading-relaxed font-medium tracking-[1.4px] text-black uppercase not-italic sm:text-[15px] xl:text-[16px] xl:tracking-[1.6px]"
                data-node-id="1:46"
              >
                {slide.line1}
              </p>
              <p
                className="evb-anim-step-3 mt-1 font-['Inter',sans-serif] text-[13px] leading-relaxed font-medium tracking-[1.4px] text-black uppercase not-italic sm:text-[15px] xl:text-[16px] xl:tracking-[1.6px]"
                data-node-id="2:47"
              >
                {slide.line2}
              </p>

              {/* Botão Pré-venda (Texto centralizado dentro da arte SVG) */}
              <button
                type="button"
                onClick={() => openPreOrder()}
                className="evb-anim-step-4 relative mt-7 inline-flex h-[56px] w-[195px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] xl:mt-9 xl:h-[60px] xl:w-[208px]"
                data-node-id="2:52"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full object-fill"
                  src={imgRectangle4}
                  data-node-id="2:51"
                />
                <span className="relative z-10 font-['Inter',sans-serif] text-[18px] leading-none font-bold tracking-[2.5px] whitespace-nowrap text-black uppercase not-italic xl:text-[20px] xl:tracking-[3px]">
                  Pré-venda
                </span>
              </button>
            </div>

            {/* Coluna Direita: Scooter + Marca d'água EV-B + Card Glassmorphism com Specs dentro */}
            <div className="relative flex flex-col items-center lg:col-span-7">
              {/* Palco da Scooter */}
              <div className="relative flex w-full items-center justify-center">
                {/* Marca d'água "EV-B" posicionada proporcionalmente atrás do guidão/selim */}
                <div
                  style={{
                    transform: `translate3d(${parallax.x * -16}px, ${parallax.y * -6}px, 0)`,
                  }}
                  className="evb-parallax-layer pointer-events-none absolute top-[4%] right-[4%] z-0 sm:right-[8%]"
                >
                  <div className="evb-mobile-auto-depth">
                    <p
                      className="font-neumatic evb-anim-watermark text-[120px] leading-none tracking-[-3.7815px] whitespace-nowrap text-white/90 uppercase not-italic [text-shadow:54px_61px_90px_rgba(108,198,188,0.51)] sm:text-[175px] xl:text-[235px] xl:text-white"
                      data-node-id="9:38"
                    >
                      {slide.watermark}
                    </p>
                  </div>
                </div>

                {/* Imagem da Scooter */}
                <div
                  className={`evb-anim-scooter pointer-events-none relative z-10 flex h-[300px] w-full max-w-[660px] items-center justify-center sm:h-[400px] lg:h-[460px] xl:h-[520px] ${
                    slide.useDarkenBlend ? 'mix-blend-darken' : ''
                  }`}
                  data-node-id="1:22"
                  data-name="EV-Bike-1 1"
                >
                  <img
                    alt={`Scooter Elétrica ${slide.title}`}
                    style={{
                      transform: `translate3d(${parallax.x * 7}px, 0px, 0)`,
                    }}
                    className="evb-parallax-layer pointer-events-none max-h-full max-w-full object-contain"
                    src={slide.image}
                  />
                </div>

                {/* Hotspot Interativo + na Roda Dianteira */}
                <button
                  type="button"
                  aria-label="Inspecionar roda dianteira"
                  onClick={() => setShowHotspotInfo((prev) => !prev)}
                  className="absolute bottom-[22%] left-[8%] z-30 flex size-8 cursor-pointer items-center justify-center rounded-full border-0 bg-[#35a7a0]/35 p-0 backdrop-blur-sm transition-transform duration-300 hover:scale-115 active:scale-90 sm:left-[12%] lg:bg-transparent lg:backdrop-blur-none"
                  data-node-id="9:55"
                  data-name="Group"
                >
                  <span className="evb-beacon-ring pointer-events-none absolute -inset-1.5 rounded-full border border-white/90" />
                  <img alt="" className="relative block max-w-none" src={imgGroup} />
                </button>

                {showHotspotInfo && (
                  <div className="evb-anim-step-1 absolute bottom-[36%] left-2 z-30 w-[245px] rounded-[14px] border border-black/30 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:left-6">
                    <p className="font-['Inter',sans-serif] text-[10px] font-bold tracking-[2px] text-[#35a7a0] uppercase">
                      {slide.frontTitle}
                    </p>
                    <p className="mt-0.5 font-['Inter',sans-serif] text-[12px] font-bold text-[#363543]">
                      {slide.frontSpec}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Glassmorphism de Especificações (Textos sempre DENTRO da caixa!) */}
              <div
                className="evb-anim-step-4 evb-glass-card-sheen relative z-20 mt-1 flex h-[84px] w-full max-w-[453px] items-center justify-around overflow-hidden rounded-[17.111px] border-[1.5px] border-solid border-[rgba(0,0,0,0.36)] bg-[rgba(70,207,255,0)] px-4 backdrop-blur-[13.059px] sm:h-[95.463px]"
                data-node-id="9:8"
              >
                {slide.specs.map((spec) => (
                  <div
                    key={spec.id}
                    className="flex flex-col justify-center font-['Inter',sans-serif] font-semibold text-[#3b3b3b] not-italic"
                    data-node-id={spec.nodeId}
                  >
                    <p className="m-0 text-[15px] leading-[17px] sm:text-[16.237px]">
                      {spec.value}
                    </p>
                    <p className="m-0 mt-0.5 text-[11.5px] leading-[16px] sm:text-[12.177px]">
                      {spec.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeNav === 'products' && (
          <ProductsModule onSelectPreOrder={(product) => openPreOrder(product)} />
        )}

        {activeNav === 'gallery' && <GalleryModule />}

        {activeNav === 'contact' && <ContactModule />}

        {/* ==================== BARRA INFERIOR DE CONTROLES FLUIDA ==================== */}
        <div
          className="relative z-20 flex w-full items-center justify-between px-6 pt-2 pb-5 sm:px-10 lg:pr-[16px] lg:pl-[85px] xl:pr-[22px]"
          data-node-id="9:40"
        >
          {/* Botão Anterior (< Ant.) agrupado sem risco de sobreposição */}
          <button
            type="button"
            onClick={handleStepBackward}
            className="group inline-flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[16px] leading-none font-semibold text-[rgba(0,0,0,0.65)] transition-all hover:text-black sm:text-[18px]"
            data-node-id="9:41"
          >
            <span
              className="inline-flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1"
              data-node-id="9:43"
            >
              <img alt="" className="block h-[22px] w-auto sm:h-[25px]" src={imgVector1} />
            </span>
            <span>Ant.</span>
          </button>

          {/* Indicadores de Página (4 Pontos) */}
          <div className="flex items-center gap-3">
            {PAGINATION_DOTS.map((dot) => {
              const isCurrent =
                activeNav === 'home'
                  ? currentSlide === dot.index
                  : NAV_ITEMS.findIndex((i) => i.id === activeNav) === dot.index
              return (
                <button
                  key={dot.index}
                  type="button"
                  aria-label={`Slide ${dot.index + 1}`}
                  aria-current={isCurrent ? 'true' : undefined}
                  onClick={() => {
                    if (activeNav === 'home') {
                      setCurrentSlide(dot.index)
                    } else {
                      setActiveNav(NAV_ITEMS[dot.index].id)
                    }
                  }}
                  className={`size-[10px] cursor-pointer border-0 bg-transparent p-0 transition-all duration-300 ${
                    isCurrent ? 'scale-125 opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                  data-node-id={dot.nodeId}
                >
                  <img alt="" className="block max-w-none" src={imgEllipse6} />
                </button>
              )
            })}
          </div>

          {/* Botão Próximo (Próx. >) + Círculo Flutuante (+) perfeitamente centralizado */}
          <div className="flex items-center gap-5 sm:gap-8 lg:gap-10 xl:gap-14">
            <button
              type="button"
              onClick={handleStepForward}
              className="group inline-flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[16px] leading-none font-semibold text-[rgba(0,0,0,0.65)] transition-all hover:text-black sm:text-[18px]"
              data-node-id="9:42"
            >
              <span>Próx.</span>
              <span
                className="inline-flex rotate-180 items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                data-node-id="9:44"
              >
                <img alt="" className="block h-[22px] w-auto sm:h-[25px]" src={imgVector2} />
              </span>
            </button>

            {/* Botão Circular Verde-Água com Ícone + Centralizado */}
            <button
              type="button"
              aria-label="Abrir Pré-venda"
              onClick={() => openPreOrder()}
              className="group relative flex size-[54px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 sm:size-[62px] xl:size-[70px]"
              data-node-id="9:45"
            >
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full object-contain"
                src={imgEllipse5}
              />
              <img
                alt=""
                className="relative z-10 block size-[22px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90 xl:size-[24px]"
                src={imgGroup}
                data-node-id="9:51"
              />
            </button>
          </div>
        </div>

        {/* Modals */}
        {loginModalOpen && (
          <LoginModal
            onClose={() => setLoginModalOpen(false)}
            onSuccessLogin={(email) => setLoggedUser(email)}
          />
        )}

        {preOrderModalOpen && (
          <PreOrderModal
            initialProduct={preOrderProduct ?? undefined}
            onClose={() => setPreOrderModalOpen(false)}
          />
        )}
      </main>

      <Footer onNavigate={handleNavClick} onOpenPreOrder={() => openPreOrder()} />
    </>
  )
}
