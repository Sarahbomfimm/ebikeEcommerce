import { useState } from 'react'
import imgCityLite from '../../assets/scooters/scooter-city-lite.png'
import imgConceptOne from '../../assets/scooters/scooter-concept-one.png'
import imgOceanBlue from '../../assets/scooters/scooter-ocean-blue.png'
import imgSportGt from '../../assets/scooters/scooter-sport-gt.png'
import imgTitaniumGt from '../../assets/scooters/scooter-titanium-gt.png'
import imgUrbanPro from '../../assets/scooters/scooter-urban-pro.png'

interface GalleryItem {
  id: string
  title: string
  subtitle: string
  category: 'design' | 'engineering' | 'details'
  categoryLabel: string
  cameraSpec: string
  description: string
  image: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'concept-one',
    title: 'EV-B Concept One — Obsidiana',
    subtitle: 'Edição Assinatura 3/4',
    category: 'design',
    categoryLabel: 'Exterior',
    cameraSpec: '50mm · f/2.8 · Luz de Estúdio',
    description:
      'Quadro tubular minimalista em aço preto fosco projetado com baixo centro de gravidade para máxima estabilidade urbana.',
    image: imgConceptOne,
  },
  {
    id: 'urban-pro',
    title: 'EV-B Urban Pro — Verde Glacial',
    subtitle: 'Farol Halo LED & Carenagem',
    category: 'design',
    categoryLabel: 'Exterior',
    cameraSpec: '50mm · f/2.4 · Estúdio Daylight',
    description:
      'Pintura acetinada em verde glacial combinada com farol circular Halo LED integrado à coluna de direção e autonomia de 110 km.',
    image: imgUrbanPro,
  },
  {
    id: 'sport-gt',
    title: 'EV-B Sport GT — Fibra de Carbono',
    subtitle: 'Suspensão Invertida & Pinças Ciano',
    category: 'engineering',
    categoryLabel: 'Engenharia',
    cameraSpec: '70mm · f/2.8 · Linha Performance',
    description:
      'Garfo dianteiro invertido anodizado em bronze, pinças de freio radiais em ciano, chassi prata metálico e carenagem traseira em carbono.',
    image: imgSportGt,
  },
  {
    id: 'city-lite',
    title: 'EV-B City Lite — Titânio & Esmeralda',
    subtitle: 'Arquitetura Ultraleve 54 kg',
    category: 'design',
    categoryLabel: 'Exterior',
    cameraSpec: '85mm · f/5.6 · Fotografia DSLR',
    description:
      'Chassi em titânio grafite com pintura metálica verde-esmeralda de alto brilho, banco em couro perfurado e discos ventilados.',
    image: imgCityLite,
  },
  {
    id: 'titanium-gt',
    title: 'EV-B Sport GT — Titânio & Esmeralda',
    subtitle: 'Freios Hidráulicos Duplos ABS',
    category: 'engineering',
    categoryLabel: 'Engenharia',
    cameraSpec: '85mm · f/3.2 · Série Especial',
    description:
      'Disco ventilado perfurado com pinças de 4 pistões em verde-esmeralda, garfo invertido dourado e pneus esportivos de perfil largo.',
    image: imgTitaniumGt,
  },
  {
    id: 'ocean-blue',
    title: 'EV-B Coastal Edition — Azul Oceano',
    subtitle: 'Cockpit Halo LED & Dupla Célula',
    category: 'details',
    categoryLabel: 'Cockpit',
    cameraSpec: '35mm · f/2.2 · Acabamento Metálico',
    description:
      'Edição especial em azul-oceano metálico com conjunto óptico diurno em anel de LED e guidão ergonômico com freio regenerativo.',
    image: imgOceanBlue,
  },
]

const GALLERY_TABS = [
  { id: 'all', label: 'Todas as Fotos' },
  { id: 'design', label: 'Exterior' },
  { id: 'engineering', label: 'Engenharia' },
  { id: 'details', label: 'Cockpit' },
] as const

