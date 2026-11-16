import { useState } from 'react'
import type { FormEvent } from 'react'

const SHOWROOMS = [
  {
    id: 'sp',
    city: 'São Paulo — Flagship',
    address: 'Av. Europa, 840 · Jardim Europa',
    hours: 'Seg a Sáb · 09h às 19h',
    phone: '+55 (11) 3490-8820',
  },
  {
    id: 'cwb',
    city: 'Curitiba — Eco Hub',
    address: 'Rua XV de Novembro, 1120 · Centro',
    hours: 'Seg a Sáb · 10h às 18h30',
    phone: '+55 (41) 3210-4410',
  },
  {
    id: 'rj',
    city: 'Rio de Janeiro — Concept Store',
    address: 'Av. Borges de Medeiros, 142 · Leblon',
    hours: 'Ter a Dom · 10h às 20h',
    phone: '+55 (21) 3890-4320',
  },
]

export default function ContactModule() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [modelInterest, setModelInterest] = useState('EV-B Concept One')
  const [selectedShowroom, setSelectedShowroom] = useState(SHOWROOMS[0].id)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      aria-label="Contato e Test-Ride"
      className="evb-anim-step-1 relative z-10 my-auto flex w-full flex-col justify-between px-6 py-4 sm:px-10 lg:py-4 lg:pr-[125px] lg:pl-[59px] xl:pr-[145px]"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="font-['Inter',sans-serif] text-[12px] font-semibold tracking-[6px] text-[#35a7a0] uppercase sm:text-[14px] sm:tracking-[8px]">
            Concierge do Piloto
          </p>
          <h2 className="m-0 font-['Inter',sans-serif] text-[28px] leading-tight font-bold tracking-[3px] text-[#363543] uppercase sm:text-[36px] xl:text-[44px] xl:tracking-[4px]">
            CONTATO E TEST-RIDE
          </h2>
        </div>

        <div className="self-start rounded-full border border-[rgba(0,0,0,0.22)] bg-white/45 px-5 py-2.5 backdrop-blur-md xl:self-auto">
          <p className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[1.5px] text-[#363543] uppercase sm:text-[12px] sm:tracking-[2px]">
            Canal Direto: <span className="text-[#35a7a0]">contato@ev-b.com.br</span>
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="my-auto grid grid-cols-1 gap-5 py-4 lg:grid-cols-12">
        {/* Left: Interactive Booking / Contact Form */}
        <div className="rounded-[24px] border-[1.5px] border-[rgba(0,0,0,0.3)] bg-white/45 p-5 backdrop-blur-[16px] sm:p-6 lg:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#35a7a0] text-[28px] font-bold text-white shadow-md">
                ✓
              </div>
              <h3 className="font-['Inter',sans-serif] text-[24px] font-black tracking-[2px] text-[#363543] uppercase">
                Solicitação Confirmada
              </h3>
              <p className="mt-2 max-w-md font-['Inter',sans-serif] text-[14px] leading-relaxed font-medium text-[#3b3b3b]">
                Obrigado, <span className="font-bold">{fullName}</span>! Nosso especialista da
                unidade selecionada entrará em contato pelo e-mail{' '}
                <span className="font-bold">{email}</span> em até 2 horas úteis para confirmar seu
                Test-Ride na <span className="font-bold">{modelInterest}</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setFullName('')
                  setEmail('')
                  setMessage('')
                }}
                className="mt-6 cursor-pointer rounded-[12px] border border-[#2b7a75] bg-gradient-to-r from-[#a1f6ee] via-[#6dc7bd] to-[#4fa8a0] px-7 py-3 font-['Inter',sans-serif] text-[13px] font-bold tracking-[2.5px] text-black uppercase"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-3">
                <h3 className="font-['Inter',sans-serif] text-[16px] font-bold tracking-[1.5px] text-[#363543] uppercase sm:text-[18px] sm:tracking-[2px]">
                  Agende um Test-Ride ou Tire Dúvidas
                </h3>
                <span className="rounded-full bg-[#35a7a0]/15 px-3 py-1 font-['Inter',sans-serif] text-[10px] font-bold tracking-[1.5px] text-[#267872] uppercase">
                  Experiência Gratuita
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full rounded-[12px] border border-black/25 bg-white/70 px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@email.com.br"
                    className="w-full rounded-[12px] border border-black/25 bg-white/70 px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                    Modelo de Interesse
                  </label>
                  <select
                    value={modelInterest}
                    onChange={(e) => setModelInterest(e.target.value)}
                    className="w-full rounded-[12px] border border-black/25 bg-white/70 px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                  >
                    <option value="EV-B Concept One">EV-B Concept One (50 km/h)</option>
                    <option value="EV-B Urban Pro">EV-B Urban Pro (110 km de Autonomia)</option>
                    <option value="EV-B Sport GT">EV-B Sport GT (75 km/h)</option>
                    <option value="EV-B City Lite">EV-B City Lite (Compacta)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                    Unidade / Showroom
                  </label>
                  <select
                    value={selectedShowroom}
                    onChange={(e) => setSelectedShowroom(e.target.value)}
                    className="w-full rounded-[12px] border border-black/25 bg-white/70 px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                  >
                    {SHOWROOMS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-['Inter',sans-serif] text-[11px] font-bold tracking-[2px] text-[#363543] uppercase">
                  Mensagem ou Data Preferida
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Informe o melhor dia/horário para seu test-ride ou envie sua dúvida técnica..."
                  className="w-full resize-none rounded-[12px] border border-black/25 bg-white/70 px-4 py-2.5 font-['Inter',sans-serif] text-[14px] font-medium text-[#363543] outline-none focus:border-[#35a7a0]"
                />
              </div>

              <button
                type="submit"
                className="mt-1 cursor-pointer rounded-[12px] border border-[#2b7a75] bg-gradient-to-r from-[#a1f6ee] via-[#6dc7bd] to-[#4fa8a0] py-3.5 font-['Inter',sans-serif] text-[14px] font-bold tracking-[2.5px] text-black uppercase shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99] sm:text-[15px]"
              >
                Agendar Test-Ride Agora
              </button>
            </form>
          )}
        </div>

        {/* Right: Showroom Locations & Warranty Info */}
        <div className="flex flex-col justify-between gap-4 lg:col-span-5">
          <div className="flex flex-col gap-3">
            {SHOWROOMS.map((room) => {
              const isSelected = selectedShowroom === room.id
              return (
                <div
                  key={room.id}
                  onClick={() => setSelectedShowroom(room.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedShowroom(room.id)
                  }}
                  className={`cursor-pointer rounded-[18px] border-[1.5px] p-4 transition-all backdrop-blur-[14px] ${
                    isSelected
                      ? 'border-[#35a7a0] bg-white/70 shadow-sm'
                      : 'border-[rgba(0,0,0,0.22)] bg-white/30 hover:bg-white/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="font-['Inter',sans-serif] text-[15px] font-bold tracking-[1.5px] text-[#363543] uppercase">
                      {room.city}
                    </h4>
                    <span className="font-['Inter',sans-serif] text-[11px] font-bold text-[#35a7a0]">
                      {room.phone}
                    </span>
                  </div>
                  <p className="mt-1 font-['Inter',sans-serif] text-[13px] font-medium text-[#3b3b3b]">
                    {room.address}
                  </p>
                  <p className="mt-1 font-['Inter',sans-serif] text-[11px] font-semibold tracking-[1px] text-[#3b3b3b]/70 uppercase">
                    {room.hours}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="rounded-[18px] border-[1.5px] border-[rgba(0,0,0,0.28)] bg-gradient-to-r from-[#57b9b0]/25 to-[#89c8dd]/30 p-4 backdrop-blur-md">
            <p className="font-['Inter',sans-serif] text-[11px] font-bold tracking-[2.5px] text-[#267872] uppercase">
              Garantia EV-B Brasil
            </p>
            <p className="mt-1 font-['Inter',sans-serif] text-[13px] leading-relaxed font-semibold text-[#363543]">
              3 Anos de Garantia no Chassi e Bateria · Entrega em Domicílio · Assistência 24h com Telemetria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
