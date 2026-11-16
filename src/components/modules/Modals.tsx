import { useState } from 'react'
import type { FormEvent } from 'react'
import { PRODUCTS_DATA } from './productsData'
import type { ProductModel } from './productsData'

interface LoginModalProps {
  onClose: () => void
  onSuccessLogin: (email: string) => void
}

export function LoginModal({ onClose, onSuccessLogin }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    onSuccessLogin(email)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[440px] rounded-[24px] border-[1.5px] border-[rgba(0,0,0,0.3)] bg-[#ebf3f5]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[4px] text-[#35a7a0] uppercase">
              Portal do Piloto
            </p>
            <h3 className="mt-1 font-['Inter',sans-serif] text-[26px] font-black tracking-[2.5px] text-[#363543] uppercase">
              ENTRAR NA EV-B
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de login"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white/60 font-bold text-[#363543] hover:bg-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
              E-mail ou ID EV-B
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="piloto@ev-b.com.br"
              className="w-full rounded-[12px] border border-black/25 bg-white px-4 py-3 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-[12px] border border-black/25 bg-white px-4 py-3 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-[12px] bg-gradient-to-r from-[#57b9b0] to-[#35a7a0] py-3.5 font-['Inter',sans-serif] text-[15px] font-bold tracking-[3px] text-white uppercase shadow-md transition-opacity hover:opacity-90"
          >
            Acessar Conta
          </button>
        </form>
      </div>
    </div>
  )
}

interface PreOrderModalProps {
  initialProduct?: ProductModel
  onClose: () => void
}

export function PreOrderModal({ initialProduct, onClose }: PreOrderModalProps) {
  const [selectedId, setSelectedId] = useState(initialProduct?.id ?? PRODUCTS_DATA[0].id)
  const [riderName, setRiderName] = useState('')
  const [riderEmail, setRiderEmail] = useState('')
  const [colorFinish, setColorFinish] = useState('Preto Obsidiana Fosco')
  const [reserved, setReserved] = useState(false)

  const currentModel = PRODUCTS_DATA.find((p) => p.id === selectedId) ?? PRODUCTS_DATA[0]

  const handleReserve = (e: FormEvent) => {
    e.preventDefault()
    if (!riderName.trim() || !riderEmail.trim()) return
    setReserved(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[520px] rounded-[24px] border-[1.5px] border-[rgba(0,0,0,0.3)] bg-[#ebf3f5]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[4px] text-[#35a7a0] uppercase">
              Alocação Prioritária
            </p>
            <h3 className="mt-1 font-['Inter',sans-serif] text-[24px] font-black tracking-[2px] text-[#363543] uppercase sm:text-[26px]">
              RESERVE SUA EV-B
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de reserva"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white/60 font-bold text-[#363543] hover:bg-white"
          >
            ✕
          </button>
        </div>

        {reserved ? (
          <div className="my-6 text-center">
            <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-[#35a7a0] text-[24px] font-bold text-white">
              ✓
            </div>
            <h4 className="font-['Inter',sans-serif] text-[22px] font-bold tracking-[2px] text-[#363543] uppercase">
              Reserva Confirmada!
            </h4>
            <p className="mt-2 font-['Inter',sans-serif] text-[14px] leading-relaxed font-medium text-[#3b3b3b]">
              Sua <span className="font-bold">{currentModel.name}</span> na cor{' '}
              <span className="font-bold">{colorFinish}</span> foi reservada para{' '}
              <span className="font-bold">{riderEmail}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 cursor-pointer rounded-[12px] border border-[#2b7a75] bg-gradient-to-r from-[#a1f6ee] via-[#6dc7bd] to-[#4fa8a0] px-8 py-3 font-['Inter',sans-serif] text-[14px] font-bold tracking-[2.5px] text-black uppercase"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleReserve} className="mt-5 flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                Escolha a Versão
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full rounded-[12px] border border-black/25 bg-white px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold text-[#363543] outline-none focus:border-[#35a7a0]"
              >
                {PRODUCTS_DATA.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price} ({p.speed} · {p.range})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                Cor do Acabamento
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {['Preto Obsidiana Fosco', 'Verde Glacial', 'Prata Ártico'].map((finish) => (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => setColorFinish(finish)}
                    className={`cursor-pointer rounded-[10px] border px-2.5 py-2 font-['Inter',sans-serif] text-[11px] font-bold uppercase transition-all ${
                      colorFinish === finish
                        ? 'border-[#35a7a0] bg-[#35a7a0] text-white'
                        : 'border-black/20 bg-white/70 text-[#363543]'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={riderName}
                  onChange={(e) => setRiderName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full rounded-[12px] border border-black/25 bg-white px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={riderEmail}
                  onChange={(e) => setRiderEmail(e.target.value)}
                  placeholder="voce@email.com.br"
                  className="w-full rounded-[12px] border border-black/25 bg-white px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[12px] bg-white/70 px-4 py-3">
              <span className="font-['Inter',sans-serif] text-[12px] font-bold tracking-[1px] text-[#363543] uppercase">
                Sinal Reembolsável Hoje
              </span>
              <span className="font-['Inter',sans-serif] text-[18px] font-black text-[#35a7a0]">
                R$ 500
              </span>
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-[12px] border border-[#2b7a75] bg-gradient-to-r from-[#a1f6ee] via-[#6dc7bd] to-[#4fa8a0] py-3.5 font-['Inter',sans-serif] text-[14px] font-bold tracking-[2.5px] text-black uppercase shadow-md transition-transform hover:scale-[1.01] sm:text-[15px]"
            >
              Confirmar Pré-venda ({currentModel.price})
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