export default function GalleryModule() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'design' | 'engineering' | 'details'>(
    'all',
  )
  const [featuredItem, setFeaturedItem] = useState<GalleryItem>(GALLERY_ITEMS[0])

  const visibleItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <section
      aria-label="Galeria Visual"
      className="evb-anim-step-1 relative z-10 my-auto flex w-full flex-col justify-between px-6 py-4 sm:px-10 lg:py-4 lg:pr-[125px] lg:pl-[59px] xl:pr-[145px]"
    >
      {/* Header & Category Tabs */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="font-['Inter',sans-serif] text-[12px] font-semibold tracking-[6px] text-[#35a7a0] uppercase sm:text-[14px] sm:tracking-[8px]">
            Estúdio de Design
          </p>
          <h2 className="m-0 font-['Inter',sans-serif] text-[28px] leading-tight font-bold tracking-[3px] text-[#363543] uppercase sm:text-[36px] xl:text-[44px] xl:tracking-[4px]">
            GALERIA E DETALHES
          </h2>
        </div>

        {/* Responsive Filter Bar: 2x2 grid on small phones, single horizontal pill on sm+ */}
        <div
          role="tablist"
          aria-label="Filtrar fotos da galeria"
          className="grid w-full grid-cols-2 gap-1.5 rounded-[18px] border border-[rgba(0,0,0,0.2)] bg-white/45 p-1.5 backdrop-blur-md sm:inline-flex sm:w-auto sm:flex-nowrap sm:items-center sm:rounded-full"
        >
          {GALLERY_TABS.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex cursor-pointer items-center justify-center rounded-[12px] px-3.5 py-2 text-center font-['Inter',sans-serif] text-[11px] font-bold tracking-[1.5px] whitespace-nowrap uppercase transition-all sm:rounded-full sm:px-4 sm:text-[12px] sm:tracking-[2px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#57b9b0] to-[#35a7a0] text-white shadow-sm'
                    : 'bg-transparent text-[#363543] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Gallery Showcase + Thumbnails */}
      <div className="my-auto grid grid-cols-1 gap-5 py-4 lg:grid-cols-12">
        {/* Left: Large Interactive Viewer */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border-[1.5px] border-[rgba(0,0,0,0.3)] bg-white/40 p-5 backdrop-blur-[16px] sm:p-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-[#35a7a0]/20 px-3 py-1 font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#267872] uppercase">
              {featuredItem.categoryLabel}
            </span>
            <span className="font-['Inter',sans-serif] text-[12px] font-medium tracking-[1px] text-[#3b3b3b]/70">
              {featuredItem.cameraSpec}
            </span>
          </div>

          <div
            key={featuredItem.id}
            className="relative my-3 flex h-[250px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-[#d9eef2]/85 via-[#c8e6ee]/70 to-[#9fd0de]/60 p-4 sm:h-[300px]"
          >
            <span className="font-neumatic evb-anim-watermark pointer-events-none absolute right-6 bottom-2 text-[120px] leading-none text-white/70 uppercase select-none sm:text-[140px]">
              EV-B
            </span>
            <img
              src={featuredItem.image}
              alt={featuredItem.title}
              className="evb-anim-scooter max-h-full max-w-full object-contain transition-transform duration-500"
            />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-black/15 pt-4">
            <div className="max-w-xl">
              <p className="font-['Inter',sans-serif] text-[12px] font-bold tracking-[2px] text-[#35a7a0] uppercase">
                {featuredItem.subtitle}
              </p>
              <h3 className="font-['Inter',sans-serif] text-[20px] font-bold tracking-[1.5px] text-[#363543] uppercase sm:text-[24px]">
                {featuredItem.title}
              </h3>
              <p className="mt-1 font-['Inter',sans-serif] text-[13px] leading-relaxed font-medium text-[#3b3b3b]">
                {featuredItem.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Thumbnail Grid (Todas enquadradas por inteiro sem cortes) */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-2">
          {visibleItems.map((item) => {
            const isCurrent = featuredItem.id === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFeaturedItem(item)}
                className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[18px] border-[1.5px] p-3.5 text-left transition-all backdrop-blur-[12px] ${
                  isCurrent
                    ? 'border-[#35a7a0] bg-white/70 shadow-[0_14px_30px_rgba(53,167,160,0.2)]'
                    : 'border-[rgba(0,0,0,0.22)] bg-white/30 hover:border-[#35a7a0]/60 hover:bg-white/50'
                }`}
              >
                <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-gradient-to-br from-[#d9eef2]/80 to-[#b5dce6]/50 p-2 sm:h-[110px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="mt-2.5">
                  <p className="line-clamp-1 font-['Inter',sans-serif] text-[10px] font-bold tracking-[1.5px] text-[#35a7a0] uppercase">
                    {item.subtitle}
                  </p>
                  <p className="mt-0.5 line-clamp-1 font-['Inter',sans-serif] text-[13px] font-bold text-[#363543] uppercase">
                    {item.title}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
