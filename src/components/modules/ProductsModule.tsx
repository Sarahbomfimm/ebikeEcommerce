import { useState } from 'react'
import { PRODUCTS_DATA } from './productsData'
import type { ProductModel } from './productsData'

interface ProductsModuleProps {
  onSelectPreOrder: (product: ProductModel) => void
}

const CATEGORIES = [
  { id: 'all', label: 'Todos os Modelos' },
  { id: 'urban', label: 'Urbana' },
  { id: 'long-range', label: 'Longa Autonomia' },
  { id: 'performance', label: 'Performance' },
] as const

export default function ProductsModule({ onSelectPreOrder }: ProductsModuleProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>(PRODUCTS_DATA[0])

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory)

  return (
    <section
      aria-label="Catálogo de Produtos"
      className="evb-anim-step-1 relative z-10 my-auto flex w-full flex-col justify-between px-6 py-4 sm:px-10 lg:py-4 lg:pr-[125px] lg:pl-[59px] xl:pr-[145px]"
    >
      {/* Top Header & Category Filter Bar */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="font-['Inter',sans-serif] text-[12px] font-semibold tracking-[6px] text-[#35a7a0] uppercase sm:text-[14px] sm:tracking-[8px]">
            Frota Elétrica
          </p>
          <h2 className="m-0 font-['Inter',sans-serif] text-[28px] leading-tight font-bold tracking-[3px] text-[#363543] uppercase sm:text-[36px] xl:text-[44px] xl:tracking-[4px]">
            NOSSOS PRODUTOS
          </h2>
        </div>

        {/* Responsive Filter Bar: 2x2 grid on small phones, single horizontal pill on sm+ */}
        <div
          role="tablist"
          aria-label="Filtrar modelos por categoria"
          className="grid w-full grid-cols-2 gap-1.5 rounded-[18px] border border-[rgba(0,0,0,0.2)] bg-white/45 p-1.5 backdrop-blur-md sm:inline-flex sm:w-auto sm:flex-nowrap sm:items-center sm:rounded-full"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex cursor-pointer items-center justify-center rounded-[12px] px-3.5 py-2 text-center font-['Inter',sans-serif] text-[11px] font-bold tracking-[1.5px] whitespace-nowrap uppercase transition-all sm:rounded-full sm:px-4 sm:text-[12px] sm:tracking-[2px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#57b9b0] to-[#35a7a0] text-white shadow-sm'
                    : 'bg-transparent text-[#363543] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Split Content: Product Cards Grid + Featured Configurator */}
      <div className="my-auto grid grid-cols-1 items-center gap-5 py-4 lg:grid-cols-12">
        {/* Left: Product Cards List */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7">
          {filteredProducts.map((product) => {
            const isSelected = selectedProduct.id === product.id
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedProduct(product)
                }}
                className={`group relative cursor-pointer rounded-[20px] border-[1.5px] p-4 transition-all backdrop-blur-[14px] ${
                  isSelected
                    ? 'border-[#35a7a0] bg-white/65 shadow-[0_20px_45px_rgba(53,167,160,0.18)]'
                    : 'border-[rgba(0,0,0,0.22)] bg-white/30 hover:border-[#35a7a0]/60 hover:bg-white/45'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block rounded-full bg-[#35a7a0]/15 px-2.5 py-0.5 font-['Inter',sans-serif] text-[10px] font-bold tracking-[1.5px] text-[#28857f] uppercase">
                      {product.badge}
                    </span>
                    <h3 className="mt-1 font-['Inter',sans-serif] text-[18px] font-bold tracking-[1px] text-[#363543] uppercase">
                      {product.name}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[12px] font-medium text-[#3b3b3b]/75">
                      {product.edition}
                    </p>
                  </div>
                  <span className="shrink-0 font-['Inter',sans-serif] text-[18px] font-black tracking-[0.5px] text-[#363543]">
                    {product.price}
                  </span>
                </div>

                <div className="relative my-2.5 flex h-[125px] items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-[#d9eef2]/70 to-[#b5dce6]/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[135px] w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-2.5 text-center">
                  <div>
                    <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#3b3b3b]">
                      {product.speed}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[10px] tracking-[0.5px] text-[#3b3b3b]/70 uppercase">
                      Velocidade
                    </p>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#3b3b3b]">
                      {product.range}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[10px] tracking-[0.5px] text-[#3b3b3b]/70 uppercase">
                      Autonomia
                    </p>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#3b3b3b]">
                      {product.charging}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[10px] tracking-[0.5px] text-[#3b3b3b]/70 uppercase">
                      Recarga
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right: Active Product Showcase & Quick Specs */}
        <div className="relative flex flex-col justify-between rounded-[24px] border-[1.5px] border-[rgba(0,0,0,0.3)] bg-white/40 p-5 backdrop-blur-[16px] sm:p-6 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[2.5px] text-[#35a7a0] uppercase">
                Configuração Selecionada
              </p>
              <h3 className="font-['Inter',sans-serif] text-[24px] font-black tracking-[1.5px] text-[#363543] uppercase sm:text-[26px]">
                {selectedProduct.name}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-['Inter',sans-serif] text-[11px] font-semibold text-[#3b3b3b]/70 uppercase">
                A partir de
              </p>
              <p className="font-['Inter',sans-serif] text-[24px] font-black text-[#35a7a0] sm:text-[26px]">
                {selectedProduct.price}
              </p>
            </div>
          </div>

          <div
            key={selectedProduct.id}
            className="relative my-3 flex h-[215px] items-center justify-center sm:h-[235px]"
          >
            <span className="font-neumatic evb-anim-watermark pointer-events-none absolute text-[130px] leading-none tracking-[-2px] text-white/75 uppercase select-none sm:text-[150px]">
              EV-B
            </span>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="evb-anim-scooter relative z-10 h-[215px] w-auto object-contain sm:h-[235px]"
            />
          </div>

          <p className="mb-4 font-['Inter',sans-serif] text-[13px] leading-relaxed font-medium text-[#3b3b3b] sm:text-[14px]">
            {selectedProduct.description}
          </p>

          <div className="mb-4 grid grid-cols-2 gap-2 rounded-[14px] border border-black/15 bg-white/50 p-3 text-center sm:grid-cols-5">
            <div>
              <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#363543]">
                {selectedProduct.speed}
              </p>
              <p className="text-[10px] font-semibold text-[#3b3b3b]/70 uppercase">Velocidade</p>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#363543]">
                {selectedProduct.range}
              </p>
              <p className="text-[10px] font-semibold text-[#3b3b3b]/70 uppercase">Autonomia</p>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#363543]">
                {selectedProduct.charging}
              </p>
              <p className="text-[10px] font-semibold text-[#3b3b3b]/70 uppercase">0-100%</p>
            </div>
            <div>
              <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#363543]">
                {selectedProduct.motor}
              </p>
              <p className="text-[10px] font-semibold text-[#3b3b3b]/70 uppercase">Motor</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-['Inter',sans-serif] text-[13px] font-bold text-[#363543]">
                {selectedProduct.weight}
              </p>
              <p className="text-[10px] font-semibold text-[#3b3b3b]/70 uppercase">Peso</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectPreOrder(selectedProduct)}
              className="flex-1 cursor-pointer rounded-[12px] border border-[#2b7a75] bg-gradient-to-r from-[#a1f6ee] via-[#6dc7bd] to-[#4fa8a0] py-3.5 font-['Inter',sans-serif] text-[14px] font-bold tracking-[2.5px] text-black uppercase shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99] sm:text-[15px]"
            >
              Reservar {selectedProduct.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
